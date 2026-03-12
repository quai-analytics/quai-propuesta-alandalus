import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

type NextStepsSectionProps = {
    data: ProposalConfig["nextSteps"];
    clientName: string;
};

export function NextStepsSection({ data, clientName }: NextStepsSectionProps) {
    const waLink = `https://wa.me/${data.contact.whatsappNumber}?text=${encodeURIComponent(
        data.contact.whatsappMessage
    )}`;

    return (
        <Section
            id="proximos-pasos"
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
            dark
        >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-3 text-sm text-slate-200">
                    <p>En esa conversación podemos:</p>
                    <ul className="space-y-2">
                        {data.bullets.map((b, i) => (
                            <li key={i}>• {b}</li>
                        ))}
                    </ul>
                    <p>{data.closingText}</p>
                </div>
                <div className="rounded-2xl border border-quai-teal/50 bg-slate-950/90 p-5 text-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-quai-teal mb-2">
                        Contacto
                    </p>
                    <p className="text-slate-100 font-semibold mb-1">
                        {data.contact.companyName}
                    </p>
                    <p className="text-slate-300 mb-2">
                        {data.contact.email} · {data.contact.phone}
                    </p>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-full bg-quai-teal px-4 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
                    >
                        💬 Contactar por WhatsApp
                    </a>
                </div>
            </div>
            <p className="mt-8 text-[11px] text-slate-500">
                © {new Date().getFullYear()} QuAI Analytics. Propuesta confidencial,
                preparada exclusivamente para {clientName}.
            </p>
        </Section>
    );
}
