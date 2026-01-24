import { usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import AppLayout from './AppLayout';
import UserLayout from './UserLayout';

export default function DynamicLayout({ children }: PropsWithChildren) {
    const { auth } = usePage().props as any;
    const isAuthenticated = auth?.user !== null && auth?.user !== undefined;

    if (isAuthenticated) {
        return <UserLayout>{children}</UserLayout>;
    }

    return <AppLayout>{children}</AppLayout>;
}
