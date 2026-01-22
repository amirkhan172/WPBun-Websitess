import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Tags, Check, Star, Users, Download, Play, Zap, Shield, ArrowRight,
    UserCog, Percent, FileText, Lock, BarChart, Globe, ChevronDown, ChevronUp,
    Building2, ShoppingCart, CreditCard, Truck, Settings, Eye
} from 'lucide-react';

// B2B Features
const b2bFeatures = [
    { name: 'Wholesale User Roles', icon: <UserCog className="w-5 h-5" />, description: 'Custom B2B roles' },
    { name: 'Tiered Pricing', icon: <Percent className="w-5 h-5" />, description: 'Role-based prices' },
    { name: 'Custom Registration', icon: <FileText className="w-5 h-5" />, description: 'B2B signup forms' },
    { name: 'Hide Prices', icon: <Eye className="w-5 h-5" />, description: 'Guest price hiding' },
    { name: 'Tax Exemption', icon: <CreditCard className="w-5 h-5" />, description: 'Wholesale tax rules' },
    { name: 'Order Minimums', icon: <ShoppingCart className="w-5 h-5" />, description: 'Min/Max quantities' },
    { name: 'Quote Requests', icon: <FileText className="w-5 h-5" />, description: 'RFQ system' },
    { name: 'Approval Workflow', icon: <Settings className="w-5 h-5" />, description: 'Manual approvals' },
];

// Core Features
const coreFeatures = [
    {
        icon: <UserCog className="w-6 h-6" />,
        title: 'Custom B2B User Roles',
        description: 'Create unlimited wholesale user roles with specific permissions, pricing, and access controls.',
    },
    {
        icon: <Percent className="w-6 h-6" />,
        title: 'Tiered & Role-Based Pricing',
        description: 'Set different prices based on user roles, quantity tiers, or both. Flexible pricing rules.',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Custom Registration Forms',
        description: 'Build custom B2B registration forms with approval workflows. Collect business information.',
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: 'Hide Prices & Products',
        description: 'Hide prices, add-to-cart, or entire products for guest users or specific roles.',
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        title: 'Dynamic Pricing Rules',
        description: 'Create complex pricing rules based on quantities, categories, products, or user roles.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Tax & Shipping Controls',
        description: 'Tax-exempt options for wholesale customers. Role-specific shipping methods and rates.',
    },
];

// Why WholesaleX
const whyWholesaleX = [
    'All-in-One B2B Solution',
    'No Coding Required',
    'Works with Any Theme',
    'Optimized for Performance',
    'Extensive Documentation',
    'Priority Support',
    'Regular Updates',
    'GDPR Compliant',
];

// Testimonials with source
const testimonials = [
    {
        name: 'Robert Kim',
        role: 'B2B Store Owner',
        quote: 'WholesaleX transformed our wholesale operations. The tiered pricing and role management features are exactly what we needed for our B2B store.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Sandra Miller',
        role: 'Distribution Manager',
        quote: 'The custom registration forms and approval workflow saved us hours of manual work. Our wholesale customers love the streamlined experience.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'James Brown',
        role: 'WooCommerce Agency',
        quote: 'We recommend WholesaleX to all our B2B clients. It\'s the most comprehensive wholesale plugin we\'ve used. Works flawlessly every time.',
        rating: 5,
        source: 'Trustpilot',
    },
];

