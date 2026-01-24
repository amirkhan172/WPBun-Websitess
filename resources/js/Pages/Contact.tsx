import { Head, Link } from '@inertiajs/react';
import DynamicLayout from '@/Layouts/DynamicLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Users, FileText, Upload, Send, ExternalLink, Headphones, Clock, Star, ChevronRight, BookOpen, Youtube } from 'lucide-react';

const productOptions = [
    'PostX',
    'WowStore',
    'WowRevenue',
    'WowAddons',
    'WholesaleX',
    'WowOptin',
    'WowShipping',
    'Agency Bundle',
    'Others',
];

const supportOptions = [
    {
        title: 'Pre-Sales Questions',
        description: 'Have questions before purchasing? We\'re here to help you choose the right product.',
        icon: <MessageCircle className="w-6 h-6" />,
        href: '#contact-form',
    },
    {
        title: 'Technical Support',
        description: 'Need help with installation, configuration, or troubleshooting? Our experts are ready.',
        icon: <Headphones className="w-6 h-6" />,
        href: '#contact-form',
    },
    {
        title: 'Feature Requests',
        description: 'Have ideas for new features? We love hearing from our users.',
        icon: <Star className="w-6 h-6" />,
        href: '#contact-form',
    },
];

const quickResources = [
    {
        title: 'Documentation',
        description: 'Detailed guides for all plugins',
        icon: <BookOpen className="w-6 h-6" />,
        href: '/documentation',
    },
    {
        title: 'Video Tutorials',
        description: 'Step-by-step visual guides',
        icon: <Youtube className="w-6 h-6" />,
        href: '/tutorials',
    },
    {
        title: 'Community',
        description: 'Join our user community',
        icon: <Users className="w-6 h-6" />,
        href: '/community',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        product: '',
        subject: '',
        message: '',
    });
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle form submission
        console.log('Form submitted:', formData, file);
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <DynamicLayout>
            <Head title="Contact Us - Get Help & Support | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-[#f5f7f9] to-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <Clock className="w-4 h-4 text-[#1f66ff]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Average Response Time: Under 24 Hours
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Get in touch with
                            <span className="block text-[#1f66ff]">WPXPO</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Stay ahead of the curve with actionable guides, product updates, and behind-the-scenes stories from the team building WPXPO. We can't wait to hear from you!
                        </motion.p>

                        {/* Support Options */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {supportOptions.map((option, index) => (
                                <a
                                    key={option.title}
                                    href={option.href}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#1f66ff]/20 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                        {option.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#070707] mb-2">{option.title}</h3>
                                    <p className="text-gray-600 text-sm">{option.description}</p>
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form - Takes 3 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-[#070707] mb-2">Send us a message</h2>
                                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-[#070707] mb-2">
                                                First Name <span className="text-[#ff176b]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-[#070707] mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#070707] mb-2">
                                            Email Address <span className="text-[#ff176b]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="product" className="block text-sm font-semibold text-[#070707] mb-2">
                                                Related Product
                                            </label>
                                            <select
                                                id="product"
                                                name="product"
                                                value={formData.product}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors bg-white"
                                            >
                                                <option value="">Select a product</option>
                                                {productOptions.map((product) => (
                                                    <option key={product} value={product}>
                                                        {product}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold text-[#070707] mb-2">
                                                Subject <span className="text-[#ff176b]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-[#070707] mb-2">
                                            Message <span className="text-[#ff176b]">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors resize-none"
                                            placeholder="Please describe your question or issue in detail..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-[#070707] mb-2">
                                            Attachment (optional)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label
                                                htmlFor="file-upload"
                                                className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#1f66ff] transition-colors"
                                            >
                                                <Upload className="w-5 h-5 text-gray-400" />
                                                <span className="text-gray-500">
                                                    {file ? file.name : 'Click to upload a screenshot or file'}
                                                </span>
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">Max file size: 10MB. Supported formats: PNG, JPG, PDF, ZIP</p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-100 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Sidebar - Takes 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Custom Work Section */}
                            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                                <h3 className="text-xl font-bold mb-4 text-[#070707]">Looking for Custom Work?</h3>
                                <p className="text-gray-600 mb-6">
                                    We build custom WordPress and WooCommerce solutions designed to help your business grow. Our team of 30+ professionals is ready to help.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+8801710437638"
                                        className="flex items-center gap-3 text-[#070707] hover:text-[#1f66ff] transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center text-[#1f66ff]">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <span>+880 1710-437638</span>
                                    </a>
                                    <a
                                        href="https://wa.me/8801710437638"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-[#070707] hover:text-[#1f66ff] transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center text-[#1f66ff]">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <span>WhatsApp Us</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="mailto:business@wpbun.com"
                                        className="flex items-center gap-3 text-[#070707] hover:text-[#1f66ff] transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center text-[#1f66ff]">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <span>business@wpbun.com</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Resources */}
                            <div className="bg-[#f5f7f9] rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-[#070707] mb-4">Quick Resources</h3>
                                <div className="space-y-3">
                                    {quickResources.map((resource) => (
                                        <Link
                                            key={resource.title}
                                            href={resource.href}
                                            className="flex items-center gap-4 p-3 bg-white rounded-xl hover:shadow-md transition-all group"
                                        >
                                            <div className="w-10 h-10 bg-[#1f66ff]/10 rounded-lg flex items-center justify-center text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors flex-shrink-0">
                                                {resource.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#070707] text-sm group-hover:text-[#1f66ff] transition-colors">
                                                    {resource.title}
                                                </h4>
                                                <p className="text-gray-500 text-xs">{resource.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Support Hours */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-[#070707] mb-4">Support Hours</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-semibold text-[#070707]">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-semibold text-[#070707]">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold text-gray-400">Closed</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                                        Timezone: GMT+6 (Bangladesh Standard Time)
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Join Community Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-[#1f66ff]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Join Our Community
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Connect with 25,000+ WordPress developers and enthusiasts. Share ideas, get help, and stay updated with the latest news.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/community"
                                className="inline-flex items-center justify-center gap-2 bg-blue-200 text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors"
                            >
                                <Users className="w-5 h-5" />
                                Join Community
                            </Link>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold border border-[#1f66ff] hover:bg-blue-100 transition-colors"
                            >
                                Join Facebook Group
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </DynamicLayout>
    );
}
