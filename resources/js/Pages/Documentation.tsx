import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Search, Book, Code, LayoutGrid, Truck, PlusCircle, DollarSign, Store,
    MousePointerClick, Tags, ChevronRight, ExternalLink, FileText, Video,
    HelpCircle, Star, Headphones, Zap, ArrowRight, Package, MessageCircle
} from 'lucide-react';

const products = [
    {
        name: 'PostX',
        slug: 'postx',
        description: 'Gutenberg blocks plugin for news magazine websites',
        icon: <LayoutGrid className="w-6 h-6" />,
        color: 'from-blue-500 to-blue-700',
        docs: [
            { title: 'Getting Started', slug: 'getting-started' },
            { title: 'Post Blocks', slug: 'post-blocks' },
            { title: 'Dynamic Site Builder', slug: 'dynamic-site-builder' },
            { title: 'Templates Library', slug: 'templates-library' },
            { title: 'Query Builder', slug: 'query-builder' },
        ],
    },
    {
        name: 'WowStore',
        slug: 'wowstore',
        description: 'WooCommerce store builder with sales boosting features',
        icon: <Store className="w-6 h-6" />,
        color: 'from-cyan-500 to-teal-600',
        docs: [
            { title: 'Installation Guide', slug: 'installation' },
            { title: 'Product Blocks', slug: 'product-blocks' },
            { title: 'Shop Page Builder', slug: 'shop-builder' },
            { title: 'Cart & Checkout', slug: 'cart-checkout' },
            { title: 'Integrations', slug: 'integrations' },
        ],
    },
    {
        name: 'WowRevenue',
        slug: 'wowrevenue',
        description: 'Product bundles with 12+ discount campaigns',
        icon: <DollarSign className="w-6 h-6" />,
        color: 'from-pink-500 to-rose-600',
        docs: [
            { title: 'Quick Start', slug: 'quick-start' },
            { title: 'Bundle Types', slug: 'bundle-types' },
            { title: 'Discount Rules', slug: 'discount-rules' },
            { title: 'BOGO Offers', slug: 'bogo-offers' },
            { title: 'Analytics', slug: 'analytics' },
        ],
    },
    {
        name: 'WowAddons',
        slug: 'wowaddons',
        description: 'Product addons for WooCommerce customization',
        icon: <PlusCircle className="w-6 h-6" />,
        color: 'from-green-400 to-emerald-600',
        docs: [
            { title: 'Setup Guide', slug: 'setup-guide' },
            { title: 'Addon Types', slug: 'addon-types' },
            { title: 'Conditional Logic', slug: 'conditional-logic' },
            { title: 'Pricing Options', slug: 'pricing-options' },
            { title: 'Display Settings', slug: 'display-settings' },
        ],
    },
    {
        name: 'WholesaleX',
        slug: 'wholesalex',
        description: 'All-in-one wholesale solution for WooCommerce',
        icon: <Tags className="w-6 h-6" />,
        color: 'from-violet-500 to-purple-700',
        docs: [
            { title: 'Getting Started', slug: 'getting-started' },
            { title: 'User Roles', slug: 'user-roles' },
            { title: 'Pricing Rules', slug: 'pricing-rules' },
            { title: 'Registration Form', slug: 'registration-form' },
            { title: 'B2B Features', slug: 'b2b-features' },
        ],
    },
    {
        name: 'WowOptin',
        slug: 'wowoptin',
        description: 'Popup and optin plugin for lead collection',
        icon: <MousePointerClick className="w-6 h-6" />,
        color: 'from-yellow-400 to-amber-600',
        docs: [
            { title: 'Introduction', slug: 'introduction' },
            { title: 'Popup Types', slug: 'popup-types' },
            { title: 'Triggers & Rules', slug: 'triggers-rules' },
            { title: 'Templates', slug: 'templates' },
            { title: 'Integrations', slug: 'integrations' },
        ],
    },
    {
        name: 'WowShipping',
        slug: 'wowshipping',
        description: 'Table rate shipping with 30+ conditions',
        icon: <Truck className="w-6 h-6" />,
        color: 'from-orange-400 to-orange-600',
        docs: [
            { title: 'Configuration', slug: 'configuration' },
            { title: 'Shipping Zones', slug: 'shipping-zones' },
            { title: 'Rate Conditions', slug: 'rate-conditions' },
            { title: 'Free Shipping', slug: 'free-shipping' },
            { title: 'Advanced Rules', slug: 'advanced-rules' },
        ],
    },
];

const quickLinks = [
    {
        title: 'Video Tutorials',
        description: 'Watch step-by-step video guides',
        icon: <Video className="w-6 h-6" />,
        href: '/tutorials',
        color: 'from-red-500 to-rose-600',
    },
    {
        title: 'Community Forum',
        description: 'Join discussions & get help',
        icon: <MessageCircle className="w-6 h-6" />,
        href: '/community',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'API Reference',
        description: 'Developer documentation',
        icon: <Code className="w-6 h-6" />,
        href: '#',
        color: 'from-gray-600 to-gray-800',
    },
];

