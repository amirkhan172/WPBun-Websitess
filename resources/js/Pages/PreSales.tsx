import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, HelpCircle, ChevronDown, CheckCircle, Package, CreditCard, RefreshCw, Shield, Zap, Users, Award, Mail, MessageCircle, Phone, ChevronRight, ArrowRight, Sparkles, Star } from 'lucide-react';

const commonQuestions = [
    {
        question: 'Can I try before I buy?',
        answer: 'All our plugins have free versions available on WordPress.org with core features included. We recommend testing the free version first to ensure it meets your basic needs. The premium versions unlock advanced features, priority support, and more customization options.'
    },
    {
        question: 'What\'s included in the premium license?',
        answer: 'Premium licenses include: All pro features unlocked, Priority email support, Automatic updates for 1 year, Access to premium templates and designs, Developer-friendly documentation, and Regular new feature additions. The exact features vary by product - check each product page for specifics.'
    },
    {
        question: 'Which license should I choose?',
        answer: 'Single Site: Perfect for one website. Best for bloggers and small business owners. Unlimited Sites: Ideal for freelancers and web developers with multiple projects. Agency Bundle: Best value for agencies - includes all products with unlimited sites and lifetime updates.'
    },
    {
        question: 'Do you offer a money-back guarantee?',
        answer: 'Yes! We offer a 14-day money-back guarantee on all purchases. If you\'re not satisfied with your purchase for any reason, contact our support team within 14 days for a full refund. No questions asked.'
    },
    {
        question: 'Can I upgrade my license later?',
        answer: 'Absolutely! You can upgrade from Single Site to Unlimited Sites or the Agency Bundle at any time. We\'ll apply your original purchase as a credit toward the upgrade price. Just contact our support team to process the upgrade.'
    },
    {
        question: 'What happens when my license expires?',
        answer: 'After your license expires, your plugin will continue to work with all features intact. However, you won\'t receive new updates, features, or priority support. You can renew at any time to restore full access. We recommend keeping your license active for security updates.'
    },
    {
        question: 'Do you offer discounts for non-profits?',
        answer: 'Yes! We offer special discounts for registered non-profit organizations, educational institutions, and open-source projects. Contact us with proof of your non-profit status to receive your discount code.'
    },
    {
        question: 'Is my payment secure?',
        answer: 'Absolutely. We use industry-standard SSL encryption and process payments through trusted providers like Stripe and PayPal. We never store your complete credit card information on our servers.'
    },
];

const productComparisons = [
    {
        product: 'PostX',
        bestFor: 'Content & Blogs',
        description: 'Perfect for bloggers, news sites, and content-heavy websites.',
        features: ['Gutenberg blocks', 'Custom post layouts', 'Dynamic data display', 'Ajax pagination'],
        startingPrice: '$39',
    },
    {
        product: 'WowStore',
        bestFor: 'WooCommerce Stores',
        description: 'Complete WooCommerce customization solution.',
        features: ['Product page builder', 'Cart & checkout editor', 'Quick view features', 'Product comparison'],
        startingPrice: '$49',
    },
    {
        product: 'WholesaleX',
        bestFor: 'B2B & Wholesale',
        description: 'Turn your store into a wholesale powerhouse.',
        features: ['Wholesale pricing', 'Tiered discounts', 'B2B registration', 'Minimum orders'],
        startingPrice: '$79',
    },
    {
        product: 'WowRevenue',
        bestFor: 'Sales & Revenue',
        description: 'Boost sales with smart marketing features.',
        features: ['Upsells & Cross-sells', 'Order bumps', 'BOGO deals', 'Checkout addons'],
        startingPrice: '$59',
    },
];

const supportOptions = [
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: 'Live Chat',
        description: 'Chat with our pre-sales team in real-time',
        availability: 'Mon-Fri, 9AM-6PM GMT+6',
        action: 'Start Chat',
        href: '#',
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Us',
        description: 'Send your questions via email',
        availability: 'Response within 24 hours',
        action: 'Send Email',
        href: 'mailto:presales@wpbun.com?subject=Pre-Sales Question',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Schedule a Call',
        description: 'Book a one-on-one consultation',
        availability: 'Free 15-minute call',
        action: 'Book Now',
        href: 'mailto:business@wpbun.com?subject=Schedule a Pre-Sales Call',
    },
];

