import { motion } from 'framer-motion';
import { DollarSign, Palette, MousePointer, Headphones } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
}

const features: Feature[] = [
    {
        title: 'Budget-friendly Solutions',
        description: 'Get premium features at competitive prices. We believe powerful tools should be accessible to businesses of all sizes.',
        icon: <DollarSign className="w-8 h-8" />,
    },
    {
        title: 'Modern Design Approach',
        description: 'Contemporary, clean designs that follow the latest trends. Your website will look stunning and professional.',
        icon: <Palette className="w-8 h-8" />,
    },
    {
        title: 'Intuitive and User-friendly',
        description: 'No coding skills required. Our plugins are designed with simplicity in mind so anyone can use them effectively.',
        icon: <MousePointer className="w-8 h-8" />,
    },
    {
        title: 'Top-notch Human Support',
        description: 'Our dedicated support team responds within 24 hours. Real humans helping you solve real problems.',
        icon: <Headphones className="w-8 h-8" />,
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#ff176b]/10 text-[#ff176b] rounded-full text-sm font-semibold mb-4">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#070707] mb-4">
                        What Makes Us Different
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We're committed to delivering exceptional value and quality in everything we create.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#f5f7f9] rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-[#1f66ff] to-[#0693e3] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#070707] mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
