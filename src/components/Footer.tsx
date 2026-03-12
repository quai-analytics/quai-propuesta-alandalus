import type { FooterConfig } from "../config/types";

type FooterProps = {
    data: FooterConfig;
};

export function Footer({ data }: FooterProps) {
    return (
        <footer className="mt-16">
            <div className="bg-[#bdbdbd] py-12 px-8">
                {data.contactTitle && (
                    <h2 className="text-2xl font-semibold mb-6 text-black">
                        {data.contactTitle}
                    </h2>
                )}
                <div className="text-black text-lg space-y-3">
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                    <div>
                        {data.address.map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < data.address.length - 1 && <br />}
                            </span>
                        ))}
                    </div>
                    <div>{data.hours}</div>
                </div>
            </div>
            <div className="bg-black text-white text-xs py-4 px-8 flex items-center justify-between">
                <span>{data.copyright}</span>
            </div>
        </footer>
    );
}
