// ── Config Index ──────────────────────────────────────────────────────────────
// Selecciona la configuración del cliente.
// Usa la variable de entorno VITE_CLIENT para seleccionar el cliente en build time:
//   VITE_CLIENT=el-alandalus npm run build
// Por defecto usa "el-alandalus".

import type { ProposalConfig } from "./types";

const clientSlug = import.meta.env.VITE_CLIENT || "el-alandalus";

const configModules: Record<string, () => Promise<{ default: ProposalConfig }>> = {
    "el-alandalus": () => import("./clients/el-alandalus"),
};

export async function loadConfig(): Promise<ProposalConfig> {
    const loader = configModules[clientSlug];
    if (!loader) {
        throw new Error(
            `No config found for client "${clientSlug}". Available: ${Object.keys(configModules).join(", ")}`
        );
    }
    const mod = await loader();
    return mod.default;
}

// Synchronous export para uso directo (pre-loaded)
export { default as elAlandalusConfig } from "./clients/el-alandalus";
