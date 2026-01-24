import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
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
    Filter
} from 'lucide-react';

interface License {
    id: number;
    licenseKey: string;
    product: string;
    customer: { name: string; email: string };
    status: 'active' | 'expired' | 'revoked';
    activations: number;
    maxActivations: number;
    purchaseDate: string;
    expiryDate: string;
}

const licensesData: License[] = [
    { id: 1, licenseKey: 'WPB-XXXX-XXXX-1234', product: 'Agency Bundle', customer: { name: 'John Doe', email: 'john@example.com' }, status: 'active', activations: 3, maxActivations: 100, purchaseDate: 'Jan 15, 2026', expiryDate: 'Lifetime' },
    { id: 2, licenseKey: 'WPB-XXXX-XXXX-5678', product: 'PostX Pro', customer: { name: 'Jane Smith', email: 'jane@example.com' }, status: 'active', activations: 1, maxActivations: 1, purchaseDate: 'Jan 10, 2026', expiryDate: 'Jan 10, 2027' },
    { id: 3, licenseKey: 'WPB-XXXX-XXXX-9012', product: 'WowStore Pro', customer: { name: 'Mike Johnson', email: 'mike@example.com' }, status: 'active', activations: 2, maxActivations: 5, purchaseDate: 'Dec 28, 2025', expiryDate: 'Dec 28, 2026' },
    { id: 4, licenseKey: 'WPB-XXXX-XXXX-3456', product: 'WowShipping', customer: { name: 'Sarah Wilson', email: 'sarah@example.com' }, status: 'expired', activations: 1, maxActivations: 1, purchaseDate: 'Jan 20, 2025', expiryDate: 'Jan 20, 2026' },
    { id: 5, licenseKey: 'WPB-XXXX-XXXX-7890', product: 'WholesaleX', customer: { name: 'Tom Brown', email: 'tom@example.com' }, status: 'revoked', activations: 0, maxActivations: 5, purchaseDate: 'Dec 15, 2025', expiryDate: 'Revoked' },
    { id: 6, licenseKey: 'WPB-XXXX-XXXX-2345', product: 'Agency Bundle', customer: { name: 'Emily Davis', email: 'emily@example.com' }, status: 'active', activations: 5, maxActivations: 100, purchaseDate: 'Dec 10, 2025', expiryDate: 'Lifetime' },
];

const getStatusBadge = (status: string) => {
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

const licenseStats = [
    { label: 'Total Licenses', value: '2,156', color: 'bg-blue-500' },
    { label: 'Active', value: '1,987', color: 'bg-green-500' },
    { label: 'Expired', value: '145', color: 'bg-yellow-500' },
    { label: 'Revoked', value: '24', color: 'bg-red-500' },
];

export default function Licenses() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const filteredLicenses = licensesData.filter(license => {
        const matchesSearch = license.licenseKey.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            license.product.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = !statusFilter || license.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <AdminLayout>
            <Head title="Licenses - Admin" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Licenses</h1>
                    <p className="text-gray-500 mt-1">Manage product licenses and activations</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                </button>
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
                                            <code className="text-sm font-mono text-gray-900">{license.licenseKey}</code>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                            {license.product}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{license.customer.name}</p>
                                            <p className="text-xs text-gray-500">{license.customer.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{getStatusBadge(license.status)}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{license.activations} / {license.maxActivations}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{license.expiryDate}</td>
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
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Eye className="w-4 h-4" /> View Details
                                                    </button>
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                        <Copy className="w-4 h-4" /> Copy Key
                                                    </button>
                                                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50">
                                                        <RefreshCw className="w-4 h-4" /> Reset Activations
                                                    </button>
                                                    {license.status === 'active' && (
                                                        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
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

                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredLicenses.length}</span> of <span className="font-medium">{licensesData.length}</span> licenses
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
