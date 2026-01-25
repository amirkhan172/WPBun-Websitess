import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import {
    Search,
    Key,
    MoreVertical,
    Eye,
    Copy,
    RefreshCw,
    XCircle,
    CheckCircle,
    Clock,
    ChevronLeft,
    ChevronRight,
    Download,
    Inbox,
    Plus,
    X,
    AlertTriangle
} from 'lucide-react';

interface License {
    id: number;
    key: string;
    product: { id: number; name: string };
    user: { id: number; name: string; email: string };
    order?: { id: number; number: string } | null;
    status: 'active' | 'expired' | 'revoked';
    activations: number;
    maxActivations: number;
    purchasedAt: string;
    expiresAt: string | null;
    isExpired: boolean;
}

interface Stats {
    total: number;
    active: number;
    expired: number;
    revoked: number;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
}

interface Product {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    licenses?: License[];
    stats?: Stats;
    pagination?: Pagination;
    products?: Product[];
    users?: User[];
}

const getStatusBadge = (status: string, isExpired: boolean = false) => {
    if (isExpired && status === 'active') {
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"><Clock className="w-3 h-3" /> Expired</span>;
    }
    switch (status) {
        case 'active':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"><CheckCircle className="w-3 h-3" /> Active</span>;
        case 'expired':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full"><Clock className="w-3 h-3" /> Expired</span>;
        case 'revoked':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full"><XCircle className="w-3 h-3" /> Revoked</span>;
        default:
            return null;
    }
};

const EmptyState = ({ onAdd }: { onAdd: () => void }) => (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Inbox className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No licenses yet</h3>
        <p className="text-sm text-gray-500 mb-4">Licenses will appear here when customers purchase products.</p>
        <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90"
        >
            <Plus className="w-5 h-5" />
            Generate License
        </button>
    </div>
);

