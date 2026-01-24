import { ReactNode } from 'react';

interface IconBoxProps {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'blue' | 'green' | 'purple' | 'amber' | 'red' | 'gray';
    rounded?: 'md' | 'lg' | 'xl' | 'full';
    className?: string;
}

const sizeStyles = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
};

const variantStyles = {
    primary: 'bg-primary/10 text-primary',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    amber: 'bg-amber-100 text-amber-600',
    red: 'bg-red-100 text-red-600',
    gray: 'bg-gray-100 text-gray-600',
};

const roundedStyles = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
};

export default function IconBox({
    children,
    size = 'md',
    variant = 'primary',
    rounded = 'lg',
    className = '',
}: IconBoxProps) {
    return (
        <div
            className={`flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]} ${roundedStyles[rounded]} ${className}`}
        >
            {children}
        </div>
    );
}
