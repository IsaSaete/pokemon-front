import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/slackey/index.css";
import App from "./components/App/App";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
