import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Users, BookOpen } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                            >
                                Grow More Faster
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/80 text-lg"
                            >
                                Join thousands of satisfied customers and take your WordPress site
                                to the next level.
                            </motion.p>
                        </div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                                <p className="text-white/70 text-sm">
                                    Get help whenever you need it from our expert team
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Community</h3>
                                <p className="text-white/70 text-sm">
                                    Join 65K+ users in our thriving community
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Documentation</h3>
                                <p className="text-white/70 text-sm">
                                    Comprehensive guides and tutorials
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <a
                                href="#get-started"
                                className="inline-flex items-center gap-2 bg-accent text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-xl group"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="text-white/60 text-sm mt-4">
                                No credit card required. Start your free trial today.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                        Join 1,50,000+ Readers
                    </h3>
                    <p className="text-text-gray mb-6">
                        Subscribe to our newsletter for tips, tutorials, and updates.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <button type="submit" className="btn-primary whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
