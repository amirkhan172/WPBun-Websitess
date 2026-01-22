import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from 'framer-motion';
import { Users, Star, Code, Heart, Globe, Award, MessageCircle, BookOpen, ChevronRight, Zap, Target, Shield, Clock, Package, LayoutGrid, Truck, PlusCircle, DollarSign, Store, MousePointerClick, Tags } from 'lucide-react';

const stats = [
    { label: 'Happy Users', value: '65K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Star Rating', value: '4.9/5', icon: <Star className="w-6 h-6" /> },
    { label: 'Team Members', value: '30+', icon: <Code className="w-6 h-6" /> },
    { label: 'Active Plugins', value: '9+', icon: <Package className="w-6 h-6" /> },
];

const products = [
    { name: 'PostX', icon: <LayoutGrid className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
    { name: 'WowStore', icon: <Store className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-cyan-500 to-teal-600' },
    { name: 'WowRevenue', icon: <DollarSign className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { name: 'WowAddons', icon: <PlusCircle className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-green-400 to-emerald-600' },
    { name: 'WowShipping', icon: <Truck className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { name: 'WholesaleX', icon: <Tags className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-violet-500 to-purple-700' },
    { name: 'WowOptin', icon: <MousePointerClick className="w-5 h-5 text-white" />, color: 'bg-gradient-to-br from-yellow-400 to-amber-600' },
];

const founders = [
    {
        name: 'Jakir Hasan',
        role: 'CEO & Co-Founder',
        quote: "Every plugin we create starts with a simple question: How can we make users' lives easier? We don't just develop features; we solve real problems that businesses face every day.",
        avatar: 'JH',
    },
    {
        name: 'Anik Biswas',
        role: 'CTO & Co-Founder',
        quote: 'Quality and performance are non-negotiable for us. Every line of code is written with scalability, security, and user experience in mind.',
        avatar: 'AB',
    },
];

const values = [
    {
        title: 'User-First Approach',
        description: 'Every feature we build starts with user feedback. We listen, learn, and deliver solutions that truly matter.',
        icon: <Target className="w-6 h-6" />,
    },
    {
        title: 'Quality Over Quantity',
        description: 'We focus on building fewer, better products rather than spreading thin across many mediocre ones.',
        icon: <Award className="w-6 h-6" />,
    },
    {
        title: 'Continuous Innovation',
        description: 'The WordPress ecosystem evolves rapidly. We stay ahead by continuously improving our products.',
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: 'Security First',
        description: 'Your website security is our priority. All our plugins follow WordPress security best practices.',
        icon: <Shield className="w-6 h-6" />,
    },
];

const milestones = [
    { year: '2020', title: 'Founded', description: 'WPBun was born with a mission to democratize WordPress tools.' },
    { year: '2021', title: 'First 10K Users', description: 'Reached our first major milestone with PostX plugin.' },
    { year: '2022', title: 'Product Suite Expansion', description: 'Launched WowStore, WowRevenue, and WholesaleX.' },
    { year: '2023', title: '50K+ Users', description: 'Crossed 50,000 active users worldwide.' },
    { year: '2024', title: 'Agency Bundle', description: 'Launched our flagship Agency Bundle with all products.' },
    { year: '2025', title: '65K+ Users', description: 'Continuing to grow with new features and products.' },
];

const supportBlocks = [
    {
        title: 'Quick Support',
        description: 'Get fast, reliable support from our dedicated team of experts.',
        icon: <MessageCircle className="w-6 h-6" />,
        href: '/contact',
    },
    {
        title: 'Community Access',
        description: 'Join our vibrant community of WordPress developers and users.',
        icon: <Users className="w-6 h-6" />,
        href: '/community',
    },
    {
        title: 'Documentation',
        description: 'Comprehensive guides and tutorials to help you get started.',
        icon: <BookOpen className="w-6 h-6" />,
        href: '/documentation',
    },
];

export default function About() {
    return (
        <AppLayout>
            <Head title="About Us - Our Story & Mission | WPBun" />

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
                            <Heart className="w-4 h-4 text-[#ff176b]" />
                            <span className="text-sm text-[#070707] font-medium">
                                Trusted by 65,000+ WordPress Users Worldwide
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#070707] mb-6"
                        >
                            Empowering Businesses to
                            <span className="block text-[#1f66ff]">Build, Sell & Grow Online</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 mb-12"
                        >
                            We craft powerful, conversion-focused solutions that are both affordable and reliable — trusted by bloggers, eCommerce store owners, and digital agencies worldwide to build fast, beautiful, and high-performing websites.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff]">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-[#070707] mb-1">{stat.value}</div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About WPBun Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                                OUR STORY
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-6">
                                Building the Future of WordPress
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Founded in 2020, WPBun started with a simple mission: to democratize powerful WordPress tools and make them accessible to everyone. We believe that every business, regardless of size, deserves access to premium, reliable solutions.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg">
                                Our team of 30+ passionate developers, designers, and support specialists work tirelessly to create plugins that solve real problems. From small blogs to enterprise e-commerce stores, our tools power websites across the globe.
                            </p>
                            <p className="text-gray-600 text-lg">
                                We prioritize affordability without compromising on quality. Every plugin we build is thoroughly tested, regularly updated, and backed by our responsive support team.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-[#f5f7f9] rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-[#070707] mb-6 text-center">
                                    Powering Up 65K+ Websites
                                </h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                    {products.map((product) => (
                                        <div
                                            key={product.name}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <div className={`w-14 h-14 ${product.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                {product.icon}
                                            </div>
                                            <span className="text-xs text-gray-600 font-medium">{product.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 text-[#1f66ff] font-semibold hover:underline"
                                    >
                                        View All Products
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-white text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            OUR VALUES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            What Drives Us Forward
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our core values guide every decision we make and every product we build.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#1f66ff]">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#070707] mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-6">
                            LEADERSHIP
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Meet Our Founders
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            The visionaries behind WPBun who drive our mission forward every day.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f7f9] rounded-2xl p-8"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#1f66ff] to-[#ff176b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {founder.avatar}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#070707]">{founder.name}</h3>
                                        <p className="text-[#1f66ff] font-medium">{founder.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{founder.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-blue-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-6">
                            OUR JOURNEY
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Milestones & Achievements
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            A look at our journey from a small startup to a trusted WordPress solution provider.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-[#1f66ff] font-bold text-lg mb-2">{milestone.year}</div>
                                <h3 className="text-[#070707] font-bold text-xl mb-2">{milestone.title}</h3>
                                <p className="text-gray-600 text-sm">{milestone.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-20 bg-gray-200">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            Community Involvement
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We're proud to give back to the WordPress community that has given us so much.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff]">
                                <Globe className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-bold text-[#070707] mb-2">12+</div>
                            <div className="text-gray-600">Sponsored WordCamps</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff]">
                                <Code className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-bold text-[#070707] mb-2">20+</div>
                            <div className="text-gray-600">Open-source Contributors</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff]">
                                <Heart className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-bold text-[#070707] mb-2">100+</div>
                            <div className="text-gray-600">Countries Reached</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Support Resources Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#070707] mb-4">
                            We're Here to Help
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Get the support you need to succeed with WPBun products.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {supportBlocks.map((block, index) => (
                            <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={block.href}
                                    className="block bg-[#f5f7f9] rounded-2xl p-8 text-center hover:shadow-lg transition-all group"
                                >
                                    <div className="w-16 h-16 bg-[#1f66ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1f66ff] group-hover:bg-[#1f66ff] group-hover:text-white transition-colors">
                                        {block.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#070707] mb-3 group-hover:text-[#1f66ff] transition-colors">{block.title}</h3>
                                    <p className="text-gray-600">{block.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-100 rounded-3xl p-12 text-center border border-blue-200"
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
                                className="inline-flex items-center justify-center gap-2 bg-[#1f66ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1a56db] transition-colors"
                            >
                                Explore Products
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#070707] px-8 py-4 rounded-lg font-bold border border-gray-200 hover:border-[#1f66ff] hover:text-[#1f66ff] transition-colors"
                            >
                                View Agency Bundle
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
