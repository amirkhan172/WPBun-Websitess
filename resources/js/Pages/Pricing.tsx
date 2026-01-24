import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    Check, X, Star, Shield, Users, Zap, ChevronDown, HelpCircle,
    LayoutGrid, Store, DollarSign, PlusCircle, Tags, MousePointerClick, Truck,
    Package, ArrowRight, Download, RefreshCw, Headphones, Award, CheckCircle
} from 'lucide-react';

const products = [
    { name: 'PostX', icon: <LayoutGrid className="w-5 h-5" />, color: 'from-blue-500 to-blue-700', description: 'Gutenberg Blocks' },
    { name: 'WowStore', icon: <Store className="w-5 h-5" />, color: 'from-cyan-500 to-teal-600', description: 'WooCommerce Builder' },
    { name: 'WowRevenue', icon: <DollarSign className="w-5 h-5" />, color: 'from-pink-500 to-rose-600', description: 'Product Bundles' },
    { name: 'WowAddons', icon: <PlusCircle className="w-5 h-5" />, color: 'from-green-400 to-emerald-600', description: 'Product Add-ons' },
    { name: 'WholesaleX', icon: <Tags className="w-5 h-5" />, color: 'from-violet-500 to-purple-700', description: 'B2B & Wholesale' },
    { name: 'WowOptin', icon: <MousePointerClick className="w-5 h-5" />, color: 'from-yellow-400 to-amber-600', description: 'Popups & Leads' },
    { name: 'WowShipping', icon: <Truck className="w-5 h-5" />, color: 'from-orange-400 to-orange-600', description: 'Table Rate Shipping' },
];

const individualPricing = [
    { name: 'PostX Pro', slug: 'postx', price: 59, originalPrice: 99, icon: <LayoutGrid className="w-5 h-5" />, color: 'from-blue-500 to-blue-700' },
    { name: 'WowStore Pro', slug: 'wowstore', price: 49, originalPrice: 79, icon: <Store className="w-5 h-5" />, color: 'from-cyan-500 to-teal-600' },
    { name: 'WowRevenue Pro', slug: 'wowrevenue', price: 49, originalPrice: 79, icon: <DollarSign className="w-5 h-5" />, color: 'from-pink-500 to-rose-600' },
    { name: 'WowAddons Pro', slug: 'wowaddons', price: 39, originalPrice: 69, icon: <PlusCircle className="w-5 h-5" />, color: 'from-green-400 to-emerald-600' },
    { name: 'WholesaleX Pro', slug: 'wholesalex', price: 59, originalPrice: 99, icon: <Tags className="w-5 h-5" />, color: 'from-violet-500 to-purple-700' },
    { name: 'WowOptin Pro', slug: 'wowoptin', price: 39, originalPrice: 69, icon: <MousePointerClick className="w-5 h-5" />, color: 'from-yellow-400 to-amber-600' },
    { name: 'WowShipping Pro', slug: 'wowshipping', price: 39, originalPrice: 69, icon: <Truck className="w-5 h-5" />, color: 'from-orange-400 to-orange-600' },
];

const bundlePricing = [
    {
        name: '5 Sites',
        price: 499,
        originalPrice: 2800,
        sites: 5,
        savings: '82%',
        features: [
            { text: 'All 8 premium plugins', included: true },
            { text: '3 upcoming plugins FREE', included: true },
            { text: 'Lifetime updates', included: true },
            { text: 'Email support', included: true },
            { text: 'Free installation help', included: true },
            { text: 'Priority support', included: false },
            { text: 'White-label rights', included: false },
        ],
    },
    {
        name: '50 Sites',
        price: 699,
        originalPrice: 4500,
        sites: 50,
        savings: '84%',
        popular: true,
        features: [
            { text: 'All 8 premium plugins', included: true },
            { text: '3 upcoming plugins FREE', included: true },
            { text: 'Lifetime updates', included: true },
            { text: 'Priority support', included: true },
            { text: 'Free installation help', included: true },
            { text: 'Development discount', included: true },
            { text: 'White-label rights', included: false },
        ],
    },
    {
        name: 'Unlimited',
        price: 999,
        originalPrice: 8000,
        sites: 'Unlimited',
        savings: '88%',
        features: [
            { text: 'All 8 premium plugins', included: true },
            { text: '3 upcoming plugins FREE', included: true },
            { text: 'Lifetime updates', included: true },
            { text: 'VIP priority support', included: true },
            { text: 'Free installation help', included: true },
            { text: 'Development discount', included: true },
            { text: 'White-label rights', included: true },
        ],
    },
];

