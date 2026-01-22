import { PropsWithChildren, useEffect } from 'react';
import { router } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function AppLayout({ children }: PropsWithChildren) {
    // Scroll to top on initial mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    // Scroll to top on every navigation
    useEffect(() => {
        const removeListener = router.on('navigate', () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        });

        return () => removeListener();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
