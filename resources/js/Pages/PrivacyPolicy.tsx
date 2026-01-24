import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail, ChevronRight } from 'lucide-react';

const sections = [
    {
        id: 'introduction',
        title: '1. Introduction',
        content: `Welcome to WPBun ("Company," "we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website wpbun.com and use our products and services.

By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access the site or use our services.`
    },
    {
        id: 'company-info',
        title: '2. Company Information',
        content: `WPBun is a WordPress plugin development company that creates premium solutions for WordPress and WooCommerce users worldwide.

**Contact Information:**
- Website: wpbun.com
- Email: support@wpbun.com
- Business Email: business@wpbun.com

Our products include PostX, WowStore, WowRevenue, WowAddons, WholesaleX, WowOptin, WowShipping, and the Agency Bundle.`
    },
    {
        id: 'data-collection',
        title: '3. Information We Collect',
        content: `We collect information that you provide directly to us:

**Personal Information:**
- Name and email address when you register an account
- Payment information when you make a purchase (processed securely via third-party payment processors)
- Contact information when you reach out to our support team
- Profile information if you create an account

**Automatically Collected Information:**
- IP address and browser type
- Device information and operating system
- Pages visited and time spent on our website
- Referring website addresses
- Plugin usage statistics (if opted in)

**Cookies and Tracking Technologies:**
We use cookies and similar technologies to enhance your experience, analyze site traffic, and for marketing purposes. You can manage cookie preferences through your browser settings.`
    },
    {
        id: 'data-usage',
        title: '4. How We Use Your Information',
        content: `We use the information we collect to:

- Process transactions and send related information
- Provide, maintain, and improve our products and services
- Send you technical notices, updates, and support messages
- Respond to your comments, questions, and customer service requests
- Communicate with you about products, services, and promotional offers
- Monitor and analyze trends, usage, and activities
- Detect, investigate, and prevent fraudulent transactions and abuse
- Personalize and improve your experience
- Comply with legal obligations`
    },
    {
        id: 'data-sharing',
        title: '5. Information Sharing and Disclosure',
        content: `We may share your information in the following situations:

**Service Providers:** We may share your information with third-party vendors, consultants, and service providers who need access to such information to carry out work on our behalf.

**Business Transfers:** If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.

**Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities.

**With Your Consent:** We may share your information for any other purpose with your consent.

We do not sell your personal information to third parties.`
    },
    {
        id: 'data-security',
        title: '6. Data Security',
        content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- SSL encryption for data transmission
- Secure data storage with access controls
- Regular security audits and updates
- Employee training on data protection

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
        id: 'your-rights',
        title: '7. Your Rights and Choices',
        content: `Depending on your location, you may have certain rights regarding your personal information:

**Access:** You can request access to the personal information we hold about you.

**Correction:** You can request that we correct any inaccurate or incomplete information.

**Deletion:** You can request that we delete your personal information, subject to certain exceptions.

**Opt-Out:** You can opt out of receiving marketing communications from us at any time.

**Data Portability:** You can request a copy of your data in a portable format.

To exercise these rights, please contact us at support@wpbun.com.`
    },
    {
        id: 'retention',
        title: '8. Data Retention',
        content: `We retain your personal information for as long as necessary to:

- Provide our services to you
- Comply with legal obligations
- Resolve disputes and enforce our agreements
- Maintain business records for legitimate purposes

When we no longer need your personal information, we will securely delete or anonymize it.`
    },
    {
        id: 'international',
        title: '9. International Data Transfers',
        content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.

We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy when transferred internationally.`
    },
    {
        id: 'children',
        title: '10. Children\'s Privacy',
        content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.`
    },
    {
        id: 'changes',
        title: '11. Changes to This Policy',
        content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
    },
    {
        id: 'contact',
        title: '12. Contact Us',
        content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** support@wpbun.com
**Business Inquiries:** business@wpbun.com
**Website:** wpbun.com/contact

We will respond to your inquiries within a reasonable timeframe.`
    },
];

const highlights = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Data Protection',
        description: 'Your data is protected with industry-standard encryption and security measures.'
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: 'Secure Storage',
        description: 'We use secure servers and strict access controls to protect your information.'
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: 'Transparency',
        description: 'We are transparent about what data we collect and how we use it.'
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: 'Your Control',
        description: 'You have the right to access, correct, or delete your personal data.'
    },
];

export default function PrivacyPolicy() {
    return (
        <DynamicLayout>
            <Head title="Privacy Policy | WPBun" />

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
                            <Shield className="w-4 h-4 text-[#1f66ff]" />
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
                            Privacy Policy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use WPBun products and services.
                        </motion.p>

                        {/* Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {highlights.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-[#070707] text-sm mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-xs">{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
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
                                <nav className="space-y-2">
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
                            Have Questions About Your Privacy?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            We're committed to transparency. If you have any questions about this policy or how we handle your data, please reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                            >
                                Contact Us
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/data-collection-policy"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                            >
                                Data Collection Policy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