const faqs = [
    {
        question: 'What is included in the Agency Bundle?',
        answer: 'The Agency Bundle includes all 8 current plugins (PostX, WowStore, WowRevenue, WowAddons, WholesaleX, WowOptin, WowShipping, and more) plus 3 upcoming plugins for FREE. You also get lifetime updates and support.',
    },
    {
        question: 'Is this a one-time payment or subscription?',
        answer: 'This is a one-time payment with lifetime access. No recurring fees or hidden charges. Pay once, use forever with all future updates included.',
    },
    {
        question: 'Can I upgrade my license later?',
        answer: 'Yes! You can upgrade your license at any time. We will prorate the difference, so you only pay the upgrade cost.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'Yes! We offer a 14-day 100% money-back guarantee. If you are not satisfied with our plugins, we will refund your purchase with no questions asked.',
    },
    {
        question: 'Can I use the plugins for client projects?',
        answer: 'Absolutely! The bundle is perfect for agencies and freelancers. The license allows you to use the plugins on client websites within your license limit.',
    },
    {
        question: 'What kind of support do you offer?',
        answer: 'We offer email support for all customers. Priority and VIP support tiers get faster response times. Our average response time is under 24 hours.',
    },
];

const guarantees = [
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Lifetime Updates', description: 'Free updates forever' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Priority Support', description: 'Fast response times' },
    { icon: <Shield className="w-6 h-6" />, title: '14-Day Guarantee', description: 'Full refund if not satisfied' },
];

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'individual' | 'bundle'>('bundle');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <DynamicLayout>
            <Head title="Pricing - Premium WordPress Plugins | WPBun" />

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
                                    <Star key={i} className="w-4 h-4 text-[#ff176b] fill-[#ff176b]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                Trusted by 65,000+ websites
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#070707] mb-6"
                        >
                            Simple, Transparent <span className="text-[#ff176b]">Pricing</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Choose the plan that fits your needs. All plans include lifetime updates and dedicated support.
                        </motion.p>

                        {/* Billing Toggle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-sm"
                        >
                            <button
                                onClick={() => setBillingCycle('individual')}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                                    billingCycle === 'individual'
                                        ? 'bg-[#070707] text-white'
                                        : 'text-gray-600 hover:text-[#070707]'
                                }`}
                            >
                                Individual Plugins
                            </button>
                            <button
                                onClick={() => setBillingCycle('bundle')}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 ${
                                    billingCycle === 'bundle'
                                        ? 'bg-[#ff176b] text-white'
                                        : 'text-gray-600 hover:text-[#070707]'
                                }`}
                            >
                                Agency Bundle
                                <span className="px-2 py-0.5 bg-white text-[#ff176b] text-xs font-bold rounded-full">
                                    SAVE 80%+
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Individual Pricing */}
            {billingCycle === 'individual' && (
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mb-4">
                                INDIVIDUAL PLUGINS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                                Purchase Plugins Separately
                            </h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Select the plugins you need. Each license includes 1 year of updates and support.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {individualPricing.map((plugin, index) => (
                                <motion.div
                                    key={plugin.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-[#f5f7f9] rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${plugin.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                        {plugin.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#070707] mb-1">{plugin.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold text-[#070707]">${plugin.price}</span>
                                        <span className="text-gray-400 line-through ml-2">${plugin.originalPrice}</span>
                                        <p className="text-sm text-gray-500 mt-1">per year / 1 site</p>
                                    </div>
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-4 h-4 text-[#ff176b] flex-shrink-0" />
                                            1 year updates
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-4 h-4 text-[#ff176b] flex-shrink-0" />
                                            Email support
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-4 h-4 text-[#ff176b] flex-shrink-0" />
                                            All features
                                        </li>
                                    </ul>
                                    <Link
                                        href={`/products/${plugin.slug}`}
                                        className="block w-full py-2.5 bg-[#070707] text-white text-center rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bundle Suggestion */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-16 bg-gradient-to-r from-[#070707] to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto"
                        >
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Zap className="w-6 h-6 text-[#cdf33b]" />
                                <span className="text-[#cdf33b] font-semibold">BEST VALUE</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Save Over 80% with Agency Bundle</h3>
                            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                                Get all 8 plugins + 3 upcoming plugins with lifetime access. One payment, unlimited possibilities.
                            </p>
                            <button
                                onClick={() => setBillingCycle('bundle')}
                                className="inline-flex items-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d8f655] transition-colors"
                            >
                                <Package className="w-5 h-5" />
                                View Bundle Pricing
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Bundle Pricing */}
            {billingCycle === 'bundle' && (
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        {/* Plugins Included */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-4">
                                ALL PLUGINS INCLUDED
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-6">
                                8 Premium Plugins in One Bundle
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                                {products.map((product) => (
                                    <div
                                        key={product.name}
                                        className="flex items-center gap-3 px-4 py-3 bg-[#f5f7f9] rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                                    >
                                        <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center text-white`}>
                                            {product.icon}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-[#070707] text-sm">{product.name}</p>
                                            <p className="text-xs text-gray-500">{product.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#ff176b]/10 to-purple-500/10 rounded-xl border border-pink-200">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff176b] to-purple-600 rounded-lg flex items-center justify-center text-white">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-[#070707] text-sm">+3 Upcoming</p>
                                        <p className="text-xs text-gray-500">Free when launched</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {bundlePricing.map((tier, index) => (
                                <motion.div
                                    key={tier.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative bg-white rounded-2xl p-8 ${
                                        tier.popular
                                            ? 'ring-2 ring-[#ff176b] shadow-2xl scale-[1.02] z-10'
                                            : 'border border-gray-200 shadow-lg'
                                    }`}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-[#ff176b] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                                                MOST POPULAR
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-[#070707] mb-1">{tier.name}</h3>
                                        <p className="text-gray-500 text-sm">
                                            {typeof tier.sites === 'number' ? `Up to ${tier.sites} websites` : 'Unlimited websites'}
                                        </p>
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-4xl font-bold text-[#070707]">${tier.price}</span>
                                            <span className="text-gray-400 line-through text-lg">${tier.originalPrice}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full">
                                            Save {tier.savings}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">One-time payment</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature) => (
                                            <li key={feature.text} className="flex items-center gap-3 text-gray-600">
                                                {feature.included ? (
                                                    <CheckCircle className="w-5 h-5 text-[#ff176b] flex-shrink-0" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                                )}
                                                <span className={!feature.included ? 'text-gray-400' : ''}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3.5 rounded-lg font-bold text-lg transition-colors ${
                                            tier.popular
                                                ? 'bg-[#ff176b] text-white hover:bg-[#e01560]'
                                                : 'bg-pink-200 text-pink-700 hover:bg-pink-300'
                                        }`}
                                    >
                                        Get Started
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Guarantees */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                        >
                            {guarantees.map((item) => (
                                <div key={item.title} className="flex items-center gap-4 bg-[#f5f7f9] rounded-xl p-5">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#ff176b] shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#070707]">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Trust Indicators */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-semibold mb-4">
                            TRUSTED WORLDWIDE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">
                            Why Choose WPBun?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: <Users className="w-8 h-8" />, value: '65,000+', label: 'Happy Customers' },
                            { icon: <Star className="w-8 h-8" />, value: '4.9/5', label: 'Average Rating' },
                            { icon: <Download className="w-8 h-8" />, value: '1.2M+', label: 'Total Downloads' },
                            { icon: <Shield className="w-8 h-8" />, value: '14 Days', label: 'Money-Back Guarantee' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#ff176b] to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-[#070707] mb-1">{stat.value}</div>
                                <div className="text-gray-500">{stat.label}</div>
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
                                transition={{ delay: index * 0.05 }}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-[#070707] pr-4">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-pink-50 rounded-2xl p-8 md:p-12 text-center border border-[#ff176b]"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Join 65,000+ happy users and take your WordPress website to the next level with our premium plugins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-pink-200 text-pink-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-300 transition-colors"
                            >
                                <Package className="w-5 h-5" />
                                Get the Bundle
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#ff176b] px-8 py-4 rounded-lg font-bold text-lg border border-[#ff176b] hover:bg-pink-100 transition-colors"
                            >
                                <HelpCircle className="w-5 h-5" />
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
