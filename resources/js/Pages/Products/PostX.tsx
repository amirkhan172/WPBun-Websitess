import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    LayoutGrid, Check, Star, Users, Download, Play, ChevronRight, Zap, Shield,
    ArrowRight, Blocks, Layers, FileText, Palette, Globe, Code, Sparkles,
    Search, List, SlidersHorizontal, Type, Image, Table, Share2, BarChart,
    Monitor, Smartphone, Tablet, ChevronDown, ChevronUp, MousePointerClick
} from 'lucide-react';

const trustStats = [
    { value: '40K+', label: 'Happy Users' },
    { value: '4.9/5', label: 'Trustpilot Rating' },
    { value: '350+', label: 'Reviews' },
    { value: '500K+', label: 'Downloads' },
];

const coreFeatures = [
    {
        title: 'Drag, Drop, and Design',
        description: 'Build stunning layouts with our intuitive Gutenberg builder. No coding required.',
        icon: <Blocks className="w-8 h-8" />,
    },
    {
        title: 'Ready-Made Templates',
        description: 'Save up to 80% of development time with 100+ pre-built starter templates.',
        icon: <Layers className="w-8 h-8" />,
    },
    {
        title: 'Customize Every Detail',
        description: 'Full control over colors, typography, spacing, and every design element.',
        icon: <Palette className="w-8 h-8" />,
    },
    {
        title: 'Powerful Query Builder',
        description: 'Display posts exactly how you want with advanced filtering options.',
        icon: <Search className="w-8 h-8" />,
    },
];

const nicheTemplates = [
    { name: 'News Website', image: 'N', color: 'from-blue-500 to-blue-700' },
    { name: 'Magazine Website', image: 'M', color: 'from-purple-500 to-purple-700' },
    { name: 'Gaming Blog', image: 'G', color: 'from-red-500 to-red-700' },
    { name: 'Food Blog', image: 'F', color: 'from-orange-500 to-orange-700' },
    { name: 'Travel Blog', image: 'T', color: 'from-cyan-500 to-cyan-700' },
    { name: 'Sports News', image: 'S', color: 'from-green-500 to-green-700' },
    { name: 'Tech Blog', image: 'T', color: 'from-indigo-500 to-indigo-700' },
    { name: 'Personal Blog', image: 'P', color: 'from-pink-500 to-pink-700' },
];

const blockFeatures = [
    { name: 'Post Grid', description: '15+ grid layouts for displaying posts beautifully', icon: <LayoutGrid className="w-6 h-6" /> },
    { name: 'Post List', description: '10+ list styles for news and blog layouts', icon: <List className="w-6 h-6" /> },
    { name: 'Post Slider', description: '8+ slider designs with touch support', icon: <SlidersHorizontal className="w-6 h-6" /> },
    { name: 'Heading Blocks', description: 'Stylish headings with multiple designs', icon: <Type className="w-6 h-6" /> },
    { name: 'Image Gallery', description: 'Beautiful galleries with lightbox support', icon: <Image className="w-6 h-6" />, badge: 'New' },
    { name: 'Table of Contents', description: 'Auto-generated TOC for long articles', icon: <Table className="w-6 h-6" /> },
    { name: 'Social Share', description: 'Stylish social sharing buttons', icon: <Share2 className="w-6 h-6" /> },
    { name: 'Progress Bar', description: 'Reading progress indicators', icon: <BarChart className="w-6 h-6" /> },
];

const dynamicPages = [
    { name: 'Single Post/Page', description: 'Design custom single post templates' },
    { name: 'Archive Pages', description: 'Create beautiful archive layouts' },
    { name: 'Category Pages', description: 'Custom category page designs' },
    { name: 'Search Results', description: 'Styled search result pages' },
    { name: 'Author Pages', description: 'Author profile page templates' },
    { name: 'Tag Pages', description: 'Custom tag archive designs' },
];

const exclusiveFeatures = [
    { name: 'Advanced Post Filters', description: 'Filter posts by category, tag, author, and custom fields' },
    { name: 'Ajax Pagination', description: 'Load more, infinite scroll, and numbered pagination' },
    { name: 'Query Builder', description: 'Build complex queries without code' },
    { name: 'News Ticker', description: 'Breaking news ticker with multiple styles' },
    { name: 'Advanced Search', description: 'Search with filters and live results' },
    { name: 'Dynamic Content', description: 'Display content based on conditions' },
];

