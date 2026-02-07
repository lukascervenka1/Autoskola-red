import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoItemProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string; // For spanning columns/rows
}

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto", className)}>
            {children}
        </div>
    );
}

export function BentoItem({ title, description, icon, className }: BentoItemProps) {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 shadow-sm border-black/[0.05]",
                className
            )}
        >
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover/bento:bg-primary group-hover/bento:text-white transition-colors">
                    {icon}
                </div>
                <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 group-hover/bento:text-primary transition-colors text-lg">
                    {title}
                </div>
                <div className="font-normal text-neutral-600 text-sm dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
}
