import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Package, LayoutGrid, Truck, PlusCircle, DollarSign, Store, MousePointerClick, Tags } from 'lucide-react';

interface ProductItem {
    label: string;
    href: string;
    description: string;
    badge?: 'new' | 'hot';
    icon: React.ReactNode;
    iconBg: string;
}

interface NavChild {
    label: string;
    href: string;
    description?: string;
}

interface NavItem {
    label: string;
    href: string;
    children?: NavChild[];
    isProductsDropdown?: boolean;
}

// Products data with internal links
const productsData: ProductItem[] = [
    {
        label: 'Agency Bundle',
        href: '/agency-bundle',
        description: 'The Black Friday Special Mega Bundle Deal is Now Live!',
        badge: 'new',
        icon: <Package className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    },
    {
        label: 'PostX',
        href: '/products/postx',
        description: 'Post grid and Gutenberg blocks plugin for news magazine websites.',
        icon: <LayoutGrid className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
        label: 'WowShipping',
        href: '/products/wowshipping',
        description: 'Table Rate Shipping for WooCommerce with 30+ conditions.',
        badge: 'new',
        icon: <Truck className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
        label: 'WowAddons',
        href: '/products/wowaddons',
        description: 'Product Addons for WooCommerce with extra product options.',
        badge: 'hot',
        icon: <PlusCircle className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600',
    },
    {
        label: 'WowRevenue',
        href: '/products/wowrevenue',
        description: 'Product Bundle for WooCommerce with 12+ discount campaigns.',
        badge: 'hot',
        icon: <DollarSign className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
    {
        label: 'WowStore',
        href: '/products/wowstore',
        description: 'WooCommerce store builder with numerous sales boosting features.',
        icon: <Store className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    },
    {
        label: 'WowOptin',
        href: '/products/wowoptin',
        description: 'Popup and Optin plugin for WordPress to collect leads.',
        icon: <MousePointerClick className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-600',
    },
    {
        label: 'WholesaleX',
        href: '/products/wholesalex',
        description: 'All-in-one Wholesale solution for WooCommerce with discount rules.',
        icon: <Tags className="w-5 h-5 text-white" />,
        iconBg: 'bg-gradient-to-br from-violet-500 to-purple-700',
    },
];

const navItems: NavItem[] = [
    {
        label: 'Products',
        href: '#products',
        isProductsDropdown: true,
    },
    { label: 'Agency Bundle', href: '/agency-bundle' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    {
        label: 'Resources',
        href: '#resources',
        children: [
            { label: 'Documentation', href: '/documentation' },
            { label: 'Community', href: '/community' },
            { label: 'Video Tutorials', href: '/tutorials' },
        ],
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { url } = usePage();

    // Check if a link is active
    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    // Check if any product link is active (for Products dropdown) - excluding Agency Bundle
    const isProductsActive = () => {
        return productsData.some(product =>
            product.href !== '/agency-bundle' && url.startsWith(product.href)
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                // Always show navbar at top of page
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down - hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[99999] bg-white shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 -ml-[3rem]">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">W</span>
                        </div>
                        <span className="text-2xl font-bold text-secondary">WPBun</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isInternalLink = item.href.startsWith('/');
                            return (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {isInternalLink && !item.children && !item.isProductsDropdown ? (
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors ${
                                            isActive(item.href) ? 'text-primary' : 'text-secondary hover:text-primary'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.href}
                                        className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors ${
                                            item.isProductsDropdown && isProductsActive() ? 'text-primary' : 'text-secondary hover:text-primary'
                                        }`}
                                    >
                                        {item.label}
                                        {(item.children || item.isProductsDropdown) && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                        )}
                                    </a>
                                )}

                                {/* Products Dropdown */}
                                {item.isProductsDropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-[-150px] mt-2 w-[850px] bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-50"
                                            >
                                                <div className="grid grid-cols-3 gap-3">
                                                    {productsData.map((product) => (
                                                        <Link
                                                            key={product.label}
                                                            href={product.href}
                                                            className={`flex items-start gap-3 p-4 rounded-lg transition-all duration-200 group ${
                                                                isActive(product.href) ? 'bg-primary/10' : 'hover:bg-gray-50'
                                                            }`}
                                                        >
                                                            <div className={`w-11 h-11 rounded-lg ${product.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                                                                {product.icon}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                    <span className={`font-semibold transition-colors text-[15px] ${
                                                                        isActive(product.href) ? 'text-primary' : 'text-secondary group-hover:text-primary'
                                                                    }`}>
                                                                        {product.label}
                                                                    </span>
                                                                    {product.badge === 'new' && (
                                                                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-cyan-100 text-cyan-600 rounded-full">
                                                                            New
                                                                        </span>
                                                                    )}
                                                                    {product.badge === 'hot' && (
                                                                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-orange-100 text-orange-600 rounded-full">
                                                                            Hot
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <span className="block text-sm text-gray-500 leading-snug mt-1 line-clamp-2">
                                                                    {product.description}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                {/* Regular Dropdown */}
                                {item.children && !item.isProductsDropdown && (
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
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-secondary"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center -mr-[3rem]">
                        <Link
                            href="/login"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-secondary font-medium hover:bg-gray-200 transition-colors"
                        >
                            <User className="w-5 h-5" />
                            Account
                        </Link>
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
                                {navItems.map((item) => {
                                    const isInternalLink = item.href.startsWith('/');
                                    const hasDropdown = item.children || item.isProductsDropdown;
                                    return (
                                    <div key={item.label}>
                                        {hasDropdown ? (
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                                className={`flex items-center justify-between w-full px-4 py-2 font-medium transition-colors ${
                                                    item.isProductsDropdown && isProductsActive() ? 'text-primary' : 'text-secondary hover:text-primary'
                                                }`}
                                            >
                                                {item.label}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                            </button>
                                        ) : isInternalLink ? (
                                            <Link
                                                href={item.href}
                                                className={`block px-4 py-2 font-medium transition-colors ${
                                                    isActive(item.href) ? 'text-primary' : 'text-secondary hover:text-primary'
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block px-4 py-2 text-secondary font-medium hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        )}

                                        {/* Mobile Products Dropdown */}
                                        {item.isProductsDropdown && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-gray-50 mx-2 rounded-lg overflow-hidden"
                                            >
                                                {productsData.map((product) => (
                                                    <Link
                                                        key={product.label}
                                                        href={product.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                                                            isActive(product.href) ? 'bg-primary/10' : 'hover:bg-gray-100'
                                                        }`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg ${product.iconBg} flex items-center justify-center flex-shrink-0`}>
                                                            {product.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2">
                                                                <span className={`font-medium text-sm ${
                                                                    isActive(product.href) ? 'text-primary' : 'text-secondary'
                                                                }`}>
                                                                    {product.label}
                                                                </span>
                                                                {product.badge === 'new' && (
                                                                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase bg-cyan-100 text-cyan-600 rounded-full">
                                                                        New
                                                                    </span>
                                                                )}
                                                                {product.badge === 'hot' && (
                                                                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase bg-orange-100 text-orange-600 rounded-full">
                                                                        Hot
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}

                                        {/* Mobile Regular Dropdown */}
                                        {item.children && !item.isProductsDropdown && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-gray-50 mx-2 rounded-lg overflow-hidden"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                    );
                                })}
                                <div className="pt-4 px-4">
                                    <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-secondary font-medium hover:bg-gray-200 transition-colors">
                                        <User className="w-5 h-5" />
                                        Account
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
