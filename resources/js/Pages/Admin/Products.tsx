import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit,
    Trash2,
    Eye,
    Package,
    DollarSign,
    Star,
    ChevronLeft,
    ChevronRight,
    Inbox,
    X,
    AlertTriangle
} from 'lucide-react';

interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    price: number;
    originalPrice?: number;
    sales: number;
    downloads: number;
    rating: number;
    status: 'active' | 'draft' | 'inactive';
    category: string;
    image?: string;
}

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
    perPage: number;
}

interface Props {
    products?: Product[];
    pagination?: Pagination;
    stats?: {
        total: number;
        active: number;
        drafts: number;
        inactive: number;
    };
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'active':
            return <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Active</span>;
        case 'draft':
            return <span className="px-2.5 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">Draft</span>;
        case 'inactive':
            return <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">Inactive</span>;
        default:
            return null;
    }
};

const EmptyState = ({ onAdd }: { onAdd: () => void }) => (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Inbox className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No products yet</h3>
        <p className="text-sm text-gray-500 mb-4">Get started by adding your first product.</p>
        <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90"
        >
            <Plus className="w-5 h-5" />
            Add Product
        </button>
    </div>
);

export default function Products({ products = [], pagination, stats }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        description: '',
        price: '',
        original_price: '',
        category: 'woocommerce',
        status: 'draft',
        image: '',
    });

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSelectAll = () => {
        if (selectedProducts.length === filteredProducts.length) {
            setSelectedProducts([]);
        } else {
            setSelectedProducts(filteredProducts.map(p => p.id));
        }
    };

    const toggleSelect = (id: number) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter(p => p !== id));
        } else {
            setSelectedProducts([...selectedProducts, id]);
        }
    };

    const openAddModal = () => {
        setEditingProduct(null);
        reset();
        setShowModal(true);
    };

    const openEditModal = (product: Product) => {
        setEditingProduct(product);
        setData({
            name: product.name,
            slug: product.slug,
            description: product.description || '',
            price: product.price.toString(),
            original_price: product.originalPrice?.toString() || '',
            category: product.category,
            status: product.status,
            image: product.image || '',
        });
        setShowModal(true);
        setOpenDropdown(null);
    };

    const openDeleteConfirm = (product: Product) => {
        setDeletingProduct(product);
        setShowDeleteModal(true);
        setOpenDropdown(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingProduct) {
            put(route('admin.products.update', editingProduct.id), {
                onSuccess: () => {
                    setShowModal(false);
                    reset();
                },
            });
        } else {
            post(route('admin.products.store'), {
                onSuccess: () => {
                    setShowModal(false);
                    reset();
                },
            });
        }
    };

    const handleDelete = () => {
        if (deletingProduct) {
            router.delete(route('admin.products.destroy', deletingProduct.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setDeletingProduct(null);
                },
            });
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedProducts.length === 0) return;

        router.post(route('admin.products.bulk-action'), {
            ids: selectedProducts,
            action,
        }, {
            onSuccess: () => setSelectedProducts([]),
        });
    };

    return (
        <AdminLayout>
            <Head title="Products - Admin" />

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                    <p className="text-gray-500 mt-1">Manage your products and plugins</p>
                </div>
                <button
                    onClick={openAddModal}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            {/* Stats Cards */}
            {stats && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Total Products</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Active</p>
                        <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Drafts</p>
                        <p className="text-2xl font-bold text-yellow-600">{stats.drafts}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-500">Inactive</p>
                        <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
                    </div>
                </div>
            )}

            {/* Filters Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        {selectedProducts.length > 0 && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">{selectedProducts.length} selected</span>
                                <button
                                    onClick={() => handleBulkAction('activate')}
                                    className="px-3 py-2 text-sm border border-green-200 text-green-700 rounded-lg hover:bg-green-50"
                                >
                                    Activate
                                </button>
                                <button
                                    onClick={() => handleBulkAction('delete')}
                                    className="px-3 py-2 text-sm border border-red-200 text-red-700 rounded-lg hover:bg-red-50"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                        <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700">
                            <option value="">All Categories</option>
                            <option value="bundle">Bundle</option>
                            <option value="woocommerce">WooCommerce</option>
                            <option value="gutenberg">Gutenberg</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700">
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="draft">Draft</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {filteredProducts.length > 0 ? (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-left">
                                            <input
                                                type="checkbox"
                                                checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                                                onChange={toggleSelectAll}
                                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                            />
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Category</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Price</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Sales</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Rating</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedProducts.includes(product.id)}
                                                    onChange={() => toggleSelect(product.id)}
                                                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-lg flex items-center justify-center">
                                                        <Package className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">{product.name}</p>
                                                        <p className="text-xs text-gray-500">/{product.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full capitalize">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <span className="font-semibold text-gray-900">${product.price}</span>
                                                    {product.originalPrice && (
                                                        <span className="ml-2 text-sm text-gray-400 line-through">${product.originalPrice}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1 text-gray-600">
                                                    <DollarSign className="w-4 h-4" />
                                                    {product.sales}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    <span className="font-medium text-gray-900">{product.rating}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {getStatusBadge(product.status)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setOpenDropdown(openDropdown === product.id ? null : product.id)}
                                                        className="p-2 hover:bg-gray-100 rounded-lg"
                                                    >
                                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                                    </button>
                                                    {openDropdown === product.id && (
                                                        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                                            <button
                                                                onClick={() => openEditModal(product)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                            >
                                                                <Edit className="w-4 h-4" /> Edit
                                                            </button>
                                                            <button
                                                                onClick={() => openDeleteConfirm(product)}
                                                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                            >
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
                                    Showing <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{pagination.total}</span> products
                                </p>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                                        disabled={pagination.currentPage === 1}
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <span className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium">
                                        {pagination.currentPage}
                                    </span>
                                    <button
                                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                                        disabled={pagination.currentPage === pagination.totalPages}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <EmptyState onAdd={openAddModal} />
                )}
            </div>

            {/* Add/Edit Product Modal */}
            <Modal show={showModal} onClose={() => setShowModal(false)} maxWidth="lg">
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </h2>
                        <button type="button" onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="Enter product name"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                            <input
                                type="text"
                                value={data.slug}
                                onChange={e => setData('slug', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="product-slug (auto-generated if empty)"
                            />
                            {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="Product description"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="0.00"
                                />
                                {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.original_price}
                                    onChange={e => setData('original_price', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                <select
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                >
                                    <option value="bundle">Bundle</option>
                                    <option value="woocommerce">WooCommerce</option>
                                    <option value="gutenberg">Gutenberg</option>
                                    <option value="marketing">Marketing</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                                <select
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="text"
                                value={data.image}
                                onChange={e => setData('image', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : (editingProduct ? 'Update Product' : 'Add Product')}
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} maxWidth="sm">
                <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Delete Product</h3>
                    <p className="text-gray-500 text-center mb-6">
                        Are you sure you want to delete "{deletingProduct?.name}"? This action cannot be undone.
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowDeleteModal(false)}
                            className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex-1 px-4 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
