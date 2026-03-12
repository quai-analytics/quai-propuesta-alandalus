import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

type DiagnosticSectionProps = {
    data: NonNullable<ProposalConfig["diagnostic"]>;
};

export function DiagnosticSection({ data }: DiagnosticSectionProps) {
    return (
        <Section id="diagnostico" eyebrow={data.eyebrow} title={data.title}>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-red-900/60 bg-gradient-to-br from-red-950 via-slate-950 to-slate-950 p-6">
                    <h3 className="text-lg font-bold mb-3">
                        {data.currentSituation.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-200">
                        {data.currentSituation.items.map((item, i) => (
                            <li key={i}>
                                • <strong>{item.bold}</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 p-6">
                    <h3 className="text-lg font-bold mb-3">
                        {data.proposedSolution.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-200">
                        {data.proposedSolution.items.map((item, i) => (
                            <li key={i}>
                                • <strong>{item.bold}</strong> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
