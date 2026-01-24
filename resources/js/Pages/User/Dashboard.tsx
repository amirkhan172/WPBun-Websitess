import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';
import { Card, Badge, Button } from '@/Components/UI';
import {
    Download,
    ArrowRight,
    Clock,
    CheckCircle,
    AlertCircle,
    Star
} from 'lucide-react';

interface DashboardStats {
    totalDownloads: number;
    activeOrders: number;
    activeLicenses: number;
    totalSpent: string;
}

interface RecentOrder {
    id: string;
    product: string;
    date: string;
    status: 'completed' | 'processing' | 'pending';
    amount: string;
}

interface RecentDownload {
    id: string;
    product: string;
    version: string;
    downloadedAt: string;
}

// Mock data - in real app, this would come from props
const stats: DashboardStats = {
    totalDownloads: 24,
    activeOrders: 3,
    activeLicenses: 5,
    totalSpent: '$299',
};

const recentOrders: RecentOrder[] = [
    { id: '#WPB-1234', product: 'Agency Bundle', date: 'Jan 15, 2025', status: 'completed', amount: '$499' },
    { id: '#WPB-1233', product: 'PostX Pro', date: 'Jan 10, 2025', status: 'completed', amount: '$59' },
    { id: '#WPB-1232', product: 'WowStore Pro', date: 'Dec 28, 2024', status: 'completed', amount: '$49' },
];

const recentDownloads: RecentDownload[] = [
    { id: '1', product: 'PostX Pro', version: 'v3.2.1', downloadedAt: '2 hours ago' },
    { id: '2', product: 'WowStore Pro', version: 'v2.1.0', downloadedAt: '1 day ago' },
    { id: '3', product: 'WowAddons Pro', version: 'v1.5.3', downloadedAt: '3 days ago' },
];

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed':
            return <CheckCircle className="w-4 h-4" />;
        case 'processing':
            return <Clock className="w-4 h-4" />;
        case 'pending':
            return <AlertCircle className="w-4 h-4" />;
        default:
            return null;
    }
};

export default function Dashboard() {
    return (
        <UserLayout>
            <Head title="Dashboard" />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <Card padding="none" rounded="xl">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h2 className="font-semibold text-gray-900">Recent Orders</h2>
                        <Link
                            href="/user/orders"
                            className="text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1"
                        >
                            View All
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div>
                                    <p className="font-medium text-gray-900">{order.product}</p>
                                    <p className="text-sm text-gray-500">{order.id} • {order.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-gray-900">{order.amount}</span>
                                    <Badge
                                        variant={order.status === 'completed' ? 'success' : order.status === 'processing' ? 'info' : 'warning'}
                                        size="md"
                                    >
                                        {getStatusIcon(order.status)}
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Recent Downloads */}
                <Card padding="none" rounded="xl">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h2 className="font-semibold text-gray-900">Recent Downloads</h2>
                        <Link
                            href="/user/downloads"
                            className="text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1"
                        >
                            View All
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentDownloads.map((download) => (
                            <div key={download.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                        <Download className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{download.product}</p>
                                        <p className="text-sm text-gray-500">{download.version}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">{download.downloadedAt}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Upgrade Banner */}
            <div className="mt-8 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-medium text-white/90">Upgrade to Agency Bundle</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Get All Plugins at 80% OFF!</h3>
                        <p className="text-white/80 max-w-lg">
                            Access all 8 premium plugins with lifetime updates and priority support. Perfect for agencies and developers.
                        </p>
                    </div>
                    <Button
                        href="/agency-bundle"
                        variant="white"
                        size="lg"
                        rounded="lg"
                        className="flex-shrink-0 bg-white text-primary hover:bg-gray-100"
                    >
                        View Agency Bundle
                    </Button>
                </div>
            </div>
        </UserLayout>
    );
}
