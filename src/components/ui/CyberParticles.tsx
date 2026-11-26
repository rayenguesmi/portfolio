import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const CyberParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Respecter prefers-reduced-motion pour l'accessibilité et la performance
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Initialisation différée (idle) pour ne pas concurrencer le First Contentful Paint
    const timer = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="cyber-particles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.35 } },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: {
            value: ["#c9a84c", "#4f8ef7", "#e8c96a"],
          },
          links: {
            color: "#c9a84c",
            distance: 160,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: {
            value: 55,
            density: { enable: true },
          },
          opacity: {
            value: { min: 0.2, max: 0.55 },
            animation: { enable: true, speed: 0.8 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-[1]"
    />
  );
};
