import { motion } from 'framer-motion';
import { Star, Package, Users, UsersRound, Globe, MessageCircle, Facebook } from 'lucide-react';
import { ReactNode } from 'react';

interface Stat {
    value: string;
    label: string;
    icon: ReactNode;
}

const stats: Stat[] = [
    {
        value: '650+',
        label: 'Five-Star Rating',
        icon: <Star className="w-24 h-24 md:w-36 md:h-36" strokeWidth={1} />,
    },
    {
        value: '9+',
        label: 'Amazing Products',
        icon: <Package className="w-24 h-24 md:w-36 md:h-36" strokeWidth={1} />,
    },
    {
        value: '65K+',
        label: 'Happy Customers',
        icon: <Users className="w-24 h-24 md:w-36 md:h-36" strokeWidth={1} />,
    },
    {
        value: '30+',
        label: 'Team Members',
        icon: <UsersRound className="w-24 h-24 md:w-36 md:h-36" strokeWidth={1} />,
    },
    {
        value: '160+',
        label: 'Countries Worldwide',
        icon: <Globe className="w-24 h-24 md:w-36 md:h-36" strokeWidth={1} />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

export default function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#070707] leading-tight">
                        Trusted by WordPress and
                        <span className="text-[#1f66ff]"> WooCommerce</span> Users
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6 mb-12 px-[25px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className={`text-left rounded-2xl p-8 flex flex-col items-start justify-start relative overflow-hidden
                                ${index === 4
                                    ? 'w-full sm:w-[calc(50%-12px)] lg:w-[calc(62%+12px)] aspect-[8/3]'
                                    : 'w-full sm:w-[calc(50%-12px)] lg:w-[31%] aspect-[4/3]'
                                }
                                ${stat.value === '65K+'
                                    ? 'bg-[#1f66ff] border-none'
                                    : 'border border-gray-300'
                                }`}
                        >
                            <div className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-3 ${
                                stat.value === '65K+' ? 'text-white' : 'text-[#1f66ff]'
                            }`}>
                                {stat.value}
                            </div>
                            <p className={`text-xl md:text-2xl lg:text-3xl ${
                                stat.value === '65K+' ? 'text-white' : 'text-gray-600'
                            }`}>{stat.label}</p>

                            {/* Icon or Dots Pattern */}
                            {index === 4 ? (
                                <div className="absolute right-0 top-0 bottom-0 left-[30%] flex items-center justify-center overflow-hidden">
                                    {/* Large Globe made of dots */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                                            {/* Outer circle */}
                                            {[...Array(32)].map((_, i) => {
                                                const angle = (i * 11.25) * (Math.PI / 180);
                                                const x = 50 + 48 * Math.cos(angle);
                                                const y = 50 + 48 * Math.sin(angle);
                                                return (
                                                    <div
                                                        key={`outer-${i}`}
                                                        className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"
                                                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                                    />
                                                );
                                            })}
                                            {/* Horizontal equator line */}
                                            {[...Array(11)].map((_, i) => (
                                                <div
                                                    key={`eq-${i}`}
                                                    className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"
                                                    style={{ left: `${5 + i * 9}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
                                                />
                                            ))}
                                            {/* Vertical meridian line */}
                                            {[...Array(11)].map((_, i) => (
                                                <div
                                                    key={`mer-${i}`}
                                                    className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"
                                                    style={{ left: '50%', top: `${5 + i * 9}%`, transform: 'translate(-50%, -50%)' }}
                                                />
                                            ))}
                                            {/* Curved longitude line left */}
                                            {[...Array(9)].map((_, i) => {
                                                const t = (i - 4) * 0.22;
                                                const x = 50 - 20 + 5 * Math.abs(t);
                                                const y = 50 + t * 45;
                                                return (
                                                    <div
                                                        key={`long-l-${i}`}
                                                        className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"
                                                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                                    />
                                                );
                                            })}
                                            {/* Curved longitude line right */}
                                            {[...Array(9)].map((_, i) => {
                                                const t = (i - 4) * 0.22;
                                                const x = 50 + 20 - 5 * Math.abs(t);
                                                const y = 50 + t * 45;
                                                return (
                                                    <div
                                                        key={`long-r-${i}`}
                                                        className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"
                                                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`absolute bottom-4 right-4 ${
                                    stat.value === '65K+' ? 'text-white' : 'text-gray-200'
                                }`}>
                                    {stat.icon}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Grow More Faster Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-blue-100 rounded-3xl mx-[25px] p-10 md:p-16 border border-blue-200"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Side - Text */}
                        <div className="text-center lg:text-left max-w-xl">
                            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#070707] leading-tight mb-4">
                                Grow More Faster with Industry Experts
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Whether you're just getting started or scaling fast, we've got you covered. Access helpful guidance
                            </p>
                        </div>

                        {/* Right Side - Links */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Quick Support Card */}
                            <a
                                href="/contact"
                                className="relative flex flex-col items-center justify-between bg-white hover:bg-blue-50 transition-colors rounded-2xl px-10 py-10 h-[240px] w-[240px] overflow-hidden border border-blue-200"
                            >
                                <div className="w-40 h-40 bg-blue-50 rounded-full flex items-center justify-center -mt-4 mb-4">
                                    <div className="w-36 h-36 bg-[#1f66ff] rounded-full flex items-center justify-center">
                                        <MessageCircle className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                                <span className="text-[#070707] text-lg font-semibold bg-blue-100 rounded-lg px-4 py-2 mb-2">Quick Support</span>
                            </a>

                            {/* Join the Community Card */}
                            <a
                                href="https://www.facebook.com/groups/wpxpo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col items-center justify-between bg-white hover:bg-blue-50 transition-colors rounded-2xl px-10 py-10 h-[240px] w-[240px] overflow-hidden border border-blue-200"
                            >
                                <div className="w-40 h-40 bg-blue-50 rounded-full flex items-center justify-center -mt-4 mb-4">
                                    <div className="w-36 h-36 bg-[#1f66ff] rounded-full flex items-center justify-center">
                                        <Facebook className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                                <span className="text-[#070707] text-lg font-semibold bg-blue-100 rounded-lg px-4 py-2 whitespace-nowrap mb-2">Join the Community</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
