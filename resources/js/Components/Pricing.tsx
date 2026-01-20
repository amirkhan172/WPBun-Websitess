import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface PricingPlan {
    id: number;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    popular?: boolean;
    cta: string;
}

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Starter',
        description: 'Perfect for individual site owners',
        monthlyPrice: 49,
        yearlyPrice: 39,
        features: [
            '1 Site License',
            'All Basic Features',
            '1 Year Updates',
            'Email Support',
            'Documentation Access',
        ],
        cta: 'Get Started',
    },
    {
        id: 2,
        name: 'Professional',
        description: 'Best for growing businesses',
        monthlyPrice: 99,
        yearlyPrice: 79,
        features: [
            '5 Site Licenses',
            'All Pro Features',
            '1 Year Updates',
            'Priority Support',
            'Documentation Access',
            'Premium Templates',
            'White Label Option',
        ],
        popular: true,
        cta: 'Get Started',
    },
    {
        id: 3,
        name: 'Agency Bundle',
        description: 'Everything for agencies',
        monthlyPrice: 199,
        yearlyPrice: 149,
        features: [
            'Unlimited Sites',
            'All Premium Features',
            'Lifetime Updates',
            '24/7 Priority Support',
            'All Plugins Included',
            'Premium Templates',
            'White Label Option',
            'Dedicated Account Manager',
        ],
        cta: 'Contact Sales',
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="pricing" className="py-20 bg-bg-light">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                    >
                        Pricing Plans
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
                    >
                        Choose Your Perfect Plan
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-gray text-lg mb-8"
                    >
                        Get started with our flexible pricing options. Save up to 20% with yearly
                        billing.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-sm"
                    >
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                !isYearly
                                    ? 'bg-primary text-white'
                                    : 'text-text-gray hover:text-secondary'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                                isYearly
                                    ? 'bg-primary text-white'
                                    : 'text-text-gray hover:text-secondary'
                            }`}
                        >
                            Yearly
                            <span className="bg-accent text-secondary text-xs px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl p-8 ${
                                plan.popular
                                    ? 'ring-2 ring-primary shadow-xl scale-105'
                                    : 'border border-gray-100 hover:shadow-lg'
                            } transition-all duration-300`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                        <Zap className="w-4 h-4" /> Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-secondary mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-text-gray text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-secondary">
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-text-gray">/month</span>
                                </div>
                                {isYearly && (
                                    <p className="text-sm text-text-gray mt-1">
                                        Billed annually (${plan.yearlyPrice * 12}/year)
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-text-gray"
                                    >
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                                    plan.popular
                                        ? 'bg-primary text-white hover:bg-primary-dark'
                                        : 'bg-secondary text-white hover:bg-gray-800'
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-text-gray">
                        30-day money-back guarantee. No questions asked.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
