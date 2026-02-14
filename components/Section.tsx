import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full min-h-screen flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 border-b border-[var(--card-border)]",
                className
            )}
        >
            {children}
        </section>
    );
}
