import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Key,
    MessageSquare,
    Settings,
    BarChart3,
    ChevronDown,
    Bell,
    LogOut,
    Menu,
    X,
    Home,
    FileText,
    Tag,
    CreditCard,
    Mail,
    Shield,
    HelpCircle,
    Globe
} from 'lucide-react';
import { PropsWithChildren } from 'react';

// Sidebar navigation items
const sidebarItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'Products', href: '/admin/products', icon: <Package className="w-5 h-5" /> },
    { label: 'Orders', href: '/admin/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { label: 'Users', href: '/admin/users', icon: <Users className="w-5 h-5" /> },
    { label: 'Licenses', href: '/admin/licenses', icon: <Key className="w-5 h-5" /> },
    { label: 'Support Tickets', href: '/admin/support', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Reports', href: '/admin/reports', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Settings', href: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
];

export default function AdminLayout({ children }: PropsWithChildren) {
    const { auth } = usePage().props as any;
    const user = auth?.user;
    const { url } = usePage();

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const isActive = (href: string) => {
        return url.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setMobileSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 z-50 h-full bg-[#1e293b] text-white transition-all duration-300 ${
                sidebarOpen ? 'w-64' : 'w-20'
            } hidden lg:block`}>
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
                    <Link href="/admin/dashboard" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">W</span>
                        </div>
                        {sidebarOpen && (
                            <span className="text-xl font-bold">WPBun</span>
                        )}
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                isActive(item.href)
                                    ? 'bg-primary text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {item.icon}
                            {sidebarOpen && <span className="font-medium">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                    >
                        <Globe className="w-5 h-5" />
                        {sidebarOpen && <span className="font-medium">View Website</span>}
                    </Link>
                </div>
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileSidebarOpen && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 left-0 z-50 h-full w-64 bg-[#1e293b] text-white lg:hidden"
                    >
                        {/* Logo */}
                        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
                            <Link href="/admin/dashboard" className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">W</span>
                                </div>
                                <span className="text-xl font-bold">WPBun</span>
                            </Link>
                            <button
                                onClick={() => setMobileSidebarOpen(false)}
                                className="p-2 hover:bg-gray-700 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="p-4 space-y-1">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive(item.href)
                                            ? 'bg-primary text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Bottom Section */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                                <span className="font-medium">View Website</span>
                            </Link>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
                {/* Top Navbar */}
                <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileSidebarOpen(true)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">
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
                                        className="absolute right-0 top-full mt-1 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
                                    >
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <h3 className="font-semibold text-gray-900">Notifications</h3>
                                        </div>
                                        <div className="max-h-64 overflow-y-auto">
                                            <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50">
                                                <p className="text-sm font-medium text-gray-900">New Order #12345</p>
                                                <p className="text-xs text-gray-500">Agency Bundle - $499</p>
                                                <p className="text-xs text-gray-400 mt-1">5 min ago</p>
                                            </div>
                                            <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50">
                                                <p className="text-sm font-medium text-gray-900">New User Registration</p>
                                                <p className="text-xs text-gray-500">john@example.com</p>
                                                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                                            </div>
                                            <div className="px-4 py-3 hover:bg-gray-50">
                                                <p className="text-sm font-medium text-gray-900">Support Ticket #789</p>
                                                <p className="text-xs text-gray-500">License activation issue</p>
                                                <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 border-t border-gray-100">
                                            <Link href="/admin/notifications" className="text-sm text-primary font-medium">
                                                View All Notifications
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* User Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setUserMenuOpen(true)}
                            onMouseLeave={() => setUserMenuOpen(false)}
                        >
                            <button className="flex items-center gap-2 p-1.5 pr-3 hover:bg-gray-100 rounded-lg">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                                    </span>
                                </div>
                                <span className="hidden sm:block text-sm font-medium text-gray-700">
                                    {user?.name || 'Admin'}
                                </span>
                                <ChevronDown className="hidden sm:block w-4 h-4 text-gray-500" />
                            </button>

                            <AnimatePresence>
                                {userMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                                    >
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-semibold text-gray-900">{user?.name || 'Admin'}</p>
                                            <p className="text-xs text-gray-500">{user?.email || ''}</p>
                                            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                Administrator
                                            </span>
                                        </div>
                                        <div className="py-1">
                                            <Link
                                                href="/admin/settings"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Settings
                                            </Link>
                                            <Link
                                                href="/"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                <Globe className="w-4 h-4" />
                                                View Website
                                            </Link>
                                        </div>
                                        <div className="border-t border-gray-100 pt-1">
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Logout
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
