import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

type TeamSectionProps = {
    data: NonNullable<ProposalConfig["team"]>;
};

export function TeamSection({ data }: TeamSectionProps) {
    return (
        <Section id="porque-nosotros" eyebrow={data.eyebrow} title={data.title}>
            <p className="max-w-3xl text-sm md:text-base text-slate-200 mb-8">
                {data.intro}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {data.members.map((member, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
                    >
                        <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                        <p className="text-xs text-quai-teal mb-2">
                            {member.credentials}
                        </p>
                        <p className="text-sm text-slate-200">{member.bio}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
