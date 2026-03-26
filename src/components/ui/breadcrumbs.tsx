import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    className = "",
}) => {
    return (
        <nav
            className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
            aria-label="Breadcrumb"
        >
            <Link
                to="/"
                className="flex items-center hover:text-primary transition-colors"
            >
                <Home className="w-4 h-4" />
                <span className="sr-only">Inicio</span>
            </Link>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    {item.href && index < items.length - 1 ? (
                        <Link
                            to={item.href}
                            className="hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-[200px] md:max-w-none"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
