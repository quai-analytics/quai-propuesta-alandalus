import type { ProposalConfig } from "../config/types";

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type HeaderProps = {
    config: ProposalConfig;
};

export function Header({ config }: HeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-quai-navy/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                {/* Logo + nombre */}
                <div className="flex items-center gap-3">
                    {config.clientLogo && (
                        <img
                            src={config.clientLogo}
                            alt="QuAI Analytics"
                            className="h-9 w-auto"
                        />
                    )}
                    <div>
                        <p className="text-sm font-semibold">QuAI Analytics</p>
                        <p className="text-[11px] text-slate-400">
                            Propuesta Digital – {config.clientName}
                        </p>
                    </div>
                </div>

                {/* Navegación */}
                <nav className="hidden gap-5 text-xs md:flex">
                    {config.navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="text-slate-300 hover:text-quai-teal transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
