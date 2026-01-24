import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { PromoBanner, SupportCard, SectionContainer } from '@/Components/UI';
import {
    ChevronDown,
    LayoutDashboard,
    Download,
    ShoppingBag,
    Key,
    HeadphonesIcon,
    MessageSquare,
    MessageCircle,
    MessageCircleMore,
    LifeBuoy,
    Headset,
    Mail,
    Settings,
    LogOut,
    Bell,
    HelpCircle,
    FileText,
    ExternalLink,
    Truck,
    PlusCircle,
    DollarSign,
    LayoutGrid,
    Store,
    Tags,
    MousePointerClick,
    Menu,
    X,
    Shield
} from 'lucide-react';
import { PropsWithChildren } from 'react';

// Products dropdown items
const productsItems = [
    { label: 'WowShipping', href: '/user/products/wowshipping', icon: <Truck className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { label: 'WowAddons', href: '/user/products/wowaddons', icon: <PlusCircle className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-green-400 to-emerald-600' },
    { label: 'WowRevenue', href: '/user/products/wowrevenue', icon: <DollarSign className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { label: 'PostX', href: '/user/products/postx', icon: <LayoutGrid className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700' },
    { label: 'WowStore', href: '/user/products/wowstore', icon: <Store className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-600' },
    { label: 'WholesaleX', href: '/user/products/wholesalex', icon: <Tags className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-violet-500 to-purple-700' },
    { label: 'WowOptin', href: '/user/products/wowoptin', icon: <MousePointerClick className="w-4 h-4 text-white" />, iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-600' },
];

// Resources dropdown items
const resourcesItems = [
    { label: 'Documentation', href: '/user/documentation' },
    { label: 'Terms & Conditions', href: '/user/terms-conditions' },
    { label: 'Privacy Policy', href: '/user/privacy-policy' },
    { label: 'Refund Policy', href: '/user/refund-policy' },
];

// User dashboard navigation items
const userNavItems = [
    { label: 'Dashboard', href: '/user/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Downloads', href: '/user/downloads', icon: <Download className="w-4 h-4" /> },
    { label: 'Orders', href: '/user/orders', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'Licenses', href: '/user/licenses', icon: <Key className="w-4 h-4" /> },
    { label: 'Support', href: '/user/support', icon: <MessageCircleMore className="w-4 h-4" /> },
];

export default function UserLayout({ children }: PropsWithChildren) {
    const { auth } = usePage().props as any;
    const user = auth?.user;
    const { url } = usePage();

    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const isActive = (href: string) => {
        return url.startsWith(href);
    };

    const isProductsActive = () => {
        return productsItems.some(item => url.startsWith(item.href));
    };

    // Check if current page is a user account page (needs padding wrapper)
    const isUserAccountPage = () => {
        const accountPages = ['/user/dashboard', '/user/downloads', '/user/orders', '/user/licenses', '/user/support', '/user/profile', '/user/affiliate', '/user/notifications'];
        return accountPages.some(page => url === page || url.startsWith(page + '/'));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex items-center h-16 px-4 lg:px-6">
                    {/* Left: Logo + Navigation */}
                    <div className="flex items-center gap-8">
                        <Link href="/user/dashboard" className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">W</span>
                            </div>
                            <span className="text-xl font-bold text-secondary hidden sm:block">WPBun</span>
                        </Link>

                        {/* Main Navigation - Next to Logo */}
                        <div className="hidden lg:flex items-center gap-1 ml-[8px]">
                        {/* Our Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsDropdownOpen(true)}
                            onMouseLeave={() => setProductsDropdownOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    isProductsActive()
                                        ? 'text-primary'
                                        : 'text-black hover:text-primary hover:bg-gray-50'
                                }`}
                            >
                                Our Products
                                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {productsDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                                    >
                                        {productsItems.map((item, index) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                                    index !== productsItems.length - 1 ? 'border-b border-gray-200' : ''
                                                } ${
                                                    isActive(item.href)
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-black hover:bg-gray-50 hover:text-primary'
                                                }`}
                                            >
                                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                                                    {item.icon}
                                                </div>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Blog */}
                        <Link
                            href="/user/blog"
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                isActive('/user/blog')
                                    ? 'text-primary'
                                    : 'text-black hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                            Blog
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/user/contact"
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                isActive('/user/contact')
                                    ? 'text-primary'
                                    : 'text-black hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                            Contact
                        </Link>

                        {/* Resources Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setResourcesDropdownOpen(true)}
                            onMouseLeave={() => setResourcesDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-black hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                Resources
                                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {resourcesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                                    >
                                        {resourcesItems.map((item, index) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                                    index !== resourcesItems.length - 1 ? 'border-b border-gray-200' : ''
                                                } ${
                                                    isActive(item.href)
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-black hover:bg-gray-50 hover:text-primary'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        </div>
                    </div>

                    {/* Right: User Menu */}
                    <div className="flex items-center gap-3 ml-auto">
                        {/* Notifications */}
                        <div
                            className="relative"
                            onMouseEnter={() => setNotificationsOpen(true)}
                            onMouseLeave={() => setNotificationsOpen(false)}
                        >
                            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            <AnimatePresence>
                                {notificationsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 top-full mt-1 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
                                    >
                                        {/* Header */}
                                        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                            <h3 className="font-semibold text-gray-900">Notifications</h3>
                                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">3 New</span>
                                        </div>

                                        {/* Notifications List */}
                                        <div className="max-h-80 overflow-y-auto">
                                            <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Download className="w-4 h-4 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-900 font-medium">New Update Available</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">WowShipping v2.5.0 is now available for download.</p>
                                                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Key className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-900 font-medium">License Activated</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">Your PostX Pro license has been activated successfully.</p>
                                                        <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <ShoppingBag className="w-4 h-4 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-900 font-medium">Order Confirmed</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">Your order #12345 has been confirmed.</p>
                                                        <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="px-4 py-3 border-t border-gray-100">
                                            <Link
                                                href="/user/notifications"
                                                className="text-sm text-primary hover:text-primary/80 font-medium"
                                            >
                                                View All Notifications
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* User Name Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setUserMenuOpen(true)}
                            onMouseLeave={() => setUserMenuOpen(false)}
                        >
                            <button className="flex items-center gap-2 p-1.5 pr-3 hover:bg-gray-100 rounded-lg transition-colors">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </span>
                                </div>
                                <span className="hidden sm:block text-sm font-medium text-gray-700">
                                    {user?.name || 'User'}
                                </span>
                                <ChevronDown className={`hidden sm:block w-4 h-4 text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {userMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                                    >
                                        {/* User Info */}
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
                                            <p className="text-xs text-gray-500 truncate">{user?.email || ''}</p>
                                        </div>

                                        {/* Admin Panel Link - Only for admin users */}
                                        {user?.role === 'admin' && (
                                            <div className="py-1 border-b border-gray-100">
                                                <Link
                                                    href="/admin/dashboard"
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-purple-600 hover:bg-purple-50 transition-colors font-medium"
                                                >
                                                    <Shield className="w-4 h-4" />
                                                    Admin Panel
                                                </Link>
                                            </div>
                                        )}

                                        {/* Menu Items */}
                                        <div className="py-1">
                                            <Link
                                                href="/user/dashboard"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <LayoutDashboard className="w-4 h-4" />
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/user/profile"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Account Settings
                                            </Link>
                                            <Link
                                                href="/user/downloads"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <Download className="w-4 h-4" />
                                                Downloads
                                            </Link>
                                            <Link
                                                href="/user/orders"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <ShoppingBag className="w-4 h-4" />
                                                Orders
                                            </Link>
                                            <Link
                                                href="/user/licenses"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <Key className="w-4 h-4" />
                                                Licenses
                                            </Link>
                                            <Link
                                                href="/user/support"
                                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                <MessageCircleMore className="w-4 h-4" />
                                                Support
                                            </Link>
                                        </div>

                                        {/* Logout */}
                                        <div className="border-t border-gray-100 pt-1">
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden border-t border-gray-100 bg-white"
                        >
                            <div className="py-4 px-4 space-y-2">
                                {/* Our Products Mobile */}
                                <div>
                                    <button
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                    >
                                        Our Products
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileProductsOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {productsItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                                                        {item.icon}
                                                    </div>
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Blog Mobile */}
                                <Link
                                    href="/user/blog"
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Blog
                                </Link>

                                {/* Contact Mobile */}
                                <Link
                                    href="/user/contact"
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>

                                {/* Resources Mobile */}
                                <div>
                                    <button
                                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                    >
                                        Resources
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileResourcesOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {resourcesItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100 my-2"></div>

                                {/* User Account Mobile */}
                                <div>
                                    <button
                                        onClick={() => setMobileUserMenuOpen(!mobileUserMenuOpen)}
                                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">
                                                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                                </span>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                                                <p className="text-xs text-gray-500">{user?.email || ''}</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileUserMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileUserMenuOpen && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {/* Admin Panel Link - Only for admin users */}
                                            {user?.role === 'admin' && (
                                                <Link
                                                    href="/admin/dashboard"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-purple-600 font-medium hover:text-purple-700"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <Shield className="w-4 h-4" />
                                                    Admin Panel
                                                </Link>
                                            )}
                                            <Link
                                                href="/user/dashboard"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <LayoutDashboard className="w-4 h-4" />
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/user/profile"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <Settings className="w-4 h-4" />
                                                Account Settings
                                            </Link>
                                            <Link
                                                href="/user/downloads"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <Download className="w-4 h-4" />
                                                Downloads
                                            </Link>
                                            <Link
                                                href="/user/orders"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <ShoppingBag className="w-4 h-4" />
                                                Orders
                                            </Link>
                                            <Link
                                                href="/user/licenses"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <Key className="w-4 h-4" />
                                                Licenses
                                            </Link>
                                            <Link
                                                href="/user/support"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <MessageCircleMore className="w-4 h-4" />
                                                Support
                                            </Link>
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:text-red-700"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className={`min-h-screen ${isUserAccountPage() ? 'pt-16' : ''}`}>
                {/* Welcome Section - Only on dashboard page */}
                {url === '/user/dashboard' && (
                    <div className="bg-[#f8f8f8] border-b border-gray-200">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                Hello, {user?.name || 'User'}
                            </h2>
                            <p className="text-black mt-2">
                                It's your playground - from here, you can{' '}
                                <Link href="/user/downloads" className="text-black hover:underline">download purchased plugins</Link>,{' '}
                                <Link href="/user/licenses" className="text-black hover:underline">manage product licenses</Link>,{' '}
                                <Link href="/user/profile" className="text-black hover:underline">update your profile</Link>, and{' '}
                                <Link href="/user/support" className="text-black hover:underline">get support</Link>.
                            </p>
                        </div>
                    </div>
                )}

                {/* Secondary Navigation - Only on dashboard page */}
                {url === '/user/dashboard' && (
                    <div className="bg-white border-b border-gray-200">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between py-5 overflow-x-auto">
                                <div className="flex items-center gap-1 md:gap-2">
                                    <Link
                                        href="/user/dashboard"
                                        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                                            isActive('/user/dashboard')
                                                ? 'text-primary after:absolute after:bottom-[-12px] after:left-4 after:right-4 after:h-[4px] after:bg-primary'
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        <LayoutDashboard className="w-4 h-4" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/user/profile"
                                        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                                            isActive('/user/profile')
                                                ? 'text-primary after:absolute after:bottom-[-12px] after:left-4 after:right-4 after:h-[4px] after:bg-primary'
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        <Settings className="w-4 h-4" />
                                        Account Settings
                                    </Link>
                                    <Link
                                        href="/user/support"
                                        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                                            isActive('/user/support')
                                                ? 'text-primary after:absolute after:bottom-[-12px] after:left-4 after:right-4 after:h-[4px] after:bg-primary'
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        <Mail className="w-4 h-4" />
                                        Support Center
                                    </Link>
                                    <Link
                                        href="/user/affiliate"
                                        className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                                            isActive('/user/affiliate')
                                                ? 'text-primary after:absolute after:bottom-[-12px] after:left-4 after:right-4 after:h-[4px] after:bg-primary'
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        <DollarSign className="w-4 h-4" />
                                        Affiliate
                                    </Link>
                                </div>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}

{url === '/user/dashboard' && (
                    <>
                        {/* Promotional Banner */}
                        <SectionContainer marginTop="md">
                            <PromoBanner
                                title="New Year, New Deals! Save $450 Today"
                                description="Premium WordPress & WooCommerce Plugins at Special New Year Prices"
                                buttonText="Grab The Deal"
                                buttonHref="/user/pricing"
                            />
                        </SectionContainer>

                        {/* Support Section */}
                        <SectionContainer marginTop="lg">
                            <SupportCard
                                icon={<Mail className="w-12 h-12 text-primary" />}
                                title="Need Support? We are here to assist you!"
                                description="Don't hesitate to reach out. Our support team is here to assist you, ensuring you make the most of our services."
                                buttonText="Get Support"
                                buttonHref="/user/support"
                            />
                        </SectionContainer>
                    </>
                )}

                {isUserAccountPage() ? (
                    <div className="max-w-7xl mx-auto p-6 lg:p-8">
                        {children}
                    </div>
                ) : (
                    children
                )}

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white px-6 lg:px-8 py-10">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-base text-gray-500">
                            &copy; {new Date().getFullYear()} WPBun. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-base">
                            <Link href="/user/privacy-policy" className="text-gray-500 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/user/terms-conditions" className="text-gray-500 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/user/contact" className="text-gray-500 hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
