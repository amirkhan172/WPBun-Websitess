import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import {
    LayoutGrid, Store, DollarSign, PlusCircle, Tags, MousePointerClick, Truck,
    Package, Star, Users, Download, ChevronRight, Check, Zap, ArrowRight,
    Shield, Headphones, RefreshCw, Award, Globe, Sparkles
} from 'lucide-react';

const products = [
    {
        name: 'PostX',
        slug: 'postx',
        tagline: 'Gutenberg Post Blocks',
        description: 'The ultimate Gutenberg blocks plugin for creating stunning news magazine websites with dynamic content and beautiful layouts.',
        icon: <LayoutGrid className="w-7 h-7" />,
        color: 'from-blue-500 to-blue-700',
        bgLight: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-600',
        stats: { users: '40K+', rating: '4.9', downloads: '500K+' },
        features: ['50+ Gutenberg Blocks', 'Dynamic Site Builder', 'Query Builder', 'Templates Library'],
        badge: null,
    },
    {
        name: 'WowStore',
        slug: 'wowstore',
        tagline: 'WooCommerce Builder',
        description: 'Complete WooCommerce store builder with product blocks, shop templates, and powerful sales boosting features.',
        icon: <Store className="w-7 h-7" />,
        color: 'from-cyan-500 to-teal-600',
        bgLight: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        textColor: 'text-cyan-600',
        stats: { users: '15K+', rating: '4.8', downloads: '200K+' },
        features: ['Product Blocks', 'Shop Page Builder', 'Quick View', 'Wishlist & Compare'],
        badge: null,
    },
    {
        name: 'WowRevenue',
        slug: 'wowrevenue',
        tagline: 'Product Bundles & Discounts',
        description: 'Boost your revenue with powerful product bundles, BOGO offers, and 12+ discount campaign types.',
        icon: <DollarSign className="w-7 h-7" />,
        color: 'from-pink-500 to-rose-600',
        bgLight: 'bg-pink-50',
        borderColor: 'border-pink-200',
        textColor: 'text-pink-600',
        stats: { users: '8K+', rating: '4.9', downloads: '100K+' },
        features: ['Product Bundles', 'BOGO Offers', 'Quantity Discounts', 'Free Gifts'],
        badge: 'hot',
    },
    {
        name: 'WowAddons',
        slug: 'wowaddons',
        tagline: 'Product Add-ons',
        description: 'Add custom product options, extra fields, and personalization features to your WooCommerce products.',
        icon: <PlusCircle className="w-7 h-7" />,
        color: 'from-green-400 to-emerald-600',
        bgLight: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-600',
        stats: { users: '6K+', rating: '4.8', downloads: '80K+' },
        features: ['16+ Field Types', 'File Uploads', 'Conditional Logic', 'Price Add-ons'],
        badge: 'hot',
    },
    {
        name: 'WholesaleX',
        slug: 'wholesalex',
        tagline: 'B2B & Wholesale Solution',
        description: 'All-in-one wholesale solution with tiered pricing, user roles, and B2B features for WooCommerce.',
        icon: <Tags className="w-7 h-7" />,
        color: 'from-violet-500 to-purple-700',
        bgLight: 'bg-violet-50',
        borderColor: 'border-violet-200',
        textColor: 'text-violet-600',
        stats: { users: '10K+', rating: '4.9', downloads: '150K+' },
        features: ['Tiered Pricing', 'User Roles', 'Registration Forms', 'Hide Prices'],
        badge: null,
    },
    {
        name: 'WowOptin',
        slug: 'wowoptin',
        tagline: 'Popups & Lead Generation',
        description: 'Create high-converting popups, slide-ins, and opt-in forms to grow your email list and boost conversions.',
        icon: <MousePointerClick className="w-7 h-7" />,
        color: 'from-yellow-400 to-amber-600',
        bgLight: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-600',
        stats: { users: '5K+', rating: '4.7', downloads: '60K+' },
        features: ['12+ Popup Types', 'Exit Intent', 'A/B Testing', 'Email Integrations'],
        badge: null,
    },
    {
        name: 'WowShipping',
        slug: 'wowshipping',
        tagline: 'Table Rate Shipping',
        description: 'Advanced table rate shipping with 30+ conditions for flexible WooCommerce shipping rules.',
        icon: <Truck className="w-7 h-7" />,
        color: 'from-orange-400 to-orange-600',
        bgLight: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-600',
        stats: { users: '7K+', rating: '4.8', downloads: '90K+' },
        features: ['30+ Conditions', 'Shipping Zones', 'Free Shipping Rules', 'Weight Based'],
        badge: 'new',
    },
];

