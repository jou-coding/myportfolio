// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // App.tsx が存在する前提

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
