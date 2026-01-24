import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface DropdownItem {
    label: string;
    href: string;
    icon?: ReactNode;
}

interface DropdownProps {
    label: string;
    items: DropdownItem[];
    isActive?: boolean;
    showDividers?: boolean;
    width?: string;
    className?: string;
}

export default function Dropdown({
    label,
    items,
    isActive = false,
    showDividers = true,
    width = 'w-56',
    className = '',
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                        ? 'text-primary'
                        : 'text-black hover:text-primary hover:bg-gray-50'
                }`}
            >
                {label}
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute left-0 top-full mt-1 ${width} bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50`}
                    >
                        {items.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-black hover:bg-gray-50 hover:text-primary ${
                                    showDividers && index !== items.length - 1
                                        ? 'border-b border-gray-200'
                                        : ''
                                }`}
                            >
                                {item.icon && item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
