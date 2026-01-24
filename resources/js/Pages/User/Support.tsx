import UserLayout from '@/Layouts/UserLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/Components/UI';
import { Send, Paperclip, X, CheckCircle } from 'lucide-react';
import { useState, FormEventHandler, useRef } from 'react';

export default function Support() {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [successMessage, setSuccessMessage] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        email: user?.email || '',
        subject: '',
        message: '',
        attachment: null as File | null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        setData('attachment', file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setData('attachment', null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // For now, just show success message (backend route can be added later)
        setSuccessMessage('Your message has been sent successfully! We will get back to you soon.');
        reset();
        setSelectedFile(null);
        setTimeout(() => setSuccessMessage(''), 5000);
    };

    return (
        <UserLayout>
            <Head title="Support Center" />

            {/* Success Message */}
            {successMessage && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800">{successMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Contact Support</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="first_name"
                                    type="text"
                                    placeholder="First Name"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.first_name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    type="text"
                                    placeholder="Last Name"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.last_name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Email Subject"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message - Full Width */}
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* File Upload - Full Width */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Attachment
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="file-upload"
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                    >
                                        <Paperclip className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-600">
                                            {selectedFile ? selectedFile.name : 'No file chosen'}
                                        </span>
                                    </label>
                                    {selectedFile && (
                                        <button
                                            type="button"
                                            onClick={handleRemoveFile}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 flex justify-end">
                            <Button type="submit" variant="primary" size="lg" rounded="lg" disabled={processing}>
                                <Send className="w-5 h-5" />
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </UserLayout>
    );
}
