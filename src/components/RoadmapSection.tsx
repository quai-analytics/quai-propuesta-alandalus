import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

type RoadmapSectionProps = {
    data: NonNullable<ProposalConfig["roadmap"]>;
};

export function RoadmapSection({ data }: RoadmapSectionProps) {
    return (
        <Section
            id="roadmap"
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
        >
            <div className="grid gap-6 md:grid-cols-3">
                {data.phases.map((phase, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                    >
                        <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
                            {phase.label}
                        </p>
                        <h3 className="text-base font-semibold mb-2">{phase.title}</h3>
                        <ul className="text-sm text-slate-200 space-y-1">
                            {phase.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
