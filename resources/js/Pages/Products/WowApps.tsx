import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Smartphone, Check, Star, Users, Download, Play, ChevronRight, Zap, Shield,
    ArrowRight, Blocks, Layers, Palette, Globe, Code, Sparkles, Bell,
    MessageSquare, ShoppingCart, Wifi, Battery, Camera, Music, MapPin, Calendar,
    ChevronDown, ChevronUp, Rocket, Heart, Share2, Settings, BarChart3
} from 'lucide-react';

const trustStats = [
    { value: '10K+', label: 'Happy Users' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '150+', label: 'Reviews' },
    { value: '50K+', label: 'Downloads' },
];

const coreFeatures = [
    {
        title: 'Native Mobile Experience',
        description: 'Create mobile apps that feel truly native with smooth animations and intuitive gestures.',
        icon: <Smartphone className="w-8 h-8" />,
    },
    {
        title: 'Push Notifications',
        description: 'Engage users with targeted push notifications that drive conversions and retention.',
        icon: <Bell className="w-8 h-8" />,
    },
    {
        title: 'Offline Support',
        description: 'Your app works even without internet connection with smart caching and sync.',
        icon: <Wifi className="w-8 h-8" />,
    },
    {
        title: 'Easy Configuration',
        description: 'No coding required. Configure your app directly from WordPress dashboard.',
        icon: <Settings className="w-8 h-8" />,
    },
];

const appFeatures = [
    { name: 'WooCommerce Integration', description: 'Turn your store into a mobile shopping app', icon: <ShoppingCart className="w-6 h-6" /> },
    { name: 'Blog App Builder', description: 'Create a mobile app for your WordPress blog', icon: <MessageSquare className="w-6 h-6" /> },
    { name: 'Push Notifications', description: 'Send targeted notifications to app users', icon: <Bell className="w-6 h-6" />, badge: 'Popular' },
    { name: 'Offline Mode', description: 'Content available without internet', icon: <Wifi className="w-6 h-6" /> },
    { name: 'Native Feel', description: 'Smooth animations and gestures', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Social Sharing', description: 'Easy sharing to social platforms', icon: <Share2 className="w-6 h-6" /> },
    { name: 'Analytics Dashboard', description: 'Track app usage and engagement', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Multi-Language', description: 'Support for RTL and multiple languages', icon: <Globe className="w-6 h-6" /> },
];

const appTypes = [
    { name: 'E-Commerce App', description: 'Mobile shopping experience for WooCommerce', icon: <ShoppingCart className="w-6 h-6" />, color: 'from-blue-500 to-blue-700' },
    { name: 'News & Blog App', description: 'Deliver content to mobile readers', icon: <MessageSquare className="w-6 h-6" />, color: 'from-purple-500 to-purple-700' },
    { name: 'Community App', description: 'Engage your community on mobile', icon: <Users className="w-6 h-6" />, color: 'from-pink-500 to-pink-700' },
    { name: 'Business App', description: 'Company app for clients and employees', icon: <Globe className="w-6 h-6" />, color: 'from-green-500 to-green-700' },
];

const benefits = [
    { title: 'Increase Engagement', description: '3x higher engagement with push notifications' },
    { title: 'Boost Sales', description: 'Mobile apps convert 157% better than mobile web' },
    { title: 'Build Loyalty', description: 'App users are 2x more likely to return' },
    { title: 'Reduce Friction', description: 'One-tap checkout and saved preferences' },
    { title: 'Reach New Users', description: 'Get discovered on app stores' },
    { title: 'Stay Connected', description: 'Offline access keeps users engaged' },
];

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'E-Commerce Owner',
        quote: 'WowApps transformed our WooCommerce store into a beautiful mobile app. Sales from mobile increased by 200%!',
        rating: 5,
        source: 'Verified Purchase',
    },
    {
        name: 'Maria Garcia',
        role: 'Blog Publisher',
        quote: 'Our readers love the mobile app. Push notifications helped us increase daily active users significantly.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'David Chen',
        role: 'Agency Owner',
        quote: "We've built apps for 20+ clients using WowApps. The ROI for our clients has been incredible.",
        rating: 5,
        source: 'WordPress.org',
    },
];

const pricingPlans = [
    { name: '1 App', price: 49, originalPrice: 69, period: 'year', discount: '29%', type: 'yearly' },
    { name: '5 Apps', price: 99, originalPrice: 149, period: 'year', discount: '34%', type: 'yearly' },
    { name: 'Unlimited', price: 149, originalPrice: 249, period: 'year', discount: '40%', type: 'yearly', popular: true },
    { name: '1 App', price: 149, originalPrice: 199, period: 'lifetime', discount: '25%', type: 'lifetime' },
    { name: '5 Apps', price: 249, originalPrice: 399, period: 'lifetime', discount: '38%', type: 'lifetime' },
    { name: 'Unlimited', price: 399, originalPrice: 699, period: 'lifetime', discount: '43%', type: 'lifetime', popular: true },
];

