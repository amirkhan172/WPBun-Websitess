import { motion } from 'framer-motion';
import { ArrowRight, Zap, Mail } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function CTA() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <>
            {/* Agency Bundle CTA */}
            <section className="py-20 bg-gradient-to-br from-[#1f66ff] to-[#0693e3] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px]" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            LIMITED TIME OFFER
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Get All Plugins in One Bundle
                        </h2>

                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Save over 80% with our Agency Bundle. One payment, lifetime access to all premium plugins with updates and support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/agency-bundle"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1f66ff] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                            >
                                Grab the Deal
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-[#f5f7f9]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#070707] rounded-3xl p-8 md:p-12 text-center"
                    >
                        <div className="w-16 h-16 bg-[#cdf33b]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-[#cdf33b]" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Subscribe to Our Newsletter
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                            Join 1,50,000+ Readers. Get the latest WordPress tips, WooCommerce guides, and exclusive deals.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 px-6 py-4 rounded-xl text-[#070707] focus:ring-2 focus:ring-[#cdf33b] focus:outline-none text-lg"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 bg-[#cdf33b] text-[#070707] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8f655] transition-colors whitespace-nowrap"
                            >
                                Subscribe
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
