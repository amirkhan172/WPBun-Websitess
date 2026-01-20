import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    PlusCircle, Check, Star, Users, Download, Play, Zap, Shield, ArrowRight,
    Type, Upload, Image, Calendar, Palette, Settings, ChevronDown, ChevronUp,
    FileText, Hash, Mail, List, ToggleLeft, Clock, Heading, AlignLeft
} from 'lucide-react';

// Field Types
const fieldTypes = [
    { name: 'Text Field', icon: <Type className="w-5 h-5" />, description: 'Single line text input' },
    { name: 'Textarea', icon: <AlignLeft className="w-5 h-5" />, description: 'Multi-line text area' },
    { name: 'Number Input', icon: <Hash className="w-5 h-5" />, description: 'Numeric values only' },
    { name: 'File Upload', icon: <Upload className="w-5 h-5" />, description: 'Upload any file type' },
    { name: 'Image Upload', icon: <Image className="w-5 h-5" />, description: 'Image files only' },
    { name: 'Color Picker', icon: <Palette className="w-5 h-5" />, description: 'Choose exact colors' },
    { name: 'Date Picker', icon: <Calendar className="w-5 h-5" />, description: 'Calendar selection' },
    { name: 'Dropdown', icon: <List className="w-5 h-5" />, description: 'Select from options' },
];

// Core Features
const coreFeatures = [
    {
        icon: <Type className="w-6 h-6" />,
        title: 'Text & Textarea Fields',
        description: 'Add custom text fields for personalization, special instructions, and custom messages.',
    },
    {
        icon: <Upload className="w-6 h-6" />,
        title: 'File & Image Uploads',
        description: 'Allow customers to upload files, images, and documents for customized products.',
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: 'Color Picker',
        description: 'Let customers choose exact colors using a visual color picker for customizable products.',
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        title: 'Date & Time Picker',
        description: 'Perfect for bookings, appointments, delivery scheduling, and event-based products.',
    },
    {
        icon: <Image className="w-6 h-6" />,
        title: 'Image & Button Swatches',
        description: 'Visual swatches for colors, patterns, and product variations. Beautiful and intuitive.',
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: 'Conditional Logic',
        description: 'Show/hide fields based on customer selections. Create dynamic product forms.',
    },
];

// Use Cases
const useCases = [
    'Personalized Gifts',
    'Custom Print Products',
    'Made-to-Order Items',
    'Booking Services',
    'Engraved Products',
    'Custom Apparel',
    'Event Tickets',
    'Gift Wrapping',
];

// Testimonials with source
const testimonials = [
    {
        name: 'Lisa Wang',
        role: 'Print Shop Owner',
        quote: 'WowAddons made it easy to offer custom printing options. Our customers love the personalization features and our average order value increased significantly!',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Tom Bradley',
        role: 'Gift Store Owner',
        quote: 'The file upload feature is perfect for our personalized gift business. Customers can easily upload their designs and we deliver exactly what they want.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Nina Patel',
        role: 'WooCommerce Developer',
        quote: 'Clean code, great performance, and excellent conditional logic. This is the most well-built product addons plugin I\'ve worked with.',
        rating: 5,
        source: 'Trustpilot',
    },
];

