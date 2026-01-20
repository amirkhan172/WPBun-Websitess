import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-bg-light pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">W</span>
                    </div>
                    <span className="text-3xl font-bold text-secondary">WPXPO</span>
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-8 shadow-xl sm:max-w-md sm:rounded-2xl border border-gray-100">
                {children}
            </div>
        </div>
    );
}
