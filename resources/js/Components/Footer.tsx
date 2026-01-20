import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

const footerSections: FooterSection[] = [
    {
        title: 'Products',
        links: [
            { label: 'PostX', href: '/products/postx' },
            { label: 'WowStore', href: '/products/wowstore' },
            { label: 'WowRevenue', href: '/products/wowrevenue' },
            { label: 'WowAddons', href: '/products/wowaddons' },
            { label: 'WholesaleX', href: '/products/wholesalex' },
            { label: 'WowOptin', href: '/products/wowoptin' },
            { label: 'WowShipping', href: '/products/wowshipping' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Careers', href: '#' },
            { label: 'Affiliates', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Refund Policy', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Documentation', href: '/documentation' },
            { label: 'Blog', href: '/blog' },
            { label: 'Video Tutorials', href: '/tutorials' },
            { label: 'Community', href: '/community' },
            { label: 'Changelog', href: '#' },
            { label: 'Roadmap', href: '#' },
        ],
    },
];

const socialLinks: SocialLink[] = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="bg-[#070707] text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#1f66ff] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">W</span>
                            </div>
                            <span className="text-2xl font-bold text-white">WPXPO</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            WPXPO, a software startup founded in 2020, aims to deliver a highly customized web experience to the users.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="mailto:support@wpxpo.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-[#cdf33b] transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span>support@wpxpo.com</span>
                            </a>
                            <a
                                href="tel:+8801710437638"
                                className="flex items-center gap-3 text-gray-400 hover:text-[#cdf33b] transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span>+880 1710-437638</span>
                            </a>
                            <a
                                href="https://wa.me/8801710437638"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-[#cdf33b] transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#1f66ff] hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-[#cdf33b] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} WPXPO. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-[#cdf33b] transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-[#cdf33b] transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-[#cdf33b] transition-colors"
                            >
                                Refund Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
