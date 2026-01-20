import { motion } from 'framer-motion';
import { Star, Package, Users, Globe, Award } from 'lucide-react';
import { ReactNode } from 'react';

interface Stat {
    value: string;
    label: string;
    icon: ReactNode;
}

const stats: Stat[] = [
    {
        value: '650+',
        label: '5-Star Ratings',
        icon: <Star className="w-8 h-8" />,
    },
    {
        value: '9+',
        label: 'Amazing Products',
        icon: <Package className="w-8 h-8" />,
    },
    {
        value: '65K+',
        label: 'Happy Customers',
        icon: <Users className="w-8 h-8" />,
    },
    {
        value: '30+',
        label: 'Team Members',
        icon: <Award className="w-8 h-8" />,
    },
    {
        value: '160+',
        label: 'Countries Worldwide',
        icon: <Globe className="w-8 h-8" />,
    },
];

export default function Stats() {
    return (
        <section className="py-20 bg-[#070707] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#1f66ff] rounded-full filter blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff176b] rounded-full filter blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-[#cdf33b]/20 text-[#cdf33b] rounded-full text-sm font-semibold mb-4">
                        OUR ACHIEVEMENTS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4">
                        Numbers That Speak
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Join thousands of satisfied customers who trust WPXPO for their WordPress and WooCommerce needs.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#cdf33b] group-hover:bg-[#cdf33b] group-hover:text-[#070707] transition-all duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
