import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { Handshake, Percent, Calendar, Clock, CreditCard, Shield, AlertTriangle, CheckCircle, XCircle, Mail, ChevronRight, DollarSign, Cookie } from 'lucide-react';

const commissionStructure = [
    {
        title: 'Standard Commission',
        rate: '25%',
        description: 'Earn 25% commission on every successful referral sale.',
        icon: <Percent className="w-6 h-6" />
    },
    {
        title: 'Cookie Duration',
        rate: '90 Days',
        description: 'Our tracking cookie lasts for 90 days, giving you credit for delayed purchases.',
        icon: <Cookie className="w-6 h-6" />
    },
    {
        title: 'Minimum Payout',
        rate: '$50',
        description: 'Request payment once your balance reaches $50 or more.',
        icon: <CreditCard className="w-6 h-6" />
    },
    {
        title: 'Payment Schedule',
        rate: 'Monthly',
        description: 'Payments are processed on the 15th of each month for the previous month.',
        icon: <Calendar className="w-6 h-6" />
    },
];

const dosAndDonts = {
    dos: [
        'Create honest, helpful content about our products',
        'Use your unique affiliate link for all referrals',
        'Disclose your affiliate relationship clearly',
        'Provide accurate product information',
        'Promote through your own website, blog, or social media',
        'Create comparison articles and tutorials',
        'Share your genuine experience with our products',
        'Follow FTC guidelines for affiliate disclosure'
    ],
    donts: [
        'Use paid ads with our brand keywords (including variations)',
        'Create fake reviews or testimonials',
        'Spam forums, comments, or social media',
        'Misrepresent product features or pricing',
        'Use cookie stuffing or forced clicks',
        'Create multiple accounts to abuse the program',
        'Offer unauthorized discounts or coupon codes',
        'Engage in any fraudulent activity'
    ]
};

