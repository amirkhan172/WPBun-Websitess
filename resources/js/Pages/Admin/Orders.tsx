import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import {
    Search,
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
    Calendar,
    Inbox,
    X,
    AlertTriangle
} from 'lucide-react';

interface Order {
    id: string;
    orderId: number;
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

interface Stats {
    total: number;
    totalOrders: number;
    pending: number;
    processing: number;
    completed: number;
    refunded: number;
    revenue: string;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
}

interface Props {
    orders?: Order[];
    stats?: Stats;
    pagination?: Pagination;
}

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

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Inbox className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No orders yet</h3>
        <p className="text-sm text-gray-500">Orders will appear here when customers make purchases.</p>
    </div>
);

export default function Orders({ orders = [], stats, pagination }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [newStatus, setNewStatus] = useState('');

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const orderStats = [
        { label: 'Total Orders', value: stats?.totalOrders?.toString() || '0', color: 'bg-blue-500' },
        { label: 'Completed', value: stats?.completed?.toString() || '0', color: 'bg-green-500' },
        { label: 'Processing', value: stats?.processing?.toString() || '0', color: 'bg-yellow-500' },
        { label: 'Refunded', value: stats?.refunded?.toString() || '0', color: 'bg-orange-500' },
    ];

    const openStatusModal = (order: Order) => {
        setSelectedOrder(order);
        setNewStatus(order.status);
        setShowStatusModal(true);
        setOpenDropdown(null);
    };

    const openRefundModal = (order: Order) => {
        setSelectedOrder(order);
        setShowRefundModal(true);
        setOpenDropdown(null);
    };

    const handleStatusUpdate = () => {
        if (selectedOrder && newStatus) {
            router.patch(route('admin.orders.update', selectedOrder.orderId), {
                status: newStatus,
            }, {
                onSuccess: () => {
                    setShowStatusModal(false);
                    setSelectedOrder(null);
                },
            });
        }
    };

    const handleRefund = () => {
        if (selectedOrder) {
            router.post(route('admin.orders.refund', selectedOrder.orderId), {}, {
                onSuccess: () => {
                    setShowRefundModal(false);
                    setSelectedOrder(null);
                },
            });
        }
    };

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

            {/* Revenue Card */}
            {stats && (
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 mb-6 text-white">
                    <p className="text-sm opacity-80">Total Revenue</p>
                    <p className="text-3xl font-bold mt-1">{stats.revenue}</p>
                </div>
            )}

            {/* Filters Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
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
                {filteredOrders.length > 0 ? (
                    <>
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
                                                            <button
                                                                onClick={() => openStatusModal(order)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                            >
                                                                <Clock className="w-4 h-4" /> Update Status
                                                            </button>
                                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                                <Download className="w-4 h-4" /> Download Invoice
                                                            </button>
                                                            {order.status === 'completed' && (
                                                                <button
                                                                    onClick={() => openRefundModal(order)}
                                                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-orange-600 hover:bg-orange-50"
                                                                >
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
                        {pagination && pagination.totalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Showing <span className="font-medium">{filteredOrders.length}</span> of <span className="font-medium">{pagination.total}</span> orders
                                </p>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled={pagination.currentPage === 1}>
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <span className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">{pagination.currentPage}</span>
                                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled={pagination.currentPage === pagination.totalPages}>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <EmptyState />
                )}
            </div>

            {/* Update Status Modal */}
            <Modal show={showStatusModal} onClose={() => setShowStatusModal(false)} maxWidth="sm">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Update Order Status</h2>
                        <button onClick={() => setShowStatusModal(false)} className="text-gray-400 hover:text-gray-500">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Order: <span className="font-semibold text-gray-900">{selectedOrder?.id}</span></p>
                        <p className="text-sm text-gray-500">Customer: <span className="font-medium">{selectedOrder?.customer.name}</span></p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
                        <select
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowStatusModal(false)}
                            className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleStatusUpdate}
                            className="flex-1 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90"
                        >
                            Update Status
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Refund Confirmation Modal */}
            <Modal show={showRefundModal} onClose={() => setShowRefundModal(false)} maxWidth="sm">
                <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-orange-100 rounded-full mb-4">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Process Refund</h3>
                    <p className="text-gray-500 text-center mb-2">
                        Are you sure you want to refund order <span className="font-semibold">{selectedOrder?.id}</span>?
                    </p>
                    <p className="text-sm text-gray-400 text-center mb-6">
                        Amount: <span className="font-semibold">${selectedOrder?.amount}</span>
                        <br />
                        This will also revoke all associated licenses.
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowRefundModal(false)}
                            className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleRefund}
                            className="flex-1 px-4 py-2.5 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700"
                        >
                            Process Refund
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
