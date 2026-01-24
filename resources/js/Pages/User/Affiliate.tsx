import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DollarSign, Percent, Cookie, CreditCard, Users, TrendingUp, BarChart3, CheckCircle, XCircle, ChevronDown, Zap, Gift, Mail, ArrowRight, Sparkles } from 'lucide-react';

const benefits = [
    {
        icon: <Percent className="w-8 h-8" />,
        title: '25% Commission',
        description: 'Earn a generous 25% commission on every successful sale you refer.',
        highlight: true
    },
    {
        icon: <Cookie className="w-8 h-8" />,
        title: '90-Day Cookie',
        description: 'Our 90-day tracking cookie ensures you get credit for delayed purchases.',
        highlight: false
    },
    {
        icon: <CreditCard className="w-8 h-8" />,
        title: 'Monthly Payouts',
        description: 'Get paid monthly via PayPal or bank transfer. Minimum payout: $50.',
        highlight: false
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Real-Time Tracking',
        description: 'Monitor your clicks, conversions, and earnings in real-time.',
        highlight: false
    },
    {
        icon: <Gift className="w-8 h-8" />,
        title: 'Marketing Materials',
        description: 'Access banners, links, and promotional content to boost conversions.',
        highlight: false
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: 'Dedicated Support',
        description: 'Get personalized support from our affiliate team when you need it.',
        highlight: false
    },
];

const howItWorks = [
    {
        step: 1,
        title: 'Sign Up',
        description: 'Create your free affiliate account in minutes. No approval wait time.',
        icon: <Users className="w-6 h-6" />
    },
    {
        step: 2,
        title: 'Get Your Link',
        description: 'Access your unique affiliate link from your dashboard.',
        icon: <Zap className="w-6 h-6" />
    },
    {
        step: 3,
        title: 'Promote',
        description: 'Share your link through your website, blog, social media, or email.',
        icon: <TrendingUp className="w-6 h-6" />
    },
    {
        step: 4,
        title: 'Earn',
        description: 'Earn 25% commission on every sale made through your link.',
        icon: <DollarSign className="w-6 h-6" />
    },
];

const dosAndDonts = {
    dos: [
        'Create honest reviews and tutorials',
        'Disclose your affiliate relationship',
        'Promote through your own channels',
        'Provide valuable content to your audience',
        'Test products before recommending',
        'Follow FTC disclosure guidelines',
        'Use provided marketing materials',
        'Build trust with your audience'
    ],
    donts: [
        'Use paid ads on brand keywords',
        'Create fake reviews or testimonials',
        'Spam forums or comment sections',
        'Mislead about product features',
        'Use cookie stuffing techniques',
        'Create multiple accounts',
        'Offer unauthorized discounts',
        'Send unsolicited emails'
    ]
};

const faqs = [
    {
        question: 'How much can I earn as an affiliate?',
        answer: 'There\'s no cap on your earnings! You earn 25% of every sale. Top affiliates earn $1,000+ per month. Your earnings depend on your traffic, audience engagement, and promotion strategies.'
    },
    {
        question: 'When and how do I get paid?',
        answer: 'Payments are processed on the 15th of each month for commissions earned in the previous month. We offer PayPal and bank transfer (for amounts over $200). The minimum payout threshold is $50.'
    },
    {
        question: 'Do I need a website to join?',
        answer: 'While having a website is preferred, it\'s not required. You can promote through YouTube, social media, email newsletters, or other channels. We evaluate each application to ensure quality referrals.'
    },
    {
        question: 'How long does the tracking cookie last?',
        answer: 'Our tracking cookie lasts for 90 days. If someone clicks your link and makes a purchase within 90 days, you\'ll receive the commission, even if they don\'t buy immediately.'
    },
    {
        question: 'Can I use paid advertising?',
        answer: 'Yes, but with restrictions. You cannot bid on our brand keywords or variations. Display ads and content discovery platforms are allowed. Please review our affiliate policy for details.'
    },
    {
        question: 'Do renewals count towards commission?',
        answer: 'Yes! You earn commission on both the initial purchase and any renewals or upgrades made by customers you referred. This means ongoing passive income!'
    },
];

const stats = [
    { value: '25%', label: 'Commission Rate' },
    { value: '90', label: 'Day Cookie' },
    { value: '$50', label: 'Min Payout' },
    { value: '500+', label: 'Active Affiliates' },
];

export default function Affiliate() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <UserLayout>
            <Head title="Affiliate Program" />

            {/* Hero Section */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-blue-100 text-primary rounded-full px-5 py-2 mb-6 border border-blue-200"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="font-medium">Join 500+ Successful Affiliates</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Refer Our Products &
                            <span className="block text-primary">Get 25% Commissions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-600 mb-8"
                        >
                            Join our affiliate program and earn generous commissions by promoting high-quality WordPress plugins trusted by 65,000+ users worldwide.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-xl p-4 border border-gray-200"
                                >
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-gray-600 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                            >
                                Become an Affiliate
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/affiliates-policy"
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                            >
                                View Program Terms
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-8">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        WHY JOIN US
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Program Benefits
                    </h2>
                    <p className="text-gray-600">
                        Our affiliate program is designed to help you succeed and maximize your earnings.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`rounded-2xl p-6 ${
                                benefit.highlight
                                    ? 'bg-gradient-to-br from-primary to-blue-700 text-white'
                                    : 'bg-gray-50 border border-gray-200'
                            }`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                                benefit.highlight
                                    ? 'bg-white/20 text-white'
                                    : 'bg-primary/10 text-primary'
                            }`}>
                                {benefit.icon}
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${benefit.highlight ? 'text-white' : 'text-gray-900'}`}>
                                {benefit.title}
                            </h3>
                            <p className={benefit.highlight ? 'text-white/80' : 'text-gray-600'}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-4 border border-blue-200">
                        GET STARTED
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        How It Works
                    </h2>
                    <p className="text-gray-600">
                        Start earning in four simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {howItWorks.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center relative"
                        >
                            <div className="relative inline-block">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Do's and Don'ts Section */}
            <div className="mb-8">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        GUIDELINES
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Do's & Don'ts
                    </h2>
                    <p className="text-gray-600">
                        Follow these guidelines for a successful partnership.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Do's */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-green-50 rounded-2xl p-6 border border-green-200"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-green-800">Do's</h3>
                        </div>
                        <ul className="space-y-2">
                            {dosAndDonts.dos.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-green-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Don'ts */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-50 rounded-2xl p-6 border border-red-200"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-red-800">Don'ts</h3>
                        </div>
                        <ul className="space-y-2">
                            {dosAndDonts.donts.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-red-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-semibold mb-4">
                        FAQ
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Got questions? We've got answers.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
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
                                        <div className="px-5 pb-4">
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Ready to Start Earning?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Join hundreds of affiliates already earning passive income by promoting WPBun products. It's free to join and takes only a few minutes to get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                    >
                        Apply Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Us
                    </Link>
                </div>
            </div>
        </UserLayout>
    );
}