const sections = [
    {
        id: 'overview',
        title: '1. Program Overview',
        content: `The WPBun Affiliate Program allows you to earn commissions by referring customers to our products. By joining our program, you become a partner in promoting high-quality WordPress plugins.

**Program Highlights:**
- 25% commission on all successful sales
- 90-day cookie duration
- Monthly payments via PayPal or bank transfer
- Real-time tracking and reporting dashboard
- Access to promotional materials and banners

This policy outlines the terms and conditions that govern your participation in our affiliate program.`
    },
    {
        id: 'eligibility',
        title: '2. Eligibility Requirements',
        content: `To join the WPBun Affiliate Program, you must meet the following requirements:

**Basic Requirements:**
- Be at least 18 years of age
- Have a valid PayPal account or bank account for payments
- Have a website, blog, or active social media presence
- Agree to these Affiliate Program Terms

**Content Requirements:**
- Your platform must not contain illegal, harmful, or objectionable content
- Your content must be relevant to WordPress, web development, or digital marketing
- You must have the authority to operate your platform

We reserve the right to reject or terminate affiliates who do not meet our standards.`
    },
    {
        id: 'commission',
        title: '3. Commission Structure',
        content: `**Commission Rate:**
- All affiliates earn 25% commission on every successful sale
- Commission is calculated on the net sale amount (after any discounts)
- Renewals and upgrades are included in commission calculations

**Qualifying Sales:**
- Sales must be made through your unique affiliate link
- The customer must complete payment successfully
- The sale must not be refunded within our refund period (14 days)

**Non-Qualifying Activities:**
- Self-referrals (purchases made by the affiliate themselves)
- Fraudulent or manipulated transactions
- Sales from customers who previously purchased through another affiliate`
    },
    {
        id: 'cookies',
        title: '4. Cookie Policy & Attribution',
        content: `**Cookie Duration:**
Our affiliate tracking cookie is set for 90 days. This means:
- You receive credit for sales made within 90 days of the initial click
- If a customer clicks your link and purchases later (within 90 days), you earn the commission

**Attribution Rules:**
- First-click attribution is used (the first affiliate link clicked gets credit)
- If a customer clears cookies or uses a different device, tracking may be lost
- Multiple affiliate links from the same affiliate do not extend the cookie duration

**Tracking:**
- Real-time tracking is available in your affiliate dashboard
- Click and conversion data is updated daily
- Pending commissions are displayed until the refund period ends`
    },
    {
        id: 'payment',
        title: '5. Payment Terms',
        content: `**Minimum Payout:**
- The minimum payout threshold is $50 USD
- Balances below $50 will roll over to the next payment period

**Payment Schedule:**
- Payments are processed on the 15th of each month
- Payments are for commissions earned in the previous month
- Allow 3-5 business days for payment processing

**Payment Methods:**
- PayPal (primary method)
- Bank transfer (for amounts over $200, subject to fees)
- Other methods may be available upon request

**Payment Holds:**
- Commissions are held for 30 days to account for refunds
- Pending commissions become available after the hold period

**Taxes:**
- Affiliates are responsible for reporting and paying applicable taxes
- US affiliates may be required to submit W-9 forms for payments over $600`
    },
    {
        id: 'promotional',
        title: '6. Promotional Guidelines',
        content: `**Approved Methods:**
- Content marketing (blogs, tutorials, reviews)
- Email marketing to your own subscribers (not purchased lists)
- Social media promotion
- YouTube videos and podcasts
- Organic SEO

**Prohibited Methods:**
- PPC advertising on brand keywords
- Cookie stuffing or forced clicks
- Pop-ups or pop-unders
- Unsolicited emails (spam)
- False scarcity or urgency tactics
- Fake testimonials or reviews

**Brand Usage:**
- You may use our logos and banners provided in the affiliate dashboard
- Custom promotional materials must be approved before use
- Do not modify our logos or create misleading brand representations`
    },
    {
        id: 'prohibited',
        title: '7. Prohibited Activities',
        content: `The following activities are strictly prohibited and will result in immediate termination:

**Fraud & Manipulation:**
- Creating fake accounts or orders
- Using bots or automated clicking
- Manipulating tracking systems
- Self-referrals or referrals from family members

**Misleading Practices:**
- Making false claims about products
- Creating fake comparison sites
- Impersonating WPBun or our employees
- Using deceptive redirects

**Spam & Abuse:**
- Mass email campaigns to purchased lists
- Excessive social media posting (spam)
- Forum and comment spam
- Negative SEO tactics against competitors

Violation of these rules will result in immediate termination and forfeiture of pending commissions.`
    },
    {
        id: 'termination',
        title: '8. Termination',
        content: `**Termination by Affiliate:**
- You may terminate your participation at any time
- Contact us to close your affiliate account
- Pending commissions will be paid out if they meet the minimum threshold

**Termination by WPBun:**
- We may terminate your account for policy violations
- We may terminate the program with 30 days notice
- Terminated accounts lose access to promotional materials

**Effect of Termination:**
- Remove all affiliate links from your platforms
- Remove our logos and promotional materials
- Unpaid commissions may be forfeited if termination is due to policy violations`
    },
    {
        id: 'liability',
        title: '9. Limitation of Liability',
        content: `**Disclaimer:**
- We are not liable for any indirect or consequential damages
- Our maximum liability is limited to commissions owed to you
- We do not guarantee any specific earnings

**Indemnification:**
You agree to indemnify WPBun against any claims arising from:
- Your promotional activities
- Violations of these terms
- Third-party claims related to your affiliate marketing

**Changes to Program:**
We reserve the right to modify commission rates, cookie duration, and other program terms with reasonable notice.`
    },
    {
        id: 'contact',
        title: '10. Contact Information',
        content: `For questions about our Affiliate Program, please contact us:

**Affiliate Support:**
Email: affiliates@wpbun.com

**General Support:**
Email: support@wpbun.com

**Response Time:**
- Affiliate inquiries: Within 24-48 business hours
- Payment issues: Within 24 business hours

Join our affiliate program today and start earning!`
    },
];

export default function AffiliatesPolicy() {
    return (
        <AppLayout>
            <Head title="Affiliate Program Policy | WPBun" />

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
                            <Handshake className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Affiliate Program Terms
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Affiliate Program Policy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Everything you need to know about our affiliate program. Earn 25% commission by promoting WPBun products.
                        </motion.p>

                        {/* Commission Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {commissionStructure.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                                >
                                    <div className="w-12 h-12 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                        {item.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-[#1f66ff] mb-1">{item.rate}</div>
                                    <h3 className="font-semibold text-[#070707] text-sm mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-xs">{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Do's and Don'ts Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            GUIDELINES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Do's and Don'ts
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow these guidelines to maintain a successful affiliate partnership.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Do's */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-green-50 rounded-2xl p-8 border border-green-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800">Do's</h3>
                            </div>
                            <ul className="space-y-3">
                                {dosAndDonts.dos.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-green-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Don'ts */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-50 rounded-2xl p-8 border border-red-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-800">Don'ts</h3>
                            </div>
                            <ul className="space-y-3">
                                {dosAndDonts.donts.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-red-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Policy Content */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sidebar - Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="sticky top-32 bg-white rounded-2xl p-6 shadow-sm">
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
                        <DollarSign className="w-12 h-12 mx-auto mb-6 text-[#1f66ff]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Ready to Start Earning?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Join our affiliate program today and start earning 25% commission on every sale you refer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/affiliates"
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                            >
                                Join Affiliate Program
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border border-blue-200"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
