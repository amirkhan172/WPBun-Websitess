import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle, Mail, ChevronRight } from 'lucide-react';

const sections = [
    {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: `By accessing and using WPBun products and services ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.

These Terms constitute a legally binding agreement between you and WPBun ("Company," "we," "us," or "our"). We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.`
    },
    {
        id: 'license',
        title: '2. License Terms',
        content: `Our WordPress plugins are distributed under the GNU General Public License v3.0 (GPLv3) or later, as published by the Free Software Foundation.

**Key License Terms:**
- You are free to use, modify, and distribute our plugins
- You must keep the original copyright notices intact
- Any derivative works must also be licensed under GPLv3
- The software is provided "as is" without warranty

**Premium Features:**
- Premium features require a valid license key
- License keys are issued upon purchase and are non-transferable
- Licenses are specific to the plan purchased (Single Site, Unlimited Sites, or Agency)
- Annual licenses require renewal to continue receiving updates and support`
    },
    {
        id: 'account',
        title: '3. Account Registration',
        content: `To access certain features of our Services, you may be required to create an account. When creating an account:

- You must provide accurate and complete information
- You are responsible for maintaining the confidentiality of your account credentials
- You are responsible for all activities that occur under your account
- You must notify us immediately of any unauthorized use of your account

We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activities.`
    },
    {
        id: 'purchases',
        title: '4. Purchases and Payments',
        content: `**Pricing:**
- All prices are displayed in USD unless otherwise specified
- Prices are subject to change without prior notice
- Current pricing is available on our website

**Payment:**
- Payment is due at the time of purchase
- We accept major credit cards and PayPal
- All transactions are processed securely through third-party payment processors

**Taxes:**
- Prices do not include applicable taxes
- You are responsible for any taxes that may apply to your purchase

**License Activation:**
- License keys are delivered via email after successful payment
- Activation is required to access premium features
- Each license has specific usage limits based on your plan`
    },
    {
        id: 'refunds',
        title: '5. Refund Policy',
        content: `We want you to be satisfied with your purchase. Please refer to our Refund Policy page for detailed information about our refund terms and conditions.

**Summary:**
- Refund requests must be made within 14 days of purchase
- Refunds are processed within 5-10 business days
- Certain conditions may apply to refund eligibility

For complete refund policy details, please visit our Refund Policy page.`
    },
    {
        id: 'support',
        title: '6. Support Services',
        content: `**Support Scope:**
- We provide technical support for issues directly related to our plugins
- Support is available via our ticket system and email
- Priority support is available for premium license holders

**Support Limitations:**
- We do not provide support for third-party themes or plugins
- Customization beyond documented features is not included
- Support for deprecated plugin versions may be limited

**Support Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM (GMT+6)
- Saturday: 10:00 AM - 4:00 PM (GMT+6)
- Response time: Within 24 hours on business days`
    },
    {
        id: 'updates',
        title: '7. Updates and Maintenance',
        content: `**Software Updates:**
- We regularly release updates to improve functionality and security
- Updates are available to active license holders
- We recommend keeping your plugins updated to the latest version

**Maintenance:**
- We may perform scheduled maintenance that temporarily affects service availability
- We will provide notice of planned maintenance when possible
- Emergency maintenance may occur without prior notice`
    },
    {
        id: 'intellectual-property',
        title: '8. Intellectual Property',
        content: `**Ownership:**
- The WPBun name, logo, and branding are our trademarks
- Our website content, documentation, and marketing materials are copyrighted
- Plugin source code is licensed under GPLv3

**Your Rights:**
- You may use our plugins according to the license terms
- You may not claim ownership of our products or their derivatives
- You may not use our trademarks without permission

**Restrictions:**
- Do not remove copyright notices from our products
- Do not redistribute premium products without authorization
- Do not use our branding in a way that suggests endorsement`
    },
    {
        id: 'prohibited-uses',
        title: '9. Prohibited Uses',
        content: `You agree not to use our Services to:

- Violate any applicable laws or regulations
- Infringe upon the rights of others
- Distribute malware, viruses, or harmful code
- Attempt to gain unauthorized access to our systems
- Engage in activities that could damage our reputation
- Resell or redistribute our premium products without authorization
- Use our products for illegal or unethical purposes
- Create competing products using our code as a base (beyond GPLv3 rights)

Violation of these prohibitions may result in immediate termination of your account and license.`
    },
    {
        id: 'disclaimer',
        title: '10. Disclaimer of Warranties',
        content: `OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not warrant that:
- Our Services will be uninterrupted or error-free
- Our products will meet your specific requirements
- Any errors in our products will be corrected
- Our products are compatible with all themes and plugins

To the maximum extent permitted by law, we disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`
    },
    {
        id: 'limitation',
        title: '11. Limitation of Liability',
        content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WPBUN SHALL NOT BE LIABLE FOR:

- Any indirect, incidental, special, consequential, or punitive damages
- Loss of profits, revenue, data, or business opportunities
- Damages resulting from third-party actions
- Damages exceeding the amount paid for the product in question

This limitation applies regardless of the theory of liability and even if we have been advised of the possibility of such damages.`
    },
    {
        id: 'indemnification',
        title: '12. Indemnification',
        content: `You agree to indemnify, defend, and hold harmless WPBun, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:

- Your use of our Services
- Your violation of these Terms
- Your violation of any third-party rights
- Any content you submit or share through our Services`
    },
    {
        id: 'termination',
        title: '13. Termination',
        content: `**By You:**
- You may stop using our Services at any time
- You may request account deletion by contacting support

**By Us:**
- We may suspend or terminate your access for violation of these Terms
- We may discontinue any Service with reasonable notice
- Upon termination, your license to use premium features will be revoked

**Effect of Termination:**
- You may continue using free features of plugins already installed
- You will lose access to premium features and support
- We may delete your account data after a reasonable period`
    },
    {
        id: 'governing-law',
        title: '14. Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved through:
1. Good faith negotiation between the parties
2. Mediation if negotiation fails
3. Binding arbitration or court proceedings in Bangladesh

You consent to the exclusive jurisdiction of the courts located in Bangladesh for any disputes that cannot be resolved through arbitration.`
    },
    {
        id: 'changes',
        title: '15. Changes to Terms',
        content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website.

**Notification:**
- Material changes will be communicated via email to registered users
- Continued use of our Services after changes constitutes acceptance

We encourage you to review these Terms periodically to stay informed of any updates.`
    },
    {
        id: 'contact',
        title: '16. Contact Information',
        content: `If you have any questions about these Terms and Conditions, please contact us:

**Email:** support@wpbun.com
**Business Inquiries:** business@wpbun.com
**Website:** wpbun.com/contact

We will respond to your inquiries within a reasonable timeframe.`
    },
];

const keyPoints = [
    {
        icon: <CheckCircle className="w-5 h-5" />,
        text: 'GPLv3 Licensed Software'
    },
    {
        icon: <CheckCircle className="w-5 h-5" />,
        text: '14-Day Refund Policy'
    },
    {
        icon: <CheckCircle className="w-5 h-5" />,
        text: 'Premium Support Included'
    },
    {
        icon: <CheckCircle className="w-5 h-5" />,
        text: 'Regular Updates'
    },
];

export default function TermsConditions() {
    return (
        <AppLayout>
            <Head title="Terms & Conditions | WPBun" />

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
                            <FileText className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Last Updated: January 2025
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Terms & Conditions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Please read these terms carefully before using WPBun products and services. By using our services, you agree to be bound by these terms.
                        </motion.p>

                        {/* Key Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {keyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 text-sm"
                                >
                                    <span className="text-green-500">{point.icon}</span>
                                    <span className="text-[#070707] font-medium">{point.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-amber-50 border-y border-amber-200">
                <div className="container-custom">
                    <div className="flex items-start gap-4 max-w-4xl mx-auto">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Important Legal Notice</h3>
                            <p className="text-amber-700 text-sm">
                                These Terms and Conditions govern your use of WPBun products and services. By purchasing, downloading, or using our products, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents & Content Section */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sidebar - Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="sticky top-32 bg-[#f5f7f9] rounded-2xl p-6">
                                <h3 className="font-bold text-[#070707] mb-4">Table of Contents</h3>
                                <nav className="space-y-2 max-h-[60vh] overflow-y-auto">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block text-sm text-gray-600 hover:text-[#1f66ff] transition-colors py-1"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="prose prose-lg max-w-none">
                                {sections.map((section, index) => (
                                    <motion.div
                                        key={section.id}
                                        id={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="mb-10 scroll-mt-32"
                                    >
                                        <h2 className="text-2xl font-bold text-[#070707] mb-4 pb-2 border-b border-gray-100">
                                            {section.title}
                                        </h2>
                                        <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                                            {section.content.split('**').map((part, i) =>
                                                i % 2 === 0 ? part : <strong key={i} className="text-[#070707]">{part}</strong>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Policies */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-[#070707] mb-4">Related Policies</h2>
                        <p className="text-gray-600">Review our other policies for complete information</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link
                            href="/privacy-policy"
                            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                        >
                            <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors">Privacy Policy</h3>
                            <p className="text-gray-600 text-sm">How we handle your data</p>
                        </Link>

                        <Link
                            href="/refund-policy"
                            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                        >
                            <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors">Refund Policy</h3>
                            <p className="text-gray-600 text-sm">Our refund terms and process</p>
                        </Link>

                        <Link
                            href="/affiliates-policy"
                            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group"
                        >
                            <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors">Affiliates Policy</h3>
                            <p className="text-gray-600 text-sm">Terms for our affiliate program</p>
                        </Link>
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
                        className="bg-[#070707] rounded-3xl p-12 text-center"
                    >
                        <Mail className="w-12 h-12 mx-auto mb-6 text-[#cdf33b]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Questions About Our Terms?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Our team is here to help clarify any questions you may have about our terms and conditions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold hover:bg-[#d8f655] transition-colors"
                        >
                            Contact Support
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
