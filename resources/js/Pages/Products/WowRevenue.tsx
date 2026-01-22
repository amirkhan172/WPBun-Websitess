import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    DollarSign, Check, Star, Users, Download, Play, Zap, Shield, ArrowRight,
    Gift, Percent, Package, TrendingUp, Target, BarChart, ShoppingCart,
    ChevronDown, ChevronUp, Sparkles, Clock, Award, Layers, Tag
} from 'lucide-react';

// Campaign Types
const campaignTypes = [
    { name: 'Product Bundles', icon: <Package className="w-5 h-5" />, description: 'Group products together' },
    { name: 'BOGO Offers', icon: <Gift className="w-5 h-5" />, description: 'Buy one get one deals' },
    { name: 'Quantity Discounts', icon: <Percent className="w-5 h-5" />, description: 'Tiered pricing' },
    { name: 'Free Gifts', icon: <Gift className="w-5 h-5" />, description: 'Gift with purchase' },
    { name: 'Mix & Match', icon: <Layers className="w-5 h-5" />, description: 'Create custom bundles' },
    { name: 'Frequently Bought', icon: <ShoppingCart className="w-5 h-5" />, description: 'Amazon-style bundles' },
    { name: 'Spend X Get Y', icon: <Tag className="w-5 h-5" />, description: 'Conditional offers' },
    { name: 'Flash Sales', icon: <Clock className="w-5 h-5" />, description: 'Time-limited deals' },
];

// Core Features
const coreFeatures = [
    {
        icon: <Package className="w-6 h-6" />,
        title: 'Product Bundles',
        description: 'Create irresistible bundle offers that customers can\'t refuse. Increase AOV instantly.',
    },
    {
        icon: <Gift className="w-6 h-6" />,
        title: 'BOGO Offers',
        description: 'Buy One Get One deals with flexible configurations - buy X get Y free or discounted.',
    },
    {
        icon: <Percent className="w-6 h-6" />,
        title: 'Quantity Discounts',
        description: 'Tiered pricing based on quantity purchased. More they buy, more they save.',
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: 'Upsell Funnels',
        description: 'Strategic post-purchase and cart upsells to maximize revenue per customer.',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Smart Targeting',
        description: 'Show offers based on cart value, user role, products, or custom conditions.',
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        title: 'Analytics Dashboard',
        description: 'Track performance of all campaigns with detailed revenue analytics.',
    },
];

// Benefits
const benefits = [
    'Increase Average Order Value',
    'Boost Customer Lifetime Value',
    'Clear Slow-Moving Stock',
    'Cross-Sell Related Products',
    'Create Urgency with Timers',
    'Target Specific Customer Segments',
    'A/B Test Different Offers',
    'Schedule Campaigns in Advance',
];

// Testimonials with source
const testimonials = [
    {
        name: 'David Wilson',
        role: 'eCommerce Manager',
        quote: 'Our AOV increased by 35% after implementing WowRevenue bundles! The BOGO feature is incredibly powerful and easy to set up.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Amanda Chen',
        role: 'Online Store Owner',
        quote: 'The BOGO feature alone paid for itself in the first week. Our customers love the bundle deals we create.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Marcus Johnson',
        role: 'Marketing Director',
        quote: 'Best bundle plugin we\'ve tried. The analytics are incredibly helpful for optimizing our campaigns.',
        rating: 5,
        source: 'Trustpilot',
    },
];