export default function Licenses({ licenses = [], stats, pagination, products = [], users = [] }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [showGenerateModal, setShowGenerateModal] = useState(false);
    const [showRevokeModal, setShowRevokeModal] = useState(false);
    const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
    const [revokeReason, setRevokeReason] = useState('');
    const [copiedKey, setCopiedKey] = useState<number | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: '',
        product_id: '',
        max_activations: '1',
        expires_at: '',
    });

    const filteredLicenses = licenses.filter(license => {
        const matchesSearch = license.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || license.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const licenseStats = [
        { label: 'Total Licenses', value: stats?.total?.toString() || '0', color: 'bg-blue-500' },
        { label: 'Active', value: stats?.active?.toString() || '0', color: 'bg-green-500' },
        { label: 'Expired', value: stats?.expired?.toString() || '0', color: 'bg-yellow-500' },
        { label: 'Revoked', value: stats?.revoked?.toString() || '0', color: 'bg-red-500' },
    ];

    const openGenerateModal = () => {
        reset();
        setShowGenerateModal(true);
    };

    const openRevokeModal = (license: License) => {
        setSelectedLicense(license);
        setRevokeReason('');
        setShowRevokeModal(true);
        setOpenDropdown(null);
    };

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.licenses.store'), {
            onSuccess: () => {
                setShowGenerateModal(false);
                reset();
            },
        });
    };

    const handleRevoke = () => {
        if (selectedLicense) {
            router.post(route('admin.licenses.revoke', selectedLicense.id), {
                reason: revokeReason,
            }, {
                onSuccess: () => {
                    setShowRevokeModal(false);
                    setSelectedLicense(null);
                    setRevokeReason('');
                },
            });
        }
    };

    const handleResetActivations = (license: License) => {
        router.post(route('admin.licenses.reset', license.id), {}, {
            onSuccess: () => setOpenDropdown(null),
        });
    };

    const copyToClipboard = (key: string, id: number) => {
        navigator.clipboard.writeText(key);
        setCopiedKey(id);
        setTimeout(() => setCopiedKey(null), 2000);
        setOpenDropdown(null);
    };

    return (
        <AdminLayout>
            <Head title="Licenses - Admin" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Licenses</h1>
                    <p className="text-gray-500 mt-1">Manage product licenses and activations</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <button
                        onClick={openGenerateModal}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90"
                    >
                        <Plus className="w-5 h-5" />
                        Generate License
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {licenseStats.map((stat) => (
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
                            placeholder="Search by license key, customer or product..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                    >
                        <option value="">All Status</option>
                        <option value="active">Active</option>
                        <option value="expired">Expired</option>
                        <option value="revoked">Revoked</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {filteredLicenses.length > 0 ? (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">License Key</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Activations</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Expiry</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredLicenses.map((license) => (
                                        <tr key={license.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Key className="w-4 h-4 text-gray-400" />
                                                    <code className="text-sm font-mono text-gray-900">{license.key}</code>
                                                    {copiedKey === license.id && (
                                                        <span className="text-xs text-green-600">Copied!</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                    {license.product.name}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">{license.user.name}</p>
                                                    <p className="text-xs text-gray-500">{license.user.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{getStatusBadge(license.status, license.isExpired)}</td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-600">{license.activations} / {license.maxActivations}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {license.expiresAt || 'Never'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setOpenDropdown(openDropdown === license.id ? null : license.id)}
                                                        className="p-2 hover:bg-gray-100 rounded-lg"
                                                    >
                                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                                    </button>
                                                    {openDropdown === license.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                            <button
                                                                onClick={() => copyToClipboard(license.key, license.id)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                            >
                                                                <Copy className="w-4 h-4" /> Copy Key
                                                            </button>
                                                            <button
                                                                onClick={() => handleResetActivations(license)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
                                                            >
                                                                <RefreshCw className="w-4 h-4" /> Reset Activations
                                                            </button>
                                                            {license.status === 'active' && !license.isExpired && (
                                                                <button
                                                                    onClick={() => openRevokeModal(license)}
                                                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                                >
                                                                    <XCircle className="w-4 h-4" /> Revoke License
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
                                    Showing <span className="font-medium">{filteredLicenses.length}</span> of <span className="font-medium">{pagination.total}</span> licenses
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
                    <EmptyState onAdd={openGenerateModal} />
                )}
            </div>

            {/* Generate License Modal */}
            <Modal show={showGenerateModal} onClose={() => setShowGenerateModal(false)} maxWidth="md">
                <form onSubmit={handleGenerate} className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Generate New License</h2>
                        <button type="button" onClick={() => setShowGenerateModal(false)} className="text-gray-400 hover:text-gray-500">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User *</label>
                            <select
                                value={data.user_id}
                                onChange={e => setData('user_id', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            >
                                <option value="">Select a user</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>
                                        {user.name} ({user.email})
                                    </option>
                                ))}
                            </select>
                            {errors.user_id && <p className="mt-1 text-sm text-red-600">{errors.user_id}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product *</label>
                            <select
                                value={data.product_id}
                                onChange={e => setData('product_id', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            >
                                <option value="">Select a product</option>
                                {products.map(product => (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                ))}
                            </select>
                            {errors.product_id && <p className="mt-1 text-sm text-red-600">{errors.product_id}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Max Activations *</label>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                value={data.max_activations}
                                onChange={e => setData('max_activations', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            {errors.max_activations && <p className="mt-1 text-sm text-red-600">{errors.max_activations}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date (optional)</label>
                            <input
                                type="date"
                                value={data.expires_at}
                                onChange={e => setData('expires_at', e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <p className="mt-1 text-xs text-gray-500">Leave empty for lifetime license</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={() => setShowGenerateModal(false)}
                            className="px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50"
                        >
                            {processing ? 'Generating...' : 'Generate License'}
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Revoke License Modal */}
            <Modal show={showRevokeModal} onClose={() => setShowRevokeModal(false)} maxWidth="sm">
                <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Revoke License</h3>
                    <p className="text-gray-500 text-center mb-4">
                        Are you sure you want to revoke this license?
                    </p>
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <code className="text-sm font-mono text-gray-900">{selectedLicense?.key}</code>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Reason (optional)</label>
                        <textarea
                            value={revokeReason}
                            onChange={(e) => setRevokeReason(e.target.value)}
                            rows={2}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="Enter reason for revoking..."
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowRevokeModal(false)}
                            className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleRevoke}
                            className="flex-1 px-4 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700"
                        >
                            Revoke License
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
