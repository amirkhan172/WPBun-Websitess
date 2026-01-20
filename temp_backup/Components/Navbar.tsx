import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavChild {
    label: string;
    href: string;
    description?: string;
}

interface NavItem {
    label: string;
    href: string;
    children?: NavChild[];
}

const navItems: NavItem[] = [
    {
        label: 'Products',
        href: '#products',
        children: [
            { label: 'PostX', href: '#', description: 'Gutenberg Post Blocks' },
            { label: 'ProductX', href: '#', description: 'WooCommerce Builder' },
            { label: 'WowStore', href: '#', description: 'Complete Store Builder' },
            { label: 'Suspended', href: '#', description: 'Advanced Stock Management' },
            { label: 'WholesaleX', href: '#', description: 'B2B & Wholesale Solution' },
            { label: 'Invoice', href: '#', description: 'PDF Invoice & Packing Slip' },
            { label: 'Stock Notifier', href: '#', description: 'Email Notifications' },
            { label: 'Wishlist', href: '#', description: 'Smart Wishlist Plugin' },
        ],
    },
    { label: 'Agency Bundle', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    {
        label: 'Resources',
        href: '#resources',
        children: [
            { label: 'Documentation', href: '#', description: 'Detailed guides' },
            { label: 'Community', href: '#', description: 'Join our community' },
            { label: 'Video Tutorials', href: '#', description: 'Learn visually' },
        ],
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[99999] bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">W</span>
                        </div>
                        <span className="text-2xl font-bold text-secondary">WPXPO</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={item.href}
                                    className="flex items-center gap-1 px-4 py-2 text-secondary font-medium hover:text-primary transition-colors"
                                >
                                    {item.label}
                                    {item.children && <ChevronDown className="w-4 h-4" />}
                                </a>

                                {item.children && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50"
                                            >
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-3 rounded-lg hover:bg-bg-light transition-colors"
                                                    >
                                                        <span className="block font-semibold text-secondary">
                                                            {child.label}
                                                        </span>
                                                        {child.description && (
                                                            <span className="block text-sm text-text-gray">
                                                                {child.description}
                                                            </span>
                                                        )}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="#account"
                            className="text-secondary font-medium hover:text-primary transition-colors"
                        >
                            Account
                        </a>
                        <a href="#get-started" className="btn-accent">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-secondary">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden border-t border-gray-100"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.label}>
                                        <a
                                            href={item.href}
                                            className="block px-4 py-2 text-secondary font-medium hover:text-primary transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                        {item.children && (
                                            <div className="pl-8 space-y-1">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-text-gray hover:text-primary transition-colors"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 px-4 space-y-2">
                                    <a href="#account" className="block py-2 text-secondary font-medium">
                                        Account
                                    </a>
                                    <a href="#get-started" className="btn-accent inline-block">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
