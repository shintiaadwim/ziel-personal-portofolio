import type { ReactNode } from "react";

type TagBadgeProps = {
    children: ReactNode;
    className?: string;
};

const baseClassName = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";

export default function TagBadge({ children, className = "" }: TagBadgeProps) {
    return <span className={`${baseClassName} ${className}`.trim()}>{children}</span>;
}