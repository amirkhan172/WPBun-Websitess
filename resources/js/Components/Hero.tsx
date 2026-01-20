import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-48 pb-20 bg-gradient-to-b bg-[#f8fafc] relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute bottom-0 left-0 right-0 h-64"/>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <motion.h1
                        className="flex flex-col items-center text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-bold text-[#070707] mb-6 leading-[1.2] "
                    >
                        <span className="whitespace-nowrap">
                            Powerful WordPress & WooCommerce
                        </span>
                        <span className="whitespace-nowrap">
                            Solutions for Growing Businesses
                        </span>
                    </motion.h1>



                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 pt-2 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        WPXPO creates fast, user-friendly solutions that help businesses of every size build better websites, boost sales, and scale confidently.
                    </motion.p>

                    {/* Trustpilot Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 my-2 mb-10 shadow-sm"
                    >
                        <span className="text-sm text-[#070707] font-medium">Excellent</span>
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">4.9/5 based on 350+ reviews</span>
                        <span className="text-sm font-semibold text-[#00b67a]">Trustpilot</span>
                    </motion.div>

                    {/* Trust Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-gray-600"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#070707]">65K+</span>
                            <span className="text-sm">Happy Users</span>
                        </div>
                        <div className="w-px h-6 bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#070707]">9+</span>
                            <span className="text-sm">Premium Plugins</span>
                        </div>
                        <div className="w-px h-6 bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#070707]">650+</span>
                            <span className="text-sm">5-Star Reviews</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