const whyChooseUs = [
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: 'Lifetime Updates',
        description: 'Get free updates forever. We continuously improve our plugins with new features and security patches.',
    },
    {
        icon: <Headphones className="w-8 h-8" />,
        title: 'Priority Support',
        description: 'Our dedicated support team responds within 24 hours to help you with any questions or issues.',
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Money-Back Guarantee',
        description: '14-day 100% money-back guarantee. Not satisfied? Get a full refund, no questions asked.',
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: 'Quality Code',
        description: 'Clean, well-documented code following WordPress coding standards and best practices.',
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Translation Ready',
        description: 'All plugins are fully translatable with WPML and Polylang compatibility.',
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Regular Updates',
        description: 'We release updates regularly with new features, improvements, and compatibility fixes.',
    },
];

export default function Products() {
    return (
        <DynamicLayout>
            <Head title="Products - Premium WordPress & WooCommerce Plugins | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f7f9] to-white overflow-hidden">
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
                                Trusted by 65,000+ websites worldwide
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-[#1f66ff]/10 text-[#1f66ff] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        >
                            <Package className="w-5 h-5" />
                            8 Premium Plugins
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Premium WordPress &
                            <span className="block text-[#1f66ff]">WooCommerce Plugins</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                        >
                            Everything you need to build, sell, and grow online. Powerful plugins crafted with performance, security, and user experience in mind.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#1f66ff]" />
                                <span className="font-bold text-[#070707]">65K+</span>
                                <span className="text-gray-500">Active Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">4.9</span>
                                <span className="text-gray-500">Average Rating</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-[#1f66ff]" />
                                <span className="font-bold text-[#070707]">1.2M+</span>
                                <span className="text-gray-500">Total Downloads</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mb-4">
                            OUR PRODUCTS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Explore Our Premium Plugins
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Each plugin is designed to solve specific problems and help you achieve your goals faster.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className={`block bg-white rounded-2xl border ${product.borderColor} hover:border-gray-300 p-6 md:p-8 hover:shadow-xl transition-all duration-300 group`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                                            {product.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-[#070707] group-hover:text-[#1f66ff] transition-colors">
                                                    {product.name}
                                                </h3>
                                                {product.badge === 'new' && (
                                                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-600 text-xs font-bold uppercase rounded-full">
                                                        New
                                                    </span>
                                                )}
                                                {product.badge === 'hot' && (
                                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">
                                                        Hot
                                                    </span>
                                                )}
                                            </div>
                                            <p className={`text-sm font-semibold ${product.textColor} mb-3`}>
                                                {product.tagline}
                                            </p>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-2 mb-4">
                                                {product.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Stats & CTA */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-4 h-4 text-gray-400" />
                                                        <span className="text-sm text-gray-500">{product.stats.users}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                        <span className="text-sm text-gray-500">{product.stats.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#1f66ff] font-semibold text-sm group-hover:gap-3 transition-all">
                                                    <span>Learn More</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Agency Bundle CTA */}
            <section className="py-20 bg-blue-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#1f66ff]/10 text-[#1f66ff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Zap className="w-5 h-5" />
                            SAVE OVER 80%
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#070707] mb-6">
                            Get All 8 Plugins in One Bundle
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Why buy separately? Get lifetime access to all our premium plugins with the Agency Bundle. One payment, unlimited possibilities.
                        </p>

                        {/* Plugin Icons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {products.map((product) => (
                                <div
                                    key={product.slug}
                                    className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                                    title={product.name}
                                >
                                    {product.icon}
                                </div>
                            ))}
                        </div>

                        {/* Bundle Benefits */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                { label: 'All 8 Plugins', value: 'Included' },
                                { label: 'Unlimited Sites', value: 'Forever' },
                                { label: 'Lifetime Updates', value: 'Included' },
                            ].map((item) => (
                                <div key={item.label} className="bg-white rounded-xl p-4 border border-blue-100">
                                    <p className="text-[#1f66ff] font-bold text-lg">{item.value}</p>
                                    <p className="text-gray-500 text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a56db] transition-colors"
                            >
                                <Package className="w-5 h-5" />
                                View Agency Bundle
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#070707] px-8 py-4 rounded-lg font-bold text-lg border border-gray-200 hover:border-[#1f66ff] hover:text-[#1f66ff] transition-colors"
                            >
                                Compare Pricing
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose WPBun */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-[#1f66ff] rounded-full text-sm font-semibold mb-4">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Why 65,000+ Businesses Trust WPBun
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our plugins are built with performance, security, and user experience in mind.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-100 rounded-2xl p-8 md:p-12 text-center border border-blue-200"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Ready to Power Up Your Website?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Join 65,000+ websites already using WPBun plugins. Start your journey today with our 14-day money-back guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1a56db] transition-colors"
                            >
                                Get Agency Bundle
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#070707] px-8 py-4 rounded-lg font-bold border border-gray-200 hover:border-[#1f66ff] hover:text-[#1f66ff] transition-colors"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