const testimonials = [
    {
        name: 'Hannah Zribi',
        role: 'WordPress Developer',
        quote: 'The support is exceptional: they answered my question in less than 24 hours with a good explanation and solution.',
        rating: 5,
        source: 'Trustpilot',
    },
    {
        name: 'Mark Thompson',
        role: 'News Portal Owner',
        quote: 'PostX transformed my news website completely. The blocks are powerful and incredibly easy to customize.',
        rating: 5,
        source: 'WordPress.org',
    },
    {
        name: 'Sarah Johnson',
        role: 'Content Creator',
        quote: 'Best investment for my blog. The templates saved me weeks of work and the results are stunning.',
        rating: 5,
        source: 'Trustpilot',
    },
];

const pricingPlans = [
    { name: '1 Site', price: 39, originalPrice: 49, period: 'year', discount: '20%', type: 'yearly' },
    { name: '5 Sites', price: 69, originalPrice: 99, period: 'year', discount: '30%', type: 'yearly' },
    { name: 'Unlimited', price: 98, originalPrice: 179, period: 'year', discount: '45%', type: 'yearly', popular: true },
    { name: '1 Site', price: 111, originalPrice: 148, period: 'lifetime', discount: '25%', type: 'lifetime' },
    { name: '5 Sites', price: 161, originalPrice: 248, period: 'lifetime', discount: '35%', type: 'lifetime' },
    { name: 'Unlimited', price: 224, originalPrice: 498, period: 'lifetime', discount: '55%', type: 'lifetime', popular: true },
];

const faqs = [
    {
        question: 'Is PostX compatible with the Gutenberg editor?',
        answer: 'Yes! PostX is built specifically for Gutenberg. All blocks are native Gutenberg blocks that work seamlessly with the WordPress block editor.',
    },
    {
        question: 'Does PostX support AJAX filtering?',
        answer: 'Absolutely! PostX includes powerful AJAX filtering options including category filters, tag filters, and custom taxonomy filters without page reload.',
    },
    {
        question: 'Is PostX SEO optimized?',
        answer: 'Yes, PostX is fully SEO optimized with clean code, proper heading structure, schema markup support, and fast loading times.',
    },
    {
        question: 'Does PostX work with Full Site Editing?',
        answer: 'Yes! PostX fully supports WordPress Full Site Editing (FSE) and works with block themes for complete site customization.',
    },
];

