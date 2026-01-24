import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    children: ReactNode;
    isActive?: boolean;
    icon?: ReactNode;
    showUnderline?: boolean;
    className?: string;
}

export default function NavLink({
    href,
    children,
    isActive = false,
    icon,
    showUnderline = true,
    className = '',
}: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive && showUnderline
                    ? 'text-primary after:absolute after:bottom-[-12px] after:left-4 after:right-4 after:h-[4px] after:bg-primary'
                    : isActive
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
            } ${className}`}
        >
            {icon && icon}
            {children}
        </Link>
    );
}
