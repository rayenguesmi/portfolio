import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    );
  } else {
    createRoot(rootElement).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    );
  }
}