const faqs = [
    {
        question: 'Do I need coding knowledge to create an app?',
        answer: 'No! WowApps is designed for non-developers. Everything is configured from your WordPress dashboard with a visual interface. No coding required.',
    },
    {
        question: 'How does WowApps work with WooCommerce?',
        answer: 'WowApps integrates seamlessly with WooCommerce. Your products, cart, checkout, and account pages all work in the app. Push notifications can be sent for order updates, sales, and more.',
    },
    {
        question: 'Can I publish the app to App Store and Google Play?',
        answer: 'Yes! WowApps generates app builds that you can submit to both Apple App Store and Google Play Store. We provide documentation to guide you through the submission process.',
    },
    {
        question: 'Is the app customizable?',
        answer: 'Absolutely! You can customize colors, fonts, icons, layouts, and more. The app automatically inherits your brand identity and can be further personalized.',
    },
    {
        question: 'Do I need separate licenses for iOS and Android?',
        answer: 'No! One WowApps license covers both iOS and Android platforms. Build for both platforms with a single license.',
    },
    {
        question: 'What about app updates?',
        answer: 'Most content updates happen automatically through your WordPress site. For major app updates, we provide new builds that you can upload to the app stores.',
    },
];

export default function WowApps() {
    const [pricingType, setPricingType] = useState<'yearly' | 'lifetime'>('yearly');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredPricing = pricingPlans.filter(plan => plan.type === pricingType);

    return (
        <AppLayout>
            <Head title="WowApps - Turn WordPress into Mobile Apps | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-white via-purple-50/50 to-[#f0e6ff]/30 relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full px-5 py-2 mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="font-semibold">NEW: iOS & Android Support</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                                <Smartphone className="w-10 h-10" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Turn Your WordPress Site Into a
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                                Native Mobile App
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Create stunning iOS and Android apps from your WordPress or WooCommerce site. No coding required. Publish to app stores and reach millions of mobile users.
                        </motion.p>

                        {/* Trust Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6 mb-10"
                        >
                            {trustStats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl font-bold text-[#070707]">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/30"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#070707] px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-purple-500 hover:text-purple-600 transition-all"
                            >
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                            WHY WOWAPPS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything You Need for Mobile Success
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            WowApps provides all the tools you need to create, customize, and publish beautiful mobile apps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Types */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-semibold mb-6">
                            APP TYPES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Build Any Type of App
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you're running an e-commerce store, blog, or community site, WowApps has you covered.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {appTypes.map((type, index) => (
                            <motion.div
                                key={type.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                                    {type.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#070707] mb-2">{type.name}</h3>
                                <p className="text-gray-600 text-sm">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                            FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Packed with Powerful Features
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to create a successful mobile app experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {appFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-5 hover:bg-purple-50 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-[#070707]">{feature.name}</h3>
                                            {feature.badge && (
                                                <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                                                    {feature.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-[#070707] to-gray-900 text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-6">
                            BENEFITS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Your Business Needs a Mobile App
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Mobile apps drive engagement, sales, and customer loyalty like nothing else.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                            >
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
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
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Loved by Thousands
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See what our customers are saying about WowApps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#070707]">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-[#f5f7f9] scroll-mt-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-semibold mb-6">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            All plans include iOS & Android support, push notifications, and full feature access.
                        </p>

                        {/* Toggle */}
                        <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
                            <button
                                onClick={() => setPricingType('yearly')}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    pricingType === 'yearly'
                                        ? 'bg-purple-600 text-white'
                                        : 'text-gray-600 hover:text-purple-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setPricingType('lifetime')}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    pricingType === 'lifetime'
                                        ? 'bg-purple-600 text-white'
                                        : 'text-gray-600 hover:text-purple-600'
                                }`}
                            >
                                Lifetime
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {filteredPricing.map((plan, index) => (
                            <motion.div
                                key={`${plan.name}-${plan.period}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-2xl p-6 ${
                                    plan.popular
                                        ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white ring-4 ring-purple-500/30'
                                        : 'bg-white border border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="text-center mb-4">
                                        <span className="inline-block bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#070707]'}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className={`text-sm line-through ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                                            ${plan.originalPrice}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                                            plan.popular ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'
                                        }`}>
                                            {plan.discount} OFF
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-[#070707]'}`}>
                                            ${plan.price}
                                        </span>
                                        <span className={plan.popular ? 'text-white/70' : 'text-gray-500'}>
                                            /{plan.period}
                                        </span>
                                    </div>
                                </div>
                                <ul className={`space-y-3 mb-6 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                                    <li className="flex items-center gap-2">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                                        iOS & Android apps
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                                        Push notifications
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                                        All premium features
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                                        {pricingType === 'yearly' ? '1 year updates' : 'Lifetime updates'}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                                        Priority support
                                    </li>
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                                    plan.popular
                                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                                        : 'bg-purple-600 text-white hover:bg-purple-700'
                                }`}>
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
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
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Got questions? We've got answers.
                        </p>
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
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-semibold text-[#070707]">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-purple-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Rocket className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Go Mobile?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Join thousands of businesses that have transformed their WordPress sites into powerful mobile apps.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
