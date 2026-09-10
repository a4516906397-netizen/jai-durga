import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, set, push, remove } from 'firebase/database';
import { PRODUCT_LIST, COMPANY_NAME } from '../constants';
import { Product } from '../types';
import {
    Save, Search, CheckCircle, AlertCircle, RefreshCw, Sparkles,
    Wand2, Inbox, LayoutDashboard, Database, User, Mail,
    Phone, MapPin, MessageSquare, Trash2, Clock, Calendar,
    ChevronRight, ExternalLink, Filter, Building2, TrendingUp, Activity, BarChart3, Target, Zap, ShieldCheck,
    Plus, Image as ImageIcon, ImageOff, Layers, Tag, Box, ArrowRight, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES_LIST = [
    'Exterior Emulsion',
    'Primers',
    'Interior Emulsion',
    'Interior and Exterior',
    'Interior & Exterior',
    'Enamel',
    'Universal Stainer',
    'Distemper',
    'Waterproofing',
    'Adhesive',
    'Metallic Paint'
];

// Helper Image component with error handling
const ProductImageAdmin: React.FC<{ src?: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setHasError(false);
    }, [src]);

    if (!src || hasError) {
        return (
            <div className={`flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-2 text-center rounded-xl border border-dashed border-slate-200 ${className}`}>
                <ImageOff size={24} className="text-slate-300 mb-1" strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">No Image Found</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className={`object-contain ${className}`}
        />
    );
};

