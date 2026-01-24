import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    MousePointerClick, Check, Star, Users, Download, Play, Zap, Shield, ArrowRight,
    Layers, Target, Mail, BarChart, Palette, Sparkles, ChevronDown, ChevronUp,
    Maximize, MessageSquare, Clock, Gift, Percent, Bell
} from 'lucide-react';

// Popup Types
const popupTypes = [
    { name: 'Lightbox Popup', icon: <Maximize className="w-5 h-5" />, description: 'Classic modal popup' },
    { name: 'Fullscreen Overlay', icon: <Layers className="w-5 h-5" />, description: 'Full page takeover' },
    { name: 'Slide-in', icon: <MessageSquare className="w-5 h-5" />, description: 'Slides from side' },
    { name: 'Floating Bar', icon: <Bell className="w-5 h-5" />, description: 'Top/bottom bars' },
    { name: 'Exit Intent', icon: <MousePointerClick className="w-5 h-5" />, description: 'Leaving visitor capture' },
    { name: 'Spin to Win', icon: <Gift className="w-5 h-5" />, description: 'Gamified wheel' },
    { name: 'Countdown Timer', icon: <Clock className="w-5 h-5" />, description: 'Urgency popups' },
    { name: 'Content Lock', icon: <Percent className="w-5 h-5" />, description: 'Gated content' },
];

// Core Features
const coreFeatures = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Drag & Drop Builder',
        description: 'Visual popup builder with drag-and-drop interface. No coding required to create stunning designs.',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Smart Targeting',
        description: 'Show popups based on behavior, page, device, referrer, user role, and 20+ conditions.',
    },
    {
        icon: <MousePointerClick className="w-6 h-6" />,
        title: 'Exit Intent Technology',
        description: 'Capture leaving visitors with intelligent exit-intent detection. Works on desktop and mobile.',
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Integrations',
        description: 'Connect with Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, and 30+ email services.',
    },
    {
        icon: <BarChart className="w-6 h-6" />,
        title: 'A/B Testing',
        description: 'Test different designs, headlines, and offers to maximize your conversion rates.',
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: '50+ Templates',
        description: 'Pre-designed templates for every use case. Customize colors, fonts, and content easily.',
    },
];

// Benefits
const benefits = [
    'Grow Email List Fast',
    'Reduce Cart Abandonment',
    'Increase Conversions',
    'Collect User Feedback',
    'Promote Special Offers',
    'Engage Visitors',
    'Generate More Leads',
    'Boost Sales Revenue',
];

// Testimonials with source
const testimonials = [
    {
        name: 'Jennifer Adams',
        role: 'Marketing Manager',
        quote: 'Our email list grew 300% after implementing WowOptin popups! The exit intent feature alone recovered thousands of visitors.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Michael Chen',
        role: 'eCommerce Owner',
        quote: 'The A/B testing feature helped us optimize our popups perfectly. We saw a 45% increase in conversions within the first month.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Sarah Williams',
        role: 'Blogger',
        quote: 'Beautiful templates and incredibly easy to use. I set up my first popup in under 5 minutes. Highly recommended!',
        rating: 5,
        source: 'Trustpilot',
    },
];

