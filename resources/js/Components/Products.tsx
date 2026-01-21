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
        logo: '/images/logos/wowrevenue-logo.gif',
    },
    {
        name: 'WowAddons',
        slug: 'wowaddons',
        description: 'The best product addons plugin for WooCommerce that lets users add extra fields to personalize product pages.',
        badge: 'hot',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/11/WowAddons-1.5-Blog-banner-1.webp',
        logo: 'https://ps.w.org/product-addons/assets/icon-256X256.gif?rev=3283352',
    },
    {
        name: 'WholesaleX',
        slug: 'wholesalex',
        description: 'All-in-one B2B & B2B+B2C Wholesale plugin with dynamic rules, user roles, registration form and other cool features.',
        image: 'https://ps.w.org/wholesalex/assets/banner-1544x500.jpg?rev=3342237',
        logo: '/images/logos/wholesalex-logo.gif',
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
        image: '/images/wowoptin-hero.jpg',
        logo: 'https://ps.w.org/optin/assets/icon-256x256.gif?rev=3235122',
    },
    {
        name: 'WowShipping',
        slug: 'wowshipping',
        description: 'The advanced table rate shipping plugin for WooCommerce that comes with 30+ conditions.',
        badge: 'new',
        image: 'https://www.wpxpo.com/wp-content/uploads/2025/12/Wowshipping-Pin-point.jpg',
        logo: '/images/logos/wowshipping-logo.gif',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#c6d9ee]
">
            <div className="w-full px-[20px]">
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
                <div className=" rounded-lg">
                    <div className="flex flex-wrap gap-[12px]">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`w-full ${index === 0 ? 'md:w-[calc(55%-6px)]' : index === 1 ? 'md:w-[calc(45%-6px)]' : index === 2 ? 'md:w-[calc(45%-6px)]' : index === 3 ? 'md:w-[calc(55%-6px)]' : index === 4 ? 'md:w-full' : index === 5 ? 'md:w-[calc(55%-6px)]' : index === 6 ? 'md:w-[calc(45%-6px)]' : 'md:w-[calc(50%-6px)]'}`}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className={`block bg-white rounded-2xl overflow-hidden ${index === 4 ? 'md:flex' : ''}`}
                                >
                                    {/* Content Section - Logo, Name, Description, Link */}
                                    <div className={`pt-[30px] px-9 pb-10 ${index === 4 ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                                        {/* Logo and Name */}
                                        <div className="flex items-center gap-3 mb-7">
                                            <img
                                                src={product.logo}
                                                alt={`${product.name} logo`}
                                                className="w-14 h-14 object-contain bg-white rounded-lg"
                                            />
                                            <h3 className="text-4xl font-bold text-[#070707]">
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
                                        <p className="text-gray-600 text-[20px] leading-relaxed mb-6">
                                            {product.description}
                                        </p>

                                        {/* Explore Now Link */}
                                        <span className="inline-flex items-center gap-1 text-[#1f66ff] font-semibold text-xl hover:gap-2 transition-all">
                                            Explore Now
                                            <ArrowRight className="w-6 h-6" />
                                        </span>
                                    </div>

                                    {/* Image Section */}
                                    <div className={`px-9 pb-7 ${index === 4 ? 'md:w-1/2 md:py-7' : ''}`}>
                                        <div className={`w-full h-[350px] overflow-hidden rounded-xl`}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
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
