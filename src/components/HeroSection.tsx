import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type HeroSectionProps = {
    config: ProposalConfig;
};

export function HeroSection({ config }: HeroSectionProps) {
    const { hero, clientImage } = config;

    return (
        <Section
            id="inicio"
            eyebrow={hero.eyebrow}
            title={hero.title}
            description={hero.description}
            dark
        >
            <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
                <div className="space-y-5 text-sm md:text-base text-slate-200">
                    {hero.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            onClick={() => scrollTo(hero.ctaPrimary.targetSection)}
                            className="rounded-full bg-quai-teal px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
                        >
                            {hero.ctaPrimary.label}
                        </button>
                        {hero.ctaSecondary && (
                            <button
                                onClick={() => scrollTo(hero.ctaSecondary!.targetSection)}
                                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-quai-teal hover:text-quai-teal transition-colors"
                            >
                                {hero.ctaSecondary.label}
                            </button>
                        )}
                    </div>
                </div>
                {clientImage && (
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5 shadow-xl">
                        <img
                            src={clientImage}
                            alt={`Transformación Digital - ${config.clientName}`}
                            className="h-52 w-full rounded-xl object-cover"
                        />
                    </div>
                )}
            </div>
        </Section>
    );
}
