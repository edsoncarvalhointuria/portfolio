import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import ParticleContext from "./contexts/ParticleContext.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <ParticleContext>
                <App />
            </ParticleContext>
        </HashRouter>
    </StrictMode>
);
