import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';
import { Card, Badge, Button } from '@/Components/UI';
import {
    ShoppingBag,
    Search,
    Eye,
    Download,
    CheckCircle,
    Clock,
    AlertCircle,
    XCircle,
    Filter,
    Calendar,
    Inbox
} from 'lucide-react';
import { useState } from 'react';

interface OrderItem {
    id: string;
    orderNumber: string;
    date: string;
    status: 'completed' | 'processing' | 'pending' | 'refunded';
    products: string[];
    total: string;
    paymentMethod: string;
}

interface Props {
    orders?: OrderItem[];
}

const getStatusVariant = (status: string): 'success' | 'info' | 'warning' | 'error' | 'gray' => {
    switch (status) {
        case 'completed':
            return 'success';
        case 'processing':
            return 'info';
        case 'pending':
            return 'warning';
        case 'refunded':
            return 'error';
        default:
            return 'gray';
    }
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'completed':
            return <CheckCircle className="w-4 h-4" />;
        case 'processing':
            return <Clock className="w-4 h-4" />;
        case 'pending':
            return <AlertCircle className="w-4 h-4" />;
        case 'refunded':
            return <XCircle className="w-4 h-4" />;
        default:
            return null;
    }
};

export default function Orders({ orders = [] }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <UserLayout>
            <Head title="Orders" />

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
                    <p className="text-gray-600 mt-1">View and manage your order history.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{orders.length} Total Orders</span>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders by number or product..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5 text-gray-400" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="processing">Processing</option>
                            <option value="pending">Pending</option>
                            <option value="refunded">Refunded</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Orders List */}
            {filteredOrders.length > 0 ? (
                <div className="space-y-4">
                    {filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                {/* Order Header */}
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                                            <ShoppingBag className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{order.orderNumber}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                                                <Calendar className="w-4 h-4" />
                                                {order.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant={getStatusVariant(order.status)} size="md">
                                            {getStatusIcon(order.status)}
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Order Products */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Products</h4>
                                    <ul className="space-y-1">
                                        {order.products.map((product, index) => (
                                            <li key={index} className="text-gray-900">{product}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Order Footer */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-6 text-sm">
                                        <div>
                                            <span className="text-gray-500">Total:</span>
                                            <span className="font-semibold text-gray-900 ml-2">{order.total}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Payment:</span>
                                            <span className="text-gray-700 ml-2">{order.paymentMethod}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="sm" rounded="lg">
                                            <Eye className="w-4 h-4" />
                                            View Details
                                        </Button>
                                        {order.status === 'completed' && (
                                            <Button href="/user/downloads" variant="primary" size="sm" rounded="lg">
                                                <Download className="w-4 h-4" />
                                                Downloads
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <Inbox className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Orders Found</h3>
                    <p className="text-gray-600 mb-6">
                        {searchQuery || filterStatus !== 'all'
                            ? 'Try adjusting your search or filter.'
                            : "You haven't placed any orders yet."}
                    </p>
                    <Button href="/products" variant="primary" size="lg" rounded="lg">
                        Browse Products
                    </Button>
                </div>
            )}
        </UserLayout>
    );
}
