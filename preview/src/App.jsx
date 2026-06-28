import { Agentation } from "agentation";
import ThemePreview from "./ThemePreview.jsx";

export default function App() {
  return (
    <>
      <ThemePreview />
      <Agentation
        endpoint="http://localhost:4747"
        onSessionCreated={(sessionId) => {
          console.log("Agentation session:", sessionId);
        }}
      />
    </>
  );
}
