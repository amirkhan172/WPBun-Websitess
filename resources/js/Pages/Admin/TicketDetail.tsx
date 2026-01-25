import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, router, Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    ArrowLeft,
    Send,
    CheckCircle,
    Clock,
    AlertCircle,
    XCircle,
    User,
    Shield
} from 'lucide-react';

interface Message {
    id: number;
    message: string;
    isInternal: boolean;
    isFromAdmin: boolean;
    user: { id: number; name: string };
    attachments?: string[] | null;
    createdAt: string;
}

interface Ticket {
    id: number;
    ticketNumber: string;
    subject: string;
    user: { id: number; name: string; email: string };
    product?: { id: number; name: string } | null;
    assignedTo?: { id: number; name: string } | null;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'open' | 'in_progress' | 'resolved' | 'closed';
    createdAt: string;
    resolvedAt?: string | null;
    closedAt?: string | null;
    messages: Message[];
}

interface Admin {
    id: number;
    name: string;
}

interface Props {
    ticket: Ticket;
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

export default function TicketDetail({ ticket, admins = [] }: Props) {
    const [isInternal, setIsInternal] = useState(false);

    const { data, setData, post, processing, reset } = useForm({
        message: '',
        is_internal: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setData('is_internal', isInternal);
        post(route('admin.support.reply', ticket.id), {
            onSuccess: () => {
                reset();
                setIsInternal(false);
            },
        });
    };

    const handleMarkResolved = () => {
        router.patch(route('admin.support.update', ticket.id), {
            status: 'resolved',
        });
    };

    const handleClose = () => {
        router.post(route('admin.support.close', ticket.id));
    };

    return (
        <AdminLayout>
            <Head title={`Ticket ${ticket.ticketNumber} - Admin`} />

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Link
                    href={route('admin.support')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-500" />
                </Link>
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">{ticket.ticketNumber}</h1>
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                    </div>
                    <p className="text-gray-500 mt-1">{ticket.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                    {ticket.status !== 'resolved' && ticket.status !== 'closed' && (
                        <button
                            onClick={handleMarkResolved}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Mark Resolved
                        </button>
                    )}
                    {ticket.status !== 'closed' && (
                        <button
                            onClick={handleClose}
                            className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            <XCircle className="w-4 h-4" />
                            Close Ticket
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Messages */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Messages List */}
                        <div className="max-h-[500px] overflow-y-auto p-6 space-y-4">
                            {ticket.messages.length > 0 ? (
                                ticket.messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex gap-3 ${message.isFromAdmin ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                                            message.isFromAdmin ? 'bg-primary/10' : 'bg-gray-100'
                                        }`}>
                                            {message.isFromAdmin ? (
                                                <Shield className="w-5 h-5 text-primary" />
                                            ) : (
                                                <User className="w-5 h-5 text-gray-500" />
                                            )}
                                        </div>
                                        <div className={`flex-1 max-w-[80%] ${message.isFromAdmin ? 'text-right' : ''}`}>
                                            <div className={`inline-block rounded-lg px-4 py-3 ${
                                                message.isInternal
                                                    ? 'bg-yellow-50 border border-yellow-200'
                                                    : message.isFromAdmin
                                                        ? 'bg-primary text-white'
                                                        : 'bg-gray-100'
                                            }`}>
                                                {message.isInternal && (
                                                    <p className="text-xs text-yellow-600 mb-1 font-medium">Internal Note</p>
                                                )}
                                                <p className={`text-sm whitespace-pre-wrap ${
                                                    message.isFromAdmin && !message.isInternal ? 'text-white' : 'text-gray-800'
                                                }`}>
                                                    {message.message}
                                                </p>
                                            </div>
                                            <p className={`text-xs text-gray-400 mt-1 ${message.isFromAdmin ? 'text-right' : ''}`}>
                                                {message.user.name} • {message.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 py-8">No messages yet</p>
                            )}
                        </div>

                        {/* Reply Form */}
                        {ticket.status !== 'closed' && (
                            <form onSubmit={handleSubmit} className="border-t border-gray-100 p-4">
                                <div className="mb-3">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isInternal}
                                            onChange={(e) => setIsInternal(e.target.checked)}
                                            className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                                        />
                                        Internal note (not visible to customer)
                                    </label>
                                </div>
                                <div className="flex gap-3">
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Type your reply..."
                                        rows={3}
                                        className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={processing || !data.message.trim()}
                                        className="self-end px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        {processing ? 'Sending...' : 'Send'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Ticket Info Sidebar */}
                <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Customer</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-medium text-gray-900">{ticket.user.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-900">{ticket.user.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Ticket Details */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Ticket Details</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-500">Product</p>
                                <p className="font-medium text-gray-900">{ticket.product?.name || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Assigned To</p>
                                <p className="font-medium text-gray-900">{ticket.assignedTo?.name || 'Unassigned'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Created</p>
                                <p className="font-medium text-gray-900">{ticket.createdAt}</p>
                            </div>
                            {ticket.resolvedAt && (
                                <div>
                                    <p className="text-sm text-gray-500">Resolved</p>
                                    <p className="font-medium text-gray-900">{ticket.resolvedAt}</p>
                                </div>
                            )}
                            {ticket.closedAt && (
                                <div>
                                    <p className="text-sm text-gray-500">Closed</p>
                                    <p className="font-medium text-gray-900">{ticket.closedAt}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    {ticket.status !== 'closed' && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Quick Update</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Priority</label>
                                    <select
                                        defaultValue={ticket.priority}
                                        onChange={(e) => {
                                            router.patch(route('admin.support.update', ticket.id), {
                                                priority: e.target.value,
                                            });
                                        }}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-1">Assign To</label>
                                    <select
                                        defaultValue={ticket.assignedTo?.id || ''}
                                        onChange={(e) => {
                                            router.patch(route('admin.support.update', ticket.id), {
                                                assigned_to: e.target.value || null,
                                            });
                                        }}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    >
                                        <option value="">Unassigned</option>
                                        {admins.map(admin => (
                                            <option key={admin.id} value={admin.id}>{admin.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
