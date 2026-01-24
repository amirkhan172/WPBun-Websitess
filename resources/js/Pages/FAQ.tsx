import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle, BookOpen, CreditCard, Settings, Package, LifeBuoy, Mail, ChevronRight, Zap } from 'lucide-react';

const categories = [
    { id: 'general', name: 'General', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'purchases', name: 'Purchases & Billing', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'products', name: 'Products', icon: <Package className="w-5 h-5" /> },
    { id: 'support', name: 'After-Sales Support', icon: <LifeBuoy className="w-5 h-5" /> },
    { id: 'technical', name: 'Technical', icon: <Settings className="w-5 h-5" /> },
];

const faqs = {
    general: [
        {
            question: 'What is WPBun?',
            answer: 'WPBun is a WordPress plugin development company that creates premium solutions for WordPress and WooCommerce. Our products include PostX, WowStore, WowRevenue, WowAddons, WholesaleX, WowOptin, and WowShipping. We focus on building tools that help bloggers, online stores, and agencies succeed online.'
        },
        {
            question: 'Are your plugins compatible with my theme?',
            answer: 'Our plugins are designed to work with any well-coded WordPress theme that follows WordPress coding standards. We thoroughly test with popular themes like Astra, GeneratePress, Kadence, OceanWP, and more. If you experience any compatibility issues, our support team will work with you to resolve them.'
        },
        {
            question: 'Do you offer free versions of your plugins?',
            answer: 'Yes! All our major plugins have free versions available on the WordPress.org plugin repository. The free versions include core features, while premium licenses unlock advanced features, priority support, and regular updates. We recommend trying the free version before purchasing.'
        },
        {
            question: 'How often do you release updates?',
            answer: 'We release updates regularly, typically every 2-4 weeks. Updates include new features, bug fixes, security patches, and compatibility improvements. Premium license holders receive automatic update notifications and can update directly from their WordPress dashboard.'
        },
        {
            question: 'Is WPBun associated with WPXPO?',
            answer: 'Yes, WPBun is the parent company of WPXPO. We unified our product ecosystem under the WPBun brand to provide a more cohesive experience for our users while maintaining the same commitment to quality and innovation.'
        },
    ],
    purchases: [
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for large orders. All payments are processed securely through industry-standard encryption.'
        },
        {
            question: 'What is your refund policy?',
            answer: 'We offer a 14-day money-back guarantee on all purchases. If you\'re not satisfied with your purchase, contact our support team within 14 days for a full refund. Please note that refunds are not available for renewals if requested after the 14-day window. See our Refund Policy page for complete details.'
        },
        {
            question: 'How do license keys work?',
            answer: 'After purchase, you\'ll receive a license key via email. Enter this key in the plugin settings to activate premium features. Each license has a site limit based on your plan (Single Site, Unlimited Sites, or Agency). The license key also enables automatic updates and priority support.'
        },
        {
            question: 'Can I upgrade my license later?',
            answer: 'Yes! You can upgrade from Single Site to Unlimited Sites or Agency Bundle at any time. We\'ll apply your original purchase as a credit toward the upgrade price. Contact our support team to process the upgrade.'
        },
        {
            question: 'Do licenses include renewals?',
            answer: 'Our licenses are annual subscriptions that renew automatically to ensure continuous access to updates and support. You can cancel auto-renewal at any time from your account dashboard. After cancellation, the plugin continues to work but won\'t receive updates.'
        },
        {
            question: 'What happens if my license expires?',
            answer: 'When your license expires, the plugin will continue to function with all features intact. However, you will no longer receive updates, new features, or priority support. We recommend keeping your license active to ensure compatibility and security.'
        },
    ],
    products: [
        {
            question: 'What is PostX and who is it for?',
            answer: 'PostX is our flagship content display plugin for WordPress. It\'s designed for bloggers, news sites, and content-heavy websites that need beautiful, customizable post grids, lists, and sliders. With 100+ ready-to-use templates and advanced filtering options, PostX makes content showcase easy without coding.'
        },
        {
            question: 'What\'s the difference between WowStore and WholesaleX?',
            answer: 'WowStore is a complete WooCommerce builder that helps you customize your entire store\'s appearance including product pages, cart, checkout, and more. WholesaleX is specifically designed for B2B wholesale businesses, offering wholesale pricing, user roles, minimum order quantities, and tiered pricing structures.'
        },
        {
            question: 'Do I need WooCommerce for your eCommerce plugins?',
            answer: 'Yes, WowStore, WholesaleX, WowRevenue, WowShipping, and WowAddons require WooCommerce to be installed and activated. These plugins extend WooCommerce functionality to provide additional features for your online store.'
        },
        {
            question: 'What is the Agency Bundle?',
            answer: 'The Agency Bundle includes lifetime access to all current and future WPBun products at a significant discount. It\'s designed for agencies and freelancers who need to use our plugins on multiple client sites. The bundle includes unlimited site licenses and priority support.'
        },
        {
            question: 'Are your plugins Gutenberg compatible?',
            answer: 'Yes, all our plugins are fully compatible with the WordPress block editor (Gutenberg). We provide custom blocks that integrate seamlessly into the block editor, allowing you to use our features without switching to classic editor.'
        },
    ],
    support: [
        {
            question: 'How can I contact support?',
            answer: 'You can reach our support team through multiple channels: 1) Submit a ticket through our website contact form, 2) Email us at support@wpbun.com, 3) Use the in-plugin support chat for quick questions. Premium license holders receive priority support with faster response times.'
        },
        {
            question: 'What are your support hours?',
            answer: 'Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (GMT+6), and Saturday from 10:00 AM to 4:00 PM. We\'re closed on Sundays. Average response time is under 24 hours for premium users and 48 hours for free users.'
        },
        {
            question: 'What kind of support do you provide?',
            answer: 'We provide technical support for issues directly related to our plugins, including: installation help, configuration questions, bug reports, and feature guidance. We don\'t provide support for third-party plugin conflicts, custom code modifications, or general WordPress hosting issues.'
        },
        {
            question: 'Do you offer customization services?',
            answer: 'Yes, we offer custom development services for specific requirements that go beyond our plugin\'s built-in features. Contact our business team at business@wpbun.com with your requirements for a quote. We also have a network of certified developers for larger projects.'
        },
        {
            question: 'How do I report a bug?',
            answer: 'To report a bug, please contact our support team with: 1) WordPress and PHP versions, 2) Active plugins list, 3) Detailed description of the issue, 4) Steps to reproduce the problem, 5) Screenshots or screen recordings if possible. This information helps us identify and fix issues quickly.'
        },
    ],
    technical: [
        {
            question: 'What are the minimum requirements for your plugins?',
            answer: 'Our plugins require: WordPress 5.8 or higher, PHP 7.4 or higher (PHP 8.0+ recommended), MySQL 5.6 or higher, and a modern web browser. For WooCommerce-based plugins, WooCommerce 6.0 or higher is required.'
        },
        {
            question: 'Will your plugins slow down my website?',
            answer: 'No, our plugins are optimized for performance. We use lazy loading, efficient database queries, and conditional asset loading to minimize impact on page speed. We regularly test with tools like GTmetrix and PageSpeed Insights to ensure optimal performance.'
        },
        {
            question: 'Can I use your plugins with page builders?',
            answer: 'Yes, our plugins work well with popular page builders like Elementor, Beaver Builder, Divi, and others. While we provide native Gutenberg blocks, many features are also accessible through shortcodes and widgets for page builder users.'
        },
        {
            question: 'Do your plugins support multisite?',
            answer: 'Yes, all our plugins support WordPress Multisite installations. For multisite networks, we recommend our Unlimited Sites or Agency Bundle licenses, which allow activation across all sites in your network.'
        },
        {
            question: 'How do I update the plugins?',
            answer: 'With a valid license key, you\'ll receive update notifications in your WordPress dashboard just like any other plugin. Simply click "Update Now" to get the latest version. We recommend always backing up your site before updates. You can also enable automatic updates from the plugins page.'
        },
        {
            question: 'Can I translate your plugins?',
            answer: 'Yes, all our plugins are translation-ready and support WPML, Polylang, and other translation plugins. We provide .pot files for translation, and many plugins have community translations available. You can also use the built-in WordPress translation editor.'
        },
    ],
};

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('general');
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = searchQuery
        ? Object.values(faqs).flat().filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : faqs[activeCategory as keyof typeof faqs];

    return (
        <DynamicLayout>
            <Head title="Frequently Asked Questions | WPBun" />

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
                            <HelpCircle className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Got Questions? We Have Answers
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#070707] mb-6"
                        >
                            Frequently Asked <span className="text-[#1f66ff]">Questions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Find answers to common questions about WPBun products, purchases, and support.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="max-w-xl mx-auto"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors text-lg"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Category Sidebar */}
                        {!searchQuery && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-1"
                            >
                                <div className="sticky top-32 bg-[#f5f7f9] rounded-2xl p-4">
                                    <h3 className="font-bold text-[#070707] mb-4 px-2">Categories</h3>
                                    <nav className="space-y-1">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => {
                                                    setActiveCategory(category.id);
                                                    setOpenFaq(0);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                                                    activeCategory === category.id
                                                        ? 'bg-blue-300 text-blue-800'
                                                        : 'text-gray-600 hover:bg-white hover:text-[#1f66ff]'
                                                }`}
                                            >
                                                {category.icon}
                                                <span className="font-medium">{category.name}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </motion.div>
                        )}

                        {/* FAQ List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={searchQuery ? 'lg:col-span-4' : 'lg:col-span-3'}
                        >
                            {searchQuery && (
                                <div className="mb-6">
                                    <p className="text-gray-600">
                                        Found <span className="font-semibold text-[#070707]">{filteredFaqs.length}</span> results for "{searchQuery}"
                                    </p>
                                </div>
                            )}

                            {!searchQuery && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-[#070707]">
                                        {categories.find(c => c.id === activeCategory)?.name}
                                    </h2>
                                </div>
                            )}

                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
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
                                        <AnimatePresence>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-5">
                                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredFaqs.length === 0 && (
                                <div className="text-center py-12">
                                    <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                                    <p className="text-gray-400 text-sm mt-2">Try different keywords or browse categories</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-[#070707] mb-4">Need More Help?</h2>
                        <p className="text-gray-600">Explore more resources or get in touch with our team.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/documentation"
                                className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors">Documentation</h3>
                                <p className="text-gray-600 text-sm">Detailed guides and tutorials</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link
                                href="/pre-sales"
                                className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-[#ff176b]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#ff176b] group-hover:bg-[#ff176b] group-hover:text-white transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-[#070707] mb-2 group-hover:text-[#ff176b] transition-colors">Pre-Sales Questions</h3>
                                <p className="text-gray-600 text-sm">Questions before buying</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-[#cdf33b]/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#070707] group-hover:bg-[#cdf33b] transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-[#070707] mb-2">Contact Support</h3>
                                <p className="text-gray-600 text-sm">Get personalized help</p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 rounded-3xl p-12 text-center"
                    >
                        <Zap className="w-12 h-12 mx-auto mb-6 text-[#1f66ff]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-blue-200 text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors"
                        >
                            Contact Support
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
