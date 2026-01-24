import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface PromoBannerProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    gradient?: string;
    className?: string;
}

export default function PromoBanner({
    title,
    description,
    buttonText,
    buttonHref,
    gradient = 'from-blue-500 via-blue-600 to-blue-500',
    className = '',
}: PromoBannerProps) {
    return (
        <div
            className={`bg-gradient-to-r ${gradient} py-10 px-6 lg:px-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-left ${className}`}
        >
            <div>
                <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    {title}
                </h3>
                <p className="text-white/90 text-base md:text-lg mt-3">
                    {description}
                </p>
            </div>
            <Link
                href={buttonHref}
                className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-medium text-base hover:bg-yellow-400 hover:text-gray-900 transition-colors shadow-lg whitespace-nowrap"
            >
                {buttonText}
            </Link>
        </div>
    );
}