// Pricing Plans
const yearlyPlans = [
    { name: '1 Site', price: 39, originalPrice: 69, discount: 43, features: ['1 Site License', 'All Campaign Types', '1 Year Updates', 'Priority Support'] },
    { name: '5 Sites', price: 79, originalPrice: 139, discount: 43, popular: true, features: ['5 Site Licenses', 'All Campaign Types', '1 Year Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 159, originalPrice: 279, discount: 43, features: ['Unlimited Sites', 'All Campaign Types', '1 Year Updates', 'Priority Support'] },
];

const lifetimePlans = [
    { name: '1 Site', price: 99, originalPrice: 169, discount: 41, features: ['1 Site License', 'All Campaign Types', 'Lifetime Updates', 'Priority Support'] },
    { name: '5 Sites', price: 149, originalPrice: 279, discount: 46, popular: true, features: ['5 Site Licenses', 'All Campaign Types', 'Lifetime Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 249, originalPrice: 549, discount: 55, features: ['Unlimited Sites', 'All Campaign Types', 'Lifetime Updates', 'Priority Support'] },
];

// FAQs
const faqs = [
    {
        question: 'What types of bundle campaigns can I create?',
        answer: 'WowRevenue supports 12+ campaign types including product bundles, BOGO offers, quantity discounts, free gifts, mix & match, frequently bought together, spend X get Y, flash sales, and more.',
    },
    {
        question: 'Will WowRevenue slow down my store?',
        answer: 'No, WowRevenue is optimized for performance. It uses efficient database queries and caching to ensure your store stays fast even with multiple active campaigns.',
    },
    {
        question: 'Can I show different offers to different customers?',
        answer: 'Yes! WowRevenue includes smart targeting features that let you show specific offers based on user role, cart value, purchase history, and custom conditions.',
    },
    {
        question: 'Does it work with variable products?',
        answer: 'Absolutely! WowRevenue fully supports variable products in bundles and offers. You can create offers for specific variations or entire products.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day money-back guarantee. If WowRevenue doesn\'t help increase your revenue, we\'ll refund your purchase.',
    },
];

export default function WowRevenue() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <AppLayout>
            <Head title="WowRevenue - Product Bundles & Discount Campaigns | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#fffbfc] to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-pink-100 rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.9/5 based on 200+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Logo & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-3xl font-bold text-[#070707]">WowRevenue</h1>
                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">Hot</span>
                                </div>
                                <p className="text-pink-500 font-medium">Product Bundles & Discounts</p>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight"
                        >
                            Boost Revenue with
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                                Smart Discount Campaigns
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Increase your average order value with powerful product bundles, BOGO offers, and 12+ discount campaign types for WooCommerce.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-pink-400" />
                                <span className="font-bold text-[#070707]">15K+</span>
                                <span className="text-gray-600">Happy Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">200+</span>
                                <span className="text-gray-600">5-Star Ratings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-pink-400" />
                                <span className="font-bold text-[#070707]">35%</span>
                                <span className="text-gray-600">Avg AOV Increase</span>
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
                                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-pink-400/25"
                            >
                                Buy Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-semibold hover:border-pink-500 hover:text-pink-500 transition-colors inline-flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Try Live Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campaign Types Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
                            12+ CAMPAIGN TYPES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Every Discount Strategy You Need
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From simple bundles to complex BOGO offers, WowRevenue has it all
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {campaignTypes.map((campaign, index) => (
                            <motion.div
                                key={campaign.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {campaign.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{campaign.name}</h3>
                                <p className="text-sm text-gray-600">{campaign.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-[#f5f7f9] to-pink-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything You Need to Boost Revenue
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
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
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

            {/* Benefits Grid */}
            <section className="py-20 bg-pink-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-semibold mb-4">
                            WHY WOWREVENUE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Grow Your Business
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join 15,000+ store owners who increased their revenue with WowRevenue
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"
                            >
                                <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-[#070707]">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
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
                            Trusted by 15,000+ Store Owners
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
                                className="bg-[#f5f7f9] rounded-2xl p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
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
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>

                        {/* Toggle */}
                        <div className="inline-flex items-center bg-white rounded-full p-1 mt-6 shadow-sm">
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    isYearly ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:text-pink-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    !isYearly ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:text-pink-600'
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
                                    plan.popular ? 'border-[#ff176b] shadow-xl' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff176b] text-white text-xs font-bold px-3 py-1 rounded-full">
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
                                            ? 'bg-[#ff176b] text-white hover:bg-[#e01560]'
                                            : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
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
                        className="mt-16 bg-pink-100 border-[3px] border-gray-300 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-pink-500" />
                            <span className="text-pink-500 font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Get WowRevenue + 9 More Plugins
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. Get all 10 premium plugins for unlimited sites at one incredible price.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-[#070707]">$749</span>
                            <span className="text-gray-500 line-through">$3,500+</span>
                            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                LIFETIME
                            </span>
                        </div>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-600 transition-colors"
                        >
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
                                className="bg-[#f5f7f9] rounded-xl overflow-hidden"
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
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <div className="bg-pink-100 border-2 border-gray-300 rounded-2xl p-8 md:p-12 text-center">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-pink-500" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Try WowRevenue risk-free. If you don't see an increase in your revenue within 14 days, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get WowRevenue Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
