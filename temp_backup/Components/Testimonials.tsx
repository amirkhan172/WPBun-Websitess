import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Store Owner',
        company: 'Fashion Boutique',
        content:
            'WPXPO plugins have transformed my online store. The ProductX builder made it incredibly easy to create stunning product pages. Sales increased by 40% after the redesign!',
        rating: 5,
        avatar: 'SJ',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Web Developer',
        company: 'Digital Agency',
        content:
            'As a developer, I appreciate clean code and great documentation. WPXPO delivers both. The support team is also fantastic - they resolved my query within hours.',
        rating: 5,
        avatar: 'MC',
    },
    {
        id: 3,
        name: 'Emma Williams',
        role: 'Blogger',
        company: 'Lifestyle Blog',
        content:
            'PostX is a game-changer for content creators. The block patterns and layouts are beautiful, and I can create engaging posts without any coding knowledge.',
        rating: 5,
        avatar: 'EW',
    },
    {
        id: 4,
        name: 'David Brown',
        role: 'E-commerce Manager',
        company: 'Tech Store',
        content:
            'WholesaleX helped us set up our B2B store in record time. The pricing rules and user roles features are exactly what we needed. Highly recommended!',
        rating: 5,
        avatar: 'DB',
    },
    {
        id: 5,
        name: 'Lisa Anderson',
        role: 'Marketing Director',
        company: 'Growth Co',
        content:
            'The Agency Bundle is incredible value. We use multiple WPXPO plugins across all our client sites. The consistency and quality are unmatched.',
        rating: 5,
        avatar: 'LA',
    },
    {
        id: 6,
        name: 'James Wilson',
        role: 'Freelancer',
        company: 'Self-employed',
        content:
            'I switched to WPXPO from other plugin providers and never looked back. The performance improvements alone were worth it. My sites load much faster now.',
        rating: 5,
        avatar: 'JW',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                        Loved by Thousands of Users
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-gray text-lg"
                    >
                        See what our customers have to say about their experience with WPXPO plugins.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-light rounded-2xl p-6 relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote className="w-12 h-12" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-text-gray mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                                    <p className="text-sm text-text-gray">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
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
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                            ))}
                        </div>
                        <span className="text-secondary font-medium">4.9/5 on Trustpilot</span>
                        <span className="text-text-gray">| Based on 650+ reviews</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
