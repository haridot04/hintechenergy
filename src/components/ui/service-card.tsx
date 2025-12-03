import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    href?: string;
    className?: string;
}

export function ServiceCard({
    title,
    description,
    icon,
    href = "/services",
    className,
}: ServiceCardProps) {
    return (
        <div className={cn("group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg", className)}>
            <div className="mb-4 text-primary">
                {icon || <div className="h-10 w-10 rounded-full bg-primary/10" />}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="mb-4 text-muted-foreground">{description}</p>
            <Link
                href={href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    );
}