// Pricing Plans
const yearlyPlans = [
    { name: '1 Site', price: 39, originalPrice: 69, discount: 43, features: ['1 Site License', 'All Popup Types', '1 Year Updates', 'Priority Support'] },
    { name: '5 Sites', price: 79, originalPrice: 139, discount: 43, popular: true, features: ['5 Site Licenses', 'All Popup Types', '1 Year Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 159, originalPrice: 279, discount: 43, features: ['Unlimited Sites', 'All Popup Types', '1 Year Updates', 'Priority Support'] },
];

const lifetimePlans = [
    { name: '1 Site', price: 99, originalPrice: 169, discount: 41, features: ['1 Site License', 'All Popup Types', 'Lifetime Updates', 'Priority Support'] },
    { name: '5 Sites', price: 149, originalPrice: 279, discount: 46, popular: true, features: ['5 Site Licenses', 'All Popup Types', 'Lifetime Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 249, originalPrice: 549, discount: 55, features: ['Unlimited Sites', 'All Popup Types', 'Lifetime Updates', 'Priority Support'] },
];

// FAQs
const faqs = [
    {
        question: 'What types of popups can I create?',
        answer: 'WowOptin supports 12+ popup types including lightbox modals, fullscreen overlays, slide-ins, floating bars, exit intent popups, countdown timers, spin-to-win wheels, content locks, multi-step forms, yes/no popups, and more.',
    },
    {
        question: 'Will popups slow down my website?',
        answer: 'No, WowOptin is optimized for performance. Popups are loaded asynchronously and only when triggered, ensuring your site speed isn\'t affected.',
    },
    {
        question: 'Can I connect my email marketing service?',
        answer: 'Yes! WowOptin integrates with 30+ email services including Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, Drip, AWeber, GetResponse, and many more.',
    },
    {
        question: 'Is it mobile-friendly?',
        answer: 'Absolutely! All popups are fully responsive and look great on all devices. You can also create mobile-specific popups and targeting rules.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day money-back guarantee. If WowOptin doesn\'t help grow your email list, we\'ll refund your purchase.',
    },
];

export default function WowOptin() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <DynamicLayout>
            <Head title="WowOptin - Popups & Lead Generation for WordPress | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#fffbeb] to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.7/5 based on 100+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Logo & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <MousePointerClick className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-3xl font-bold text-[#070707]">WowOptin</h1>
                                <p className="text-amber-600 font-medium">Popups & Lead Generation</p>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight"
                        >
                            Convert Visitors into
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                                Subscribers & Customers
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Create high-converting popups, slide-ins, and opt-in forms to grow your email list and boost sales with smart targeting and exit intent technology.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-amber-600" />
                                <span className="font-bold text-[#070707]">8K+</span>
                                <span className="text-gray-600">Happy Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">100+</span>
                                <span className="text-gray-600">5-Star Ratings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-amber-600" />
                                <span className="font-bold text-[#070707]">80K+</span>
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
                            <button className="bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-600 transition-colors inline-flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Try Live Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Popup Types Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">
                            12+ POPUP TYPES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Every Popup Style You Need
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From classic modals to gamified spin wheels
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {popupTypes.map((popup, index) => (
                            <motion.div
                                key={popup.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {popup.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{popup.name}</h3>
                                <p className="text-sm text-gray-600">{popup.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything to Capture More Leads
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

            {/* Benefits */}
            <section className="py-20 bg-amber-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">
                            WHY WOWOPTIN
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Grow Your Business
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join 8,000+ websites using WowOptin to capture more leads
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
                                <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
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
                            Trusted by 8,000+ Websites
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
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">
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
                                    isYearly ? 'bg-amber-100 text-amber-600' : 'text-gray-600 hover:text-amber-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    !isYearly ? 'bg-amber-100 text-amber-600' : 'text-gray-600 hover:text-amber-600'
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
                                    plan.popular ? 'border-amber-500 shadow-xl' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                                            ? 'bg-amber-500 text-white hover:bg-amber-600'
                                            : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
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
                        className="mt-16 bg-amber-100 border-[3px] border-gray-300 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-amber-500" />
                            <span className="text-amber-500 font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Get WowOptin + 9 More Plugins
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. Get all 10 premium plugins for unlimited sites at one incredible price.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-[#070707]">$749</span>
                            <span className="text-gray-500 line-through">$3,500+</span>
                            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                LIFETIME
                            </span>
                        </div>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-600 transition-colors"
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
            <section className="py-16 bg-amber-50">
                <div className="container-custom">
                    <div className="bg-amber-100 border-2 border-gray-300 rounded-2xl p-8 md:p-12 text-center">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-amber-500" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Try WowOptin risk-free. If it doesn't help grow your email list within 14 days, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get WowOptin Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
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
