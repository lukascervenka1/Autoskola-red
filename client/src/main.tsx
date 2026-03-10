import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";

const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (analyticsEndpoint && analyticsWebsiteId) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = `${analyticsEndpoint}/umami`;
    script.setAttribute("data-website-id", analyticsWebsiteId);
    document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);
