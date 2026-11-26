import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { z } from "zod";

// Rate limiting simple en mémoire (fenêtre glissante par IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // Max 10 requêtes par minute

function isRateLimited(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, clientData);
    return false;
  }

  clientData.count += 1;
  rateLimitMap.set(ip, clientData);

  // Nettoyage périodique pour éviter toute fuite mémoire
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  return clientData.count > MAX_REQUESTS_PER_WINDOW;
}

// Schéma de validation Zod strict
const messageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "developer"]),
  content: z.string().trim().min(1).max(5000),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(15),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Vérification de l'adresse IP pour le rate limiting
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Too many requests. Please wait a minute before sending another message.",
    });
  }

  const token = process.env.GITHUB_TOKEN;
  const endpoint = "https://models.github.ai/inference";
  const modelName = "meta/Llama-3.3-70B-Instruct";

  if (!token) {
    console.error("Error: GITHUB_TOKEN is missing in environment variables");
    return res.status(500).json({ error: "Server Configuration Error: Missing API Token" });
  }

  // Validation du payload
  const parseResult = chatRequestSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: "Invalid request payload",
      details: parseResult.error.flatten(),
    });
  }

  const { messages } = parseResult.data;

  try {
    const client = ModelClient(endpoint, new AzureKeyCredential(token));

    const response = await client.path("/chat/completions").post({
      body: {
        messages,
        temperature: 0.7,
        top_p: 0.95,
        max_tokens: 1000,
        model: modelName,
      },
    });

    if (isUnexpected(response)) {
      console.error("GitHub Models API unexpected response:", response.body);
      return res.status(response.status || 500).json({
        error: "Failed to generate AI response from upstream model provider.",
      });
    }

    return res.status(200).json(response.body);
  } catch (error) {
    console.error("Chat API Error:", error instanceof Error ? error.message : "Unknown error");
    return res.status(500).json({
      error: "Internal server error occurred while processing your request.",
    });
  }
}
