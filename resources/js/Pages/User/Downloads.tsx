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
    CheckCircle,
    Inbox
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

interface Props {
    downloads?: DownloadItem[];
}

export default function Downloads({ downloads = [] }: Props) {
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
            {filteredDownloads.length > 0 ? (
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
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                    <Inbox className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Downloads Available</h3>
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
