import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Clock, Eye, Search, LayoutGrid, Store, DollarSign, PlusCircle, Tags, MousePointerClick, Truck, BookOpen, ChevronRight, Youtube, Star, Users } from 'lucide-react';

const categories = [
    { id: 'all', name: 'All Tutorials', icon: <Play className="w-4 h-4" /> },
    { id: 'postx', name: 'PostX', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'wowstore', name: 'WowStore', icon: <Store className="w-4 h-4" /> },
    { id: 'wowrevenue', name: 'WowRevenue', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'wowaddons', name: 'WowAddons', icon: <PlusCircle className="w-4 h-4" /> },
    { id: 'wholesalex', name: 'WholesaleX', icon: <Tags className="w-4 h-4" /> },
    { id: 'wowoptin', name: 'WowOptin', icon: <MousePointerClick className="w-4 h-4" /> },
    { id: 'wowshipping', name: 'WowShipping', icon: <Truck className="w-4 h-4" /> },
];

const tutorials = [
    {
        id: 1,
        title: 'Getting Started with PostX - Complete Beginner Guide',
        description: 'Learn how to install and configure PostX plugin from scratch. Perfect for beginners starting their journey.',
        category: 'postx',
        duration: '15:32',
        views: '12.5K',
        thumbnail: 'PostX',
        featured: true,
        level: 'Beginner',
    },
    {
        id: 2,
        title: 'Building a News Magazine Website with PostX',
        description: 'Step-by-step tutorial on creating a professional news magazine layout with dynamic content.',
        category: 'postx',
        duration: '28:45',
        views: '8.2K',
        thumbnail: 'PostX',
        featured: true,
        level: 'Intermediate',
    },
    {
        id: 3,
        title: 'WowStore: Complete Shop Page Builder Tutorial',
        description: 'Learn to create stunning WooCommerce shop pages with WowStore blocks and templates.',
        category: 'wowstore',
        duration: '22:18',
        views: '6.8K',
        thumbnail: 'WowStore',
        featured: false,
        level: 'Beginner',
    },
    {
        id: 4,
        title: 'Creating Product Bundles with WowRevenue',
        description: 'Master the art of product bundling to increase your average order value and boost sales.',
        category: 'wowrevenue',
        duration: '18:55',
        views: '5.4K',
        thumbnail: 'WowRevenue',
        featured: false,
        level: 'Intermediate',
    },
    {
        id: 5,
        title: 'WowAddons: Adding Custom Product Options',
        description: 'Learn how to add custom fields, file uploads, and options to WooCommerce products.',
        category: 'wowaddons',
        duration: '20:12',
        views: '4.2K',
        thumbnail: 'WowAddons',
        featured: false,
        level: 'Beginner',
    },
    {
        id: 6,
        title: 'WholesaleX B2B Store Setup Guide',
        description: 'Complete guide to setting up a B2B wholesale store with tiered pricing and user roles.',
        category: 'wholesalex',
        duration: '25:30',
        views: '3.8K',
        thumbnail: 'WholesaleX',
        featured: false,
        level: 'Advanced',
    },
    {
        id: 7,
        title: 'Creating High-Converting Popups with WowOptin',
        description: 'Design and deploy popups that convert visitors into subscribers and customers.',
        category: 'wowoptin',
        duration: '16:45',
        views: '4.9K',
        thumbnail: 'WowOptin',
        featured: false,
        level: 'Beginner',
    },
    {
        id: 8,
        title: 'WowShipping: Table Rate Shipping Setup',
        description: 'Configure complex shipping rules with conditions and table rates for your store.',
        category: 'wowshipping',
        duration: '19:20',
        views: '3.2K',
        thumbnail: 'WowShipping',
        featured: false,
        level: 'Intermediate',
    },
    {
        id: 9,
        title: 'PostX Dynamic Site Builder Advanced',
        description: 'Advanced techniques for building dynamic WordPress templates and archive pages.',
        category: 'postx',
        duration: '32:15',
        views: '7.1K',
        thumbnail: 'PostX',
        featured: false,
        level: 'Advanced',
    },
    {
        id: 10,
        title: 'WowStore Single Product Page Customization',
        description: 'Customize every aspect of your WooCommerce product pages for better conversions.',
        category: 'wowstore',
        duration: '24:40',
        views: '5.6K',
        thumbnail: 'WowStore',
        featured: false,
        level: 'Intermediate',
    },
    {
        id: 11,
        title: 'BOGO Deals with WowRevenue',
        description: 'Set up Buy One Get One offers and other promotional campaigns to drive sales.',
        category: 'wowrevenue',
        duration: '14:25',
        views: '4.1K',
        thumbnail: 'WowRevenue',
        featured: false,
        level: 'Beginner',
    },
    {
        id: 12,
        title: 'WholesaleX User Roles & Permissions',
        description: 'Configure custom user roles and permission levels for B2B customers.',
        category: 'wholesalex',
        duration: '17:50',
        views: '2.9K',
        thumbnail: 'WholesaleX',
        featured: false,
        level: 'Intermediate',
    },
];

