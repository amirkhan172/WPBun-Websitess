import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'new' | 'gray';
    size?: 'sm' | 'md';
    className?: string;
}

const variantStyles = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    new: 'bg-cyan-100 text-cyan-600',
    gray: 'bg-gray-100 text-gray-700',
};

const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
};

export default function Badge({
    children,
    variant = 'primary',
    size = 'sm',
    className = '',
}: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center gap-1 font-bold uppercase rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {children}
        </span>
    );
}
