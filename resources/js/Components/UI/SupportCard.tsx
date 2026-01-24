import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface SupportCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    className?: string;
}

export default function SupportCard({
    icon,
    title,
    description,
    buttonText,
    buttonHref,
    className = '',
}: SupportCardProps) {
    return (
        <div
            className={`bg-white py-10 px-6 lg:px-8 rounded-lg border-2 border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 ${className}`}
        >
            <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-[15px] mt-2 max-w-md">
                        {description}
                    </p>
                </div>
            </div>
            <Link
                href={buttonHref}
                className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-base hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
                {buttonText}
            </Link>
        </div>
    );
}
