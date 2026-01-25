import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    DollarSign,
    TrendingUp,
    TrendingDown,
    ShoppingCart,
    Users,
    Package,
    Download,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    Inbox
} from 'lucide-react';

interface RevenueData {
    month: string;
    revenue: number;
    orders: number;
}

interface ProductPerformance {
    name: string;
    revenue: number;
    sales: number;
    growth: number;
}

interface CountryData {
    country: string;
    revenue: number;
    percentage: number;
}

interface SummaryStats {
    totalRevenue: { value: string; change: string; trend: 'up' | 'down' };
    totalOrders: { value: string; change: string; trend: 'up' | 'down' };
    newCustomers: { value: string; change: string; trend: 'up' | 'down' };
    avgOrderValue: { value: string; change: string; trend: 'up' | 'down' };
}

interface Props {
    revenueData?: RevenueData[];
    productPerformance?: ProductPerformance[];
    topCountries?: CountryData[];
    stats?: SummaryStats;
}

const EmptyChart = () => (
    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <Inbox className="w-12 h-12 mb-3" />
        <p className="text-sm">No data available</p>
    </div>
);

export default function Reports({ revenueData = [], productPerformance = [], topCountries = [], stats }: Props) {
    const [dateRange, setDateRange] = useState('year');
    const maxRevenue = revenueData.length > 0 ? Math.max(...revenueData.map(d => d.revenue)) : 0;

    const summaryStats = [
        {
            title: 'Total Revenue',
            value: stats?.totalRevenue?.value || '$0',
            change: stats?.totalRevenue?.change || '0%',
            trend: stats?.totalRevenue?.trend || 'up',
            icon: <DollarSign className="w-6 h-6" />,
            color: 'bg-green-500'
        },
        {
            title: 'Total Orders',
            value: stats?.totalOrders?.value || '0',
            change: stats?.totalOrders?.change || '0%',
            trend: stats?.totalOrders?.trend || 'up',
            icon: <ShoppingCart className="w-6 h-6" />,
            color: 'bg-blue-500'
        },
        {
            title: 'New Customers',
            value: stats?.newCustomers?.value || '0',
            change: stats?.newCustomers?.change || '0%',
            trend: stats?.newCustomers?.trend || 'up',
            icon: <Users className="w-6 h-6" />,
            color: 'bg-purple-500'
        },
        {
            title: 'Avg Order Value',
            value: stats?.avgOrderValue?.value || '$0',
            change: stats?.avgOrderValue?.change || '0%',
            trend: stats?.avgOrderValue?.trend || 'up',
            icon: <BarChart3 className="w-6 h-6" />,
            color: 'bg-orange-500'
        },
    ];

    return (
        <AdminLayout>
            <Head title="Reports - Admin" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                    <p className="text-gray-500 mt-1">Track your business performance</p>
                </div>
                <div className="flex items-center gap-2">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                    >
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="quarter">Last Quarter</option>
                        <option value="year">This Year</option>
                    </select>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {summaryStats.map((stat) => (
                    <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                                {stat.icon}
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-medium ${
                                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                {stat.change}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-semibold text-gray-900">Revenue Overview</h2>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-primary rounded-full"></span>
                                Revenue
                            </span>
                        </div>
                    </div>
                    {revenueData.length > 0 ? (
                        <div className="flex items-end justify-between gap-2 h-64">
                            {revenueData.map((data) => (
                                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                                    <div
                                        className="w-full bg-primary/80 rounded-t-lg hover:bg-primary transition-colors cursor-pointer"
                                        style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                                        title={`$${data.revenue.toLocaleString()}`}
                                    />
                                    <span className="text-xs text-gray-500">{data.month}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <EmptyChart />
                    )}
                </div>

                {/* Top Countries */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="font-semibold text-gray-900 mb-6">Revenue by Country</h2>
                    {topCountries.length > 0 ? (
                        <div className="space-y-4">
                            {topCountries.map((country) => (
                                <div key={country.country}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm text-gray-700">{country.country}</span>
                                        <span className="text-sm font-medium text-gray-900">${country.revenue.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${country.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                            <Inbox className="w-10 h-10 mb-2" />
                            <p className="text-sm">No data available</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900">Product Performance</h2>
                </div>
                {productPerformance.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Revenue</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Sales</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Growth</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Performance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {productPerformance.map((product) => (
                                    <tr key={product.name} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-100 rounded-lg flex items-center justify-center">
                                                    <Package className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="font-medium text-gray-900">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">${product.revenue.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.sales}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                                                product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {product.growth >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                                {product.growth >= 0 ? '+' : ''}{product.growth}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${product.growth >= 10 ? 'bg-green-500' : product.growth >= 0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                    style={{ width: `${Math.min(Math.abs(product.growth) * 5, 100)}%` }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                        <Inbox className="w-16 h-16 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No product data</h3>
                        <p className="text-sm text-gray-500">Product performance data will appear here once you have sales.</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
