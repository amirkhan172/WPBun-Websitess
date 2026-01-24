import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import {
    DollarSign,
    ShoppingCart,
    Users,
    Package,
    TrendingUp,
    TrendingDown,
    ArrowRight,
    Clock,
    CheckCircle,
    AlertCircle,
    Inbox
} from 'lucide-react';

interface StatsCard {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
}

interface Order {
    id: string;
    customer: string;
    email: string;
    product: string;
    amount: string;
    status: 'completed' | 'processing' | 'pending';
    date: string;
}

interface Product {
    name: string;
    sales: number;
    revenue: string;
    growth: string;
}

interface Activity {
    type: 'order' | 'user' | 'support' | 'license';
    message: string;
    time: string;
}

interface Props {
    stats?: {
        totalRevenue?: StatsCard;
        totalOrders?: StatsCard;
        totalUsers?: StatsCard;
        activeLicenses?: StatsCard;
    };
    recentOrders?: Order[];
    topProducts?: Product[];
    recentActivities?: Activity[];
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'completed':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-3 h-3" /> Completed</span>;
        case 'processing':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"><Clock className="w-3 h-3" /> Processing</span>;
        case 'pending':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"><AlertCircle className="w-3 h-3" /> Pending</span>;
        default:
            return null;
    }
};

const EmptyState = ({ message }: { message: string }) => (
    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
        <Inbox className="w-12 h-12 mb-3" />
        <p className="text-sm">{message}</p>
    </div>
);

export default function Dashboard({ stats, recentOrders = [], topProducts = [], recentActivities = [] }: Props) {
    const statsCards = [
        {
            title: 'Total Revenue',
            value: stats?.totalRevenue?.value || '$0',
            change: stats?.totalRevenue?.change || '0%',
            trend: stats?.totalRevenue?.trend || 'up',
            icon: <DollarSign className="w-6 h-6" />,
            color: 'bg-green-500',
        },
        {
            title: 'Total Orders',
            value: stats?.totalOrders?.value || '0',
            change: stats?.totalOrders?.change || '0%',
            trend: stats?.totalOrders?.trend || 'up',
            icon: <ShoppingCart className="w-6 h-6" />,
            color: 'bg-blue-500',
        },
        {
            title: 'Total Users',
            value: stats?.totalUsers?.value || '0',
            change: stats?.totalUsers?.change || '0%',
            trend: stats?.totalUsers?.trend || 'up',
            icon: <Users className="w-6 h-6" />,
            color: 'bg-purple-500',
        },
        {
            title: 'Active Licenses',
            value: stats?.activeLicenses?.value || '0',
            change: stats?.activeLicenses?.change || '0%',
            trend: stats?.activeLicenses?.trend || 'up',
            icon: <Package className="w-6 h-6" />,
            color: 'bg-orange-500',
        },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your store.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {statsCards.map((stat) => (
                    <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                                {stat.icon}
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-medium ${
                                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="font-semibold text-gray-900">Recent Orders</h2>
                        <Link href="/admin/orders" className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    {recentOrders.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Order</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-gray-900">{order.id}</span>
                                                <p className="text-xs text-gray-500">{order.date}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-900">{order.customer}</span>
                                                <p className="text-xs text-gray-500">{order.email}</p>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{order.product}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{order.amount}</td>
                                            <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <EmptyState message="No orders yet" />
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Top Products */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-900">Top Products</h2>
                        </div>
                        {topProducts.length > 0 ? (
                            <div className="p-4 space-y-3">
                                {topProducts.map((product, index) => (
                                    <div key={product.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-bold text-gray-600">
                                                {index + 1}
                                            </span>
                                            <div>
                                                <p className="font-medium text-gray-900">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.sales} sales</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-900">{product.revenue}</p>
                                            <p className="text-xs text-green-600">{product.growth}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyState message="No products yet" />
                        )}
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-900">Recent Activity</h2>
                        </div>
                        {recentActivities.length > 0 ? (
                            <div className="p-4 space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className={`w-2 h-2 rounded-full mt-2 ${
                                            activity.type === 'order' ? 'bg-green-500' :
                                            activity.type === 'user' ? 'bg-blue-500' :
                                            activity.type === 'support' ? 'bg-orange-500' :
                                            'bg-purple-500'
                                        }`} />
                                        <div>
                                            <p className="text-sm text-gray-700">{activity.message}</p>
                                            <p className="text-xs text-gray-400">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyState message="No recent activity" />
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
