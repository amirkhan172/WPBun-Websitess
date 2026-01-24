import UserLayout from '@/Layouts/UserLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/Components/UI';
import { Save, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useState, FormEventHandler, useEffect } from 'react';

export default function Profile() {
    const { auth, flash } = usePage().props as any;
    const user = auth?.user;

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        display_name: user?.display_name || user?.name || '',
        email: user?.email || '',
        address_line1: user?.address_line1 || '',
        address_line2: user?.address_line2 || '',
        city: user?.city || '',
        postal_code: user?.postal_code || '',
        country: user?.country || '',
        state: user?.state || '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        if (recentlySuccessful) {
            setSuccessMessage('Profile updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    }, [recentlySuccessful]);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                // Clear password fields after successful update
                setData('password', '');
                setData('password_confirmation', '');
            },
        });
    };

    return (
        <UserLayout>
            <Head title="Account Settings" />

            {/* Success Message */}
            {successMessage && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">{successMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Change Your Name */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Change Your Name</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    id="first_name"
                                    type="text"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.first_name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    type="text"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.last_name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="display_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Display Name
                                </label>
                                <select
                                    id="display_name"
                                    value={data.display_name}
                                    onChange={(e) => setData('display_name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                                >
                                    <option value={data.first_name}>{data.first_name}</option>
                                    <option value={data.last_name}>{data.last_name}</option>
                                    <option value={`${data.first_name} ${data.last_name}`}>{data.first_name} {data.last_name}</option>
                                    <option value={`${data.last_name} ${data.first_name}`}>{data.last_name} {data.first_name}</option>
                                    <option value={data.email}>{data.email}</option>
                                    <option value={data.email.split('@')[0]}>{data.email.split('@')[0]}</option>
                                </select>
                                {errors.display_name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.display_name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Primary Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Change Your Billing Address */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Change your Billing Address</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="address_line1" className="block text-sm font-medium text-gray-700 mb-2">
                                    Line 1
                                </label>
                                <input
                                    id="address_line1"
                                    type="text"
                                    value={data.address_line1}
                                    onChange={(e) => setData('address_line1', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.address_line1 && (
                                    <p className="text-red-500 text-sm mt-1">{errors.address_line1}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="address_line2" className="block text-sm font-medium text-gray-700 mb-2">
                                    Line 2
                                </label>
                                <input
                                    id="address_line2"
                                    type="text"
                                    value={data.address_line2}
                                    onChange={(e) => setData('address_line2', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.address_line2 && (
                                    <p className="text-red-500 text-sm mt-1">{errors.address_line2}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    value={data.city}
                                    onChange={(e) => setData('city', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.city && (
                                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700 mb-2">
                                    Postal / ZIP Code
                                </label>
                                <input
                                    id="postal_code"
                                    type="text"
                                    value={data.postal_code}
                                    onChange={(e) => setData('postal_code', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.postal_code && (
                                    <p className="text-red-500 text-sm mt-1">{errors.postal_code}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                                >
                                    <option value="">Select Country</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="India">India</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="UAE">UAE</option>
                                </select>
                                {errors.country && (
                                    <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                    State / Province
                                </label>
                                <input
                                    id="state"
                                    type="text"
                                    value={data.state}
                                    onChange={(e) => setData('state', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.state && (
                                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Change Your Password */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Change your Password</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                                    Re-enter Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password_confirmation"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <Button type="submit" variant="primary" size="lg" rounded="lg" disabled={processing}>
                        <Save className="w-5 h-5" />
                        Save Changes
                    </Button>
                </div>
            </form>
        </UserLayout>
    );
}
