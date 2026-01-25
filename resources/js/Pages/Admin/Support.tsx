import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, Link } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import {
    Search,
    MessageSquare,
    MoreVertical,
    Eye,
    Reply,
    CheckCircle,
    Clock,
    AlertCircle,
    XCircle,
    ChevronLeft,
    ChevronRight,
    Inbox,
    X,
    UserCheck
} from 'lucide-react';

interface Ticket {
    id: number;
    ticketNumber: string;
    subject: string;
    user: { id: number; name: string; email: string };
    product?: { id: number; name: string } | null;
    assignedTo?: { id: number; name: string } | null;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    lastMessage?: string;
    createdAt: string;
}

interface Stats {
    open: number;
    inProgress: number;
    resolvedToday: number;
    avgResponse: string;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
}

interface Admin {
    id: number;
    name: string;
}

interface Props {
    tickets?: Ticket[];
    stats?: Stats;
    pagination?: Pagination;
    admins?: Admin[];
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'open':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"><AlertCircle className="w-3 h-3" /> Open</span>;
        case 'in_progress':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"><Clock className="w-3 h-3" /> In Progress</span>;
        case 'resolved':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-3 h-3" /> Resolved</span>;
        case 'closed':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"><XCircle className="w-3 h-3" /> Closed</span>;
        default:
            return null;
    }
};

const getPriorityBadge = (priority: string) => {
    switch (priority) {
        case 'urgent':
            return <span className="px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">Urgent</span>;
        case 'high':
            return <span className="px-2.5 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">High</span>;
        case 'medium':
            return <span className="px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">Medium</span>;
        case 'low':
            return <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">Low</span>;
        default:
            return null;
    }
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Inbox className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No support tickets</h3>
        <p className="text-sm text-gray-500">Support tickets will appear here when customers submit them.</p>
    </div>
);

export default function Support({ tickets = [], stats, pagination, admins = [] }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [updateData, setUpdateData] = useState({
        status: '',
        priority: '',
        assigned_to: '',
    });

    const filteredTickets = tickets.filter(ticket => {
        const matchesSearch = ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.user.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || ticket.status === statusFilter;
        const matchesPriority = !priorityFilter || ticket.priority === priorityFilter;
        return matchesSearch && matchesStatus && matchesPriority;
    });

    const ticketStats = [
        { label: 'Open Tickets', value: stats?.open?.toString() || '0', color: 'bg-blue-500' },
        { label: 'In Progress', value: stats?.inProgress?.toString() || '0', color: 'bg-yellow-500' },
        { label: 'Resolved Today', value: stats?.resolvedToday?.toString() || '0', color: 'bg-green-500' },
        { label: 'Avg Response', value: stats?.avgResponse || '-', color: 'bg-purple-500' },
    ];

    const openUpdateModal = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setUpdateData({
            status: ticket.status,
            priority: ticket.priority,
            assigned_to: ticket.assignedTo?.id?.toString() || '',
        });
        setShowUpdateModal(true);
        setOpenDropdown(null);
    };

    const handleUpdate = () => {
        if (selectedTicket) {
            router.patch(route('admin.support.update', selectedTicket.id), updateData, {
                onSuccess: () => {
                    setShowUpdateModal(false);
                    setSelectedTicket(null);
                },
            });
        }
    };

    const handleMarkResolved = (ticket: Ticket) => {
        router.patch(route('admin.support.update', ticket.id), {
            status: 'resolved',
        }, {
            onSuccess: () => setOpenDropdown(null),
        });
    };

    const handleClose = (ticket: Ticket) => {
        router.post(route('admin.support.close', ticket.id), {}, {
            onSuccess: () => setOpenDropdown(null),
        });
    };

    return (
        <AdminLayout>
            <Head title="Support Tickets - Admin" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
                <p className="text-gray-500 mt-1">Manage customer support requests</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {ticketStats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 ${stat.color} rounded-full`} />
                            <span className="text-sm text-gray-500">{stat.label}</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tickets..."
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
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                        </select>
                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                        >
                            <option value="">All Priority</option>
                            <option value="urgent">Urgent</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {filteredTickets.length > 0 ? (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Ticket</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Assigned To</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Priority</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Last Activity</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredTickets.map((ticket) => (
                                        <tr key={ticket.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-semibold text-primary">{ticket.ticketNumber}</p>
                                                    <p className="text-sm text-gray-900 mt-0.5 line-clamp-1">{ticket.subject}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">{ticket.user.name}</p>
                                                    <p className="text-xs text-gray-500">{ticket.user.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {ticket.product ? (
                                                    <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                        {ticket.product.name}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ticket.assignedTo ? (
                                                    <div className="flex items-center gap-2">
                                                        <UserCheck className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm">{ticket.assignedTo.name}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">Unassigned</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">{getPriorityBadge(ticket.priority)}</td>
                                            <td className="px-6 py-4">{getStatusBadge(ticket.status)}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{ticket.lastMessage || ticket.createdAt}</td>
                                            <td className="px-6 py-4">
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setOpenDropdown(openDropdown === ticket.id ? null : ticket.id)}
                                                        className="p-2 hover:bg-gray-100 rounded-lg"
                                                    >
                                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                                    </button>
                                                    {openDropdown === ticket.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                            <Link
                                                                href={route('admin.support.show', ticket.id)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                            >
                                                                <Eye className="w-4 h-4" /> View & Reply
                                                            </Link>
                                                            <button
                                                                onClick={() => openUpdateModal(ticket)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                            >
                                                                <MessageSquare className="w-4 h-4" /> Update Ticket
                                                            </button>
                                                            {ticket.status !== 'resolved' && ticket.status !== 'closed' && (
                                                                <button
                                                                    onClick={() => handleMarkResolved(ticket)}
                                                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50"
                                                                >
                                                                    <CheckCircle className="w-4 h-4" /> Mark Resolved
                                                                </button>
                                                            )}
                                                            {ticket.status !== 'closed' && (
                                                                <button
                                                                    onClick={() => handleClose(ticket)}
                                                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                                >
                                                                    <XCircle className="w-4 h-4" /> Close Ticket
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

                        {pagination && pagination.totalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Showing <span className="font-medium">{filteredTickets.length}</span> of <span className="font-medium">{pagination.total}</span> tickets
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

            {/* Update Ticket Modal */}
            <Modal show={showUpdateModal} onClose={() => setShowUpdateModal(false)} maxWidth="md">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Update Ticket</h2>
                        <button onClick={() => setShowUpdateModal(false)} className="text-gray-400 hover:text-gray-500">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Ticket: <span className="font-semibold text-gray-900">{selectedTicket?.ticketNumber}</span></p>
                        <p className="text-sm text-gray-900 mt-1">{selectedTicket?.subject}</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                value={updateData.status}
                                onChange={(e) => setUpdateData({ ...updateData, status: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            >
                                <option value="open">Open</option>
                                <option value="in_progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                            <select
                                value={updateData.priority}
                                onChange={(e) => setUpdateData({ ...updateData, priority: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                            <select
                                value={updateData.assigned_to}
                                onChange={(e) => setUpdateData({ ...updateData, assigned_to: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            >
                                <option value="">Unassigned</option>
                                {admins.map(admin => (
                                    <option key={admin.id} value={admin.id}>{admin.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                        <button
                            onClick={() => setShowUpdateModal(false)}
                            className="px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            className="px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90"
                        >
                            Update Ticket
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
