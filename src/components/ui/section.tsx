import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    container?: boolean;
}

export function Section({
    children,
    className,
    container = true,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("py-12 md:py-16 lg:py-24", className)}
            {...props}
        >
            {container ? (
                <div className="w-full md:w-[96%] mx-auto px-2 md:px-0">{children}</div>
            ) : (
                children
            )}
        </section>
    );
}