const trustSignals = [
    { icon: <Users className="w-5 h-5" />, text: '65,000+ Happy Users' },
    { icon: <Star className="w-5 h-5" />, text: '4.9/5 Average Rating' },
    { icon: <Shield className="w-5 h-5" />, text: '14-Day Money Back' },
    { icon: <RefreshCw className="w-5 h-5" />, text: 'Free Updates' },
];

export default function PreSales() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <AppLayout>
            <Head title="Pre-Sales Questions | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#f5f7f9] to-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <ShoppingCart className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Questions Before You Buy?
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Pre-Sales
                            <span className="block text-[#1f66ff]">Questions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Get all the information you need before making a purchase. We're here to help you choose the right solution for your needs.
                        </motion.p>

                        {/* Trust Signals */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {trustSignals.map((signal, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 text-sm"
                                >
                                    <span className="text-[#1f66ff]">{signal.icon}</span>
                                    <span className="text-[#070707] font-medium">{signal.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {supportOptions.map((option, index) => (
                            <motion.a
                                key={option.title}
                                href={option.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-xl p-6 text-center hover:shadow-lg hover:bg-white transition-all group border border-transparent hover:border-[#1f66ff]/20"
                            >
                                <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                    {option.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{option.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                                <p className="text-[#1f66ff] text-xs font-medium">{option.availability}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Questions */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            COMMON QUESTIONS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            What Buyers Ask Most
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to the most frequently asked pre-purchase questions.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {commonQuestions.map((faq, index) => (
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
                                    className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-semibold text-[#070707] pr-4">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-6 pb-5"
                                    >
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Comparison */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#ff176b] rounded-full text-sm font-semibold mb-6">
                            CHOOSE YOUR PRODUCT
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Which Product Is Right for You?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Compare our products to find the perfect fit for your needs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productComparisons.map((product, index) => (
                            <motion.div
                                key={product.product}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="inline-flex items-center gap-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full px-3 py-1 text-xs font-semibold mb-4">
                                    {product.bestFor}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{product.product}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <span className="text-gray-500 text-xs">Starting at</span>
                                        <div className="text-2xl font-bold text-[#070707]">{product.startingPrice}</div>
                                    </div>
                                    <Link
                                        href={`/products/${product.product.toLowerCase()}`}
                                        className="text-[#1f66ff] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-2 bg-[#1f66ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a56db] transition-colors"
                        >
                            View All Pricing
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* License Information */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#cdf33b]/20 text-[#070707] rounded-full text-sm font-semibold mb-6">
                            LICENSE INFO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Understanding Our Licenses
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            All licenses include the same features. The difference is how many sites you can use them on.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#f5f7f9] rounded-2xl p-8"
                        >
                            <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                                <Package className="w-7 h-7 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#070707] mb-2">Single Site</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Perfect for individual website owners with one project.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    1 Website activation
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    All premium features
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    1 year of updates
                                </li>
                                <li className="flex items-center gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    Standard support
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#1f66ff] rounded-2xl p-8 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4">
                                <span className="bg-[#cdf33b] text-[#070707] text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>
                            </div>
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Unlimited Sites</h3>
                            <p className="text-white/80 text-sm mb-4">
                                Ideal for freelancers and developers with multiple projects.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-white/90">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    Unlimited activations
                                </li>
                                <li className="flex items-center gap-2 text-white/90">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    All premium features
                                </li>
                                <li className="flex items-center gap-2 text-white/90">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    1 year of updates
                                </li>
                                <li className="flex items-center gap-2 text-white/90">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    Priority support
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-[#070707] to-gray-800 rounded-2xl p-8 text-white"
                        >
                            <div className="w-14 h-14 bg-[#cdf33b] rounded-xl flex items-center justify-center mb-4">
                                <Award className="w-7 h-7 text-[#070707]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Agency Bundle</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Best value for agencies - includes all products forever.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    All products included
                                </li>
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    Unlimited sites
                                </li>
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    Lifetime updates
                                </li>
                                <li className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-[#cdf33b]" />
                                    VIP support
                                </li>
                            </ul>
                        </motion.div>
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
                        className="bg-[#070707] rounded-3xl p-12 text-center"
                    >
                        <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#cdf33b]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Our pre-sales team is ready to help you find the perfect solution. Don't hesitate to reach out!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:presales@wpbun.com?subject=Pre-Sales Question"
                                className="inline-flex items-center justify-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold hover:bg-[#d8f655] transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                Email Pre-Sales Team
                            </a>
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors"
                            >
                                Browse Products
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
