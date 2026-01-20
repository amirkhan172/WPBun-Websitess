import { motion } from 'framer-motion';
import { DollarSign, Palette, MousePointer, Headphones } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
}

const features: Feature[] = [
    {
        id: 1,
        title: 'Budget-friendly',
        description:
            'Get premium features at competitive prices. Save more with our bundle deals and lifetime access options.',
        icon: <DollarSign className="w-8 h-8" />,
    },
    {
        id: 2,
        title: 'Modern Design',
        description:
            'Contemporary UI/UX that follows the latest design trends. Your website will look stunning on all devices.',
        icon: <Palette className="w-8 h-8" />,
    },
    {
        id: 3,
        title: 'User-friendly',
        description:
            'Intuitive interfaces that anyone can use. No coding skills required to create professional results.',
        icon: <MousePointer className="w-8 h-8" />,
    },
    {
        id: 4,
        title: '24/7 Support',
        description:
            'Our dedicated support team is always ready to help. Get assistance whenever you need it.',
        icon: <Headphones className="w-8 h-8" />,
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-accent/30 text-secondary rounded-full text-sm font-medium mb-4"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                        What Makes Us Different
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-gray text-lg"
                    >
                        We're committed to delivering exceptional value and quality in everything we
                        do.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                            <p className="text-text-gray">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
