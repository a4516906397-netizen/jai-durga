import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, set } from 'firebase/database';
import { PRODUCT_LIST, COMPANY_NAME } from '../constants';
import { Product } from '../types';
import { Save, Search, CheckCircle, AlertCircle, RefreshCw, Sparkles, Wand2 } from 'lucide-react';

const Admin: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [description, setDescription] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [seoDescription, setSeoDescription] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products for sidebar
    const filteredProducts = PRODUCT_LIST.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // When a product is selected, fetch its description from Firebase
    useEffect(() => {
        if (selectedProduct) {
            setIsLoading(true);
            setSaveStatus('idle');
            const productRef = ref(database, `products/${selectedProduct.slug}`);

            const unsubscribe = onValue(productRef, (snapshot) => {
                const data = snapshot.val();
                setDescription(data?.description || '');
                setExtraDetails(data?.extraDetails || '');

                // Load SEO data
                setSeoTitle(data?.seo?.title || '');
                setSeoDescription(data?.seo?.description || '');
                setSeoKeywords(data?.seo?.keywords || '');

                setIsLoading(false);
            }, (error) => {
                console.error("Firebase read error:", error);
                setIsLoading(false);
            });

            return () => unsubscribe();
        }
    }, [selectedProduct]);

    const handleSave = async () => {
        if (!selectedProduct) return;

        setSaveStatus('saving');
        try {
            const productRef = ref(database, `products/${selectedProduct.slug}`);

            await set(productRef, {
                description: description,
                extraDetails: extraDetails,
                seo: {
                    title: seoTitle,
                    description: seoDescription,
                    keywords: seoKeywords
                },
                lastUpdated: new Date().toISOString()
            });

            setSaveStatus('success');
            setTimeout(() => setSaveStatus('idle'), 3000);
        } catch (error) {
            console.error("Firebase save error:", error);
            setSaveStatus('error');
        }
    };

    const loadLocalDescription = () => {
        if (selectedProduct) {
            setDescription(selectedProduct.description);
        }
    }

    const generateMagicSEO = () => {
        if (!selectedProduct) return;

        // Magic Logic
        const magicTitle = `${selectedProduct.name} - ${selectedProduct.category} | ${COMPANY_NAME}`;

        // Create description from the first sentence or two of the description, or fallback to something generic
        const cleanDesc = description.replace(/[#_*\[\]]/g, ''); // Simple cleanup
        const magicDesc = cleanDesc.length > 20
            ? cleanDesc.substring(0, 155) + (cleanDesc.length > 155 ? '...' : '')
            : `Premium quality ${selectedProduct.name} (${selectedProduct.category}) by ${COMPANY_NAME}. Best prices and bulk supply available.`;

        const magicKeywords = [
            selectedProduct.name,
            selectedProduct.category,
            "chemical",
            "coating",
            "construction",
            "manufacturer",
            "supplier"
        ].join(", ");

        setSeoTitle(magicTitle);
        setSeoDescription(magicDesc);
        setSeoKeywords(magicKeywords);
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex">
            {/* Sidebar - Product List */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-80px)] fixed left-0 top-20 z-10">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="font-serif font-bold text-xl text-slate-800 mb-4">Product Admin</h2>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-jdc-orange/20 focus:border-jdc-orange transition-all"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className={`p-4 border-b border-gray-50 cursor-pointer transition-all hover:bg-slate-50 ${selectedProduct?.id === product.id ? 'bg-jdc-orange/5 border-l-4 border-l-jdc-orange' : 'border-l-4 border-l-transparent'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-md border border-gray-100 flex items-center justify-center p-1">
                                    {product.image ? (
                                        <img src={product.image} alt="" className="w-full h-full object-contain" />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100"></div>
                                    )}
                                </div>
                                <div>
                                    <h3 className={`text-sm font-bold ${selectedProduct?.id === product.id ? 'text-jdc-orange' : 'text-slate-700'}`}>
                                        {product.name}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{product.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content - Editor */}
            <div className="flex-1 ml-80 p-8 h-[calc(100vh-80px)] overflow-y-auto">
                {selectedProduct ? (
                    <div className="max-w-3xl mx-auto pb-20">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center p-2">
                                    {selectedProduct.image && <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain" />}
                                </div>
                                <div>
                                    <h1 className="text-3xl font-serif font-bold text-slate-900">{selectedProduct.name}</h1>
                                    <p className="text-slate-500 font-mono text-xs mt-1">ID: {selectedProduct.slug}</p>
                                </div>
                            </div>

                            <button
                                onClick={handleSave}
                                disabled={saveStatus === 'saving' || isLoading}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all shadow-lg ${saveStatus === 'success' ? 'bg-green-500 hover:bg-green-600' :
                                    saveStatus === 'error' ? 'bg-red-500 hover:bg-red-600' :
                                        'bg-jdc-blue hover:bg-jdc-orange'
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {saveStatus === 'saving' ? (
                                    <>Saving...</>
                                ) : saveStatus === 'success' ? (
                                    <><CheckCircle size={18} /> Saved!</>
                                ) : (
                                    <><Save size={18} /> Save Changes</>
                                )}
                            </button>
                        </div>

                        {/* Editor Area */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    Live Description Editor
                                </h3>
                                <button
                                    onClick={loadLocalDescription}
                                    className="text-xs text-slate-500 hover:text-jdc-blue flex items-center gap-1"
                                    title="Copy description from local codebase to editor"
                                >
                                    <RefreshCw size={12} /> Load Local Default
                                </button>
                            </div>

                            <div className="p-6">
                                {isLoading ? (
                                    <div className="h-64 flex items-center justify-center text-slate-400">
                                        Loading data from cloud...
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Short Description</label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="w-full h-40 p-4 text-base leading-relaxed text-slate-700 border-2 border-slate-100 rounded-xl focus:border-jdc-orange/50 focus:ring-0 transition-all font-sans resize-none mb-6"
                                                placeholder="Enter short product description here (visible initially)..."
                                            />

                                            <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Description (Hidden initially)</label>
                                            <textarea
                                                value={extraDetails}
                                                onChange={(e) => setExtraDetails(e.target.value)}
                                                className="w-full h-64 p-4 text-base leading-relaxed text-slate-700 border-2 border-slate-100 rounded-xl focus:border-jdc-orange/50 focus:ring-0 transition-all font-sans resize-none"
                                                placeholder="Enter full detailed description here (visible after clicking 'More Details')..."
                                            />

                                            <div className="text-right text-xs text-slate-300 font-mono mt-2">
                                                {description.length + extraDetails.length} characters total
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-400 flex items-start gap-2">
                                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                            <span>
                                                This text will replace the local description on the live website immediately after saving.
                                                Support for Markdown or HTML depends on the frontend implementation.
                                            </span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Magic SEO Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                                    <Sparkles size={18} className="text-indigo-500" />
                                    Magic SEO Manager
                                </h3>
                                <button
                                    onClick={generateMagicSEO}
                                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-full font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm"
                                    title="Auto-generate SEO tags from product details"
                                >
                                    <Wand2 size={12} /> Auto-Generate
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Meta Title</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={seoTitle}
                                            onChange={(e) => setSeoTitle(e.target.value)}
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all font-sans text-sm"
                                            placeholder="e.g. Premium Wall Putty | Jai Durga Chemical"
                                            maxLength={60}
                                        />
                                        <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold px-2 py-0.5 rounded ${seoTitle.length > 60 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                                            {seoTitle.length}/60
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-1.5">Optimal length: 50-60 characters.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Meta Description</label>
                                    <div className="relative">
                                        <textarea
                                            value={seoDescription}
                                            onChange={(e) => setSeoDescription(e.target.value)}
                                            className="w-full h-24 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all font-sans text-sm resize-none"
                                            placeholder="Summarize the product page content..."
                                            maxLength={160}
                                        />
                                        <div className={`absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded ${seoDescription.length > 160 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                                            {seoDescription.length}/160
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-1.5">Optimal length: 150-160 characters. Include keywords.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Keywords</label>
                                    <input
                                        type="text"
                                        value={seoKeywords}
                                        onChange={(e) => setSeoKeywords(e.target.value)}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all font-sans text-sm"
                                        placeholder="e.g. wall putty, waterproofing, acrylic paint, exterior coating"
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1.5">Comma separated list of focused keywords.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300">
                        <Search size={64} strokeWidth={1} className="mb-4 text-slate-200" />
                        <h3 className="text-xl font-bold text-slate-400">Select a product to edit</h3>
                        <p className="text-slate-400 mt-2">Choose a product from the sidebar to manage its content.</p>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Admin;
