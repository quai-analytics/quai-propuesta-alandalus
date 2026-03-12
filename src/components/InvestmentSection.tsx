import { useState } from "react";
import { Section } from "./Section";
import type { ProposalConfig } from "../config/types";

type InvestmentSectionProps = {
    data: NonNullable<ProposalConfig["investment"]>;
};

export function InvestmentSection({ data }: InvestmentSectionProps) {
    return (
        <Section id="roi" eyebrow={data.eyebrow} title={data.title}>
            {/* Descripción + Calculadora ROI */}
            <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
                <div className="space-y-4 text-sm text-slate-200">
                    {data.description.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                {data.roiCalculator && <ROICalculator config={data.roiCalculator} />}
            </div>

            {/* Planes de inversión */}
            <div className="mt-14">
                <h3 className="text-lg font-semibold mb-4">Inversión y alcance</h3>
                <div className="grid gap-6 md:grid-cols-2">
                    {data.plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border ${plan.recommended
                                    ? "border-quai-teal/60 bg-slate-950/90"
                                    : "border-slate-800 bg-slate-950/80"
                                } p-5`}
                        >
                            <p
                                className={`text-xs font-semibold mb-1 ${plan.recommended ? "text-quai-teal" : "text-slate-400"
                                    }`}
                            >
                                {plan.tag}
                            </p>
                            <h4 className="text-base font-semibold mb-2">{plan.title}</h4>
                            <p className="text-xs text-slate-300 mb-3">{plan.description}</p>
                            <ul className="text-sm text-slate-200 space-y-1 mb-4">
                                {plan.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>
                            <p className="text-sm font-semibold">
                                Inversión única:{" "}
                                {plan.originalPrice && (
                                    <span className="line-through text-slate-400 mr-2">
                                        {plan.originalPrice}
                                    </span>
                                )}
                                {plan.price}
                            </p>
                            {plan.deliveryTime && (
                                <p className="text-[11px] text-slate-400">
                                    {plan.deliveryTime}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Monitoreo mensual */}
            {data.monitoring && data.monitoring.length > 0 && (
                <div className="mt-8">
                    <h4 className="text-base font-semibold mb-4 text-quai-teal">
                        Opciones de Monitoreo Mensual
                    </h4>
                    <div className="grid gap-4 md:grid-cols-3">
                        {data.monitoring.map((opt, i) => (
                            <div
                                key={i}
                                className={`rounded-xl border ${opt.borderColor || "border-slate-700"
                                    } bg-slate-950/80 p-5 flex flex-col justify-between`}
                            >
                                <h5 className="text-sm font-bold text-slate-100">
                                    {opt.title}{" "}
                                    {opt.badge && (
                                        <span className="text-xs bg-slate-100/20 text-slate-100 rounded px-2 ml-2">
                                            {opt.badge}
                                        </span>
                                    )}
                                </h5>
                                <ul className="text-xs text-slate-200 mb-2 space-y-1">
                                    {opt.features.map((f, j) => (
                                        <li key={j}>{f}</li>
                                    ))}
                                </ul>
                                <div className="mt-2 text-slate-100 font-bold text-lg">
                                    {opt.originalPrice && (
                                        <span className="line-through text-slate-400 mr-2">
                                            {opt.originalPrice}
                                        </span>
                                    )}
                                    {opt.price}
                                    {opt.priceUnit && (
                                        <span className="text-xs">{opt.priceUnit}</span>
                                    )}
                                </div>
                                {opt.footnote && (
                                    <div
                                        className={`mt-2 text-[11px] ${opt.footnote.startsWith("⚠️")
                                                ? "text-yellow-400"
                                                : "text-slate-100"
                                            }`}
                                    >
                                        {opt.footnote}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Footnotes */}
            {data.footnotes && data.footnotes.length > 0 && (
                <>
                    <hr className="my-2 border-slate-700" />
                    {data.footnotes.map((note, i) => (
                        <div key={i} className="text-xs text-slate-400 mt-2">
                            <span className="font-semibold">{note}</span>
                        </div>
                    ))}
                </>
            )}
        </Section>
    );
}

// ── Calculadora ROI ──────────────────────────────────────────────────────────
import type { ROICalculatorConfig } from "../config/types";

function ROICalculator({ config }: { config: ROICalculatorConfig }) {
    const initial: Record<string, number> = {};
    config.sliders.forEach((s) => {
        initial[s.key] = s.defaultValue;
    });

    const [values, setValues] = useState(initial);

    const update = (key: string, val: number) =>
        setValues((prev) => ({ ...prev, [key]: val }));

    // Default formula: product of all slider values * 5 (days/week)
    const sliderProduct = config.sliders.reduce(
        (acc, s) => acc * (values[s.key] ?? s.defaultValue),
        1
    );
    const ahorroSemanal = sliderProduct * 5;
    const ahorroMensual = ahorroSemanal * 4.33;
    const ahorroAnual = ahorroMensual * 12;

    const fmt = (n: number) =>
        n.toLocaleString(undefined, { maximumFractionDigits: 0 });

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm">
            <h3 className="text-base font-semibold mb-4">{config.title}</h3>
            <div className="space-y-4">
                {config.sliders.map((s) => (
                    <div key={s.key}>
                        <div className="flex items-center justify-between text-xs mb-1">
                            <span>{s.label}</span>
                            <span className="font-semibold text-quai-teal">
                                {s.unit === "$"
                                    ? `$${(values[s.key] ?? s.defaultValue).toFixed(0)}`
                                    : `${(values[s.key] ?? s.defaultValue).toFixed(
                                        s.step < 1 ? 1 : 0
                                    )}${s.unit ? ` ${s.unit}` : ""}`}
                            </span>
                        </div>
                        <input
                            type="range"
                            min={s.min}
                            max={s.max}
                            step={s.step}
                            value={values[s.key] ?? s.defaultValue}
                            onChange={(e) => update(s.key, Number(e.target.value))}
                            className="w-full accent-quai-teal"
                        />
                    </div>
                ))}

                <div className="mt-2 space-y-1 text-slate-200">
                    <p>
                        • Ahorro semanal estimado:{" "}
                        <span className="font-semibold">${fmt(ahorroSemanal)}</span>
                    </p>
                    <p>
                        • Ahorro mensual (4.33 semanas):{" "}
                        <span className="font-semibold">${fmt(ahorroMensual)}</span>
                    </p>
                    <p>
                        • Ahorro anual estimado:{" "}
                        <span className="font-semibold text-quai-teal">
                            ${fmt(ahorroAnual)}
                        </span>
                    </p>
                </div>

                {config.footnote && (
                    <p className="mt-2 text-[11px] text-slate-400">{config.footnote}</p>
                )}
            </div>
        </div>
    );
}
