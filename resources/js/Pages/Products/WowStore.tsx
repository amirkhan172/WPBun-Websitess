import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Store, Check, Star, Users, Download, Play, ChevronRight, Zap, Shield, ArrowRight,
    ShoppingCart, Eye, Heart, BarChart, Layers, Palette, Package, Filter, CreditCard,
    RefreshCw, Paintbrush, Globe, Grid, Layout, FileText, ShoppingBag, Settings,
    Sparkles, ChevronDown, ChevronUp, Clock, Award, Truck
} from 'lucide-react';

// Page Builder Types
const pageBuilders = [
    { name: 'Homepage Builder', icon: <Layout className="w-5 h-5" />, description: 'Create stunning homepages' },
    { name: 'Shop Page Builder', icon: <ShoppingBag className="w-5 h-5" />, description: 'Custom shop layouts' },
    { name: 'Product Page Builder', icon: <Package className="w-5 h-5" />, description: 'Unique product pages' },
    { name: 'Cart Page Builder', icon: <ShoppingCart className="w-5 h-5" />, description: 'Optimized cart pages' },
    { name: 'Checkout Builder', icon: <CreditCard className="w-5 h-5" />, description: 'Streamlined checkout' },
    { name: 'Thank You Builder', icon: <Heart className="w-5 h-5" />, description: 'Post-purchase pages' },
    { name: 'My Account Builder', icon: <Settings className="w-5 h-5" />, description: 'Customer dashboards' },
];

// Core Features
const coreFeatures = [
    {
        icon: <Grid className="w-6 h-6" />,
        title: '48+ Product Blocks',
        description: 'Product grids, lists, sliders, carousels, and category displays for every need.',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: '100+ Templates',
        description: 'Pre-made templates for shop, product, cart, checkout and account pages.',
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: '140+ Patterns',
        description: 'Ready-to-use design patterns to build pages in minutes.',
    },
    {
        icon: <Filter className="w-6 h-6" />,
        title: 'Product Filters',
        description: 'AJAX-powered filters by price, attribute, category, and custom fields.',
    },
    {
        icon: <Paintbrush className="w-6 h-6" />,
        title: 'Variation Swatches',
        description: 'Color, image, and label swatches for product variations.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Currency Switcher',
        description: 'Multi-currency support for international stores.',
    },
];

// Conversion Features
const conversionFeatures = [
    'Quick View Modal',
    'Product Comparison',
    'Wishlist System',
    'Size Charts',
    'Stock Progress Bar',
    'Sale Countdown',
    'Name Your Price',
    'Partial Payments',
    'Backorder Support',
    'Preorder System',
    'Custom Add to Cart',
    'Upsells & Cross-sells',
];

// Value Pillars
const valuePillars = [
    {
        title: 'Create',
        subtitle: 'Design stunning stores',
        description: 'Use 100+ templates and 140+ patterns to build beautiful WooCommerce stores without coding.',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        title: 'Sell',
        subtitle: 'Boost conversions',
        description: 'Conversion-focused features like quick view, wishlist, and comparison to increase sales.',
        color: 'from-pink-500 to-rose-600',
        bgColor: 'bg-pink-50',
        textColor: 'text-pink-600',
    },
    {
        title: 'Grow',
        subtitle: 'Scale your business',
        description: 'Advanced tools like currency switcher, preorder, and partial payments to expand globally.',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600',
    },
];

// Testimonials with source
const testimonials = [
    {
        name: 'Mark Stevens',
        role: 'eCommerce Store Owner',
        quote: 'WowStore transformed my WooCommerce store completely. The page builders saved me countless hours and my conversion rate increased by 35%!',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Sarah Mitchell',
        role: 'WooCommerce Developer',
        quote: 'The most comprehensive WooCommerce builder I\'ve used. Native Gutenberg support, great performance, and exceptional customer support.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'David Park',
        role: 'Digital Agency Owner',
        quote: 'We use WowStore for all our client projects now. The templates and patterns make building stores incredibly fast and professional.',
        rating: 5,
        source: 'Trustpilot',
    },
];

