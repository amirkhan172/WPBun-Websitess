import { motion } from 'framer-motion';
import { Star, Package, Users, Award } from 'lucide-react';
import { ReactNode } from 'react';

interface Stat {
    id: number;
    value: string;
    label: string;
    icon: ReactNode;
    suffix?: string;
}

const stats: Stat[] = [
    {
        id: 1,
        value: '650',
        suffix: '+',
        label: '5-Star Reviews',
        icon: <Star className="w-8 h-8" />,
    },
    {
        id: 2,
        value: '9',
        suffix: '+',
        label: 'Premium Products',
        icon: <Package className="w-8 h-8" />,
    },
    {
        id: 3,
        value: '65K',
        suffix: '+',
        label: 'Happy Customers',
        icon: <Users className="w-8 h-8" />,
    },
    {
        id: 4,
        value: '99',
        suffix: '%',
        label: 'Satisfaction Rate',
        icon: <Award className="w-8 h-8" />,
    },
];

export default function Stats() {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary via-gray-900 to-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4"
                    >
                        Our Achievements
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                        Numbers That Speak
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Join thousands of satisfied customers who trust WPXPO for their WordPress
                        needs.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                                <span className="text-accent">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
