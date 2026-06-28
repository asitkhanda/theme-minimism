import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

const mount = document.getElementById("agentation-root");

if (mount) {
  createRoot(mount).render(
    <StrictMode>
      <Agentation
        endpoint="http://localhost:4747"
        onSessionCreated={(sessionId) => {
          console.log("Agentation session:", sessionId);
        }}
      />
    </StrictMode>,
  );
}
