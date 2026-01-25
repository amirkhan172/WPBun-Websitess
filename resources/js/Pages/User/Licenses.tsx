import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import { Card, Badge, Button } from '@/Components/UI';
import {
    Key,
    Search,
    Copy,
    Check,
    RefreshCw,
    Globe,
    Calendar,
    AlertTriangle,
    CheckCircle,
    XCircle,
    ExternalLink,
    Inbox
} from 'lucide-react';
import { useState } from 'react';

interface License {
    id: string;
    product: string;
    licenseKey: string;
    status: 'active' | 'expired' | 'inactive';
    sitesAllowed: number;
    sitesUsed: number;
    activatedSites: string[];
    purchaseDate: string;
    expiryDate: string;
    icon: string;
    iconBg: string;
}

interface Props {
    licenses?: License[];
}

const getStatusVariant = (status: string): 'success' | 'error' | 'gray' => {
    switch (status) {
        case 'active':
            return 'success';
        case 'expired':
            return 'error';
        case 'inactive':
            return 'gray';
        default:
            return 'gray';
    }
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'active':
            return <CheckCircle className="w-4 h-4" />;
        case 'expired':
            return <XCircle className="w-4 h-4" />;
        case 'inactive':
            return <AlertTriangle className="w-4 h-4" />;
        default:
            return null;
    }
};

export default function Licenses({ licenses = [] }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [expandedLicense, setExpandedLicense] = useState<string | null>(null);

    const filteredLicenses = licenses.filter((license) =>
        license.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        license.licenseKey.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const copyToClipboard = (key: string) => {
        navigator.clipboard.writeText(key);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const activeLicenses = licenses.filter((l) => l.status === 'active').length;
    const expiredLicenses = licenses.filter((l) => l.status === 'expired').length;

    return (
        <UserLayout>
            <Head title="Licenses" />

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Licenses</h1>
                    <p className="text-gray-600 mt-1">Manage your license keys and site activations.</p>
                </div>
                {licenses.length > 0 && (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="flex items-center gap-1 text-green-600">
                                <CheckCircle className="w-4 h-4" />
                                {activeLicenses} Active
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1 text-red-600">
                                <XCircle className="w-4 h-4" />
                                {expiredLicenses} Expired
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by product or license key..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>
            </div>

            {/* Licenses List */}
            {filteredLicenses.length > 0 ? (
                <div className="space-y-4">
                    {filteredLicenses.map((license) => (
                        <div
                            key={license.id}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                {/* License Header */}
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${license.iconBg} rounded-xl flex items-center justify-center`}>
                                            <span className="text-white font-bold text-xl">{license.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-lg">{license.product}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant={getStatusVariant(license.status)} size="sm">
                                                    {getStatusIcon(license.status)}
                                                    {license.status.charAt(0).toUpperCase() + license.status.slice(1)}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sites Usage */}
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-4 h-4 text-gray-400" />
                                                <span className="font-semibold text-gray-900">
                                                    {license.sitesUsed} / {license.sitesAllowed === -1 ? '∞' : license.sitesAllowed}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-0.5">Sites Used</p>
                                        </div>
                                    </div>
                                </div>

                                {/* License Key */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">License Key</p>
                                            <code className="font-mono text-gray-900">{license.licenseKey}</code>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(license.licenseKey)}
                                            className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium px-3 py-2 rounded-lg hover:bg-white transition-colors"
                                        >
                                            {copiedKey === license.licenseKey ? (
                                                <>
                                                    <Check className="w-4 h-4" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4" />
                                                    Copy
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* License Info */}
                                <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-500">Purchased:</span>
                                        <span className="text-gray-900">{license.purchaseDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RefreshCw className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-500">Expires:</span>
                                        <span className={license.status === 'expired' ? 'text-red-600 font-medium' : 'text-gray-900'}>
                                            {license.expiryDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => setExpandedLicense(expandedLicense === license.id ? null : license.id)}
                                        className="text-sm text-primary hover:text-primary-dark font-medium"
                                    >
                                        {expandedLicense === license.id ? 'Hide' : 'View'} Activated Sites ({license.sitesUsed})
                                    </button>
                                    <div className="flex items-center gap-2">
                                        {license.status === 'expired' && (
                                            <Button variant="primary" size="md" rounded="lg">
                                                <RefreshCw className="w-4 h-4" />
                                                Renew License
                                            </Button>
                                        )}
                                        {license.status === 'active' && license.sitesUsed < license.sitesAllowed && (
                                            <Button variant="secondary" size="md" rounded="lg">
                                                <Globe className="w-4 h-4" />
                                                Activate New Site
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Activated Sites */}
                            {expandedLicense === license.id && license.activatedSites.length > 0 && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                                    <h4 className="font-medium text-gray-900 mb-3">Activated Sites</h4>
                                    <div className="space-y-2">
                                        {license.activatedSites.map((site, index) => (
                                            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-4 h-4 text-green-500" />
                                                    <span className="text-gray-900">{site}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href={`https://${site}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-primary"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                    <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                                                        Deactivate
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <Inbox className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Licenses Found</h3>
                    <p className="text-gray-600">
                        {searchQuery
                            ? 'Try adjusting your search query.'
                            : "You don't have any licenses yet."}
                    </p>
                </div>
            )}
        </UserLayout>
    );
}
