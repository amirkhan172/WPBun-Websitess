import { motion } from 'framer-motion';
import {
    ArrowRight,
    Blocks,
    ShoppingCart,
    Store,
    Package,
    Users,
    FileText,
    Bell,
    Heart,
} from 'lucide-react';
import { ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    icon: ReactNode;
    color: string;
    bgColor: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'PostX',
        description: 'Dynamic Site Builder & Gutenberg Post Blocks',
        icon: <Blocks className="w-8 h-8" />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        id: 2,
        name: 'ProductX',
        description: 'WooCommerce Builder with Advanced Blocks',
        icon: <ShoppingCart className="w-8 h-8" />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
    {
        id: 3,
        name: 'WowStore',
        description: 'Complete WooCommerce Store Builder',
        icon: <Store className="w-8 h-8" />,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
    },
    {
        id: 4,
        name: 'Suspended',
        description: 'Advanced Stock Management for WooCommerce',
        icon: <Package className="w-8 h-8" />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
    },
    {
        id: 5,
        name: 'WholesaleX',
        description: 'B2B & Wholesale Solution for WooCommerce',
        icon: <Users className="w-8 h-8" />,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-100',
    },
    {
        id: 6,
        name: 'Invoice',
        description: 'PDF Invoice & Packing Slip Generator',
        icon: <FileText className="w-8 h-8" />,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
    },
    {
        id: 7,
        name: 'Stock Notifier',
        description: 'Email Notifications for Stock Status',
        icon: <Bell className="w-8 h-8" />,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
    },
    {
        id: 8,
        name: 'Wishlist',
        description: 'Smart Wishlist Plugin for WooCommerce',
        icon: <Heart className="w-8 h-8" />,
        color: 'text-pink-600',
        bgColor: 'bg-pink-100',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Products() {
    return (
        <section id="products" className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                    >
                        Our Products
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                        Premium WordPress & WooCommerce Plugins
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-gray text-lg"
                    >
                        Explore our collection of powerful plugins designed to enhance your WordPress
                        and WooCommerce experience.
                    </motion.p>
                </div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                        >
                            <div
                                className={`w-16 h-16 ${product.bgColor} ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-text-gray text-sm mb-4">{product.description}</p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                            >
                                Learn More <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href="#" className="btn-primary inline-flex items-center gap-2">
                        View All Products <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
