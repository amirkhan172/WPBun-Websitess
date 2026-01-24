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
    Calendar,
    BarChart3,
    PieChart,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

// Revenue data for chart visualization
const revenueData = [
    { month: 'Jan', revenue: 12500, orders: 89 },
    { month: 'Feb', revenue: 15200, orders: 102 },
    { month: 'Mar', revenue: 18700, orders: 128 },
    { month: 'Apr', revenue: 16300, orders: 115 },
    { month: 'May', revenue: 21500, orders: 145 },
    { month: 'Jun', revenue: 24800, orders: 167 },
    { month: 'Jul', revenue: 22100, orders: 152 },
    { month: 'Aug', revenue: 26300, orders: 178 },
    { month: 'Sep', revenue: 28900, orders: 195 },
    { month: 'Oct', revenue: 32500, orders: 218 },
    { month: 'Nov', revenue: 38200, orders: 256 },
    { month: 'Dec', revenue: 48574, orders: 312 },
];

// Product performance
const productPerformance = [
    { name: 'Agency Bundle', revenue: 122255, sales: 245, growth: 18 },
    { name: 'PostX Pro', revenue: 11151, sales: 189, growth: 12 },
    { name: 'WowStore Pro', revenue: 7644, sales: 156, growth: 8 },
    { name: 'WowShipping', revenue: 5226, sales: 134, growth: 15 },
    { name: 'WholesaleX', revenue: 4802, sales: 98, growth: 5 },
    { name: 'WowAddons', revenue: 4368, sales: 112, growth: 10 },
    { name: 'WowRevenue', revenue: 3822, sales: 78, growth: 7 },
    { name: 'WowOptin', revenue: 1885, sales: 65, growth: -3 },
];

// Summary stats
const summaryStats = [
    { title: 'Total Revenue', value: '$285,574', change: '+24.5%', trend: 'up', icon: <DollarSign className="w-6 h-6" />, color: 'bg-green-500' },
    { title: 'Total Orders', value: '1,957', change: '+18.2%', trend: 'up', icon: <ShoppingCart className="w-6 h-6" />, color: 'bg-blue-500' },
    { title: 'New Customers', value: '847', change: '+32.1%', trend: 'up', icon: <Users className="w-6 h-6" />, color: 'bg-purple-500' },
    { title: 'Avg Order Value', value: '$145.89', change: '+5.3%', trend: 'up', icon: <BarChart3 className="w-6 h-6" />, color: 'bg-orange-500' },
];

// Top countries
const topCountries = [
    { country: 'United States', revenue: 98500, percentage: 35 },
    { country: 'United Kingdom', revenue: 45200, percentage: 16 },
    { country: 'Germany', revenue: 38700, percentage: 14 },
    { country: 'Canada', revenue: 28400, percentage: 10 },
    { country: 'Australia', revenue: 22100, percentage: 8 },
    { country: 'Others', revenue: 48674, percentage: 17 },
];

export default function Reports() {
    const [dateRange, setDateRange] = useState('year');
    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

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
                    {/* Simple Bar Chart */}
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
                </div>

                {/* Top Countries */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="font-semibold text-gray-900 mb-6">Revenue by Country</h2>
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
                </div>
            </div>

            {/* Product Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900">Product Performance</h2>
                </div>
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
            </div>
        </AdminLayout>
    );
}