// Pricing Plans
const yearlyPlans = [
    { name: '1 Site', price: 59, originalPrice: 99, discount: 40, features: ['1 Site License', 'All B2B Features', '1 Year Updates', 'Priority Support'] },
    { name: '5 Sites', price: 99, originalPrice: 199, discount: 50, popular: true, features: ['5 Site Licenses', 'All B2B Features', '1 Year Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 199, originalPrice: 399, discount: 50, features: ['Unlimited Sites', 'All B2B Features', '1 Year Updates', 'Priority Support'] },
];

const lifetimePlans = [
    { name: '1 Site', price: 149, originalPrice: 249, discount: 40, features: ['1 Site License', 'All B2B Features', 'Lifetime Updates', 'Priority Support'] },
    { name: '5 Sites', price: 199, originalPrice: 399, discount: 50, popular: true, features: ['5 Site Licenses', 'All B2B Features', 'Lifetime Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 349, originalPrice: 699, discount: 50, features: ['Unlimited Sites', 'All B2B Features', 'Lifetime Updates', 'Priority Support'] },
];

// FAQs
const faqs = [
    {
        question: 'What is WholesaleX and who is it for?',
        answer: 'WholesaleX is an all-in-one B2B and wholesale solution for WooCommerce. It\'s perfect for stores that sell to both retail and wholesale customers, distributors, manufacturers, and any business that needs tiered pricing and user role management.',
    },
    {
        question: 'Can I set different prices for different customers?',
        answer: 'Yes! WholesaleX allows you to create unlimited user roles, each with their own pricing. You can also set quantity-based tiered pricing, category-specific discounts, and more.',
    },
    {
        question: 'Does it work alongside regular retail prices?',
        answer: 'Absolutely! WholesaleX works seamlessly with your regular WooCommerce setup. Retail customers see normal prices while wholesale customers see their role-specific pricing.',
    },
    {
        question: 'Can I hide prices from guests?',
        answer: 'Yes, you can hide prices, add-to-cart buttons, or entire products from guests and specific user roles. You can show a "Contact for Price" message or custom text instead.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day money-back guarantee. If WholesaleX doesn\'t meet your B2B needs, we\'ll refund your purchase, no questions asked.',
    },
];

export default function WholesaleX() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <AppLayout>
            <Head title="WholesaleX - B2B & Wholesale Solution for WooCommerce | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f3ff] to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.9/5 based on 300+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Logo & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Tags className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl font-bold text-[#070707]">WholesaleX</h1>
                                <p className="text-violet-600 font-medium">B2B & Wholesale Solution</p>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight"
                        >
                            Complete B2B & Wholesale
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-700">
                                Solution for WooCommerce
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            All-in-one wholesale plugin with tiered pricing, custom user roles, B2B registration forms, and advanced wholesale features for WooCommerce.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-violet-600" />
                                <span className="font-bold text-[#070707]">20K+</span>
                                <span className="text-gray-600">Happy Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">300+</span>
                                <span className="text-gray-600">5-Star Ratings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-violet-600" />
                                <span className="font-bold text-[#070707]">200K+</span>
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
                            <button className="bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-semibold hover:border-violet-500 hover:text-violet-600 transition-colors inline-flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Try Live Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* B2B Features Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 rounded-full text-sm font-semibold mb-4">
                            B2B FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything for B2B & Wholesale
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Complete set of features to run a professional B2B wholesale store
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {b2bFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-700 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{feature.name}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 bg-gradient-to-b from-slate-100 via-green-50 to-violet-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Advanced Wholesale Capabilities
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

            {/* Why WholesaleX */}
            <section className="py-20 bg-gradient-to-b from-green-50 to-violet-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 rounded-full text-sm font-semibold mb-4">
                            WHY WHOLESALEX
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            The Best B2B Solution
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join 20,000+ stores using WholesaleX for their B2B operations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {whyWholesaleX.map((reason, index) => (
                            <motion.div
                                key={reason}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"
                            >
                                <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-[#070707]">{reason}</span>
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
                            Trusted by 20,000+ B2B Stores
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
                        <span className="inline-block px-4 py-2 bg-violet-100 text-violet-600 rounded-full text-sm font-semibold mb-4">
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
                                    isYearly ? 'bg-violet-100 text-violet-600' : 'text-gray-600 hover:text-violet-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    !isYearly ? 'bg-violet-100 text-violet-600' : 'text-gray-600 hover:text-violet-600'
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
                                    plan.popular ? 'border-violet-500 shadow-xl' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                                            ? 'bg-violet-500 text-white hover:bg-violet-600'
                                            : 'bg-violet-100 text-violet-600 hover:bg-violet-200'
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
                        className="mt-16 bg-violet-100 border-[3px] border-gray-300 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-violet-500" />
                            <span className="text-violet-500 font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Get WholesaleX + 9 More Plugins
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. Get all 10 premium plugins for unlimited sites at one incredible price.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-[#070707]">$749</span>
                            <span className="text-gray-500 line-through">$3,500+</span>
                            <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                LIFETIME
                            </span>
                        </div>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-violet-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-violet-600 transition-colors"
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
                    <div className="bg-violet-100 border-2 border-gray-300 rounded-2xl p-8 md:p-12 text-center">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-violet-500" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Try WholesaleX risk-free. If it doesn't meet your B2B needs within 14 days, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="bg-violet-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-violet-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get WholesaleX Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="border-2 border-violet-500 text-violet-500 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
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
