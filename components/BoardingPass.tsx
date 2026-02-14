import { cn } from "@/lib/utils";

interface BoardingPassProps {
    title: string;
    value: string;
    className?: string;
}

export default function BoardingPass({ title, value, className }: BoardingPassProps) {
    return (
        <div className={cn(
            "relative w-80 h-48 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden backdrop-blur-md hover:border-[var(--accent)] transition-colors group shadow-sm",
            className
        )}>
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--accent)]/10 transition-colors" />

            <div className="h-full flex flex-col justify-between p-6">
                <div>
                    <h3 className="text-sm font-medium text-[var(--foreground)]/50 uppercase tracking-wider">{title}</h3>
                    <p className="text-2xl font-bold mt-2 text-[var(--foreground)]">{value}</p>
                </div>

                {/* Barcode-ish decoration */}
                <div className="flex items-center gap-1 opacity-30">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-4 w-1 bg-[var(--foreground)]" style={{ opacity: Math.random() > 0.5 ? 1 : 0.5 }} />
                    ))}
                </div>
            </div>

            {/* Dashed Line */}
            <div className="absolute top-1/2 left-0 w-4 h-8 bg-[var(--background)] rounded-r-full -translate-y-1/2 box-shadow-[inset_-2px_0_0_rgba(0,0,0,0.1)]" />
            <div className="absolute top-1/2 right-0 w-4 h-8 bg-[var(--background)] rounded-l-full -translate-y-1/2" />
            <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-[var(--foreground)]/10 -translate-y-1/2" />
        </div>
    );
}
