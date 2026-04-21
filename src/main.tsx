import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { supabase } from "./lib/supabase/client.ts";

// ─── Loader helpers ──────────────────────────────────────────────────────────

function showLoader() {
    const style = document.createElement("style");
    style.id = "__uspt_loader_style";
    style.textContent = `
        @keyframes __uspt_spin {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes __uspt_pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.6; transform: scale(0.96); }
        }
        @keyframes __uspt_fadein {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "__uspt_loader";
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        background: linear-gradient(135deg, hsl(270,50%,15%) 0%, hsl(290,60%,12%) 100%);
        display: flex; align-items: center; justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    `;

    overlay.innerHTML = `
        <div style="
            display: flex; flex-direction: row; align-items: center; gap: 1.25rem;
            animation: __uspt_fadein 0.5s ease-out both;
        ">
            <!-- Logo -->
            <div style="animation: __uspt_pulse 2.4s ease-in-out infinite; flex-shrink: 0;">
                <img
                    src="/logo_uspt.svg"
                    alt="USPT"
                    style="width: 72px; height: 72px; filter: brightness(0) invert(1); display: block;"
                    onerror="this.style.display='none'"
                />
            </div>

            <!-- Divider -->
            <div style="width: 1px; height: 52px; background: rgba(255,255,255,0.25);"></div>

            <!-- Text -->
            <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="
                    color: #ffffff;
                    font-size: 2.5rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    line-height: 1;
                ">USPT</span>
                <span style="
                    color: rgba(255,255,255,0.55);
                    font-size: 0.7rem;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                ">Tucumán &nbsp;|&nbsp; Argentina</span>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
}

function hideLoader() {
    const overlay = document.getElementById("__uspt_loader");
    const style = document.getElementById("__uspt_loader_style");
    if (overlay) {
        overlay.style.transition = "opacity 0.35s ease";
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.remove();
            style?.remove();
        }, 380);
    }
}

// ─── App bootstrap ───────────────────────────────────────────────────────────

async function init() {
    showLoader();

    const { data } = await supabase
        .from("config")
        .select("site_active")
        .single();

    hideLoader();

    if (!data?.site_active) {
        document.body.innerHTML = `
        <div style="position:fixed;inset:0;background:#fff;z-index:99999;
        display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;text-align:center;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:1.5rem;padding:2rem;max-width:540px;">
                <img src="/images/logo_ssit.png" alt="Logo" style="width:220px;" onerror="this.style.display='none'" />
                <h2 style="color:#640075;font-size:2.25rem;font-weight:700;margin:0;">Sitio suspendido</h2>
                <p style="color:#333;font-size:1.1rem;line-height:1.6;margin:0;">
                    Para restablecer el acceso, regularice su situación de pago.
                </p>
                <a href="mailto:info@seissigmagroup.com.ar"
                   style="background-color:#640075;color:#fff;padding:0.75rem 2rem;border-radius:0.5rem;
                          text-decoration:none;font-weight:600;font-size:1rem;
                          transition:background 0.2s;">
                    Contactar soporte
                </a>
            </div>
        </div>`;
    } else {
        createRoot(document.getElementById("root")!).render(<App />);
    }
}

init();
