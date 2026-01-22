import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Truck, Check, Star, Users, Download, Play, Zap, Shield, ArrowRight,
    MapPin, Calculator, Package, Globe, Settings, Clock, ChevronDown,
    Weight, Ruler, Tag, ShoppingCart, Percent, Layers, Map, Building,
    DollarSign, Award, Target, BarChart3, Sparkles, CheckCircle, RefreshCw
} from 'lucide-react';

// 30+ Condition types for shipping rules
const conditionTypes = [
    { icon: <Weight className="w-5 h-5" />, label: 'Weight Based', description: 'Set rates by total cart weight' },
    { icon: <Package className="w-5 h-5" />, label: 'Quantity Based', description: 'Rates based on item count' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Price Based', description: 'Cart value threshold rules' },
    { icon: <Ruler className="w-5 h-5" />, label: 'Dimension Based', description: 'Volume and size calculations' },
    { icon: <Tag className="w-5 h-5" />, label: 'Product Category', description: 'Category-specific rates' },
    { icon: <Layers className="w-5 h-5" />, label: 'Shipping Class', description: 'Custom class assignments' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Postal Code', description: 'ZIP/postal code zones' },
    { icon: <Globe className="w-5 h-5" />, label: 'Country Rules', description: 'Country-based shipping' },
    { icon: <Map className="w-5 h-5" />, label: 'State/Region', description: 'Regional rate tables' },
    { icon: <Building className="w-5 h-5" />, label: 'City Based', description: 'City-specific rates' },
    { icon: <Users className="w-5 h-5" />, label: 'User Role', description: 'Role-based shipping' },
    { icon: <Percent className="w-5 h-5" />, label: 'Coupon Applied', description: 'Coupon-triggered rates' },
];

// Core features
const coreFeatures = [
    {
        icon: <Calculator className="w-6 h-6" />,
        title: 'Table Rate Shipping',
        description: 'Create unlimited shipping rate tables with complex rules and conditions for any scenario.',
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Advanced Shipping Zones',
        description: 'Define zones by country, state, city, postal code, or custom geographic regions.',
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: 'AND/OR Logic',
        description: 'Combine multiple conditions using AND/OR operators for precise shipping rules.',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Delivery Estimates',
        description: 'Show accurate delivery date estimates to customers at checkout.',
    },
    {
        icon: <Package className="w-6 h-6" />,
        title: 'Per Item/Order Rates',
        description: 'Calculate shipping per item, per order, or use custom formulas.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Free Shipping Rules',
        description: 'Set flexible conditions for free shipping promotions and offers.',
    },
];

// Why WowShipping benefits
const benefits = [
    {
        icon: <Target className="w-8 h-8" />,
        title: 'Precise Rate Control',
        description: 'Set exact shipping rates for any scenario with granular control.',
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Reduce Cart Abandonment',
        description: 'Show accurate shipping costs upfront to reduce checkout abandonment.',
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Boost Conversions',
        description: 'Offer free shipping thresholds that encourage larger orders.',
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: 'Easy Rule Management',
        description: 'Update shipping rules instantly without code changes.',
    },
];

// Testimonials
const testimonials = [
    {
        name: 'Chris Anderson',
        role: 'eCommerce Manager',
        quote: 'WowShipping solved our complex shipping requirements perfectly! We needed different rates for different zones and product types - this plugin handles it all.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Laura Mitchell',
        role: 'Store Owner',
        quote: 'Finally a shipping plugin that can handle our zone-based rates. Setup was straightforward and support is excellent.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Kevin Park',
        role: 'WooCommerce Developer',
        quote: 'Clean code and excellent documentation. Works flawlessly with all the WooCommerce sites I manage.',
        rating: 5,
        source: 'WordPress.org',
    },
];

// Yearly pricing
const yearlyPlans = [
    {
        name: 'Starter',
        sites: '1 Site',
        price: 39,
        originalPrice: 69,
        features: ['1 Site License', 'All Conditions', 'Unlimited Rules', 'Priority Support', '1 Year Updates'],
    },
    {
        name: 'Professional',
        sites: '5 Sites',
        price: 79,
        originalPrice: 139,
        popular: true,
        features: ['5 Site License', 'All Conditions', 'Unlimited Rules', 'Priority Support', '1 Year Updates', 'Multi-site Support'],
    },
    {
        name: 'Agency',
        sites: 'Unlimited',
        price: 159,
        originalPrice: 279,
        features: ['Unlimited Sites', 'All Conditions', 'Unlimited Rules', 'Priority Support', '1 Year Updates', 'White Label'],
    },
];

// Lifetime pricing
const lifetimePlans = [
    {
        name: 'Starter',
        sites: '1 Site',
        price: 99,
        originalPrice: 199,
        features: ['1 Site License', 'All Conditions', 'Unlimited Rules', 'Priority Support', 'Lifetime Updates'],
    },
    {
        name: 'Professional',
        sites: '5 Sites',
        price: 199,
        originalPrice: 399,
        popular: true,
        features: ['5 Site License', 'All Conditions', 'Unlimited Rules', 'Priority Support', 'Lifetime Updates', 'Multi-site Support'],
    },
    {
        name: 'Agency',
        sites: 'Unlimited',
        price: 399,
        originalPrice: 799,
        features: ['Unlimited Sites', 'All Conditions', 'Unlimited Rules', 'Priority Support', 'Lifetime Updates', 'White Label'],
    },
];

// FAQs
const faqs = [
    {
        question: 'How many shipping conditions are supported?',
        answer: 'WowShipping supports 30+ conditions including weight, quantity, price, dimensions, product category, shipping class, postal code, country, state, city, user role, and many more.',
    },
    {
        question: 'Can I create multiple shipping zones?',
        answer: 'Yes! You can create unlimited shipping zones based on countries, states, cities, postal codes, or any combination. Each zone can have its own rate tables and rules.',
    },
    {
        question: 'Does it work with WooCommerce Shipping Zones?',
        answer: 'WowShipping integrates seamlessly with WooCommerce\'s built-in shipping zones while adding advanced table rate capabilities and conditions.',
    },
    {
        question: 'Can I offer free shipping with conditions?',
        answer: 'Absolutely! Set up free shipping rules based on cart total, quantity, product type, user role, coupon codes, or any combination of conditions.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day no-questions-asked money-back guarantee. If WowShipping doesn\'t meet your needs, get a full refund.',
    },
];

export default function WowShipping() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <AppLayout>
            <Head title="WowShipping - Table Rate Shipping for WooCommerce | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 via-amber-50/50 to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.8/5 based on 50+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6"
                        >
                            <Truck className="w-5 h-5" />
                            <span className="font-semibold">Table Rate Shipping Plugin</span>
                            <span className="px-2 py-0.5 bg-cyan-500 text-white text-xs font-bold uppercase rounded-full">New</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Advanced Shipping Rules
                            <span className="block text-orange-500">with 30+ Conditions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                        >
                            Create flexible WooCommerce shipping rates based on weight, quantity, destination, cart value, and 30+ other conditions. The most powerful table rate shipping plugin.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-orange-500" />
                                <span className="font-bold text-[#070707]">7,000+</span>
                                <span className="text-gray-500">Active Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">4.8</span>
                                <span className="text-gray-500">Average Rating</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-orange-500" />
                                <span className="font-bold text-[#070707]">90K+</span>
                                <span className="text-gray-500">Downloads</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 bg-[#ff176b] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e01560] transition-colors shadow-lg shadow-pink-500/25"
                            >
                                Get WowShipping Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-bold text-lg hover:border-orange-500 hover:text-orange-500 transition-colors">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 30+ Conditions Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                            30+ CONDITIONS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Flexible Shipping Rules for Every Scenario
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Create shipping rules based on any combination of conditions to match your exact business needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {conditionTypes.map((condition, index) => (
                            <motion.div
                                key={condition.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-5 hover:shadow-lg hover:bg-white transition-all duration-300 group border border-transparent hover:border-orange-100"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {condition.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{condition.label}</h3>
                                <p className="text-sm text-gray-500">{condition.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-500 mt-8"
                    >
                        + 18 more conditions including specific products, tags, item count, cart total, and more!
                    </motion.p>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 bg-pink-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-[#1f66ff] rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything You Need for WooCommerce Shipping
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Advanced features that make shipping management simple and effective.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why WowShipping */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-pink-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4">
                            WHY WOWSHIPPING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Shipping That Grows Your Business
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            More than just a shipping calculator - it's a conversion optimization tool.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                'Unlimited Rate Tables',
                                'Multiple Shipping Zones',
                                'Per Item/Order Rates',
                                'Weight-Based Shipping',
                                'Quantity Discounts',
                                'Free Shipping Rules',
                                'Delivery Estimates',
                                'Handling Fees',
                                'Calculation Formulas',
                                'AND/OR Logic',
                                'Role-Based Rates',
                                'Easy Import/Export',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-[#070707]">
                                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
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
                            Trusted by Store Owners Worldwide
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
                                className="bg-[#f5f7f9] rounded-2xl p-8"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-[#070707]">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                        testimonial.source === 'Trustpilot'
                                            ? 'bg-[#00b67a]/10 text-[#00b67a]'
                                            : 'bg-blue-100 text-blue-600'
                                    }`}>
                                        {testimonial.source}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gradient-to-r from-gray-50 to-pink-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-600 mb-8">Start with a 14-day money-back guarantee</p>

                        {/* Toggle */}
                        <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-sm">
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    isYearly
                                        ? 'bg-pink-200 text-pink-700'
                                        : 'text-gray-600 hover:text-[#070707]'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    !isYearly
                                        ? 'bg-pink-200 text-pink-700'
                                        : 'text-gray-600 hover:text-[#070707]'
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
                                className={`relative bg-white rounded-2xl p-8 ${
                                    plan.popular
                                        ? 'ring-2 ring-[#ff176b] shadow-xl'
                                        : 'border border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#ff176b] text-white px-4 py-1 rounded-full text-sm font-bold">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-[#070707] mb-2">{plan.name}</h3>
                                    <p className="text-gray-500">{plan.sites}</p>
                                </div>
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl font-bold text-[#070707]">${plan.price}</span>
                                        <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {isYearly ? 'per year' : 'one-time payment'}
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600">
                                            <Check className="w-5 h-5 text-[#ff176b] flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                                    plan.popular
                                        ? 'bg-[#ff176b] text-white hover:bg-[#e01560]'
                                        : 'bg-pink-200 text-pink-700 hover:bg-pink-300'
                                }`}>
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
                        className="mt-16 bg-pink-50 border-[3px] border-gray-300 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-orange-500" />
                            <span className="text-orange-500 font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Get All 8 Plugins in Agency Bundle
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Access WowShipping and all our premium plugins with lifetime updates. Save over 80% compared to buying individually.
                        </p>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d8f655] transition-colors"
                        >
                            <Package className="w-5 h-5" />
                            View Agency Bundle
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mb-4">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">
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
                                transition={{ delay: index * 0.1 }}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-[#070707] pr-4">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Try WowShipping risk-free. If you're not completely satisfied, get a full refund within 14 days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 bg-[#ff176b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#e01560] transition-colors"
                            >
                                Get WowShipping Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-bold hover:border-[#070707] transition-colors"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
