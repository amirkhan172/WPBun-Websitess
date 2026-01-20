import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
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
            { label: 'PostX', href: '#' },
            { label: 'ProductX', href: '#' },
            { label: 'WowStore', href: '#' },
            { label: 'Suspended', href: '#' },
            { label: 'WholesaleX', href: '#' },
            { label: 'Invoice', href: '#' },
            { label: 'Stock Notifier', href: '#' },
            { label: 'Wishlist', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Affiliates', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Refund Policy', href: '#' },
        ],
    },
    {
        title: 'Quick Info',
        links: [
            { label: 'Contact Us', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'FAQ', href: '#' },
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
        <footer className="bg-secondary text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">W</span>
                            </div>
                            <span className="text-2xl font-bold">WPXPO</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            We create powerful WordPress and WooCommerce plugins that help
                            businesses grow faster and build better websites.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:support@wpxpo.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span>support@wpxpo.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span>San Francisco, CA, USA</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
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
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} WPXPO. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
