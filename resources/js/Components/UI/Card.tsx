import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean;
    borderWidth?: '1' | '2';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
}

const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

const roundedStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
};

const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
};

export default function Card({
    children,
    className = '',
    padding = 'md',
    rounded = 'lg',
    border = true,
    borderWidth = '1',
    shadow = 'none',
    hover = false,
}: CardProps) {
    const borderStyle = border ? `border-${borderWidth === '2' ? '2' : ''} border-gray-200`.trim() : '';
    const hoverStyle = hover ? 'hover:shadow-lg transition-shadow' : '';

    return (
        <div
            className={`bg-white ${paddingStyles[padding]} ${roundedStyles[rounded]} ${borderStyle} ${shadowStyles[shadow]} ${hoverStyle} ${className}`}
        >
            {children}
        </div>
    );
}
