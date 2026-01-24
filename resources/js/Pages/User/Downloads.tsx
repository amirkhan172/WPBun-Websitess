import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import { Card, Button } from '@/Components/UI';
import {
    Download,
    Search,
    Calendar,
    Package,
    FileDown,
    RefreshCw,
    CheckCircle
} from 'lucide-react';
import { useState } from 'react';

interface DownloadItem {
    id: string;
    name: string;
    description: string;
    version: string;
    lastUpdated: string;
    fileSize: string;
    icon: string;
    iconBg: string;
    changelog: string[];
}

// Mock data
const downloads: DownloadItem[] = [
    {
        id: '1',
        name: 'PostX Pro',
        description: 'Gutenberg blocks for creating beautiful post grids and news layouts.',
        version: 'v3.2.1',
        lastUpdated: 'Jan 18, 2025',
        fileSize: '4.2 MB',
        icon: 'P',
        iconBg: 'from-blue-500 to-blue-700',
        changelog: ['Fixed grid layout issue', 'Added new slider options', 'Performance improvements'],
    },
    {
        id: '2',
        name: 'WowStore Pro',
        description: 'Complete WooCommerce page builder with 50+ product blocks.',
        version: 'v2.1.0',
        lastUpdated: 'Jan 15, 2025',
        fileSize: '5.8 MB',
        icon: 'W',
        iconBg: 'from-cyan-500 to-teal-600',
        changelog: ['New product grid layouts', 'Cart page builder', 'Checkout customization'],
    },
    {
        id: '3',
        name: 'WowAddons Pro',
        description: 'Product add-ons and extra options for WooCommerce.',
        version: 'v1.5.3',
        lastUpdated: 'Jan 12, 2025',
        fileSize: '2.1 MB',
        icon: 'A',
        iconBg: 'from-green-400 to-emerald-600',
        changelog: ['Conditional logic support', 'Image swatches', 'Color picker addon'],
    },
    {
        id: '4',
        name: 'WowRevenue Pro',
        description: 'Product bundles and discount campaigns for WooCommerce.',
        version: 'v1.8.2',
        lastUpdated: 'Jan 10, 2025',
        fileSize: '3.4 MB',
        icon: 'R',
        iconBg: 'from-pink-500 to-rose-600',
        changelog: ['BOGO deal improvements', 'Bundle discount rules', 'Cart upsells'],
    },
    {
        id: '5',
        name: 'WholesaleX Pro',
        description: 'Complete B2B wholesale solution for WooCommerce.',
        version: 'v2.0.1',
        lastUpdated: 'Jan 8, 2025',
        fileSize: '4.0 MB',
        icon: 'X',
        iconBg: 'from-violet-500 to-purple-700',
        changelog: ['Role-based pricing', 'Tiered discounts', 'Request for quote'],
    },
];

export default function Downloads() {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedChangelog, setExpandedChangelog] = useState<string | null>(null);

    const filteredDownloads = downloads.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <UserLayout>
            <Head title="Downloads" />

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Downloads</h1>
                    <p className="text-gray-600 mt-1">Download your purchased plugins and access updates.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Package className="w-4 h-4" />
                    <span>{downloads.length} Products Available</span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search your downloads..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>
            </div>

            {/* Downloads List */}
            <div className="space-y-4">
                {filteredDownloads.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                {/* Product Icon & Info */}
                                <div className="flex items-center gap-4 flex-1">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-white font-bold text-xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mt-0.5 line-clamp-1">{item.description}</p>
                                    </div>
                                </div>

                                {/* Version & Date Info */}
                                <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <RefreshCw className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-600">{item.version}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-600">{item.lastUpdated}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {item.fileSize}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setExpandedChangelog(expandedChangelog === item.id ? null : item.id)}
                                        className="text-sm text-primary hover:text-primary-dark font-medium"
                                    >
                                        Changelog
                                    </button>
                                    <Button variant="primary" size="md" rounded="lg">
                                        <FileDown className="w-4 h-4" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Changelog Dropdown */}
                        {expandedChangelog === item.id && (
                            <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                                <h4 className="font-medium text-gray-900 mb-3">What's New in {item.version}</h4>
                                <ul className="space-y-2">
                                    {item.changelog.map((change, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            {change}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredDownloads.length === 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <Download className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Downloads Found</h3>
                    <p className="text-gray-600">
                        {searchQuery
                            ? 'Try adjusting your search query.'
                            : "You haven't purchased any products yet."}
                    </p>
                </div>
            )}
        </UserLayout>
    );
}
