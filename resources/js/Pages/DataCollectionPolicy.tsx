import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { Database, Eye, Shield, Lock, Server, Cookie, UserCheck, Settings, Mail, ChevronRight, AlertCircle, Globe, Smartphone } from 'lucide-react';

const dataCategories = [
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: 'Account Information',
        description: 'Data you provide when creating an account',
        items: ['Name and email address', 'Username and password (encrypted)', 'Profile preferences', 'Communication preferences']
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: 'Technical Data',
        description: 'Information collected automatically',
        items: ['IP address', 'Browser type and version', 'Operating system', 'Device information']
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Usage Data',
        description: 'Information about how you use our services',
        items: ['Pages visited', 'Features used', 'Click patterns', 'Time spent on pages']
    },
    {
        icon: <Cookie className="w-6 h-6" />,
        title: 'Cookie Data',
        description: 'Information stored in cookies',
        items: ['Session identifiers', 'Preference settings', 'Authentication tokens', 'Analytics data']
    },
];

const pluginDataCollection = [
    {
        title: 'License Validation',
        description: 'When you activate a premium license, we collect your site URL and license key to verify your subscription.',
        required: true
    },
    {
        title: 'Diagnostic Data',
        description: 'PHP version, WordPress version, active plugins, and theme information to help troubleshoot issues.',
        required: false
    },
    {
        title: 'Usage Statistics',
        description: 'Anonymous plugin feature usage data to help us understand which features are most valuable.',
        required: false
    },
    {
        title: 'Error Logs',
        description: 'Error information when issues occur, helping us identify and fix bugs quickly.',
        required: false
    },
];

const cookieTypes = [
    {
        name: 'Essential Cookies',
        description: 'Required for the website to function properly. These cannot be disabled.',
        examples: ['Session cookies', 'Authentication cookies', 'Security cookies'],
        required: true
    },
    {
        name: 'Functional Cookies',
        description: 'Remember your preferences and personalize your experience.',
        examples: ['Language preferences', 'Theme settings', 'Recently viewed items'],
        required: false
    },
    {
        name: 'Analytics Cookies',
        description: 'Help us understand how visitors interact with our website.',
        examples: ['Google Analytics', 'Page view tracking', 'User flow analysis'],
        required: false
    },
    {
        name: 'Marketing Cookies',
        description: 'Used to deliver relevant advertisements and track ad campaign performance.',
        examples: ['Remarketing cookies', 'Conversion tracking', 'Ad preference cookies'],
        required: false
    },
];

const sections = [
    {
        id: 'overview',
        title: '1. Overview',
        content: `This Data Collection Policy explains what information we collect, why we collect it, and how we use it. We are committed to transparency and protecting your privacy.

This policy applies to:
- Our website (wpbun.com)
- Our WordPress plugins
- Our support and documentation portals
- Any other services we provide

We only collect data that is necessary for providing our services and improving your experience.`
    },
    {
        id: 'what-we-collect',
        title: '2. What We Collect',
        content: `We collect data in several ways:

**Information You Provide:**
- Account registration details
- Payment information (processed by secure third-party providers)
- Support ticket content
- Feedback and survey responses

**Information We Collect Automatically:**
- Device and browser information
- IP address and location (country level)
- Website usage data
- Plugin diagnostic data (when opted in)

**Information from Third Parties:**
- Payment confirmation from payment processors
- Social login data (if you use social sign-in)
- Analytics data from our service providers`
    },
    {
        id: 'plugin-data',
        title: '3. Plugin Data Collection',
        content: `Our WordPress plugins may collect data to provide features and improve our products. Here's what our plugins may collect:

**Required Data:**
- License key and site URL for license validation
- WordPress version for compatibility checks

**Optional Data (with your consent):**
- Plugin usage statistics
- Error logs and diagnostic information
- Feature usage patterns

You can manage data collection preferences in each plugin's settings panel. Opting out of optional data collection will not affect plugin functionality.`
    },
    {
        id: 'purpose',
        title: '4. Purpose of Collection',
        content: `We use collected data for the following purposes:

**Service Delivery:**
- Process purchases and manage subscriptions
- Provide access to premium features
- Deliver customer support

**Improvement:**
- Analyze how our products are used
- Identify and fix bugs
- Develop new features based on user needs

**Communication:**
- Send important product updates
- Respond to support inquiries
- Share promotional offers (with consent)

**Legal Compliance:**
- Comply with applicable laws
- Protect against fraud and abuse
- Enforce our terms of service`
    },
    {
        id: 'cookies',
        title: '5. Cookies and Tracking',
        content: `We use cookies and similar technologies to enhance your experience:

**What are Cookies?**
Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.

**Managing Cookies:**
- You can manage cookie preferences through our cookie consent banner
- Browser settings allow you to block or delete cookies
- Note that blocking essential cookies may affect website functionality

**Do Not Track:**
We respect "Do Not Track" browser settings. When enabled, we limit tracking to essential functions only.`
    },
    {
        id: 'third-party',
        title: '6. Third-Party Services',
        content: `We use trusted third-party services that may collect data:

**Payment Processing:**
- Stripe and PayPal for secure payment handling
- We do not store complete credit card numbers

**Analytics:**
- Google Analytics for website traffic analysis
- We use IP anonymization where available

**Communication:**
- Email service providers for transactional emails
- Help desk software for support tickets

All third-party services are bound by their own privacy policies and data protection obligations.`
    },
    {
        id: 'security',
        title: '7. Data Security',
        content: `We implement robust security measures to protect your data:

**Technical Measures:**
- SSL/TLS encryption for all data transmission
- Encrypted storage for sensitive data
- Regular security audits and updates
- Access controls and authentication

**Organizational Measures:**
- Staff training on data protection
- Limited access on a need-to-know basis
- Incident response procedures
- Regular policy reviews

While we strive to protect your data, no system is completely secure. We encourage you to use strong passwords and protect your account credentials.`
    },
    {
        id: 'retention',
        title: '8. Data Retention',
        content: `We retain data only as long as necessary:

**Account Data:**
- Retained while your account is active
- Deleted within 30 days of account closure (upon request)

**Transaction Data:**
- Retained for 7 years for legal and tax purposes
- Financial records may be retained longer as required by law

**Usage Data:**
- Anonymized after 26 months
- Aggregated statistics may be retained indefinitely

**Support Data:**
- Retained for 3 years after ticket closure
- May be deleted earlier upon request`
    },
    {
        id: 'your-rights',
        title: '9. Your Rights',
        content: `You have rights regarding your personal data:

**Access:**
Request a copy of the personal data we hold about you.

**Correction:**
Request correction of inaccurate or incomplete data.

**Deletion:**
Request deletion of your personal data (subject to legal requirements).

**Portability:**
Request your data in a portable, machine-readable format.

**Objection:**
Object to certain types of data processing.

**Withdrawal:**
Withdraw consent for optional data collection at any time.

To exercise these rights, contact us at privacy@wpbun.com.`
    },
    {
        id: 'updates',
        title: '10. Policy Updates',
        content: `We may update this policy to reflect changes in our practices or legal requirements.

**Notification:**
- Material changes will be announced via email
- The "Last Updated" date will be revised
- Continued use after changes constitutes acceptance

**Review:**
We encourage you to review this policy periodically.

**Questions:**
Contact us at privacy@wpbun.com with any questions about this policy.`
    },
];