const popularArticles = [
    { title: 'How to Install WPBun Plugins', category: 'Getting Started' },
    { title: 'Setting Up Your License Key', category: 'Getting Started' },
    { title: 'Creating Your First Post Grid', category: 'PostX' },
    { title: 'Building a WooCommerce Shop Page', category: 'WowStore' },
    { title: 'Creating Product Bundles', category: 'WowRevenue' },
    { title: 'Setting Up Wholesale Pricing', category: 'WholesaleX' },
];

export default function Documentation() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeProduct, setActiveProduct] = useState<string | null>(null);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AppLayout>
            <Head title="Documentation - WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#f5f7f9] to-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                Comprehensive guides for all products
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-20 h-20 bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                        >
                            <Book className="w-10 h-10" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Documentation &
                            <span className="block text-[#1f66ff]">Knowledge Base</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Comprehensive guides and tutorials to help you get the most out of WPBun plugins.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative max-w-2xl mx-auto"
                        >
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors shadow-lg text-lg"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-6">
                        {quickLinks.map((link, index) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-4 p-6 bg-[#f5f7f9] rounded-2xl hover:shadow-lg transition-all group border border-transparent hover:border-gray-200"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                        {link.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#070707] text-lg group-hover:text-[#1f66ff] transition-colors">
                                            {link.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{link.description}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1f66ff] transition-colors" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="py-12 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-[#070707]">Popular Articles</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {popularArticles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                                >
                                    <FileText className="w-5 h-5 text-[#1f66ff] flex-shrink-0" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-[#070707] group-hover:text-[#1f66ff] transition-colors">
                                            {article.title}
                                        </h4>
                                        <span className="text-xs text-gray-500">{article.category}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1f66ff]" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Documentation */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-4">
                            PRODUCT DOCS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Documentation by Product
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Select a product to explore its complete documentation and guides.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Products List */}
                        <div className="lg:col-span-1 space-y-3">
                            {filteredProducts.map((product, index) => (
                                <motion.button
                                    key={product.slug}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setActiveProduct(activeProduct === product.slug ? null : product.slug)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                                        activeProduct === product.slug
                                            ? 'bg-[#070707] text-white shadow-lg'
                                            : 'bg-[#f5f7f9] hover:bg-gray-100'
                                    }`}
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                                        {product.icon}
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className={`font-bold ${activeProduct === product.slug ? 'text-white' : 'text-[#070707]'}`}>
                                            {product.name}
                                        </h3>
                                        <p className={`text-sm ${activeProduct === product.slug ? 'text-white/70' : 'text-gray-500'} line-clamp-1`}>
                                            {product.description}
                                        </p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${activeProduct === product.slug ? 'rotate-90 text-white' : 'text-gray-400'}`} />
                                </motion.button>
                            ))}
                        </div>

                        {/* Documentation Content */}
                        <div className="lg:col-span-2">
                            {activeProduct ? (
                                <motion.div
                                    key={activeProduct}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[#f5f7f9] rounded-2xl p-8"
                                >
                                    {(() => {
                                        const product = products.find(p => p.slug === activeProduct);
                                        if (!product) return null;
                                        return (
                                            <>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                                        {product.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-[#070707]">{product.name}</h3>
                                                        <p className="text-gray-500">{product.description}</p>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {product.docs.map((doc) => (
                                                        <Link
                                                            key={doc.slug}
                                                            href={`/products/${product.slug}`}
                                                            className="flex items-center gap-3 p-5 bg-white rounded-xl hover:shadow-md transition-all group border border-gray-100"
                                                        >
                                                            <div className="w-10 h-10 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                                                <FileText className="w-5 h-5" />
                                                            </div>
                                                            <span className="font-semibold text-[#070707] group-hover:text-[#1f66ff] transition-colors">
                                                                {doc.title}
                                                            </span>
                                                            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#1f66ff]" />
                                                        </Link>
                                                    ))}
                                                </div>

                                                <div className="mt-8 pt-6 border-t border-gray-200">
                                                    <Link
                                                        href={`/products/${product.slug}`}
                                                        className="inline-flex items-center gap-2 bg-[#1f66ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                                    >
                                                        View Full Documentation
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </motion.div>
                            ) : (
                                <div className="bg-[#f5f7f9] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[500px] text-center">
                                    <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
                                        <Book className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#070707] mb-2">Select a Product</h3>
                                    <p className="text-gray-500 max-w-sm">
                                        Click on a product from the list to view its documentation and guides.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-20 bg-blue-100">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#1f66ff]/10 text-[#1f66ff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Headphones className="w-5 h-5" />
                            NEED HELP?
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-6">
                            Can't Find What You're Looking For?
                        </h2>

                        <p className="text-gray-600 text-lg mb-10">
                            Our support team is here to help you with any questions or issues you may have. We typically respond within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a56db] transition-colors"
                            >
                                <Headphones className="w-5 h-5" />
                                Contact Support
                            </Link>
                            <Link
                                href="/community"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#070707] px-8 py-4 rounded-lg font-bold text-lg border border-gray-200 hover:border-[#1f66ff] hover:text-[#1f66ff] transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Join Community
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
