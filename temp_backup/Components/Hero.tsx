import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 gradient-hero">
            <div className="container-custom">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
                    >
                        <span className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </span>
                        <span className="text-sm font-medium text-secondary">4.9/5 on Trustpilot</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                        Powerful WordPress &{' '}
                        <span className="gradient-text">WooCommerce</span> Solutions
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-gray mb-8 max-w-2xl mx-auto"
                    >
                        Build stunning websites and powerful online stores with our premium WordPress
                        and WooCommerce plugins. Trusted by 65K+ users worldwide.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <a href="#products" className="btn-accent flex items-center gap-2 group">
                            Explore Products
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#pricing" className="btn-outline">
                            View Pricing
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-text-gray"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-secondary">65K+</span>
                            <span className="text-sm">Active Users</span>
                        </div>
                        <div className="w-px h-8 bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-secondary">9+</span>
                            <span className="text-sm">Premium Plugins</span>
                        </div>
                        <div className="w-px h-8 bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-secondary">650+</span>
                            <span className="text-sm">5-Star Reviews</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 relative"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                            <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-4xl font-bold text-primary">W</span>
                                    </div>
                                    <p className="text-text-gray">Product Dashboard Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-2xl opacity-20 blur-xl" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-xl" />
                </motion.div>
            </div>
        </section>
    );
}