export default function DataCollectionPolicy() {
    return (
        <AppLayout>
            <Head title="Data Collection Policy | WPBun" />

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
                            <Database className="w-4 h-4 text-[#1f66ff]" />
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
                            Data Collection Policy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Transparency about what data we collect and how we use it. Your trust is important to us.
                        </motion.p>

                        {/* Key Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-sm font-medium text-[#070707]">SSL Encrypted</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <Eye className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-sm font-medium text-[#070707]">Transparent</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <UserCheck className="w-5 h-5 text-purple-600" />
                                </div>
                                <p className="text-sm font-medium text-[#070707]">User Control</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <Lock className="w-5 h-5 text-orange-600" />
                                </div>
                                <p className="text-sm font-medium text-[#070707]">Secure Storage</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Data Categories Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            DATA CATEGORIES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Types of Data We Collect
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We collect different types of data to provide and improve our services.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dataCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-6"
                            >
                                <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#1f66ff]">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] text-lg mb-2">{category.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                                <ul className="space-y-2">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-[#1f66ff] rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plugin Data Collection */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            PLUGIN DATA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Plugin Data Collection
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our WordPress plugins may collect data to provide features and improve performance.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {pluginDataCollection.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-[#070707]">{item.title}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        item.required
                                            ? 'bg-red-100 text-red-600'
                                            : 'bg-green-100 text-green-600'
                                    }`}>
                                        {item.required ? 'Required' : 'Optional'}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto"
                    >
                        <div className="flex items-start gap-4">
                            <Settings className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-1">Manage Your Preferences</h4>
                                <p className="text-blue-700 text-sm">
                                    You can manage data collection preferences in each plugin's settings panel. Go to your WordPress dashboard, navigate to the plugin settings, and look for the "Data & Privacy" section.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cookie Types */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-6">
                            COOKIES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Cookie Usage
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We use different types of cookies to enhance your experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {cookieTypes.map((cookie, index) => (
                            <motion.div
                                key={cookie.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-xl p-6"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-[#070707] text-lg">{cookie.name}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        cookie.required
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {cookie.required ? 'Always Active' : 'Optional'}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{cookie.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cookie.examples.map((example, i) => (
                                        <span key={i} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Policy Content */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="sticky top-32 bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-[#070707] mb-4">Full Policy</h3>
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
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                {sections.map((section, index) => (
                                    <motion.div
                                        key={section.id}
                                        id={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="mb-10 scroll-mt-32 last:mb-0"
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
                            Questions About Our Data Practices?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            We're committed to transparency. Contact our privacy team if you have any questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-blue-200 text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors"
                            >
                                Contact Privacy Team
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
