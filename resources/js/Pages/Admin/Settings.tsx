import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    Settings as SettingsIcon,
    Globe,
    CreditCard,
    Mail,
    Bell,
    Shield,
    Database,
    Save,
    Upload,
    Check
} from 'lucide-react';

const tabs = [
    { id: 'general', label: 'General', icon: <SettingsIcon className="w-4 h-4" /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'email', label: 'Email', icon: <Mail className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
];

export default function Settings() {
    const [activeTab, setActiveTab] = useState('general');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <AdminLayout>
            <Head title="Settings - Admin" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your application settings</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Tabs */}
                <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {tab.icon}
                                <span className="font-medium">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        {/* General Settings */}
                        {activeTab === 'general' && (
                            <div>
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-900">General Settings</h2>
                                    <p className="text-sm text-gray-500 mt-1">Basic configuration for your website</p>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                                        <input
                                            type="text"
                                            defaultValue="WPBun"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Tagline</label>
                                        <input
                                            type="text"
                                            defaultValue="Premium WordPress & WooCommerce Plugins"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Logo</label>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                                                <span className="text-white font-bold text-2xl">W</span>
                                            </div>
                                            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                                                <Upload className="w-4 h-4" />
                                                Upload New
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                                        <input
                                            type="email"
                                            defaultValue="support@wpbun.com"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                                        <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700">
                                            <option>UTC</option>
                                            <option>America/New_York</option>
                                            <option>Europe/London</option>
                                            <option>Asia/Tokyo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Payment Settings */}
                        {activeTab === 'payment' && (
                            <div>
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-900">Payment Settings</h2>
                                    <p className="text-sm text-gray-500 mt-1">Configure payment gateways and currency</p>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                                        <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700">
                                            <option>USD ($)</option>
                                            <option>EUR (€)</option>
                                            <option>GBP (£)</option>
                                        </select>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-blue-600 font-bold text-sm">S</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">Stripe</p>
                                                    <p className="text-xs text-gray-500">Credit card payments</p>
                                                </div>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                        <div className="mt-4 space-y-3">
                                            <input
                                                type="text"
                                                placeholder="Publishable Key"
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Secret Key"
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">P</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">PayPal</p>
                                                    <p className="text-xs text-gray-500">PayPal payments</p>
                                                </div>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Email Settings */}
                        {activeTab === 'email' && (
                            <div>
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-900">Email Settings</h2>
                                    <p className="text-sm text-gray-500 mt-1">Configure email delivery settings</p>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                                        <input
                                            type="text"
                                            defaultValue="WPBun"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                                        <input
                                            type="email"
                                            defaultValue="noreply@wpbun.com"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                                        <input
                                            type="text"
                                            placeholder="smtp.example.com"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                                            <input
                                                type="text"
                                                placeholder="587"
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Encryption</label>
                                            <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700">
                                                <option>TLS</option>
                                                <option>SSL</option>
                                                <option>None</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notification Settings */}
                        {activeTab === 'notifications' && (
                            <div>
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-900">Notification Settings</h2>
                                    <p className="text-sm text-gray-500 mt-1">Manage notification preferences</p>
                                </div>
                                <div className="p-6 space-y-4">
                                    {[
                                        { label: 'New Order Notifications', description: 'Receive email when a new order is placed' },
                                        { label: 'New User Registrations', description: 'Receive email when a new user registers' },
                                        { label: 'Support Ticket Alerts', description: 'Receive email for new support tickets' },
                                        { label: 'Low Stock Alerts', description: 'Receive email when product stock is low' },
                                        { label: 'Weekly Reports', description: 'Receive weekly summary report' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-900">{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeTab === 'security' && (
                            <div>
                                <div className="px-6 py-4 border-b border-gray-100">
                                    <h2 className="font-semibold text-gray-900">Security Settings</h2>
                                    <p className="text-sm text-gray-500 mt-1">Configure security options</p>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                            <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                                        <input
                                            type="number"
                                            defaultValue="120"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
                                        <input
                                            type="number"
                                            defaultValue="5"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Save Button */}
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                            <button
                                onClick={handleSave}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                {saved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
                                {saved ? 'Saved!' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
