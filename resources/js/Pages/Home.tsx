import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero from '@/Components/Hero';
import Products from '@/Components/Products';
import Features from '@/Components/Features';
import Testimonials from '@/Components/Testimonials';
import Stats from '@/Components/Stats';
import Pricing from '@/Components/Pricing';
import CTA from '@/Components/CTA';

export default function Home() {
    return (
        <AppLayout>
            <Head title="Powerful WordPress & WooCommerce Solutions" />
            <Hero />
            <Products />
            <Features />
            <Testimonials />
            <Stats />
            <Pricing />
            <CTA />
        </AppLayout>
    );
}
