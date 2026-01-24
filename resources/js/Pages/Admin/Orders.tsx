import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    Search,
    Filter,
    MoreVertical,
    Eye,
    Download,
    RefreshCw,
    XCircle,
    CheckCircle,
    Clock,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    Calendar
} from 'lucide-react';

interface Order {
    id: string;
    customer: {
        name: string;
        email: string;
    };
    products: string[];
    amount: number;
    status: 'completed' | 'processing' | 'pending' | 'refunded' | 'cancelled';
    paymentMethod: string;
    date: string;
}

// Mock orders data
const ordersData: Order[] = [
    { id: '#WPB-1234', customer: { name: 'John Doe', email: 'john@example.com' }, products: ['Agency Bundle'], amount: 499, status: 'completed', paymentMethod: 'Credit Card', date: 'Jan 24, 2026 10:30 AM' },
    { id: '#WPB-1233', customer: { name: 'Jane Smith', email: 'jane@example.com' }, products: ['PostX Pro'], amount: 59, status: 'completed', paymentMethod: 'PayPal', date: 'Jan 24, 2026 09:15 AM' },
    { id: '#WPB-1232', customer: { name: 'Mike Johnson', email: 'mike@example.com' }, products: ['WowStore Pro', 'WowShipping'], amount: 88, status: 'processing', paymentMethod: 'Credit Card', date: 'Jan 23, 2026 04:45 PM' },
    { id: '#WPB-1231', customer: { name: 'Sarah Wilson', email: 'sarah@example.com' }, products: ['WowShipping'], amount: 39, status: 'pending', paymentMethod: 'Credit Card', date: 'Jan 23, 2026 02:20 PM' },
    { id: '#WPB-1230', customer: { name: 'Tom Brown', email: 'tom@example.com' }, products: ['Agency Bundle'], amount: 499, status: 'completed', paymentMethod: 'PayPal', date: 'Jan 22, 2026 11:00 AM' },
    { id: '#WPB-1229', customer: { name: 'Emily Davis', email: 'emily@example.com' }, products: ['WholesaleX'], amount: 49, status: 'refunded', paymentMethod: 'Credit Card', date: 'Jan 22, 2026 09:30 AM' },
    { id: '#WPB-1228', customer: { name: 'Chris Lee', email: 'chris@example.com' }, products: ['PostX Pro', 'WowAddons'], amount: 98, status: 'completed', paymentMethod: 'PayPal', date: 'Jan 21, 2026 03:15 PM' },
    { id: '#WPB-1227', customer: { name: 'Anna Martinez', email: 'anna@example.com' }, products: ['WowRevenue'], amount: 49, status: 'cancelled', paymentMethod: 'Credit Card', date: 'Jan 21, 2026 01:45 PM' },
];

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'completed':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-3 h-3" /> Completed</span>;
        case 'processing':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"><Clock className="w-3 h-3" /> Processing</span>;
        case 'pending':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"><AlertCircle className="w-3 h-3" /> Pending</span>;
        case 'refunded':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full"><RefreshCw className="w-3 h-3" /> Refunded</span>;
        case 'cancelled':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full"><XCircle className="w-3 h-3" /> Cancelled</span>;
        default:
            return null;
    }
};

// Stats summary
const orderStats = [
    { label: 'Total Orders', value: '1,245', color: 'bg-blue-500' },
    { label: 'Completed', value: '1,089', color: 'bg-green-500' },
    { label: 'Processing', value: '45', color: 'bg-yellow-500' },
    { label: 'Refunded', value: '23', color: 'bg-orange-500' },
];

export default function Orders() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const filteredOrders = ordersData.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <AdminLayout>
            <Head title="Orders - Admin" />

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
                <p className="text-gray-500 mt-1">Manage and track customer orders</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {orderStats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 ${stat.color} rounded-full`} />
                            <span className="text-sm text-gray-500">{stat.label}</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Filters Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by order ID, customer name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                    {/* Filters */}
                    <div className="flex items-center gap-2">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                        >
                            <option value="">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="processing">Processing</option>
                            <option value="pending">Pending</option>
                            <option value="refunded">Refunded</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                            <Calendar className="w-4 h-4" />
                            Date Range
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Order ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Products</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Payment</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <span className="font-semibold text-primary">{order.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{order.customer.name}</p>
                                            <p className="text-xs text-gray-500">{order.customer.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="max-w-[200px]">
                                            {order.products.map((product, i) => (
                                                <span key={i} className="inline-block mr-1 mb-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                                                    {product}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-semibold text-gray-900">${order.amount}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{order.paymentMethod}</td>
                                    <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="relative">
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === order.id ? null : order.id)}
                                                className="p-2 hover:bg-gray-100 rounded-lg"
                                            >
                                                <MoreVertical className="w-4 h-4 text-gray-500" />
                                            </button>
                                            {openDropdown === order.id && (
                                                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Eye className="w-4 h-4" /> View Details
                                                    </button>
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Download className="w-4 h-4" /> Download Invoice
                                                    </button>
                                                    {order.status === 'completed' && (
                                                        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-orange-600 hover:bg-orange-50">
                                                            <RefreshCw className="w-4 h-4" /> Process Refund
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{ordersData.length}</span> orders
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">1</button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">2</button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">3</button>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