const Admin: React.FC = () => {
    const [view, setView] = useState<'products' | 'submissions' | 'google-ads'>('submissions');
    const [allProducts, setAllProducts] = useState<Product[]>(PRODUCT_LIST);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Selected Product Edit Form States
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [packing, setPacking] = useState('');
    const [featuresText, setFeaturesText] = useState('');
    const [description, setDescription] = useState('');
    const [extraDetails, setExtraDetails] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [seoDescription, setSeoDescription] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [searchQuery, setSearchQuery] = useState('');

    // Add Product Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductSlug, setNewProductSlug] = useState('');
    const [newProductCategory, setNewProductCategory] = useState('Exterior Emulsion');
    const [customCategoryInput, setCustomCategoryInput] = useState('');
    const [newProductSubTitle, setNewProductSubTitle] = useState('');
    const [newProductImage, setNewProductImage] = useState('');
    const [newProductPacking, setNewProductPacking] = useState('1 LTR, 4 LTR, 10 LTR, 20 LTR');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductFeatures, setNewProductFeatures] = useState('');
    const [newProductExtraDetails, setNewProductExtraDetails] = useState('');
    const [newProductSeoTitle, setNewProductSeoTitle] = useState('');
    const [newProductSeoDescription, setNewProductSeoDescription] = useState('');
    const [newProductSeoKeywords, setNewProductSeoKeywords] = useState('');
    const [isSubmittingNewProduct, setIsSubmittingNewProduct] = useState(false);
    const [newProductError, setNewProductError] = useState('');

    // Authentication States
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    // Submissions & Stats State
    const [contacts, setContacts] = useState<any[]>([]);
    const [dealers, setDealers] = useState<any[]>([]);
    const [stats, setStats] = useState({ totalImpressions: 0 });
    const [submissionType, setSubmissionType] = useState<'all' | 'contact' | 'dealer'>('all');
    const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);

    // Fetch Stats & Submissions & Cloud Products
    useEffect(() => {
        if (isAuthenticated) {
            // Global Stats
            const statsRef = ref(database, 'stats');
            const unsubStats = onValue(statsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) setStats(data);
            });

            // Listen to Products from Firebase
            const productsRef = ref(database, 'products');
            const unsubProducts = onValue(productsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const localSlugs = new Set(PRODUCT_LIST.map(p => p.slug));
                    const merged: Product[] = PRODUCT_LIST
                        .filter(local => !data[local.slug]?.isDeleted)
                        .map(local => {
                            const cloud = data[local.slug];
                            return {
                                ...local,
                                name: cloud?.name || local.name,
                                category: cloud?.category || local.category,
                                subTitle: cloud?.subTitle !== undefined ? cloud.subTitle : local.subTitle,
                                image: cloud?.image || local.image,
                                packing: cloud?.packing || local.packing,
                                description: cloud?.description !== undefined ? cloud.description : local.description,
                                extraDetails: cloud?.extraDetails !== undefined ? cloud.extraDetails : local.extraDetails,
                                features: cloud?.features || local.features,
                                seo: cloud?.seo || local.seo,
                            };
                        });

                    // Add Custom Products from Firebase
                    Object.entries(data).forEach(([slug, val]: [string, any]) => {
                        if (!localSlugs.has(slug) && val && typeof val === 'object' && !val.isDeleted) {
                            merged.push({
                                id: val.id || slug,
                                name: val.name || slug,
                                slug: val.slug || slug,
                                category: val.category || 'General',
                                subTitle: val.subTitle || '',
                                image: val.image || `/product/${slug}.png`,
                                packing: val.packing || '',
                                description: val.description || '',
                                extraDetails: val.extraDetails || '',
                                features: val.features || [],
                                seo: val.seo || {},
                                isCustom: true,
                                createdAt: val.createdAt
                            });
                        }
                    });

                    setAllProducts(merged);
                    if (!selectedProduct && merged.length > 0) {
                        setSelectedProduct(merged[0]);
                    }
                } else {
                    setAllProducts(PRODUCT_LIST);
                    if (!selectedProduct && PRODUCT_LIST.length > 0) {
                        setSelectedProduct(PRODUCT_LIST[0]);
                    }
                }
            });

            if (view === 'submissions') {
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
                    unsubStats();
                    unsubProducts();
                    unsubContacts();
                    unsubDealers();
                };
            }

            return () => {
                unsubStats();
                unsubProducts();
            };
        }
    }, [view, isAuthenticated]);

    // When a product is selected in Admin
    useEffect(() => {
        if (isAuthenticated && selectedProduct && view === 'products') {
            setIsLoading(true);
            setSaveStatus('idle');
            const productRef = ref(database, `products/${selectedProduct.slug}`);

            const unsubscribe = onValue(productRef, (snapshot) => {
                const data = snapshot.val();
                setName(data?.name || selectedProduct.name || '');
                setCategory(data?.category || selectedProduct.category || '');
                setSubTitle(data?.subTitle !== undefined ? data.subTitle : (selectedProduct.subTitle || ''));
                setImagePath(data?.image || selectedProduct.image || `/product/${selectedProduct.slug}.png`);
                setPacking(data?.packing || selectedProduct.packing || '');
                setFeaturesText(Array.isArray(data?.features) ? data.features.join('\n') : (selectedProduct.features?.join('\n') || ''));
                setDescription(data?.description !== undefined ? data.description : (selectedProduct.description || ''));
                setExtraDetails(data?.extraDetails !== undefined ? data.extraDetails : (selectedProduct.extraDetails || ''));
                setSeoTitle(data?.seo?.title || selectedProduct.seo?.title || '');
                setSeoDescription(data?.seo?.description || selectedProduct.seo?.description || '');
                setSeoKeywords(data?.seo?.keywords || selectedProduct.seo?.keywords || '');
                setIsLoading(false);
            }, (error) => {
                console.error("Firebase read error:", error);
                setIsLoading(false);
            });

            return () => unsubscribe();
        }
    }, [selectedProduct, view, isAuthenticated]);

    // Auto-generate slug when entering new product name
    const handleNewProductNameChange = (value: string) => {
        setNewProductName(value);
        const generatedSlug = value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');
        setNewProductSlug(generatedSlug);
        if (!newProductImage || newProductImage.startsWith('/product/')) {
            setNewProductImage(generatedSlug ? `/product/${generatedSlug.replace(/-/g, '_')}.png` : '');
        }
    };

    // Filter products for sidebar
    const filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
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

            const featuresArray = featuresText
                .split('\n')
                .map(f => f.trim())
                .filter(Boolean);

            const payload: any = {
                name: name.trim() || selectedProduct.name,
                category: category.trim() || selectedProduct.category,
                subTitle: subTitle.trim(),
                image: imagePath.trim() || selectedProduct.image,
                packing: packing.trim(),
                features: featuresArray,
                description: description,
                extraDetails: extraDetails,
                seo: {
                    title: seoTitle,
                    description: seoDescription,
                    keywords: seoKeywords
                },
                lastUpdated: new Date().toISOString()
            };

            if (selectedProduct.isCustom) {
                payload.isCustom = true;
                payload.id = selectedProduct.slug;
                payload.slug = selectedProduct.slug;
            }

            await set(productRef, payload);

            setSaveStatus('success');
            setTimeout(() => setSaveStatus('idle'), 3000);
        } catch (error) {
            console.error("Firebase save error:", error);
            setSaveStatus('error');
        }
    };

    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setNewProductError('');

        if (!newProductName.trim()) {
            setNewProductError('Please enter a product name.');
            return;
        }

        const slug = newProductSlug.trim()
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '-')
            .replace(/-+/g, '-');

        if (!slug) {
            setNewProductError('Please provide a valid product identifier (slug).');
            return;
        }

        // Check if slug already exists in allProducts
        const exists = allProducts.some(p => p.slug === slug);
        if (exists) {
            setNewProductError(`A product with slug "${slug}" already exists. Please choose a different identifier.`);
            return;
        }

        setIsSubmittingNewProduct(true);
        try {
            const finalCategory = newProductCategory === 'Custom' ? (customCategoryInput.trim() || 'General') : newProductCategory;
            const finalImage = newProductImage.trim() || `/product/${slug.replace(/-/g, '_')}.png`;
            const featuresArray = newProductFeatures
                .split('\n')
                .map(f => f.trim())
                .filter(Boolean);

            const newProductPayload = {
                id: slug,
                name: newProductName.trim(),
                slug: slug,
                category: finalCategory,
                subTitle: newProductSubTitle.trim(),
                image: finalImage.startsWith('/') ? finalImage : `/product/${finalImage}`,
                packing: newProductPacking.trim(),
                description: newProductDescription.trim(),
                extraDetails: newProductExtraDetails.trim(),
                features: featuresArray,
                isCustom: true,
                createdAt: new Date().toISOString(),
                lastUpdated: new Date().toISOString(),
                seo: {
                    title: newProductSeoTitle.trim() || `${newProductName.trim()} | ${finalCategory} | ${COMPANY_NAME}`,
                    description: newProductSeoDescription.trim() || `${newProductName.trim()} high performance ${finalCategory} manufactured by ${COMPANY_NAME}.`,
                    keywords: newProductSeoKeywords.trim() || `${newProductName.trim()}, ${finalCategory}, paint, coating, chemical, sakarni, jai durga`
                }
            };

            const productRef = ref(database, `products/${slug}`);
            await set(productRef, newProductPayload);

            setIsSubmittingNewProduct(false);
            setIsAddModalOpen(false);

            // Reset form
            setNewProductName('');
            setNewProductSlug('');
            setNewProductCategory('Exterior Emulsion');
            setCustomCategoryInput('');
            setNewProductSubTitle('');
            setNewProductImage('');
            setNewProductPacking('1 LTR, 4 LTR, 10 LTR, 20 LTR');
            setNewProductDescription('');
            setNewProductFeatures('');
            setNewProductExtraDetails('');
            setNewProductSeoTitle('');
            setNewProductSeoDescription('');
            setNewProductSeoKeywords('');

            // Select newly added product
            setSelectedProduct(newProductPayload as Product);
        } catch (err: any) {
            console.error("Create product error:", err);
            setIsSubmittingNewProduct(false);
            setNewProductError(err.message || 'Failed to create product in database.');
        }
    };

    const handleDeleteProduct = async (productToDelete?: Product) => {
        const target = productToDelete || selectedProduct;
        if (!target) return;
        
        const isConfirmed = window.confirm(
            `⚠️ Are you sure you want to DELETE "${target.name}" (${target.category})?\n\nThis will remove it from the website catalog and navigation.`
        );
        if (!isConfirmed) return;

        try {
            const productRef = ref(database, `products/${target.slug}`);
            if (target.isCustom) {
                await remove(productRef);
            } else {
                await set(productRef, {
                    id: target.id || target.slug,
                    slug: target.slug,
                    name: target.name,
                    category: target.category,
                    isDeleted: true,
                    lastUpdated: new Date().toISOString()
                });
            }

            // Filter out immediately from local state
            setAllProducts(prev => prev.filter(p => p.slug !== target.slug));
            if (selectedProduct?.slug === target.slug) {
                const remaining = allProducts.filter(p => p.slug !== target.slug);
                setSelectedProduct(remaining.length > 0 ? remaining[0] : null);
            }
        } catch (error) {
            console.error("Delete product error:", error);
            alert("Failed to delete product from database.");
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
            const local = PRODUCT_LIST.find(p => p.slug === selectedProduct.slug);
            if (local) {
                setName(local.name);
                setCategory(local.category);
                setSubTitle(local.subTitle || '');
                setImagePath(local.image || `/product/${local.slug}.png`);
                setPacking(local.packing || '');
                setDescription(local.description || '');
                setExtraDetails(local.extraDetails || '');
                setFeaturesText(local.features?.join('\n') || '');
            }
        }
    };

    const generateMagicSEO = () => {
        if (!selectedProduct) return;
        const magicTitle = `${name || selectedProduct.name} - ${category || selectedProduct.category} | ${COMPANY_NAME}`;
        const cleanDesc = description.replace(/[#_*\[\]]/g, '');
        const magicDesc = cleanDesc.length > 20
            ? cleanDesc.substring(0, 155) + (cleanDesc.length > 155 ? '...' : '')
            : `Premium quality ${name || selectedProduct.name} (${category || selectedProduct.category}) by ${COMPANY_NAME}. Best prices and bulk supply available.`;

        const magicKeywords = [name || selectedProduct.name, category || selectedProduct.category, "chemical", "coating", "manufacturer", "paint", "sakarni"].join(", ");
        setSeoTitle(magicTitle);
        setSeoDescription(magicDesc);
        setSeoKeywords(magicKeywords);
    };

    const generateNewProductMagicSEO = () => {
        const pName = newProductName.trim() || "Product";
        const pCat = newProductCategory === 'Custom' ? (customCategoryInput || "Paint") : newProductCategory;
        const magicTitle = `${pName} - ${pCat} | ${COMPANY_NAME}`;
        const cleanDesc = newProductDescription.replace(/[#_*\[\]]/g, '');
        const magicDesc = cleanDesc.length > 20
            ? cleanDesc.substring(0, 155) + (cleanDesc.length > 155 ? '...' : '')
            : `Premium quality ${pName} (${pCat}) by ${COMPANY_NAME}. High performance coating engineered for excellence.`;

        const magicKeywords = [pName, pCat, "chemical", "coating", "manufacturer", "industrial paint", "sakarni"].join(", ");
        setNewProductSeoTitle(magicTitle);
        setNewProductSeoDescription(magicDesc);
        setNewProductSeoKeywords(magicKeywords);
    };

    const allSubmissions = [...contacts, ...dealers].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    const filteredSubmissions = submissionType === 'all'
        ? allSubmissions
        : allSubmissions.filter(s => s.category === submissionType);

    return (
        <div className="pt-20 min-h-screen bg-slate-50 flex flex-col font-sans">
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
                            onClick={() => { setView('products'); setSelectedProduct(allProducts[0] || PRODUCT_LIST[0]); }}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${view === 'products' ? 'bg-jdc-blue text-white shadow-lg shadow-jdc-blue/20' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            <Database size={18} /> Product Cloud
                            <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-jdc-orange/10 text-jdc-orange font-bold">
                                {allProducts.length}
                            </span>
                        </button>
                        <button
                            onClick={() => setView('google-ads')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${view === 'google-ads' ? 'bg-jdc-blue text-white shadow-lg shadow-jdc-blue/20' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            <TrendingUp size={18} /> Google Ads
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
                {/* ── VIEW: GOOGLE ADS ── */}
                {view === 'google-ads' && (
                    <div className="flex-1 p-8 md:p-12 bg-slate-900 border-l border-white/5 overflow-y-auto custom-scrollbar">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto pb-20">
                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-jdc-orange mb-3">Performance Monitoring</h4>
                                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-none">Tracking <span className="text-slate-500 font-light">Engine</span></h2>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
                                    <div className="px-4 py-2 text-right">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Status</p>
                                        <p className="text-xs font-bold text-green-400 flex items-center justify-end gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Google Tag Connected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* ── VIEW: PRODUCTS ── */}
                {view === 'products' && (
                    <>
                        <div className="w-88 md:w-96 bg-white border-r border-slate-200 flex flex-col h-[calc(100vh-145px)] sticky top-[145px]">
                            {/* Top Search & Add Product Action */}
                            <div className="p-4 border-b border-slate-100 bg-slate-50/50 space-y-3">
                                <button
                                    onClick={() => setIsAddModalOpen(true)}
                                    className="w-full py-3.5 bg-jdc-orange text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-jdc-orange/20 active:scale-95"
                                >
                                    <Plus size={16} strokeWidth={2.5} /> Add New Product
                                </button>
                                <div className="relative">
                                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products by name or category..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-jdc-orange/5 focus:border-jdc-orange transition-all"
                                    />
                                </div>
                            </div>

                            {/* Products List Sidebar */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id || product.slug}
                                        onClick={() => setSelectedProduct(product)}
                                        className={`p-4 border-b border-slate-50 cursor-pointer transition-all hover:bg-slate-50 ${selectedProduct?.slug === product.slug ? 'bg-jdc-orange/5 border-l-4 border-l-jdc-orange' : 'border-l-4 border-l-transparent'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-1 shadow-sm shrink-0 overflow-hidden">
                                                <ProductImageAdmin
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1.5 justify-between">
                                                    <h3 className={`text-xs font-bold truncate ${selectedProduct?.slug === product.slug ? 'text-jdc-orange' : 'text-slate-800'}`}>
                                                        {product.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 shrink-0">
                                                        {product.isCustom && (
                                                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[8px] font-black uppercase tracking-wider">
                                                                Custom
                                                            </span>
                                                        )}
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDeleteProduct(product);
                                                            }}
                                                            className="p-1 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                                            title={`Delete ${product.name}`}
                                                        >
                                                            <Trash2 size={13} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider truncate mt-0.5">{product.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Editor Area */}
                        <div className="flex-1 p-6 md:p-10 bg-slate-50 h-[calc(100vh-145px)] overflow-y-auto">
                            {selectedProduct ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto pb-24">
                                    
                                    {/* Header Banner */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-6">
                                            <div className="w-24 h-24 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2 shrink-0 shadow-inner overflow-hidden">
                                                <ProductImageAdmin
                                                    src={imagePath || selectedProduct.image}
                                                    alt={name || selectedProduct.name}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                        {category || selectedProduct.category}
                                                    </span>
                                                    {selectedProduct.isCustom && (
                                                        <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-wider">
                                                            Cloud Product
                                                        </span>
                                                    )}
                                                </div>
                                                <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">{name || selectedProduct.name}</h1>
                                                <span className="text-slate-400 font-mono text-[11px] block mt-1">Slug: {selectedProduct.slug}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteProduct()}
                                                className="flex items-center gap-2 px-5 py-4 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-red-200/60 shadow-sm active:scale-95"
                                                title={`Delete ${selectedProduct.name} from Website`}
                                            >
                                                <Trash2 size={16} />
                                                <span>Delete Product</span>
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                disabled={saveStatus === 'saving' || isLoading}
                                                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${saveStatus === 'success' ? 'bg-green-500 text-white shadow-green-200' : saveStatus === 'error' ? 'bg-red-500 text-white shadow-red-200' : 'bg-jdc-orange text-white shadow-jdc-orange/20'} active:scale-95`}>
                                                {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'success' ? <><CheckCircle size={16} /> Saved</> : <><Save size={16} /> Update Cloud</>}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8">
                                        {/* Product Details Section */}
                                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                                            <div className="bg-slate-50/80 px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                                                <h3 className="font-bold text-slate-700 flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-jdc-orange animate-pulse"></div> Core Product Details
                                                </h3>
                                                {!selectedProduct.isCustom && (
                                                    <button onClick={loadLocalDescription} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-jdc-blue flex items-center gap-2 transition-colors">
                                                        <RefreshCw size={12} /> Reset to Local Baseline
                                                    </button>
                                                )}
                                            </div>
                                            <div className="p-8 space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Product Name</label>
                                                        <input
                                                            type="text"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-800 font-bold text-sm"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Category</label>
                                                        <select
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-800 font-bold text-sm"
                                                        >
                                                            {CATEGORIES_LIST.map((c) => (
                                                                <option key={c} value={c}>{c}</option>
                                                            ))}
                                                            {!CATEGORIES_LIST.includes(category) && category && (
                                                                <option value={category}>{category}</option>
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Subtitle / Tagline</label>
                                                        <input
                                                            type="text"
                                                            value={subTitle}
                                                            onChange={(e) => setSubTitle(e.target.value)}
                                                            placeholder="e.g. Premium High Gloss Finish"
                                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 font-medium text-sm"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Packing Sizes</label>
                                                        <input
                                                            type="text"
                                                            value={packing}
                                                            onChange={(e) => setPacking(e.target.value)}
                                                            placeholder="e.g. 1 LTR, 4 LTR, 10 LTR, 20 LTR"
                                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 font-medium text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Image Filename / Path</label>
                                                        <span className="text-[10px] text-slate-400">Put file in <code className="text-jdc-orange">public/product/</code></span>
                                                    </div>
                                                    <div className="flex gap-4 items-center">
                                                        <input
                                                            type="text"
                                                            value={imagePath}
                                                            onChange={(e) => setImagePath(e.target.value)}
                                                            placeholder="/product/my_product_image.png"
                                                            className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 font-mono text-xs"
                                                        />
                                                        <div className="w-12 h-12 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                                                            <ProductImageAdmin
                                                                src={imagePath}
                                                                alt="Preview"
                                                                className="w-full h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Key Features (1 per line)</label>
                                                    <textarea
                                                        value={featuresText}
                                                        onChange={(e) => setFeaturesText(e.target.value)}
                                                        rows={3}
                                                        placeholder="High Adhesion&#10;Eco Friendly Low VOC&#10;Anti-Fungal Protection"
                                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 font-medium text-sm leading-relaxed"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Overview Description</label>
                                                    <textarea
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        className="w-full h-32 p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 leading-relaxed font-medium text-sm"
                                                        placeholder="Overview description of the product..."
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Deep Technical Details / Application Guidelines</label>
                                                    <textarea
                                                        value={extraDetails}
                                                        onChange={(e) => setExtraDetails(e.target.value)}
                                                        className="w-full h-48 p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 leading-relaxed font-medium text-sm"
                                                        placeholder="Detailed specifications, application steps, surface preparation, mixing ratios..."
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* SEO Meta Box */}
                                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                                                <h3 className="font-bold text-indigo-900 flex items-center gap-3">
                                                    <Sparkles size={18} className="text-indigo-500" /> Intelligent SEO Meta
                                                </h3>
                                                <button
                                                    onClick={generateMagicSEO}
                                                    className="bg-indigo-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
                                                >
                                                    <Wand2 size={12} /> Auto-Optimize SEO
                                                </button>
                                            </div>
                                            <div className="p-8 space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Meta Title Tag</label>
                                                    <input
                                                        type="text"
                                                        value={seoTitle}
                                                        onChange={(e) => setSeoTitle(e.target.value)}
                                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none text-slate-700 font-bold text-sm"
                                                        maxLength={70}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Meta Description Snippet</label>
                                                    <textarea
                                                        value={seoDescription}
                                                        onChange={(e) => setSeoDescription(e.target.value)}
                                                        className="w-full h-24 px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none text-slate-700 font-medium resize-none text-sm"
                                                        maxLength={160}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Meta Keywords</label>
                                                    <input
                                                        type="text"
                                                        value={seoKeywords}
                                                        onChange={(e) => setSeoKeywords(e.target.value)}
                                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-indigo-400 outline-none text-slate-700 font-medium text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-200">
                                    <Database size={80} strokeWidth={1} />
                                    <p className="mt-4 font-bold text-slate-400">Select a product to view and edit</p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* ── MODAL: ADD NEW PRODUCT ── */}
                <AnimatePresence>
                    {isAddModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                {/* Modal Header */}
                                <div className="bg-jdc-blue p-8 text-white flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-jdc-orange text-[10px] font-black uppercase tracking-widest mb-1">
                                            <Plus size={14} /> Product Management
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">Add New Product</h2>
                                    </div>
                                    <button
                                        onClick={() => setIsAddModalOpen(false)}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Modal Body Form */}
                                <form onSubmit={handleCreateProduct} className="p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                                    {newProductError && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-xs font-bold">
                                            <AlertCircle size={18} className="shrink-0" />
                                            {newProductError}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                                Product Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. PYD Epoxy Shield"
                                                value={newProductName}
                                                onChange={(e) => handleNewProductNameChange(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-900 font-bold text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                                URL Identifier (Slug) <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. pyd-epoxy-shield"
                                                value={newProductSlug}
                                                onChange={(e) => setNewProductSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 font-mono text-xs"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                                Category <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={newProductCategory}
                                                onChange={(e) => setNewProductCategory(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-800 font-bold text-sm"
                                            >
                                                {CATEGORIES_LIST.map((c) => (
                                                    <option key={c} value={c}>{c}</option>
                                                ))}
                                                <option value="Custom">+ Custom Category...</option>
                                            </select>
                                            {newProductCategory === 'Custom' && (
                                                <input
                                                    type="text"
                                                    placeholder="Type custom category name..."
                                                    value={customCategoryInput}
                                                    onChange={(e) => setCustomCategoryInput(e.target.value)}
                                                    className="w-full px-5 py-3 mt-2 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-800 text-xs font-bold"
                                                />
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                                Subtitle / Status
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Premium Protection or Upcoming Product"
                                                value={newProductSubTitle}
                                                onChange={(e) => setNewProductSubTitle(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Image Filename & Realtime Preview */}
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-700">
                                                    Image File Name / Path
                                                </label>
                                                <p className="text-[11px] text-slate-500 mt-0.5">
                                                    Place the image in the website's <strong className="text-jdc-blue">public/product/</strong> folder.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 items-center">
                                            <input
                                                type="text"
                                                placeholder="/product/your_product_image.png"
                                                value={newProductImage}
                                                onChange={(e) => setNewProductImage(e.target.value)}
                                                className="flex-1 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl focus:border-jdc-orange outline-none text-slate-700 font-mono text-xs"
                                            />
                                            <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-1.5 shadow-sm overflow-hidden shrink-0">
                                                <ProductImageAdmin
                                                    src={newProductImage}
                                                    alt="New Product"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-slate-400 italic">
                                            💡 Note: If the file is not yet in the folder, the product will safely show <strong>"No Image Found"</strong> until added.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                            Packing Sizes
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 1 LTR, 4 LTR, 10 LTR, 20 LTR"
                                            value={newProductPacking}
                                            onChange={(e) => setNewProductPacking(e.target.value)}
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 text-sm font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                            Key Features (1 per line)
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="High durability and strength&#10;Eco-Friendly Low VOC&#10;Water resistant"
                                            value={newProductFeatures}
                                            onChange={(e) => setNewProductFeatures(e.target.value)}
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 text-sm leading-relaxed font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                            Product Overview Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Comprehensive overview of product benefits, performance, and usage..."
                                            value={newProductDescription}
                                            onChange={(e) => setNewProductDescription(e.target.value)}
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 text-sm leading-relaxed font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                            Technical Specifications / Application Details
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Surface preparation, application method, thinning ratio, drying time, safety precautions..."
                                            value={newProductExtraDetails}
                                            onChange={(e) => setNewProductExtraDetails(e.target.value)}
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-jdc-orange outline-none text-slate-700 text-sm leading-relaxed font-medium"
                                        />
                                    </div>

                                    {/* SEO Section in Add Modal */}
                                    <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-indigo-900 flex items-center gap-2">
                                                <Sparkles size={14} className="text-indigo-500" /> SEO Optimization
                                            </h4>
                                            <button
                                                type="button"
                                                onClick={generateNewProductMagicSEO}
                                                className="text-[10px] font-bold text-indigo-600 bg-white px-3 py-1 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-colors"
                                            >
                                                Auto-Generate SEO
                                            </button>
                                        </div>

                                        <div className="space-y-3">
                                            <input
                                                type="text"
                                                placeholder="Meta Title Tag"
                                                value={newProductSeoTitle}
                                                onChange={(e) => setNewProductSeoTitle(e.target.value)}
                                                className="w-full px-4 py-3 bg-white border border-indigo-100 rounded-xl text-xs font-bold text-slate-800 outline-none focus:border-indigo-400"
                                            />
                                            <textarea
                                                rows={2}
                                                placeholder="Meta Description Snippet"
                                                value={newProductSeoDescription}
                                                onChange={(e) => setNewProductSeoDescription(e.target.value)}
                                                className="w-full p-3 bg-white border border-indigo-100 rounded-xl text-xs font-medium text-slate-700 outline-none focus:border-indigo-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Modal Actions */}
                                    <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-100">
                                        <button
                                            type="button"
                                            onClick={() => setIsAddModalOpen(false)}
                                            className="px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-slate-500 hover:bg-slate-100 transition-all"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmittingNewProduct}
                                            className="px-8 py-4 bg-jdc-orange text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shadow-jdc-orange/20 flex items-center gap-2 active:scale-95"
                                        >
                                            {isSubmittingNewProduct ? (
                                                <>Saving to Cloud...</>
                                            ) : (
                                                <>Create & Publish Product <ArrowRight size={16} /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

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
                                                        rel="noreferrer"
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
        </div>
    );
};

export default Admin;
