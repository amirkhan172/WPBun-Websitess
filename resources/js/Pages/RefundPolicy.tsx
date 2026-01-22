import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { RefreshCcw, CheckCircle, XCircle, Clock, Mail, ChevronRight, AlertCircle, HelpCircle, CreditCard } from 'lucide-react';

const eligibilityCriteria = [
    {
        eligible: true,
        title: 'Technical Issues We Cannot Resolve',
        description: 'If our plugin causes critical issues with your website that our support team cannot fix within a reasonable timeframe.'
    },
    {
        eligible: true,
        title: 'Missing Documented Features',
        description: 'If the plugin is missing features that are explicitly documented on our website at the time of purchase.'
    },
    {
        eligible: true,
        title: 'Duplicate Purchase',
        description: 'If you accidentally purchased the same product twice, we will refund the duplicate purchase.'
    },
    {
        eligible: true,
        title: 'Upgrade Price Difference',
        description: 'If you purchased a lower tier and want to upgrade, we can apply the original purchase as credit.'
    },
    {
        eligible: false,
        title: 'Change of Mind',
        description: 'We do not offer refunds simply because you changed your mind or no longer need the product.'
    },
    {
        eligible: false,
        title: 'Third-Party Conflicts',
        description: 'Refunds are not granted for conflicts with third-party themes or plugins that are outside our control.'
    },
    {
        eligible: false,
        title: 'Lack of Expertise',
        description: 'We cannot refund purchases where the product works as intended but the user lacks technical knowledge to use it.'
    },
    {
        eligible: false,
        title: 'After 14 Days',
        description: 'Refund requests made after 14 days from the purchase date are not eligible.'
    },
];

const refundSteps = [
    {
        step: 1,
        title: 'Contact Support',
        description: 'Reach out to our support team via email at support@wpbun.com or through our contact form. Provide your order number and reason for the refund request.'
    },
    {
        step: 2,
        title: 'Review Process',
        description: 'Our team will review your request within 24-48 business hours. We may ask for additional information or offer to resolve any technical issues.'
    },
    {
        step: 3,
        title: 'Resolution Attempt',
        description: 'If applicable, our support team will attempt to resolve any technical issues you\'re experiencing before processing a refund.'
    },
    {
        step: 4,
        title: 'Refund Approval',
        description: 'Once approved, your refund will be processed. You will receive a confirmation email with the refund details.'
    },
    {
        step: 5,
        title: 'Receive Funds',
        description: 'Refunds are processed within 5-10 business days. Funds will be returned to the original payment method.'
    },
];

const faqs = [
    {
        question: 'What is your refund time limit?',
        answer: 'We offer refunds within 14 days of purchase. After 14 days, refund requests will not be accepted except in exceptional circumstances.'
    },
    {
        question: 'How long does it take to receive my refund?',
        answer: 'Once approved, refunds are processed within 5-10 business days. The actual time for funds to appear in your account may vary depending on your payment method and financial institution.'
    },
    {
        question: 'Can I get a partial refund?',
        answer: 'Yes, partial refunds may be offered in certain situations, such as when upgrading from a lower tier or when only specific issues need to be addressed.'
    },
    {
        question: 'What happens to my license after a refund?',
        answer: 'Once a refund is processed, your license key will be deactivated. You will no longer have access to premium features, updates, or support for that product.'
    },
    {
        question: 'Can I get a refund for a renewal?',
        answer: 'Refunds for renewals are handled on a case-by-case basis. If you forgot to cancel before a renewal, please contact us within 48 hours of the renewal charge.'
    },
];

export default function RefundPolicy() {
    return (
        <AppLayout>
            <Head title="Refund Policy | WPBun" />

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
                            <RefreshCcw className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                14-Day Money-Back Guarantee
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Refund Policy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            We want you to be completely satisfied with your purchase. If you're not happy, we offer a 14-day money-back guarantee on all our products.
                        </motion.p>

                        {/* Key Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid md:grid-cols-3 gap-4"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-[#070707] mb-1">14-Day Window</h3>
                                <p className="text-gray-500 text-sm">Request a refund within 14 days of purchase</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-[#070707] mb-1">5-10 Business Days</h3>
                                <p className="text-gray-500 text-sm">Refunds processed within 5-10 business days</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-[#070707] mb-1">24-48 Hours</h3>
                                <p className="text-gray-500 text-sm">Support response within 24-48 business hours</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            ELIGIBILITY
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            When Are You Eligible for a Refund?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Understanding when refunds are available helps set clear expectations for both parties.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {eligibilityCriteria.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`rounded-xl p-6 border ${
                                    item.eligible
                                        ? 'bg-green-50 border-green-200'
                                        : 'bg-red-50 border-red-200'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                                        item.eligible
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                    }`}>
                                        {item.eligible ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <XCircle className="w-5 h-5" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold mb-1 ${
                                            item.eligible ? 'text-green-800' : 'text-red-800'
                                        }`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm ${
                                            item.eligible ? 'text-green-700' : 'text-red-700'
                                        }`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Refund Process Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            PROCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            How to Request a Refund
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow these steps to request a refund. Our team will guide you through the process.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {refundSteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-[#1f66ff] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                    {index < refundSteps.length - 1 && (
                                        <div className="w-0.5 h-16 bg-[#1f66ff]/20 mx-auto mt-2"></div>
                                    )}
                                </div>
                                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm">
                                    <h3 className="font-bold text-[#070707] text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
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
                        <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-6">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Common questions about our refund policy answered.
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
                                className="bg-[#f5f7f9] rounded-xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <HelpCircle className="w-6 h-6 text-[#1f66ff] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-[#070707] mb-2">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-12 bg-amber-50 border-y border-amber-200">
                <div className="container-custom">
                    <div className="flex items-start gap-4 max-w-4xl mx-auto">
                        <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-amber-800 mb-2 text-lg">Important Notice</h3>
                            <p className="text-amber-700">
                                Please ensure you have thoroughly tested the free version of our plugins before purchasing a premium license. Our free versions include core functionality that can help you determine if the plugin meets your needs. We also encourage you to contact our pre-sales team if you have any questions before making a purchase.
                            </p>
                        </div>
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
                        <Mail className="w-12 h-12 mx-auto mb-6 text-[#1f66ff]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Need to Request a Refund?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Contact our support team with your order details and we'll process your request as quickly as possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                            >
                                Contact Support
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/pre-sales"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                            >
                                Pre-Sales Questions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
