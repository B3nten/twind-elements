import { hydrateRoot } from "react-dom/client";
import App from "./src/app.tsx";

// Twind
import "./src/twind/twind.ts";

function ClientApp() {
  return <App />;
}

hydrateRoot(document, <ClientApp />);