export default function PostX() {
    const [pricingType, setPricingType] = useState<'yearly' | 'lifetime'>('yearly');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredPricing = pricingPlans.filter(plan => plan.type === pricingType);

    return (
        <AppLayout>
            <Head title="PostX - WordPress Post Grid Plugin & Gutenberg Blocks | WPBun" />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-white via-blue-50/50 to-[#d4eaff]/30 relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-700">4.9/5 based on 350+ reviews on Trustpilot</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6 leading-tight">
                                WordPress Post Grid Plugin &<br />
                                <span className="text-[#1f66ff]">Gutenberg Blocks</span> For Your Site
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Create stunning news portals, magazines, and blogs with 50+ Gutenberg blocks,
                                100+ templates, and a powerful query builder. No coding required.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center gap-8 mb-10">
                                {trustStats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-[#070707]">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="#pricing"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff176b] text-white font-semibold rounded-lg hover:bg-[#e0155f] transition-colors"
                                >
                                    Buy Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#070707] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#1f66ff] hover:text-[#1f66ff] transition-colors">
                                    <Play className="w-5 h-5" />
                                    Try Live Demo
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Design Modern News, Magazine, or Blogging Sites!
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to create professional content-driven websites
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5faff] border border-[#add5ff] rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#070707] mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Niche Templates */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Templates for Every Niche
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Start with professionally designed templates for your specific industry
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {nicheTemplates.map((template, index) => (
                            <motion.div
                                key={template.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group cursor-pointer"
                            >
                                <div className={`aspect-square bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center text-white text-3xl font-bold mb-2 group-hover:scale-105 transition-transform`}>
                                    {template.image}
                                </div>
                                <p className="text-sm text-center text-gray-700 font-medium">{template.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 50+ Blocks Showcase */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-4">
                            <Sparkles className="w-4 h-4" />
                            50+ Gutenberg Blocks
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Extensive Block Collection
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Build any layout imaginable with our comprehensive block library
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blockFeatures.map((block, index) => (
                            <motion.div
                                key={block.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-[#1f66ff]/30 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#f5faff] rounded-lg flex items-center justify-center text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                        {block.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-[#070707]">{block.name}</h3>
                                            {block.badge && (
                                                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-600 text-xs font-bold rounded-full">
                                                    {block.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500">{block.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Site Builder */}
            <section className="py-20 bg-gradient-to-br from-[#070707] to-[#1a1a2e] text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Dynamic Site Builder
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Build and customize every page template on your site
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dynamicPages.map((page, index) => (
                            <motion.div
                                key={page.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#1f66ff] rounded-lg flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{page.name}</h3>
                                        <p className="text-sm text-gray-400">{page.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusive Features */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Exclusive Pro Features
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {exclusiveFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4"
                            >
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#070707] mb-1">{feature.name}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Trusted by 40K+ Users
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
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-[#070707]">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{testimonial.source}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-4">
                            <Sparkles className="w-4 h-4" />
                            Special Offer
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Choose Your Plan
                        </h2>

                        {/* Pricing Toggle */}
                        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mt-4">
                            <button
                                onClick={() => setPricingType('yearly')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    pricingType === 'yearly' ? 'bg-[#1f66ff] text-white' : 'text-gray-600'
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setPricingType('lifetime')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    pricingType === 'lifetime' ? 'bg-[#1f66ff] text-white' : 'text-gray-600'
                                }`}
                            >
                                Lifetime
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {filteredPricing.map((plan, index) => (
                            <motion.div
                                key={`${plan.name}-${plan.type}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-8 ${
                                    plan.popular
                                        ? 'ring-2 ring-[#ff176b] shadow-xl'
                                        : 'border border-gray-200 shadow-sm'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ff176b] text-white text-sm font-semibold rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-[#070707] mb-2">{plan.name}</h3>
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-4xl font-bold text-[#070707]">${plan.price}</span>
                                        <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                        Save {plan.discount}
                                    </div>
                                    <p className="text-gray-500 mt-2">
                                        {plan.period === 'lifetime' ? 'One-time payment' : 'Per year'}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {['37+ Starter Sites', '50+ Gutenberg Blocks', '250+ Patterns & Templates', 'Dynamic Site Builder', 'All Pro Features', `${plan.period === 'lifetime' ? 'Lifetime' : '1 Year'} Updates & Support`].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-600">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                    plan.popular
                                        ? 'bg-[#ff176b] text-white hover:bg-[#e0155f]'
                                        : 'bg-gray-100 text-[#070707] hover:bg-gray-200'
                                }`}>
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Agency Bundle CTA */}
            <section className="py-16 bg-gradient-to-r from-[#1f66ff] to-[#7c3aed]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-white"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Want All Plugins? Get the Agency Bundle
                        </h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Get PostX + 9 more premium plugins for unlimited sites at $749 (Save $800+)
                        </p>
                        <Link
                            href="/agency-bundle"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cdf33b] text-[#070707] font-semibold rounded-lg hover:bg-[#b8e029] transition-colors"
                        >
                            <Zap className="w-5 h-5" />
                            View Agency Bundle
                        </Link>
                    </motion.div>
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
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-[#070707] pr-4">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
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
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-[#f5faff] border border-[#add5ff] rounded-2xl p-8 md:p-12 text-center">
                        <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-4">
                            14-Day Money-Back Guarantee
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Try PostX Pro risk-free. If you're not completely satisfied, we'll refund your purchase - no questions asked.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff176b] text-white font-semibold rounded-lg hover:bg-[#e0155f] transition-colors"
                            >
                                Get PostX Pro
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/documentation"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#070707] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#1f66ff] transition-colors"
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