// Pricing Plans
const yearlyPlans = [
    { name: '1 Site', price: 36, originalPrice: 49, discount: 25, features: ['1 Site License', 'All Pro Features', '1 Year Updates', 'Priority Support'] },
    { name: '5 Sites', price: 69, originalPrice: 99, discount: 30, popular: true, features: ['5 Site Licenses', 'All Pro Features', '1 Year Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 113, originalPrice: 189, discount: 40, features: ['Unlimited Sites', 'All Pro Features', '1 Year Updates', 'Priority Support'] },
];

const lifetimePlans = [
    { name: '1 Site', price: 96, originalPrice: 149, discount: 35, features: ['1 Site License', 'All Pro Features', 'Lifetime Updates', 'Priority Support'] },
    { name: '5 Sites', price: 136, originalPrice: 249, discount: 45, popular: true, features: ['5 Site Licenses', 'All Pro Features', 'Lifetime Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 219, originalPrice: 549, discount: 60, features: ['Unlimited Sites', 'All Pro Features', 'Lifetime Updates', 'Priority Support'] },
];

// FAQs
const faqs = [
    {
        question: 'Is WowStore compatible with my theme?',
        answer: 'Yes! WowStore is designed to work with any properly coded WordPress theme. It uses Gutenberg blocks which are compatible with all modern themes.',
    },
    {
        question: 'Do I need Elementor or other page builders?',
        answer: 'No, WowStore works natively with Gutenberg (WordPress Block Editor). You don\'t need any third-party page builders.',
    },
    {
        question: 'Can I use WowStore with existing WooCommerce stores?',
        answer: 'Absolutely! WowStore integrates seamlessly with existing WooCommerce stores. You can gradually replace pages or use it for new sections.',
    },
    {
        question: 'What happens when my license expires?',
        answer: 'Your existing features will continue to work. You\'ll lose access to updates and support until you renew. Lifetime licenses never expire.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day money-back guarantee. If WowStore doesn\'t meet your needs, we\'ll refund your purchase, no questions asked.',
    },
];

export default function WowStore() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <DynamicLayout>
            <Head title="WowStore - Complete WooCommerce Store Builder | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5faff] to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-[#add5ff] rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.9/5 based on 350+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Logo & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Store className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl font-bold text-[#070707]">WowStore</h1>
                                <p className="text-cyan-600 font-medium">WooCommerce Builder</p>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight"
                        >
                            The All-in-One WooCommerce
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
                                Store Builder
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Build beautiful, high-converting WooCommerce stores with 48+ blocks, 100+ templates, and powerful features like quick view, wishlist, and product comparison.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-cyan-600" />
                                <span className="font-bold text-[#070707]">40K+</span>
                                <span className="text-gray-600">Happy Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">200+</span>
                                <span className="text-gray-600">5-Star Ratings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-cyan-600" />
                                <span className="font-bold text-[#070707]">2M+</span>
                                <span className="text-gray-600">Downloads</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/pricing"
                                className="bg-[#ff176b] hover:bg-[#e01560] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25"
                            >
                                Buy Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-colors inline-flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Try Live Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Pillars Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Create. Sell. Grow.
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            WowStore provides everything you need to build and scale your WooCommerce business
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {valuePillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${pillar.bgColor} rounded-2xl p-8 text-center`}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} text-white mb-4`}>
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <h3 className={`text-2xl font-bold ${pillar.textColor} mb-2`}>{pillar.title}</h3>
                                <p className="font-semibold text-[#070707] mb-2">{pillar.subtitle}</p>
                                <p className="text-gray-600">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Page Builders Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
                            PAGE BUILDERS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Build Every WooCommerce Page
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Complete page builders for every part of your WooCommerce store
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pageBuilders.map((builder, index) => (
                            <motion.div
                                key={builder.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {builder.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{builder.name}</h3>
                                <p className="text-sm text-gray-600">{builder.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything You Need to Build & Sell
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1f66ff] to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conversion Features Grid */}
            <section className="py-20 bg-[#f5faff]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
                            CONVERSION TOOLS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Sales-Boosting Features
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to increase conversions and grow revenue
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {conversionFeatures.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"
                            >
                                <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-[#070707]">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Loved by 40,000+ Users
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {testimonial.source}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-[#070707]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>

                        {/* Toggle */}
                        <div className="inline-flex items-center bg-[#f5f7f9] rounded-full p-1 mt-6">
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    isYearly ? 'bg-cyan-100 text-cyan-600' : 'text-gray-600 hover:text-cyan-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    !isYearly ? 'bg-cyan-100 text-cyan-600' : 'text-gray-600 hover:text-cyan-600'
                                }`}
                            >
                                Lifetime
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {currentPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-6 border-2 ${
                                    plan.popular ? 'border-cyan-500 shadow-xl' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-[#070707] mb-2">{plan.name}</h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl font-bold text-[#070707]">${plan.price}</span>
                                        <div className="text-left">
                                            <span className="text-gray-400 line-through text-sm block">${plan.originalPrice}</span>
                                            <span className="text-green-600 text-xs font-semibold">{plan.discount}% OFF</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {isYearly ? 'per year' : 'one-time payment'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                        plan.popular
                                            ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                                            : 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Agency Bundle CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-[#f5faff] border-[3px] border-gray-300 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-cyan-500" />
                            <span className="text-cyan-500 font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Get WowStore + 9 More Plugins
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. Get all 10 premium plugins for unlimited sites at one incredible price.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-[#070707]">$749</span>
                            <span className="text-gray-500 line-through">$3,500+</span>
                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                LIFETIME
                            </span>
                        </div>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-600 transition-colors"
                        >
                            View Agency Bundle
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-[#070707]">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="bg-cyan-100 border-2 border-gray-300 rounded-2xl p-8 md:p-12 text-center">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-cyan-500" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Try WowStore risk-free. If you're not completely satisfied within 14 days, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get WowStore Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </DynamicLayout>
    );
}
