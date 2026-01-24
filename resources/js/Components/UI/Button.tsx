import { Link } from '@inertiajs/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'white';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    href?: string;
    children: ReactNode;
    className?: string;
}

const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-gray-800',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    accent: 'bg-accent text-secondary hover:bg-accent-dark',
    white: 'bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900',
};

const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
};

const roundedStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    rounded = 'lg',
    href,
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2';
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
}
