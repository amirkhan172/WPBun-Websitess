import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    content: string;
    rating: number;
    source: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Hannah Zribi',
        content: 'The support is exceptional: they answered my question in less than 24 hours with a good solution. The plugin itself is very intuitive and easy to use.',
        rating: 5,
        source: 'Trustpilot',
        avatar: 'HZ',
    },
    {
        name: 'Francisco Gil Gonzalez',
        content: 'Great plugin with excellent features. The team is very responsive and helpful. Highly recommended for any WooCommerce store owner.',
        rating: 5,
        source: 'WordPress.org',
        avatar: 'FG',
    },
    {
        name: 'Fani Awan',
        content: 'The assistance provided by the support team was invaluable. They helped me set up everything perfectly. Amazing product!',
        rating: 5,
        source: 'Trustpilot',
        avatar: 'FA',
    },
    {
        name: 'Truny',
        content: 'Great Plugin Backed by Great People. The features are exactly what I needed for my online store. Worth every penny!',
        rating: 5,
        source: 'WordPress.org',
        avatar: 'TR',
    },
    {
        name: 'Mark Thompson',
        content: 'Best investment for my WooCommerce store. The bundle saved me hundreds of dollars and the plugins work perfectly together.',
        rating: 5,
        source: 'Trustpilot',
        avatar: 'MT',
    },
    {
        name: 'Sarah Johnson',
        content: 'PostX transformed my blog completely. The blocks are beautiful and incredibly easy to customize. My traffic has increased significantly!',
        rating: 5,
        source: 'WordPress.org',
        avatar: 'SJ',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#f5f7f9]">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#1f66ff]/10 text-[#1f66ff] rounded-full text-sm font-semibold mb-4">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#070707] mb-4">
                        Loved by Thousands of Users
                    </h2>
                    <p className="text-gray-600 text-lg">
                        See what our customers have to say about their experience with WPXPO plugins.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 relative group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-[#1f66ff]/10 group-hover:text-[#1f66ff]/20 transition-colors">
                                <Quote className="w-10 h-10" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-[#ffb900] fill-[#ffb900]" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1f66ff] to-[#0693e3] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#070707]">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.source}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trustpilot Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
                            ))}
                        </div>
                        <span className="text-[#070707] font-semibold">4.9/5 on Trustpilot</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500">Based on 350+ reviews</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
