import { Link } from '@inertiajs/react';
import { Mail } from 'lucide-react';

interface FooterLink {
    label: string;
    href: string;
    badge?: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
        title: 'Our Products',
        links: [
            { label: 'PostX', href: '/products/postx' },
            { label: 'WowStore', href: '/products/wowstore' },
            { label: 'WowAddons', href: '/products/wowaddons' },
            { label: 'WowRevenue', href: '/products/wowrevenue' },
            { label: 'WowShipping', href: '/products/wowshipping' },
            { label: 'WholesaleX', href: '/products/wholesalex' },
            { label: 'WowOptin', href: '/products/wowoptin' },
            { label: 'WowApps', href: '/products/wowapps' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'Career', href: '/career', badge: "We're hiring" },
            { label: 'About Us', href: '/about' },
            { label: 'Affiliates', href: '/affiliates' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms-conditions' },
            { label: 'Refund Policy', href: '/refund-policy' },
            { label: 'Affiliates Policy', href: '/affiliates-policy' },
        ],
    },
    {
        title: 'Quick Info',
        links: [
            { label: 'Contact', href: '/contact' },
            { label: 'Documentation', href: '/documentation' },
            { label: 'Data Collection Policy', href: '/data-collection-policy' },
            { label: 'Pre-sales Questions', href: '/pre-sales' },
            { label: 'Blog', href: '/blog' },
            { label: 'FAQ', href: '/faq' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black">
            {/* Main Footer */}
            <div className="pt-28 pb-20 px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2 pr-8">
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#1f66ff] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">W</span>
                            </div>
                            <span className="text-2xl font-bold text-black">WPBun</span>
                        </Link>
                        <p className="text-gray-800 text-lg mb-6 max-w-[500px] leading-relaxed">
                            WPBun, a software startup founded in 2020, aims to deliver a highly customized web experience to the users.
                        </p>

                        {/* Newsletter Subscription */}
                        <div className="mb-6 max-w-xs">
                            <h4 className="text-black text-xl font-semibold mb-3">Join 1,50,000+ Readers</h4>
                            <div className="flex flex-col gap-5">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-5 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-[#1f66ff] transition-colors"
                                    />
                                </div>
                                <button className="bg-[#1f66ff] hover:bg-[#1a5ae0] text-white px-6 py-4 rounded-lg font-semibold transition-colors w-full">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                        </div>

                    {/* Footer Links */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="pl-28">
                            <h4 className="text-xl font-semibold text-black mb-5 whitespace-nowrap">{section.title}</h4>
                            <ul className="space-y-6">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 text-lg hover:text-[#1f66ff] transition-colors whitespace-nowrap flex items-center gap-2"
                                        >
                                            {link.label}
                                            {link.badge && (
                                                <span className="bg-[#1f66ff] text-white text-xs px-2 py-1 rounded-full">
                                                    {link.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300 mx-8 md:mx-12 lg:mx-16">
                <div className="py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <p className="text-gray-800 text-lg">
                            &copy; {new Date().getFullYear()} WPBun. All rights reserved.
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-3">
                            <span className="text-gray-800 text-lg">We accept:</span>
                            <div className="flex items-center gap-2">
                                {/* Visa */}
                                <div className="bg-white rounded px-2 py-1 border border-gray-300">
                                    <svg className="h-5 w-8" viewBox="0 0 48 16" fill="none">
                                        <path d="M19.5 1.5L17 14.5H14L16.5 1.5H19.5Z" fill="#1A1F71"/>
                                        <path d="M30.5 1.7C29.8 1.4 28.7 1 27.3 1C24 1 21.7 2.7 21.7 5.1C21.7 6.9 23.3 7.9 24.5 8.5C25.8 9.1 26.2 9.5 26.2 10.1C26.2 10.9 25.2 11.3 24.3 11.3C23 11.3 22.3 11.1 21.2 10.6L20.7 10.4L20.2 13.6C21 13.9 22.5 14.2 24 14.2C27.5 14.2 29.8 12.5 29.8 9.9C29.8 8.5 28.9 7.4 27 6.5C25.9 5.9 25.2 5.5 25.2 4.9C25.2 4.3 25.9 3.7 27.3 3.7C28.5 3.7 29.3 3.9 30 4.2L30.3 4.4L30.5 1.7Z" fill="#1A1F71"/>
                                        <path d="M35.5 1.5C34.7 1.5 34.1 1.7 33.7 2.5L28.5 14.5H32L32.7 12.4H36.9L37.3 14.5H40.5L37.7 1.5H35.5ZM33.5 9.9L35.2 5.1L36.2 9.9H33.5Z" fill="#1A1F71"/>
                                        <path d="M12.5 1.5L9 10L8.6 8.2C7.9 6 5.8 3.6 3.5 2.4L6.5 14.5H10L16 1.5H12.5Z" fill="#1A1F71"/>
                                        <path d="M6.5 1.5H1L1 1.7C5 2.7 7.7 5.2 8.6 8.2L7.6 2.6C7.5 1.8 6.9 1.5 6.5 1.5Z" fill="#F9A533"/>
                                    </svg>
                                </div>
                                {/* Mastercard */}
                                <div className="bg-white rounded px-2 py-1 border border-gray-300">
                                    <svg className="h-5 w-8" viewBox="0 0 48 30" fill="none">
                                        <circle cx="18" cy="15" r="12" fill="#EB001B"/>
                                        <circle cx="30" cy="15" r="12" fill="#F79E1B"/>
                                        <path d="M24 5.8C26.4 7.7 28 10.7 28 14C28 17.3 26.4 20.3 24 22.2C21.6 20.3 20 17.3 20 14C20 10.7 21.6 7.7 24 5.8Z" fill="#FF5F00"/>
                                    </svg>
                                </div>
                                {/* PayPal */}
                                <div className="bg-white rounded px-2 py-1 border border-gray-300">
                                    <svg className="h-5 w-8" viewBox="0 0 48 16" fill="none">
                                        <path d="M17.5 2H13.5C13.2 2 12.9 2.2 12.9 2.5L11 13.5C11 13.7 11.1 13.9 11.4 13.9H13.3C13.6 13.9 13.9 13.7 13.9 13.4L14.4 10.4C14.4 10.1 14.7 9.9 15 9.9H16.4C19.3 9.9 21 8.5 21.5 5.7C21.7 4.5 21.5 3.5 21 2.9C20.4 2.3 19.2 2 17.5 2Z" fill="#003087"/>
                                        <path d="M6.5 2H2.5C2.2 2 1.9 2.2 1.9 2.5L0 13.5C0 13.7 0.1 13.9 0.4 13.9H2.5C2.8 13.9 3.1 13.7 3.1 13.4L3.6 10.4C3.6 10.1 3.9 9.9 4.2 9.9H5.6C8.5 9.9 10.2 8.5 10.7 5.7C10.9 4.5 10.7 3.5 10.2 2.9C9.6 2.3 8.2 2 6.5 2Z" fill="#009CDE"/>
                                    </svg>
                                </div>
                                {/* Stripe */}
                                <div className="bg-white rounded px-2 py-1 border border-gray-300">
                                    <svg className="h-5 w-8" viewBox="0 0 48 20" fill="none">
                                        <path d="M24 4C21.5 4 20 5.2 20 7C20 10.2 25 9.6 25 11.2C25 11.8 24.4 12.2 23.4 12.2C22 12.2 20.8 11.6 20 11L19 14C19.8 14.6 21.4 15 23.2 15C26 15 27.5 13.8 27.5 11.8C27.5 8.4 22.5 9.2 22.5 7.4C22.5 7 23 6.6 24 6.6C25.2 6.6 26.2 7 27 7.4L28 4.6C27.2 4.2 25.8 4 24 4Z" fill="#635BFF"/>
                                    </svg>
                                </div>
                                {/* Amex */}
                                <div className="bg-white rounded px-2 py-1 border border-gray-300">
                                    <svg className="h-5 w-8" viewBox="0 0 48 16" fill="none">
                                        <rect width="48" height="16" rx="2" fill="#006FCF"/>
                                        <path d="M8 4L5 12H7.5L8 10.5H11L11.5 12H14L11 4H8ZM8.5 8.5L9.5 5.5L10.5 8.5H8.5Z" fill="white"/>
                                        <path d="M15 4V12H17.5V9L19 12H22L19.5 8.5L22 5H19L17.5 7.5V4H15Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-lg">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-600 text-lg hover:text-[#1f66ff] transition-colors whitespace-nowrap"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-conditions"
                                className="text-gray-600 text-lg hover:text-[#1f66ff] transition-colors whitespace-nowrap"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/refund-policy"
                                className="text-gray-600 text-lg hover:text-[#1f66ff] transition-colors whitespace-nowrap"
                            >
                                Refund Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
