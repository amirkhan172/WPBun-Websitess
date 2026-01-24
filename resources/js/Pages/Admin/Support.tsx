import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
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
    Filter
} from 'lucide-react';

interface Ticket {
    id: string;
    subject: string;
    customer: { name: string; email: string };
    product: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    messages: number;
    createdAt: string;
    lastReply: string;
}

const ticketsData: Ticket[] = [
    { id: '#TKT-001', subject: 'License activation not working', customer: { name: 'John Doe', email: 'john@example.com' }, product: 'PostX Pro', priority: 'high', status: 'open', messages: 3, createdAt: 'Jan 24, 2026', lastReply: '10 min ago' },
    { id: '#TKT-002', subject: 'Need help with shipping zones setup', customer: { name: 'Jane Smith', email: 'jane@example.com' }, product: 'WowShipping', priority: 'medium', status: 'in_progress', messages: 5, createdAt: 'Jan 23, 2026', lastReply: '2 hours ago' },
    { id: '#TKT-003', subject: 'Plugin conflict with theme', customer: { name: 'Mike Johnson', email: 'mike@example.com' }, product: 'WowStore', priority: 'low', status: 'resolved', messages: 8, createdAt: 'Jan 22, 2026', lastReply: '1 day ago' },
    { id: '#TKT-004', subject: 'Urgent: Site down after update', customer: { name: 'Sarah Wilson', email: 'sarah@example.com' }, product: 'Agency Bundle', priority: 'urgent', status: 'open', messages: 2, createdAt: 'Jan 24, 2026', lastReply: '5 min ago' },
    { id: '#TKT-005', subject: 'Feature request: Dark mode', customer: { name: 'Tom Brown', email: 'tom@example.com' }, product: 'PostX Pro', priority: 'low', status: 'closed', messages: 4, createdAt: 'Jan 20, 2026', lastReply: '4 days ago' },
    { id: '#TKT-006', subject: 'Refund request', customer: { name: 'Emily Davis', email: 'emily@example.com' }, product: 'WholesaleX', priority: 'medium', status: 'in_progress', messages: 6, createdAt: 'Jan 21, 2026', lastReply: '3 hours ago' },
];

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

const ticketStats = [
    { label: 'Open Tickets', value: '23', color: 'bg-blue-500' },
    { label: 'In Progress', value: '15', color: 'bg-yellow-500' },
    { label: 'Resolved Today', value: '12', color: 'bg-green-500' },
    { label: 'Avg Response', value: '2.5h', color: 'bg-purple-500' },
];

export default function Support() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const filteredTickets = ticketsData.filter(ticket => {
        const matchesSearch = ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || ticket.status === statusFilter;
        const matchesPriority = !priorityFilter || ticket.priority === priorityFilter;
        return matchesSearch && matchesStatus && matchesPriority;
    });

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
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Ticket</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Priority</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Last Reply</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold text-primary">{ticket.id}</p>
                                            <p className="text-sm text-gray-900 mt-0.5">{ticket.subject}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <MessageSquare className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-500">{ticket.messages} messages</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{ticket.customer.name}</p>
                                            <p className="text-xs text-gray-500">{ticket.customer.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                            {ticket.product}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{getPriorityBadge(ticket.priority)}</td>
                                    <td className="px-6 py-4">{getStatusBadge(ticket.status)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{ticket.lastReply}</td>
                                    <td className="px-6 py-4">
                                        <div className="relative">
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === ticket.id ? null : ticket.id)}
                                                className="p-2 hover:bg-gray-100 rounded-lg"
                                            >
                                                <MoreVertical className="w-4 h-4 text-gray-500" />
                                            </button>
                                            {openDropdown === ticket.id && (
                                                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Eye className="w-4 h-4" /> View
                                                    </button>
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Reply className="w-4 h-4" /> Reply
                                                    </button>
                                                    {ticket.status !== 'closed' && (
                                                        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50">
                                                            <CheckCircle className="w-4 h-4" /> Mark Resolved
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

                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium">{filteredTickets.length}</span> tickets
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">1</button>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
