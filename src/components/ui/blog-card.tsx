import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    href?: string;
    className?: string;
}

export function BlogCard({
    title,
    excerpt,
    date,
    category,
    href = "/blogs",
    className,
}: BlogCardProps) {
    return (
        <div className={cn("group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg", className)}>
            <div className="aspect-video w-full bg-muted" /> {/* Placeholder for image */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{category}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {date}
                    </div>
                </div>
                <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
                    <Link href={href}>{title}</Link>
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
                    {excerpt}
                </p>
                <Link
                    href={href}
                    className="text-sm font-medium text-primary hover:underline"
                >
                    Read Article
                </Link>
            </div>
        </div>
    );
}
