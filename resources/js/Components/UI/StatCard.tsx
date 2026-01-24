import { ReactNode } from 'react';

interface StatCardProps {
    icon: ReactNode;
    value: string | number;
    label: string;
    iconVariant?: 'blue' | 'green' | 'purple' | 'amber' | 'red';
    trend?: ReactNode;
    className?: string;
}

const iconVariantStyles = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    amber: 'bg-amber-100 text-amber-600',
    red: 'bg-red-100 text-red-600',
};

export default function StatCard({
    icon,
    value,
    label,
    iconVariant = 'blue',
    trend,
    className = '',
}: StatCardProps) {
    return (
        <div
            className={`bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow ${className}`}
        >
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconVariantStyles[iconVariant]}`}
                >
                    {icon}
                </div>
                {trend && trend}
            </div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-gray-600 text-sm mt-1">{label}</p>
        </div>
    );
}
