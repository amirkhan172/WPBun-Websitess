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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const
        }
    }
};

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#f1f2f3]">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-5xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#070707] mb-4">
                        <span className="block">Recognized by WordPress Experts</span>
                        <span className="block mt-3">and Community Leaders</span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-6">
                        It's a matter of pride to see renowned industry experts put their trust in us.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={cardVariants}
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
                </motion.div>

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
