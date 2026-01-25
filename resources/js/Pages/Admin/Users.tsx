import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    Search,
    MoreVertical,
    Eye,
    Edit,
    Trash2,
    UserPlus,
    Mail,
    Shield,
    ShieldOff,
    ChevronLeft,
    ChevronRight,
    Download,
    Users as UsersIcon,
    Inbox
} from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    status: 'active' | 'inactive' | 'banned';
    orders: number;
    totalSpent: number;
    joinedAt: string;
    lastActive: string;
}

interface Stats {
    totalUsers: number;
    activeUsers: number;
    newThisMonth: number;
    admins: number;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
}

interface Props {
    users?: User[];
    stats?: Stats;
    pagination?: Pagination;
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'active':
            return <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>;
        case 'inactive':
            return <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">Inactive</span>;
        case 'banned':
            return <span className="px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">Banned</span>;
        default:
            return null;
    }
};

const getRoleBadge = (role: string) => {
    switch (role) {
        case 'admin':
            return <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"><Shield className="w-3 h-3" /> Admin</span>;
        case 'user':
            return <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">User</span>;
        default:
            return null;
    }
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Inbox className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No users yet</h3>
        <p className="text-sm text-gray-500 mb-4">Users will appear here when they register.</p>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90">
            <UserPlus className="w-5 h-5" />
            Add User
        </button>
    </div>
);

export default function Users({ users = [], stats, pagination }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = !roleFilter || user.role === roleFilter;
        const matchesStatus = !statusFilter || user.status === statusFilter;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const userStats = [
        { label: 'Total Users', value: stats?.totalUsers?.toString() || '0', icon: <UsersIcon className="w-5 h-5" />, color: 'bg-blue-500' },
        { label: 'Active Users', value: stats?.activeUsers?.toString() || '0', icon: <UsersIcon className="w-5 h-5" />, color: 'bg-green-500' },
        { label: 'New This Month', value: stats?.newThisMonth?.toString() || '0', icon: <UserPlus className="w-5 h-5" />, color: 'bg-purple-500' },
        { label: 'Admins', value: stats?.admins?.toString() || '0', icon: <Shield className="w-5 h-5" />, color: 'bg-orange-500' },
    ];

    return (
        <AdminLayout>
            <Head title="Users - Admin" />

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Users</h1>
                    <p className="text-gray-500 mt-1">Manage user accounts and permissions</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90">
                        <UserPlus className="w-5 h-5" />
                        Add User
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {userStats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                                {stat.icon}
                            </div>
                            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Filters Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                        >
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                        >
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="banned">Banned</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {filteredUsers.length > 0 ? (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">User</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Role</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Orders</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Total Spent</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Joined</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Last Active</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-semibold">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">{user.name}</p>
                                                        <p className="text-xs text-gray-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                                            <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                                            <td className="px-6 py-4 text-gray-600">{user.orders}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">${user.totalSpent}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{user.joinedAt}</td>
                                            <td className="px-6 py-4">
                                                <span className={`text-sm ${user.lastActive === 'Online' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                                    {user.lastActive}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
                                                        className="p-2 hover:bg-gray-100 rounded-lg"
                                                    >
                                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                                    </button>
                                                    {openDropdown === user.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                                <Eye className="w-4 h-4" /> View Profile
                                                            </button>
                                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                                <Edit className="w-4 h-4" /> Edit User
                                                            </button>
                                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                                <Mail className="w-4 h-4" /> Send Email
                                                            </button>
                                                            {user.role !== 'admin' && (
                                                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-purple-600 hover:bg-purple-50">
                                                                    <Shield className="w-4 h-4" /> Make Admin
                                                                </button>
                                                            )}
                                                            {user.status !== 'banned' ? (
                                                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-orange-600 hover:bg-orange-50">
                                                                    <ShieldOff className="w-4 h-4" /> Ban User
                                                                </button>
                                                            ) : (
                                                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50">
                                                                    <Shield className="w-4 h-4" /> Unban User
                                                                </button>
                                                            )}
                                                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                                                <Trash2 className="w-4 h-4" /> Delete
                                                            </button>
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
                                    Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{pagination.total}</span> users
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
        </AdminLayout>
    );
}
