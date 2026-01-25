import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';
import { Card } from '@/Components/UI';
import {
    Bell,
    Download,
    Key,
    ShoppingBag,
    CheckCircle,
    Info,
    Gift,
    Trash2,
    Check,
    Inbox
} from 'lucide-react';
import { useState } from 'react';

interface Notification {
    id: string;
    type: 'update' | 'license' | 'order' | 'promo' | 'info';
    title: string;
    message: string;
    time: string;
    read: boolean;
}

interface Props {
    notifications?: Notification[];
}

const getNotificationIcon = (type: string) => {
    switch (type) {
        case 'update':
            return <Download className="w-5 h-5 text-green-600" />;
        case 'license':
            return <Key className="w-5 h-5 text-blue-600" />;
        case 'order':
            return <ShoppingBag className="w-5 h-5 text-orange-600" />;
        case 'promo':
            return <Gift className="w-5 h-5 text-pink-600" />;
        case 'info':
            return <Info className="w-5 h-5 text-gray-600" />;
        default:
            return <Bell className="w-5 h-5 text-gray-600" />;
    }
};

const getNotificationBg = (type: string) => {
    switch (type) {
        case 'update':
            return 'bg-green-100';
        case 'license':
            return 'bg-blue-100';
        case 'order':
            return 'bg-orange-100';
        case 'promo':
            return 'bg-pink-100';
        case 'info':
            return 'bg-gray-100';
        default:
            return 'bg-gray-100';
    }
};

export default function Notifications({ notifications: initialNotifications = [] }: Props) {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const unreadCount = notifications.filter(n => !n.read).length;
    const filteredNotifications = filter === 'all'
        ? notifications
        : notifications.filter(n => !n.read);

    const markAsRead = (id: string) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
        );
    };

    const markAllAsRead = () => {
        setNotifications(prev =>
            prev.map(n => ({ ...n, read: true }))
        );
    };

    const deleteNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const clearAllRead = () => {
        setNotifications(prev => prev.filter(n => !n.read));
    };

    return (
        <UserLayout>
            <Head title="Notifications" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <p className="text-gray-500 mt-1">
                        {unreadCount > 0
                            ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                            : 'All caught up!'
                        }
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {unreadCount > 0 && (
                        <button
                            onClick={markAllAsRead}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                            <Check className="w-4 h-4" />
                            Mark all as read
                        </button>
                    )}
                    {notifications.some(n => n.read) && (
                        <button
                            onClick={clearAllRead}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Clear read
                        </button>
                    )}
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mb-6">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        filter === 'all'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    All ({notifications.length})
                </button>
                <button
                    onClick={() => setFilter('unread')}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        filter === 'unread'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    Unread ({unreadCount})
                </button>
            </div>

            {/* Notifications List */}
            <Card padding="none" rounded="xl">
                {filteredNotifications.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            {notifications.length === 0 ? (
                                <Inbox className="w-8 h-8 text-gray-400" />
                            ) : (
                                <Bell className="w-8 h-8 text-gray-400" />
                            )}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No notifications</h3>
                        <p className="text-gray-500">
                            {filter === 'unread'
                                ? "You've read all your notifications"
                                : "You don't have any notifications yet"
                            }
                        </p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`px-6 py-4 flex items-start gap-4 hover:bg-gray-50 transition-colors ${
                                    !notification.read ? 'bg-primary/5' : ''
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationBg(notification.type)}`}>
                                    {getNotificationIcon(notification.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                                {notification.title}
                                                {!notification.read && (
                                                    <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full"></span>
                                                )}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-0.5">{notification.message}</p>
                                            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {!notification.read && (
                                                <button
                                                    onClick={() => markAsRead(notification.id)}
                                                    className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                    title="Mark as read"
                                                >
                                                    <CheckCircle className="w-4 h-4" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteNotification(notification.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Card>
        </UserLayout>
    );
}
