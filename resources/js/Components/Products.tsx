import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface Product {
    name: string;
    slug: string;
    description: string;
    badge?: 'new' | 'hot';
    image: string;
    logo: string;
}

const products: Product[] = [
    {
        name: 'WowStore',
        slug: 'wowstore',
        description: 'A complete WooCommerce page builder plugin with powerful addons, 50+ product blocks and 140+ premade layouts.',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/10/WooCommerce-Page-Builder.webp',
        logo: 'https://ps.w.org/product-blocks/assets/icon-256x256.png?rev=3118250',
    },
    {
        name: 'WowRevenue',
        slug: 'wowrevenue',
        description: 'The best product bundles plugin with enhanced discount strategies, helping you boost sales and average order value.',
        badge: 'hot',
        image: 'https://www.wowrevenue.com/wp-content/uploads/2025/10/WowRevenue-Product-Bundles-for-WooCommerce.webp',
        logo: 'https://ps.w.org/revenue/assets/icon-256x256.gif?rev=3229322',
    },
    {
        name: 'WowAddons',
        slug: 'wowaddons',
        description: 'The best product addons plugin for WooCommerce that lets users add extra fields to personalize product pages.',
        badge: 'hot',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/11/WowAddons-1.5-Blog-banner-1.webp',
        logo: 'https://ps.w.org/product-addons/assets/icon-256x256.gif?rev=3283352',
    },
    {
        name: 'WholesaleX',
        slug: 'wholesalex',
        description: 'All-in-one B2B & B2B+B2C Wholesale plugin with dynamic rules, user roles, registration form and other cool features.',
        image: 'https://ps.w.org/wholesalex/assets/banner-1544x500.jpg?rev=3342237',
        logo: 'https://ps.w.org/wholesalex/assets/icon-256x256.gif?rev=2894829',
    },
    {
        name: 'PostX',
        slug: 'postx',
        description: 'Gutenberg page builder plugin designed for creating News, Magazine, or any blog websites in minutes.',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/10/Post-Grid-and-Gutenberg-Blocks.webp',
        logo: 'https://ps.w.org/ultimate-post/assets/icon-256x256.gif?rev=2540610',
    },
    {
        name: 'WowOptin',
        slug: 'wowoptin',
        description: 'The ultimate popup builder plugin with smart targeting, custom triggers, advanced display rules.',
        image: 'https://www.wpxpo.com/wp-content/uploads/2024/10/connect-flash.png',
        logo: 'https://ps.w.org/optin/assets/icon-256x256.gif?rev=3235122',
    },
    {
        name: 'WowShipping',
        slug: 'wowshipping',
        description: 'The advanced table rate shipping plugin for WooCommerce that comes with 30+ conditions.',
        badge: 'new',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/12/Wowshipping-Pin-point.jpg',
        logo: 'https://ps.w.org/wow-table-rate-shipping/assets/icon-256x256.gif?rev=3421638',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-20 bg-[#f5faff]">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#070707] mb-4">
                        Our Products for Your Growth & Success
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We don't just develop plugins for the sake of it. We create value-driven solutions.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="bg-[#f5faff] rounded-lg p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="block bg-white rounded-lg hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    {/* Content Section - Logo, Name, Description, Link */}
                                    <div className="p-5">
                                        {/* Logo and Name */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <img
                                                src={product.logo}
                                                alt={`${product.name} logo`}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <h3 className="text-xl font-bold text-[#070707]">
                                                {product.name}
                                            </h3>
                                            {product.badge === 'new' && (
                                                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-600 text-[10px] font-bold uppercase rounded-full">
                                                    New
                                                </span>
                                            )}
                                            {product.badge === 'hot' && (
                                                <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold uppercase rounded-full">
                                                    Hot
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {product.description}
                                        </p>

                                        {/* Explore Now Link */}
                                        <span className="inline-flex items-center gap-1 text-[#1f66ff] font-semibold text-sm hover:gap-2 transition-all">
                                            Explore Now
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>

                                    {/* Image Section - Now at Bottom */}
                                    <div className="w-full h-[200px] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