const colorMap: Record<string, string> = {
    PostX: 'from-blue-500 to-blue-700',
    WowStore: 'from-cyan-500 to-teal-600',
    WowRevenue: 'from-pink-500 to-rose-600',
    WowAddons: 'from-green-400 to-emerald-600',
    WholesaleX: 'from-violet-500 to-purple-700',
    WowOptin: 'from-yellow-400 to-amber-600',
    WowShipping: 'from-orange-400 to-orange-600',
};

const levelColors: Record<string, string> = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-[#1f66ff]/10 text-[#1f66ff]',
    Advanced: 'bg-[#ff176b]/10 text-[#ff176b]',
};

export default function Tutorials() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTutorials = tutorials.filter((tutorial) => {
        const matchesCategory = activeCategory === 'all' || tutorial.category === activeCategory;
        const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredTutorials = filteredTutorials.filter(t => t.featured);
    const regularTutorials = filteredTutorials.filter(t => !t.featured);

    return (
        <AppLayout>
            <Head title="Video Tutorials - Learn WordPress & WooCommerce | WPBun" />

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
                            <Youtube className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-[#070707] font-medium">
                                10,000+ YouTube Subscribers
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Learn Visually with
                            <span className="block text-[#1f66ff]">Video Tutorials</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            From beginner basics to advanced techniques, our comprehensive video guides help you master WordPress and WooCommerce.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative max-w-xl mx-auto"
                        >
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search tutorials..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors shadow-lg text-lg"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
                <div className="container-custom">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                                    activeCategory === category.id
                                        ? 'bg-[#070707] text-white'
                                        : 'bg-[#f5f7f9] text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tutorials */}
            {featuredTutorials.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-4">
                                FEATURED
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#070707]">Featured Tutorials</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredTutorials.map((tutorial, index) => (
                                <motion.div
                                    key={tutorial.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className={`relative bg-gradient-to-br ${colorMap[tutorial.thumbnail]} rounded-2xl aspect-video mb-5 overflow-hidden`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-10 h-10 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 ${levelColors[tutorial.level]} text-xs font-bold rounded-full`}>
                                                {tutorial.level}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-sm rounded-lg flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {tutorial.duration}
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#070707] mb-3 group-hover:text-[#1f66ff] transition-colors">
                                        {tutorial.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {tutorial.views} views
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Tutorials Grid */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707]">
                            {activeCategory === 'all' ? 'All Tutorials' : `${categories.find(c => c.id === activeCategory)?.name} Tutorials`}
                        </h2>
                    </motion.div>

                    {regularTutorials.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularTutorials.map((tutorial, index) => (
                                <motion.div
                                    key={tutorial.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                >
                                    <div className={`relative bg-gradient-to-br ${colorMap[tutorial.thumbnail]} aspect-video`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2.5 py-1 ${levelColors[tutorial.level]} text-xs font-bold rounded-full`}>
                                                {tutorial.level}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white text-xs rounded flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {tutorial.duration}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors line-clamp-2">
                                            {tutorial.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutorial.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                {tutorial.views}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl">
                            <p className="text-gray-500 text-lg">No tutorials found matching your criteria.</p>
                        </div>
                    )}

                    {/* Load More */}
                    {regularTutorials.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="inline-flex items-center gap-2 bg-[#070707] text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                                Load More Tutorials
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* YouTube CTA */}
            <section className="py-20 bg-[#070707]">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <Youtube className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Subscribe to Our YouTube Channel
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Get notified when we release new tutorials. Join 10,000+ subscribers learning WordPress & WooCommerce the right way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                                Subscribe Now
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors"
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/documentation"
                                className="block bg-[#f5f7f9] rounded-2xl p-8 hover:shadow-lg transition-shadow group h-full"
                            >
                                <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mb-6 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#070707] mb-3 group-hover:text-[#1f66ff] transition-colors">
                                    Documentation
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Prefer reading? Check out our comprehensive written documentation with detailed guides and code examples.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#1f66ff] font-semibold">
                                    Browse Documentation
                                    <ChevronRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/contact"
                                className="block bg-[#f5f7f9] rounded-2xl p-8 hover:shadow-lg transition-shadow group h-full"
                            >
                                <div className="w-16 h-16 bg-[#ff176b]/10 rounded-xl flex items-center justify-center mb-6 text-[#ff176b] group-hover:bg-[#ff176b] group-hover:text-white transition-colors">
                                    <Play className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#070707] mb-3 group-hover:text-[#ff176b] transition-colors">
                                    Request a Tutorial
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Can't find what you're looking for? Let us know and we'll create a tutorial for you.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#ff176b] font-semibold">
                                    Contact Us
                                    <ChevronRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
