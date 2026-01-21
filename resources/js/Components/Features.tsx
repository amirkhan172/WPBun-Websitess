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
        description: 'Premium quality without the premium price tag.',
        icon: <DollarSign className="w-20 h-20" strokeWidth={1} />,
    },
    {
        title: 'Modern Design Approach',
        description: 'Beautiful interfaces that users love to interact with.',
        icon: <Palette className="w-20 h-20" strokeWidth={1} />,
    },
    {
        title: 'Intuitive and User-friendly',
        description: 'No technical expertise required to get started.',
        icon: <MousePointer className="w-20 h-20" strokeWidth={1} />,
    },
    {
        title: 'Top-notch Human Support',
        description: 'We\'re here for you, every step of your business journey.',
        icon: <Headphones className="w-20 h-20" strokeWidth={1} />,
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl mt-10 md:text-4xl lg:text-[52px] font-bold text-[#070707] mb-4">
                        What Makes Us Different
                    </h2>
                    <p className="text-gray-600 text-xl pt-3">
                        Not another plugin developer company. Here’s what we do differently.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] w-400 px-[30px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-300 rounded-2xl p-8 bg-white"
                        >
                            <div className="w-20 h-20 text-black rounded-2xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-[27px] text-[#070707] mb-3">{feature.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
