import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, MessageCircle, Heart, Star, Globe, Github, Facebook, Youtube, HelpCircle, BookOpen, Zap, ChevronRight, ExternalLink, ChevronDown, Plus, Minus } from 'lucide-react';

const communityStats = [
    { label: 'Community Members', value: '25K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Questions Answered', value: '50K+', icon: <MessageCircle className="w-6 h-6" /> },
    { label: 'Contributors', value: '200+', icon: <Heart className="w-6 h-6" /> },
    { label: 'Countries', value: '100+', icon: <Globe className="w-6 h-6" /> },
];

const communityChannels = [
    {
        name: 'Facebook Group',
        description: 'Join our vibrant Facebook community to connect with other users, share tips, and get help from experienced members.',
        icon: <Facebook className="w-8 h-8" />,
        color: 'bg-[#1877F2]',
        members: '15,000+',
        link: '#',
        linkText: 'Join Group',
        features: ['Daily discussions', 'Expert advice', 'Plugin updates'],
    },
    {
        name: 'Discord Server',
        description: 'Real-time chat with developers and community members. Get instant help and connect with other WordPress enthusiasts.',
        icon: <MessageCircle className="w-8 h-8" />,
        color: 'bg-[#5865F2]',
        members: '5,000+',
        link: '#',
        linkText: 'Join Discord',
        features: ['Real-time chat', 'Developer access', 'Beta testing'],
    },
    {
        name: 'GitHub',
        description: 'Contribute to our open-source projects, report issues, and help improve our plugins for the community.',
        icon: <Github className="w-8 h-8" />,
        color: 'bg-[#333333]',
        members: '1,000+',
        link: '#',
        linkText: 'View GitHub',
        features: ['Open source', 'Bug reports', 'Feature requests'],
    },
    {
        name: 'YouTube Channel',
        description: 'Watch tutorials, feature updates, and WordPress tips on our official YouTube channel.',
        icon: <Youtube className="w-8 h-8" />,
        color: 'bg-[#FF0000]',
        members: '10,000+',
        link: '#',
        linkText: 'Subscribe',
        features: ['Video tutorials', 'Live streams', 'Product demos'],
    },
];

const faqs = [
    {
        question: 'How do I get support for WPBun plugins?',
        answer: 'You can get support through multiple channels: our dedicated support portal, Facebook group, Discord server, or by submitting a ticket through your account dashboard. Our team typically responds within 24 hours.',
    },
    {
        question: 'Are the plugins compatible with my theme?',
        answer: 'Yes! Our plugins are designed to work with any well-coded WordPress theme. They have been tested with popular themes like Astra, GeneratePress, Kadence, Divi, and many more. If you face any compatibility issues, our support team will help you resolve them.',
    },
    {
        question: 'Can I use the plugins on multiple websites?',
        answer: 'Yes, depending on your license. We offer 5-site, 50-site, and unlimited site licenses. Check our pricing page for more details. Agency Bundle customers get unlimited site licenses for all plugins.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'Yes! We offer a 14-day 100% money-back guarantee. If you are not satisfied with our plugins for any reason, we will refund your purchase with no questions asked.',
    },
    {
        question: 'How often are plugins updated?',
        answer: 'We release updates regularly, typically every 2-4 weeks. Updates include new features, bug fixes, security patches, and compatibility improvements with the latest WordPress and WooCommerce versions.',
    },
    {
        question: 'Can I request new features?',
        answer: 'Absolutely! We love hearing from our users. You can submit feature requests through our community channels, support portal, or GitHub. Many of our best features have come from user suggestions.',
    },
];

const resources = [
    {
        title: 'Documentation',
        description: 'Comprehensive guides and tutorials for all plugins',
        icon: <BookOpen className="w-6 h-6" />,
        href: '/documentation',
    },
    {
        title: 'Video Tutorials',
        description: 'Step-by-step visual guides and walkthroughs',
        icon: <Youtube className="w-6 h-6" />,
        href: '/tutorials',
    },
    {
        title: 'Contact Support',
        description: 'Get direct help from our expert team',
        icon: <HelpCircle className="w-6 h-6" />,
        href: '/contact',
    },
];

export default function Community() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <DynamicLayout>
            <Head title="Community - Join 25K+ WordPress Users | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f7f9] to-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <Users className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Join 25,000+ WordPress Enthusiasts
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Join Our Growing
                            <span className="block text-[#1f66ff]">Community</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-12"
                        >
                            Connect with thousands of WordPress developers and enthusiasts. Share ideas, get help, and stay updated with the latest news.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-[#1f66ff]">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-[#070707]">{stat.value}</div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Community Channels */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            CONNECT WITH US
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Platform
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Join our community on your preferred platform and connect with fellow WordPress users.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {communityChannels.map((channel, index) => (
                            <motion.div
                                key={channel.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                                        {channel.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <h3 className="text-xl font-bold text-[#070707]">{channel.name}</h3>
                                            <span className="px-3 py-1 bg-[#1f66ff]/10 text-[#1f66ff] text-xs font-semibold rounded-full">
                                                {channel.members} members
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{channel.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {channel.features.map((feature) => (
                                                <span key={feature} className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={channel.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#1f66ff] font-semibold hover:underline"
                                        >
                                            {channel.linkText}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Find answers to the most common questions about WPBun plugins and services.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="flex items-center justify-between w-full p-6 text-left"
                                    >
                                        <span className="text-lg font-semibold text-[#070707] pr-4">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-[#1f66ff] text-white' : 'bg-[#f5f7f9] text-[#070707]'}`}>
                                            {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
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
                </div>
            </section>

            {/* Quick Resources */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Quick Resources
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Get the help you need with our comprehensive resources.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={resource.href}
                                    className="block bg-[#f5f7f9] rounded-2xl p-8 text-center hover:shadow-lg transition-all group"
                                >
                                    <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                        {resource.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600">{resource.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-100">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-12 h-12 mx-auto mb-6 text-[#1f66ff]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Join 65,000+ happy users and take your WordPress website to the next level with our powerful plugins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 bg-blue-200 text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors"
                            >
                                Explore Products
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold border border-[#1f66ff] hover:bg-blue-100 transition-colors"
                            >
                                View Bundle Deal
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
