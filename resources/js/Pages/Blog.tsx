import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, Search, Mail, Star, ArrowRight, Rss } from 'lucide-react';

const categories = [
    'All',
    'WordPress',
    'WooCommerce',
    'Tutorials',
    'PostX',
    'WowStore',
    'WowRevenue',
    'WholesaleX',
    'News',
];

const blogPosts = [
    {
        id: 1,
        title: 'How to Create a News Magazine Website with PostX',
        excerpt: 'Learn how to build a professional news magazine website using PostX plugin with step-by-step guidance.',
        category: 'PostX',
        author: 'John Doe',
        authorAvatar: 'JD',
        date: 'Jan 15, 2026',
        readTime: '8 min read',
        featured: true,
    },
    {
        id: 2,
        title: 'Ultimate Guide to WooCommerce Product Bundles',
        excerpt: 'Discover how to increase your average order value with strategic product bundling using WowRevenue.',
        category: 'WowRevenue',
        author: 'Jane Smith',
        authorAvatar: 'JS',
        date: 'Jan 12, 2026',
        readTime: '12 min read',
        featured: true,
    },
    {
        id: 3,
        title: 'Table Rate Shipping: Complete Setup Guide',
        excerpt: 'Master WooCommerce shipping with our comprehensive guide to table rate shipping configuration.',
        category: 'WooCommerce',
        author: 'Mike Johnson',
        authorAvatar: 'MJ',
        date: 'Jan 10, 2026',
        readTime: '10 min read',
        featured: false,
    },
    {
        id: 4,
        title: 'Best Gutenberg Blocks for WordPress in 2026',
        excerpt: 'Explore the top Gutenberg block plugins that will transform your WordPress editing experience.',
        category: 'WordPress',
        author: 'Sarah Wilson',
        authorAvatar: 'SW',
        date: 'Jan 8, 2026',
        readTime: '6 min read',
        featured: false,
    },
    {
        id: 5,
        title: 'WholesaleX vs Other B2B Plugins: Complete Comparison',
        excerpt: 'An in-depth comparison of WholesaleX with other popular B2B and wholesale plugins for WooCommerce.',
        category: 'WholesaleX',
        author: 'David Brown',
        authorAvatar: 'DB',
        date: 'Jan 5, 2026',
        readTime: '15 min read',
        featured: false,
    },
    {
        id: 6,
        title: 'How to Set Up Product Addons in WooCommerce',
        excerpt: 'Step-by-step tutorial on adding custom product options and addons using WowAddons plugin.',
        category: 'Tutorials',
        author: 'Emily Davis',
        authorAvatar: 'ED',
        date: 'Jan 3, 2026',
        readTime: '9 min read',
        featured: false,
    },
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = filteredPosts.filter((post) => post.featured);
    const regularPosts = filteredPosts.filter((post) => !post.featured);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <AppLayout>
            <Head title="Blog - WordPress & WooCommerce Tips | WPBun" />

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
                            <Rss className="w-4 h-4 text-[#ff176b]" />
                            <span className="text-sm text-[#070707] font-medium">
                                WordPress & WooCommerce Insights
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Expert Guides, Tips &
                            <span className="block text-[#1f66ff]">In-Depth Tutorials</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-10"
                        >
                            Grow your WordPress and WooCommerce websites with comprehensive articles, tutorials, and best practices from our experts.
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
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1f66ff] focus:border-[#1f66ff] transition-colors shadow-lg text-lg"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
                <div className="container-custom">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                                    activeCategory === category
                                        ? 'bg-[#070707] text-white'
                                        : 'bg-[#f5f7f9] text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
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
                            <h2 className="text-2xl md:text-3xl font-bold text-[#070707]">Featured Articles</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="bg-gradient-to-br from-[#1f66ff] to-blue-700 rounded-2xl aspect-video mb-5 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white/50 text-lg font-semibold">Featured Image</span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 bg-white text-[#070707] text-xs font-bold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#070707] mb-3 group-hover:text-[#1f66ff] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-[#1f66ff] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                {post.authorAvatar}
                                            </div>
                                            <span className="font-medium text-[#070707]">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="py-16 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#070707]">Latest Articles</h2>
                    </motion.div>

                    {regularPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-video relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-gray-400">Post Image</span>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 bg-[#070707] text-white text-xs font-semibold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#070707] mb-2 group-hover:text-[#1f66ff] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-[#1f66ff] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                    {post.authorAvatar}
                                                </div>
                                                <span>{post.author}</span>
                                            </div>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl">
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                        </div>
                    )}

                    {regularPosts.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="inline-flex items-center gap-2 bg-[#070707] text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                                Load More Articles
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-[#070707]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <div className="w-16 h-16 bg-[#cdf33b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-[#cdf33b]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Get the latest WordPress tips, WooCommerce guides, and exclusive deals delivered directly to your inbox.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-6 py-4 rounded-xl text-[#070707] w-full sm:w-80 focus:ring-2 focus:ring-[#cdf33b] focus:outline-none text-lg"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8f655] transition-colors whitespace-nowrap"
                            >
                                Subscribe
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
