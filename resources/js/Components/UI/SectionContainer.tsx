import { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    marginTop?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
    none: '',
    sm: 'px-4 lg:px-6',
    md: 'px-6 lg:px-8',
    lg: 'px-8 lg:px-12',
};

const marginTopStyles = {
    none: '',
    sm: 'mt-4',
    md: 'mt-6',
    lg: 'mt-10',
};

export default function SectionContainer({
    children,
    className = '',
    padding = 'md',
    marginTop = 'none',
}: SectionContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto ${paddingStyles[padding]} ${marginTopStyles[marginTop]} ${className}`}>
            {children}
        </div>
    );
}