// Pricing Plans
const yearlyPlans = [
    { name: '1 Site', price: 39, originalPrice: 69, discount: 43, features: ['1 Site License', 'All Field Types', '1 Year Updates', 'Priority Support'] },
    { name: '5 Sites', price: 79, originalPrice: 139, discount: 43, popular: true, features: ['5 Site Licenses', 'All Field Types', '1 Year Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 159, originalPrice: 279, discount: 43, features: ['Unlimited Sites', 'All Field Types', '1 Year Updates', 'Priority Support'] },
];

const lifetimePlans = [
    { name: '1 Site', price: 99, originalPrice: 169, discount: 41, features: ['1 Site License', 'All Field Types', 'Lifetime Updates', 'Priority Support'] },
    { name: '5 Sites', price: 149, originalPrice: 279, discount: 46, popular: true, features: ['5 Site Licenses', 'All Field Types', 'Lifetime Updates', 'Priority Support'] },
    { name: 'Unlimited', price: 249, originalPrice: 549, discount: 55, features: ['Unlimited Sites', 'All Field Types', 'Lifetime Updates', 'Priority Support'] },
];

// FAQs
const faqs = [
    {
        question: 'What types of fields can I add to products?',
        answer: 'WowAddons supports 16+ field types including text fields, textareas, number inputs, file uploads, image uploads, color pickers, date pickers, time pickers, dropdowns, radio buttons, checkboxes, image swatches, button swatches, and more.',
    },
    {
        question: 'Can I charge extra for product add-ons?',
        answer: 'Yes! You can set fixed prices, percentage-based prices, or quantity-based pricing for any add-on field. Perfect for upselling customization options.',
    },
    {
        question: 'Does it support conditional logic?',
        answer: 'Yes, WowAddons includes powerful conditional logic. You can show or hide fields based on other field selections, creating dynamic and intuitive product forms.',
    },
    {
        question: 'Will add-ons show in order emails and admin?',
        answer: 'Absolutely! All customer selections and uploads are saved with the order and displayed in order emails, admin order details, and customer account pages.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 14-day money-back guarantee. If WowAddons doesn\'t meet your needs, we\'ll refund your purchase, no questions asked.',
    },
];

export default function WowAddons() {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const currentPlans = isYearly ? yearlyPlans : lifetimePlans;

    return (
        <AppLayout>
            <Head title="WowAddons - Product Add-ons for WooCommerce | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f0fdf4] to-white overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                        >
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#070707] font-medium">
                                4.8/5 based on 150+ reviews on Trustpilot
                            </span>
                        </motion.div>

                        {/* Logo & Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <PlusCircle className="w-8 h-8" />
                            </div>
                            <div className="text-left">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-3xl font-bold text-[#070707]">WowAddons</h1>
                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold uppercase rounded-full">Hot</span>
                                </div>
                                <p className="text-green-600 font-medium">Product Add-ons</p>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight"
                        >
                            Add Custom Options to
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                Your Products
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Add custom fields, file uploads, color pickers, and 16+ field types to your WooCommerce products. Perfect for personalized products and custom orders.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-green-600" />
                                <span className="font-bold text-[#070707]">10K+</span>
                                <span className="text-gray-600">Happy Users</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold text-[#070707]">150+</span>
                                <span className="text-gray-600">5-Star Ratings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-green-600" />
                                <span className="font-bold text-[#070707]">100K+</span>
                                <span className="text-gray-600">Downloads</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/pricing"
                                className="bg-[#ff176b] hover:bg-[#e01560] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25"
                            >
                                Buy Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="bg-white border-2 border-gray-200 text-[#070707] px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-colors inline-flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Try Live Demo
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Field Types Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                            16+ FIELD TYPES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Every Field Type You Need
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From simple text fields to complex file uploads
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {fieldTypes.map((field, index) => (
                            <motion.div
                                key={field.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f7f9] rounded-xl p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {field.icon}
                                </div>
                                <h3 className="font-bold text-[#070707] mb-1">{field.name}</h3>
                                <p className="text-sm text-gray-600">{field.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-4">
                            POWERFUL FEATURES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Everything for Custom Products
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1f66ff] to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - Dark Section */}
            <section className="py-20 bg-gradient-to-br from-[#070707] to-gray-900 text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-white/10 text-green-400 rounded-full text-sm font-semibold mb-4">
                            USE CASES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Perfect For Any Custom Product
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Join 10,000+ stores using WowAddons for custom products
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={useCase}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3"
                            >
                                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-sm font-medium">{useCase}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Trusted by 10,000+ Store Owners
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                                        {testimonial.source}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-[#070707]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>

                        {/* Toggle */}
                        <div className="inline-flex items-center bg-white rounded-full p-1 mt-6 shadow-sm">
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    isYearly ? 'bg-[#070707] text-white' : 'text-gray-600 hover:text-[#070707]'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    !isYearly ? 'bg-[#070707] text-white' : 'text-gray-600 hover:text-[#070707]'
                                }`}
                            >
                                Lifetime
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {currentPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-6 border-2 ${
                                    plan.popular ? 'border-[#ff176b] shadow-xl' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff176b] text-white text-xs font-bold px-3 py-1 rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-[#070707] mb-2">{plan.name}</h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-4xl font-bold text-[#070707]">${plan.price}</span>
                                        <div className="text-left">
                                            <span className="text-gray-400 line-through text-sm block">${plan.originalPrice}</span>
                                            <span className="text-green-600 text-xs font-semibold">{plan.discount}% OFF</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {isYearly ? 'per year' : 'one-time payment'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                        plan.popular
                                            ? 'bg-[#ff176b] text-white hover:bg-[#e01560]'
                                            : 'bg-[#070707] text-white hover:bg-gray-800'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Agency Bundle CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-r from-[#070707] to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Zap className="w-6 h-6 text-[#cdf33b]" />
                            <span className="text-[#cdf33b] font-semibold">BEST VALUE</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Get WowAddons + 9 More Plugins
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. Get all 10 premium plugins for unlimited sites at one incredible price.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-4xl font-bold">$749</span>
                            <span className="text-gray-400 line-through">$3,500+</span>
                            <span className="bg-[#cdf33b] text-[#070707] px-3 py-1 rounded-full text-sm font-bold">
                                LIFETIME
                            </span>
                        </div>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-lg font-bold hover:bg-[#bfe435] transition-colors"
                        >
                            View Agency Bundle
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
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
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-[#070707]">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                        <Shield className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-green-100 max-w-2xl mx-auto mb-8">
                            Try WowAddons risk-free. If it doesn't meet your needs within 14 days, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Get WowAddons Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
