import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Star, Shield, Zap, Users, Clock, ChevronDown, ChevronUp, Package, LayoutGrid, Truck, PlusCircle, DollarSign, Store, MousePointerClick, Tags, Sparkles } from 'lucide-react';

const plugins = [
    {
        name: 'PostX',
        description: 'Gutenberg page builder for news/magazine sites',
        icon: <LayoutGrid className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-blue-500 to-blue-700',
        available: true,
    },
    {
        name: 'WowStore',
        description: 'WooCommerce page builder with 50+ product blocks',
        icon: <Store className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-cyan-500 to-teal-600',
        available: true,
    },
    {
        name: 'WowRevenue',
        description: 'Product bundles plugin with discount strategies',
        icon: <DollarSign className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-pink-500 to-rose-600',
        available: true,
    },
    {
        name: 'WowAddons',
        description: 'Product addons for WooCommerce customization',
        icon: <PlusCircle className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-green-400 to-emerald-600',
        available: true,
    },
    {
        name: 'WholesaleX',
        description: 'B2B/wholesale plugin with dynamic rules',
        icon: <Tags className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-violet-500 to-purple-700',
        available: true,
    },
    {
        name: 'WowOptin',
        description: 'Popup builder with smart targeting',
        icon: <MousePointerClick className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-yellow-400 to-amber-600',
        available: true,
    },
    {
        name: 'WowShipping',
        description: 'Table rate shipping with 30+ conditions',
        icon: <Truck className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-orange-400 to-orange-600',
        available: true,
    },
    {
        name: 'WowUpsell',
        description: 'Smart upsell and cross-sell recommendations',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-purple-600 to-indigo-800',
        available: false,
        upcoming: true,
    },
    {
        name: 'WowSubscriptions',
        description: 'Subscription management for recurring revenue',
        icon: <Clock className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-purple-600 to-indigo-800',
        available: false,
        upcoming: true,
    },
    {
        name: 'WowInvoice',
        description: 'Professional invoicing for WooCommerce',
        icon: <Package className="w-6 h-6" />,
        color: 'bg-gradient-to-br from-purple-600 to-indigo-800',
        available: false,
        upcoming: true,
    },
];

const pricingTiers = [
    {
        name: '5 Sites License',
        price: 699,
        originalPrice: 4143,
        sites: 5,
        features: [
            'All 7 current plugins',
            '3 upcoming plugins FREE',
            'Lifetime updates',
            'Lifetime support',
            'Free installation',
        ],
    },
    {
        name: '50 Sites License',
        price: 799,
        originalPrice: 6000,
        sites: 50,
        popular: true,
        features: [
            'All 7 current plugins',
            '3 upcoming plugins FREE',
            'Lifetime updates',
            'Priority support',
            'Free installation',
            'Custom development discount',
        ],
    },
    {
        name: 'Unlimited Sites',
        price: 999,
        originalPrice: 8000,
        sites: 'Unlimited',
        features: [
            'All 7 current plugins',
            '3 upcoming plugins FREE',
            'Lifetime updates',
            'VIP priority support',
            'Free installation',
            'Custom development discount',
            'White-label rights',
        ],
    },
];

const testimonials = [
    {
        name: 'Hannah Zribi',
        quote: 'The support is exceptional: they answered my question in less than 24 hours with a good solution.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Mark Thompson',
        quote: 'Best investment for my WooCommerce store. The bundle saved me hundreds of dollars.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Sarah Johnson',
        quote: 'PostX transformed my blog. The blocks are beautiful and easy to customize.',
        rating: 5,
        source: 'Trustpilot',
    },
];

const faqs = [
    {
        question: 'Will these plugins work with my current WooCommerce setup?',
        answer: 'Yes! All our plugins are thoroughly tested and optimized to work seamlessly with WooCommerce. They are compatible with the latest versions and follow WordPress coding standards.',
    },
    {
        question: 'Will these plugins work with my theme?',
        answer: 'Absolutely. Our plugins are designed to work with any well-coded WordPress theme. They have been tested with popular themes like Astra, GeneratePress, Kadence, and many more.',
    },
    {
        question: 'Can I use these plugins for client projects?',
        answer: 'Yes! The bundle is perfect for agencies and freelancers. You can use the plugins on client websites efficiently, making it an excellent investment for your business.',
    },
    {
        question: 'Will I get support and assistance?',
        answer: 'Yes, you get lifetime support from our dedicated team. Our average response time is under 24 hours, and we are committed to helping you succeed with our products.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes! We offer a 14-day 100% money-back guarantee. If you are not satisfied with the plugins, we will refund your purchase, no questions asked.',
    },
];

export default function AgencyBundle() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <AppLayout>
            <Head title="Agency Bundle - WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#f8fafc]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Limited Time Offer
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#070707]">
                            Unlock More Growth With Our Ultimate Bundle
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            One single payment, lifetime access - save $800+ on premium WordPress & WooCommerce tools.
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-[#070707]">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-[#1f66ff]" />
                                <span>65K+ users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span>4.9/5 from 340+ reviews</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-500" />
                                <span>14-day money-back</span>
                            </div>
                        </div>

                        <a href="#pricing" className="btn-accent text-lg px-8 py-4 inline-flex items-center gap-2">
                            Get Started Now
                            <Zap className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Plugins Included */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            10 Premium Plugins Included
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get access to our complete suite of WordPress and WooCommerce plugins, including 3 upcoming releases.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plugins.map((plugin, index) => (
                            <motion.div
                                key={plugin.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`relative p-6 rounded-2xl border ${
                                    plugin.upcoming
                                        ? 'bg-gray-50 border-gray-200'
                                        : 'bg-white border-gray-100 shadow-lg hover:shadow-xl transition-shadow'
                                }`}
                            >
                                {plugin.upcoming && (
                                    <span className="absolute top-4 right-4 px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                                        Coming Soon
                                    </span>
                                )}
                                <div className={`w-14 h-14 ${plugin.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {plugin.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{plugin.name}</h3>
                                <p className="text-gray-600">{plugin.description}</p>
                                {plugin.available && (
                                    <a href="#" className="inline-block mt-4 text-primary font-medium hover:underline">
                                        Explore Now →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            One-time payment. Lifetime access. No recurring fees.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-8 ${
                                    tier.popular
                                        ? 'ring-2 ring-primary shadow-2xl scale-105'
                                        : 'shadow-lg'
                                }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-secondary mb-2">{tier.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-secondary">${tier.price}</span>
                                    <span className="text-gray-400 line-through ml-2">${tier.originalPrice}</span>
                                </div>
                                <p className="text-gray-500 mb-6">
                                    {typeof tier.sites === 'number' ? `Up to ${tier.sites} websites` : 'Unlimited websites'}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                                        tier.popular
                                            ? 'bg-primary text-white hover:bg-primary-dark'
                                            : 'bg-gray-100 text-secondary hover:bg-gray-200'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Guarantee Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
                            <Shield className="w-6 h-6 text-green-600" />
                            <span className="text-green-700 font-medium">100% Money-Back Guarantee - 14 Days</span>
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
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            Loved by Thousands
                        </h2>
                        <p className="text-gray-600">See what our customers have to say</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-secondary">{testimonial.name}</span>
                                    <span className="text-sm text-gray-400">{testimonial.source}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
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
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-medium text-secondary pr-4">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Join 65,000+ happy users who trust WPBun plugins to power their WordPress and WooCommerce websites.
                        </p>
                        <a href="#pricing" className="btn-accent text-lg px-8 py-4 inline-flex items-center gap-2">
                            Get the Bundle Now
                            <Zap className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
