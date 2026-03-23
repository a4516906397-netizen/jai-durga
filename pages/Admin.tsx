import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, set, push, remove } from 'firebase/database';
import { PRODUCT_LIST, COMPANY_NAME } from '../constants';
import { Product } from '../types';
import {
    Save, Search, CheckCircle, AlertCircle, RefreshCw, Sparkles,
    Wand2, Inbox, LayoutDashboard, Database, User, Mail,
    Phone, MapPin, MessageSquare, Trash2, Clock, Calendar,
    ChevronRight, ExternalLink, Filter, Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Admin: React.FC = () => {
    const [view, setView] = useState<'products' | 'submissions'>('submissions');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [description, setDescription] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [seoDescription, setSeoDescription] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [searchQuery, setSearchQuery] = useState('');

    // Authentication States
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    // Submissions State
    const [contacts, setContacts] = useState<any[]>([]);
    const [dealers, setDealers] = useState<any[]>([]);
    const [submissionType, setSubmissionType] = useState<'all' | 'contact' | 'dealer'>('all');
    const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);

    // Fetch Submissions
    useEffect(() => {
        if (isAuthenticated && view === 'submissions') {
            setIsLoading(true);
            const contactsRef = ref(database, 'submissions/contacts');
            const dealersRef = ref(database, 'submissions/dealers');

            const unsubContacts = onValue(contactsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list = Object.entries(data).map(([id, val]: [string, any]) => ({ id, ...val, category: 'contact' }));
                    setContacts(list.reverse());
                } else {
                    setContacts([]);
                }
                setIsLoading(false);
            });

            const unsubDealers = onValue(dealersRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list = Object.entries(data).map(([id, val]: [string, any]) => ({ id, ...val, category: 'dealer' }));
                    setDealers(list.reverse());
                } else {
                    setDealers([]);
                }
            });

            return () => {
                unsubContacts();
                unsubDealers();
            };
        }
    }, [view, isAuthenticated]);

    // When a product is selected
    useEffect(() => {
        if (isAuthenticated && selectedProduct && view === 'products') {
            setIsLoading(true);
            setSaveStatus('idle');
            const productRef = ref(database, `products/${selectedProduct.slug}`);

            const unsubscribe = onValue(productRef, (snapshot) => {
                const data = snapshot.val();
                setDescription(data?.description || '');
                setExtraDetails(data?.extraDetails || '');
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
    }, [selectedProduct, view, isAuthenticated]);

    // Filter products for sidebar
    const filteredProducts = PRODUCT_LIST.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'P@ssw0rd3146') {
            setIsAuthenticated(true);
            setLoginError(false);
        } else {
            setLoginError(true);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white rounded-[2rem] p-10 shadow-2xl border border-white/10"
                >
                    <div className="flex flex-col items-center gap-6 mb-10">
                        <div className="w-20 h-20 bg-jdc-orange/10 rounded-3xl flex items-center justify-center">
                            <User size={40} className="text-jdc-orange" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-serif font-black text-slate-900 mb-2">Secure Access</h1>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-widest">Admin Authentication Required</p>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Director Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-6 py-4 bg-slate-50 border ${loginError ? 'border-red-500 bg-red-50' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-jdc-orange/20 transition-all font-bold text-slate-900`}
                                placeholder="Enter Security Key"
                                autoFocus
                            />
                            {loginError && (
                                <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mt-2 ml-2 flex items-center gap-2">
                                    <AlertCircle size={14} /> Incorrect Authorization
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-jdc-orange transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                        >
                            Authorize Entry
                        </button>
                    </form>

                    <p className="mt-8 text-center text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em]">
                        Jai Durga Chemical Pvt Ltd • Confidential System
                    </p>
                </motion.div>
            </div>
        );
    }


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

    const handleDeleteSubmission = async (id: string, category: string) => {
        if (!window.confirm('Are you sure you want to delete this submission?')) return;
        try {
            const itemRef = ref(database, `submissions/${category === 'contact' ? 'contacts' : 'dealers'}/${id}`);
            await remove(itemRef);
            if (selectedSubmission?.id === id) setSelectedSubmission(null);
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete submission");
        }
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const loadLocalDescription = () => {
        if (selectedProduct) {
            setDescription(selectedProduct.description);
        }
    }

    const generateMagicSEO = () => {
        if (!selectedProduct) return;
        const magicTitle = `${selectedProduct.name} - ${selectedProduct.category} | ${COMPANY_NAME}`;
        const cleanDesc = description.replace(/[#_*\[\]]/g, '');
        const magicDesc = cleanDesc.length > 20
            ? cleanDesc.substring(0, 155) + (cleanDesc.length > 155 ? '...' : '')
            : `Premium quality ${selectedProduct.name} (${selectedProduct.category}) by ${COMPANY_NAME}. Best prices and bulk supply available.`;

        const magicKeywords = [selectedProduct.name, selectedProduct.category, "chemical", "coating", "manufacturer"].join(", ");
        setSeoTitle(magicTitle);
        setSeoDescription(magicDesc);
        setSeoKeywords(magicKeywords);
    };

    const allSubmissions = [...contacts, ...dealers].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    const filteredSubmissions = submissionType === 'all'
        ? allSubmissions
        : allSubmissions.filter(s => s.category === submissionType);

    return (
        <div className="pt-20 min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-20 z-[20] px-8 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-8">
                    <h1 className="font-serif font-black text-2xl text-jdc-blue flex items-center gap-3">
                        <LayoutDashboard className="text-jdc-orange" />
                        JDC <span className="text-slate-400 font-light">Admin</span>
                    </h1>
                    <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
                    <nav className="flex items-center gap-1">
                        <button
                            onClick={() => setView('submissions')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${view === 'submissions' ? 'bg-jdc-blue text-white shadow-lg shadow-jdc-blue/20' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            <Inbox size={18} /> Submissions
                            {allSubmissions.length > 0 && (
                                <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${view === 'submissions' ? 'bg-white text-jdc-blue' : 'bg-slate-200 text-slate-600'}`}>
                                    {allSubmissions.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => { setView('products'); setSelectedProduct(PRODUCT_LIST[0]); }}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${view === 'products' ? 'bg-jdc-blue text-white shadow-lg shadow-jdc-blue/20' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            <Database size={18} /> Product Cloud
                        </button>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Database Status</p>
                        <p className="text-xs font-bold text-green-500 flex items-center gap-1 justify-end">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Connected
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 relative">
                {/* ── VIEW: PRODUCTS ── */}
                {view === 'products' && (
                    <>
                        <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-[calc(100vh-145px)] sticky top-[145px]">
                            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                                <div className="relative">
                                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-jdc-orange/5 focus:border-jdc-orange transition-all"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => setSelectedProduct(product)}
                                        className={`p-4 border-b border-slate-50 cursor-pointer transition-all hover:bg-slate-50 ${selectedProduct?.id === product.id ? 'bg-jdc-orange/5 border-l-4 border-l-jdc-orange' : 'border-l-4 border-l-transparent'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-1 shadow-sm">
                                                {product.image ? <img src={product.image} alt="" className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50"></div>}
                                            </div>
                                            <div>
                                                <h3 className={`text-sm font-bold truncate w-44 ${selectedProduct?.id === product.id ? 'text-jdc-orange' : 'text-slate-700'}`}>{product.name}</h3>
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider">{product.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 p-8 bg-slate-50 h-[calc(100vh-145px)] overflow-y-auto">
                            {selectedProduct ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto pb-20">
                                    <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-6">
                                            <div className="w-20 h-20 bg-slate-50 rounded-2xl shadow-inner border border-slate-100 flex items-center justify-center p-2">
                                                {selectedProduct.image && <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain" />}
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-serif font-bold text-slate-800">{selectedProduct.name}</h1>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-mono uppercase tracking-wider">{selectedProduct.category}</span>
                                                    <span className="text-slate-300 font-mono text-[10px]">Slug: {selectedProduct.slug}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleSave} disabled={saveStatus === 'saving' || isLoading} className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${saveStatus === 'success' ? 'bg-green-500 text-white shadow-green-200' : saveStatus === 'error' ? 'bg-red-500 text-white shadow-red-200' : 'bg-jdc-orange text-white shadow-jdc-orange/20'} active:scale-95`}>
                                            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? <><CheckCircle size={16} /> Saved</> : <><Save size={16} /> Update Cloud</>}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                                            <div className="bg-slate-50/80 px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                                                <h3 className="font-bold text-slate-700 flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-jdc-orange animate-pulse"></div> Live Content Editor</h3>
                                                <button onClick={loadLocalDescription} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-jdc-blue flex items-center gap-2 transition-colors"><RefreshCw size={12} /> Sync Local Baseline</button>
                                            </div>
                                            <div className="p-8">
                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Hero Description</label>
                                                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-32 p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none text-slate-700 leading-relaxed font-medium" placeholder="Primary overview..." />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Deep Features / Specifications</label>
                                                        <textarea value={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} className="w-full h-64 p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none text-slate-700 leading-relaxed font-medium" placeholder="Additional technical details..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                                                <h3 className="font-bold text-indigo-900 flex items-center gap-3"><Sparkles size={18} className="text-indigo-500" /> Intelligent SEO Meta</h3>
                                                <button onClick={generateMagicSEO} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"><Wand2 size={12} /> Auto-Optimize</button>
                                            </div>
                                            <div className="p-8 space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Meta Title Tag</label>
                                                    <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-slate-700 font-bold" maxLength={60} />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Meta Description Snippet</label>
                                                    <textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full h-24 px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-slate-700 font-medium resize-none" maxLength={160} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-200">
                                    <Database size={80} strokeWidth={1} />
                                    <p className="mt-4 font-bold text-slate-400">Select a component to synchronize with cloud</p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* ── VIEW: SUBMISSIONS ── */}
                {view === 'submissions' && (
                    <div className="flex-1 flex overflow-hidden h-[calc(100vh-145px)]">
                        {/* Sidebar: List */}
                        <div className="w-96 bg-white border-r border-slate-200 flex flex-col shadow-sm z-10">
                            <div className="p-6 border-b border-slate-100 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-bold text-slate-800 flex items-center gap-2">Inbox <span className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px] text-slate-500">{filteredSubmissions.length}</span></h2>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => setSubmissionType('all')}
                                            className={`px-2 py-1 rounded text-[10px] font-black uppercase transition-all ${submissionType === 'all' ? 'bg-jdc-blue text-white' : 'text-slate-400 hover:bg-slate-50'}`}
                                        >All</button>
                                        <button
                                            onClick={() => setSubmissionType('contact')}
                                            className={`px-2 py-1 rounded text-[10px] font-black uppercase transition-all ${submissionType === 'contact' ? 'bg-jdc-blue text-white' : 'text-slate-400 hover:bg-slate-50'}`}
                                        >Inquiry</button>
                                        <button
                                            onClick={() => setSubmissionType('dealer')}
                                            className={`px-2 py-1 rounded text-[10px] font-black uppercase transition-all ${submissionType === 'dealer' ? 'bg-jdc-blue text-white' : 'text-slate-400 hover:bg-slate-50'}`}
                                        >Dealer</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {isLoading ? (
                                    <div className="p-10 text-center animate-pulse"><RefreshCw className="mx-auto mb-2 animate-spin text-slate-300" /> <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Loading Inbox...</span></div>
                                ) : filteredSubmissions.length === 0 ? (
                                    <div className="p-10 text-center flex flex-col items-center justify-center h-full opacity-30">
                                        <Inbox size={48} className="mb-4" />
                                        <p className="text-xs font-black uppercase tracking-[0.2em]">Inbox Clean</p>
                                    </div>
                                ) : (
                                    filteredSubmissions.map((sub) => (
                                        <div
                                            key={sub.id}
                                            onClick={() => setSelectedSubmission(sub)}
                                            className={`p-5 border-b border-slate-50 cursor-pointer transition-all hover:bg-slate-50 group relative ${selectedSubmission?.id === sub.id ? 'bg-blue-50/50' : ''}`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${sub.category === 'dealer' ? 'bg-jdc-orange/10 text-jdc-orange' : 'bg-jdc-blue/10 text-jdc-blue'}`}>
                                                    {sub.category === 'dealer' ? 'Dealer' : 'Inquiry'}
                                                </span>
                                                <span className="text-[10px] text-slate-300 font-mono">{formatDate(sub.timestamp)}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-800 text-sm group-hover:text-jdc-blue transition-colors line-clamp-1">
                                                {sub.dealerName || sub.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-medium">{sub.companyName || sub.subject}</p>

                                            {selectedSubmission?.id === sub.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-jdc-blue" />}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Main Detail View */}
                        <div className="flex-1 overflow-y-auto p-12 bg-slate-50 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                {selectedSubmission ? (
                                    <motion.div
                                        key={selectedSubmission.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="max-w-4xl mx-auto space-y-8"
                                    >
                                        <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden pb-12">
                                            {/* Header */}
                                            <div className="bg-slate-50/50 px-10 py-10 border-b border-slate-100 flex justify-between items-start">
                                                <div className="flex gap-6">
                                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl ${selectedSubmission.category === 'dealer' ? 'bg-jdc-orange shadow-jdc-orange/20' : 'bg-jdc-blue shadow-jdc-blue/20'}`}>
                                                        {selectedSubmission.category === 'dealer' ? <Building2 size={32} /> : <User size={32} />}
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">
                                                            New {selectedSubmission.category === 'dealer' ? 'Dealer Application' : 'Customer Inquiry'}
                                                        </span>
                                                        <h2 className="text-4xl font-serif font-bold text-slate-900">{selectedSubmission.dealerName || selectedSubmission.name}</h2>
                                                        <p className="text-slate-500 font-medium flex items-center gap-2 mt-2">
                                                            <Calendar size={14} /> {formatDate(selectedSubmission.timestamp)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteSubmission(selectedSubmission.id, selectedSubmission.category)}
                                                    className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-300 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all flex items-center justify-center shadow-sm"
                                                    title="Delete submission"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>

                                            {/* Grid Details */}
                                            <div className="p-10 space-y-12">
                                                <div className="grid grid-cols-2 gap-10">
                                                    <div className="space-y-6">
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Firm / Company</p>
                                                            <p className="text-lg font-bold text-slate-800 flex items-center gap-3">
                                                                <Building2 size={18} className="text-slate-300" />
                                                                {selectedSubmission.companyName || 'Not Provided'}
                                                            </p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Number</p>
                                                            <a href={`tel:${selectedSubmission.mobileNumber || selectedSubmission.email}`} className="text-lg font-bold text-jdc-blue hover:text-jdc-orange transition-colors flex items-center gap-3">
                                                                <Phone size={18} className="text-slate-300" />
                                                                {selectedSubmission.mobileNumber || 'N/A'}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-6">
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                                                            <a href={`mailto:${selectedSubmission.email}`} className="text-lg font-bold text-jdc-blue hover:text-jdc-orange transition-colors flex items-center gap-3">
                                                                <Mail size={18} className="text-slate-300" />
                                                                {selectedSubmission.email || 'N/A'}
                                                            </a>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Submission Category</p>
                                                            <p className="text-lg font-bold text-slate-800 flex items-center gap-3">
                                                                <Inbox size={18} className="text-slate-300" />
                                                                {selectedSubmission.subject || 'Dealer Network'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {selectedSubmission.address && (
                                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Business Location</p>
                                                        <p className="text-slate-700 font-medium flex gap-3">
                                                            <MapPin size={22} className="text-slate-300 shrink-0 mt-1" />
                                                            {selectedSubmission.address}
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="space-y-4">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2 flex items-center gap-2">
                                                        <MessageSquare size={14} /> Message & Requirements
                                                    </p>
                                                    <div className="text-xl text-slate-800 leading-relaxed font-serif italic">
                                                        "{selectedSubmission.remark || selectedSubmission.message || 'No additional details provided.'}"
                                                    </div>
                                                </div>

                                                <div className="pt-6 flex gap-4">
                                                    <a
                                                        href={selectedSubmission.category === 'dealer'
                                                            ? `https://wa.me/91${selectedSubmission.mobileNumber}?text=Hi ${selectedSubmission.dealerName}, this is regarding your dealer application to Jai Durga Chemical.`
                                                            : `mailto:${selectedSubmission.email}?subject=Regarding your inquiry to Jai Durga Chemical`
                                                        }
                                                        target="_blank"
                                                        className="px-8 py-4 bg-jdc-blue text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl shadow-jdc-blue/20 hover:bg-jdc-orange hover:shadow-jdc-orange/20 transition-all active:scale-95"
                                                    >
                                                        Quick Reply {selectedSubmission.category === 'dealer' ? <ChevronRight size={16} /> : <ExternalLink size={16} />}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-200">
                                        <div className="relative mb-8">
                                            <Inbox size={120} strokeWidth={0.5} />
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute -top-2 -right-2 w-10 h-10 bg-jdc-orange rounded-full border-4 border-slate-50 flex items-center justify-center text-white font-black text-sm"
                                            >
                                                {allSubmissions.length}
                                            </motion.div>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-slate-400">Select a submission to review</h3>
                                        <p className="text-slate-400 mt-2 font-medium">Use the sidebar to navigate through incoming enquiries and dealer applications.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Admin;
