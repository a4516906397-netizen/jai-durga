import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_LIST, COMPANY_NAME } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Phone, ChevronRight, ImageIcon, Box, Zap } from 'lucide-react';
import { PageRoute, Product } from '../types';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

const ProductDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [dataSource, setDataSource] = useState<'Code' | 'Cloud'>('Code');
    const [showFullDetails, setShowFullDetails] = useState(false);

    useEffect(() => {
        // 1. Initial load from local code for Name, Image, etc.
        const localProduct = PRODUCT_LIST.find((p) => p.slug === slug);
        if (localProduct) {
            setProduct(localProduct);
            // Default to 'Code' source until we confirm Cloud has data or we override it
            setDataSource('Code');
        } else {
            setProduct(undefined);
        }

        if (!slug) return;

        // 2. Fetch Description and Extra Details from Cloud
        const productRef = ref(database, `products/${slug}`);
        console.log(`[ProductDetails] Subscribing to Cloud Product: products/${slug}`);

        const unsubscribe = onValue(productRef, (snapshot) => {
            const data = snapshot.val();

            if (localProduct) {
                // Merge cloud data into local product
                // Note: Admin panel only saves description, extraDetails and seo.
                // It does NOT save name, image, etc. So we must merge.
                setProduct(prev => prev ? ({
                    ...prev,
                    description: data?.description || prev.description,
                    extraDetails: data?.extraDetails || prev.extraDetails,
                    packing: data?.packing || prev.packing,
                    seo: data?.seo
                }) : undefined);

                if (data?.description || data?.extraDetails || data?.packing || data?.seo) {
                    setDataSource('Cloud');
                }
            }
        }, (error) => {
            console.error(`[ProductDetails] Firebase Error for ${slug}:`, error);
        });

        return () => unsubscribe();
    }, [slug]);

    // 3. Update SEO Meta Tags
    useEffect(() => {
        if (!product) return;

        // Helper to update meta tag
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Determine SEO values with fallbacks
        const seoTitle = product.seo?.title || `${product.name} | ${product.category} | ${COMPANY_NAME}`;

        // Use cloud description if available, otherwise local description
        const baseDesc = product.description || "";
        const seoDesc = product.seo?.description || (baseDesc.length > 160 ? baseDesc.substring(0, 157) + "..." : baseDesc) || `Premium ${product.name} by ${COMPANY_NAME}.`;

        const seoKeys = product.seo?.keywords || `${product.name}, ${product.category}, ${COMPANY_NAME}, construction chemicals, paint, primer, wall putty`;

        // Apply changes
        document.title = seoTitle;
        updateMeta('description', seoDesc);
        updateMeta('keywords', seoKeys);

    }, [product]);

    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Product Not Found</h2>
                <Link to={PageRoute.PRODUCTS} className="text-jdc-orange hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Products
                </Link>
            </div>
        );
    }

    const isStainer = product.category === 'Universal Stainer';
    const showLocalDetails = isStainer; // Only show local tables/colors for Stainer (or others if specified)

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-12">
                    <Link to={PageRoute.HOME} className="hover:text-jdc-orange transition-colors">Home</Link>
                    <ChevronRight size={10} strokeWidth={3} className="text-slate-300" />
                    <Link to={PageRoute.PRODUCTS} className="hover:text-jdc-orange transition-colors">Products</Link>
                    <ChevronRight size={10} strokeWidth={3} className="text-slate-300" />
                    <span className="text-slate-900">{product.name}</span>

                    {/* Live Sync Status */}
                    <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                        <div className={`w-1.5 h-1.5 rounded-full ${dataSource === 'Cloud' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
                        <span className="text-[8px] font-bold text-slate-500 tracking-tighter uppercase">Mode: {dataSource}</span>
                    </div>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left: Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative group lg:sticky lg:top-32"
                    >
                        <div className="aspect-square bg-white rounded-[2rem] overflow-hidden flex items-center justify-center p-8 md:p-16 border border-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.05)] relative group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.08)] transition-all duration-700">
                            {/* Animated Background Decor */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 opacity-100"></div>

                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-1000"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-6 text-slate-200 relative z-10">
                                    <ImageIcon size={140} strokeWidth={0.5} />
                                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Image Preview</span>
                                </div>
                            )}

                            {product.subTitle === 'Upcoming Product' && (
                                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-6">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="px-10 py-5 bg-jdc-orange/95 backdrop-blur-xl text-white text-sm md:text-lg font-black uppercase tracking-[0.5em] rounded-full shadow-[0_25px_80px_rgba(242,118,34,0.6)] border border-white/40 text-center animate-pulse"
                                    >
                                        Coming Soon
                                    </motion.div>
                                </div>
                            )}

                            {/* Floating Category Badge */}
                            <div className="absolute top-10 left-10 z-20">
                                <div className="px-5 py-2 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                                    {product.category}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -bottom-8 -left-8 w-2/3 h-2/3 bg-jdc-orange/5 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -z-10 -top-8 -right-8 w-1/2 h-1/2 bg-jdc-blue/5 rounded-full blur-3xl opacity-60"></div>
                    </motion.div>

                    {/* Right: Detailed Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-12"
                    >
                        {/* Header Section */}
                        <div className="space-y-6">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 leading-[1.1]">
                                    {product.name}
                                </h1>
                                {product.subTitle === 'Upcoming Product' && (
                                    <div className="inline-flex items-center gap-2 bg-jdc-orange text-white px-4 py-2 rounded-full w-fit animate-pulse shadow-xl">
                                        <Zap size={16} fill="white" />
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">Future Release</span>
                                    </div>
                                )}
                            </div>

                            {product.subTitle && (
                                <p className="text-xl font-medium text-slate-500 italic border-l-4 border-jdc-orange/20 pl-6 py-1">
                                    {product.subTitle}
                                </p>
                            )}



                            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 relative group/desc">
                                <div className="prose prose-slate prose-lg max-w-none transition-all duration-500 overflow-hidden">
                                    <p className="text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Extra Details from Admin */}
                            {showFullDetails && !isStainer && product.extraDetails && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="prose prose-slate prose-lg max-w-none pt-8 border-t border-slate-100"
                                >
                                    <div className="whitespace-pre-line text-slate-600">
                                        {product.extraDetails}
                                    </div>
                                </motion.div>
                            )}

                            {/* More Details Button (Only for Non-Stainer) */}
                            {!isStainer && (
                                <button
                                    onClick={() => setShowFullDetails(!showFullDetails)}
                                    className="group flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-jdc-orange transition-all mt-4 w-fit"
                                >
                                    {showFullDetails ? 'Hide Details' : 'More Details'}
                                    <ChevronRight size={14} className={`transition-transform duration-300 ${showFullDetails ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                </button>
                            )}
                        </div>

                        {/* Performance & Specifications - ONLY FOR STAINER or if forced */}
                        {showLocalDetails && (
                            <div className="space-y-8">
                                {product.features && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-2xl font-serif font-black text-slate-900 uppercase tracking-tight">FEATURES THAT SHINE</h3>
                                            <div className="h-px flex-1 bg-slate-100"></div>
                                        </div>

                                        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
                                            <div className="grid grid-cols-1">
                                                {product.features.map((feature, idx) => (
                                                    <div key={idx} className="group flex items-start gap-4 p-6 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                                                        <div className="mt-1.5 md:mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-jdc-orange group-hover:scale-150 transition-transform"></div>
                                                        <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                                                            {feature}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Technical Instructions */}
                                {product.instructions && (
                                    <div className="space-y-6 pt-8">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-2xl font-serif font-black text-slate-900">APPLICATION METHOD</h3>
                                            <div className="h-px flex-1 bg-slate-100"></div>
                                        </div>

                                        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
                                            <div className="grid grid-cols-1">
                                                {product.instructions.map((inst, idx) => (
                                                    <div key={idx} className="group flex items-start gap-4 p-6 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                                                        <div className="mt-1.5 md:mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-jdc-blue group-hover:bg-jdc-orange transition-colors"></div>
                                                        <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                                                            {inst}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Available Shades - Visible for everyone if they exist (usually only stainer has them anyway) */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="pt-12 space-y-8">
                                <div className="flex items-end gap-3 px-2">
                                    <div className="h-10 w-2 bg-jdc-orange rounded-full"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-jdc-orange">Color Palette</span>
                                        <h3 className="text-2xl font-serif font-black text-slate-900">Available Shades</h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-4 gap-y-10 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
                                    {product.colors.map((color, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -8 }}
                                            className="group flex flex-col items-center gap-4"
                                        >
                                            <div className="relative">
                                                <div
                                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.15)] border-4 border-white ring-1 ring-slate-100 group-hover:ring-jdc-orange group-hover:ring-2 transition-all duration-300"
                                                    style={{ backgroundColor: color.hex }}
                                                >
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 to-transparent opacity-30"></div>
                                                </div>
                                            </div>
                                            <div className="text-center w-full">
                                                <p className="text-[9px] md:text-[10px] font-black text-slate-800 uppercase tracking-tighter line-clamp-2 min-h-[2.4em] leading-tight">
                                                    {color.name}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Available Sizes */}
                        {product.packing && (
                            <div className="pt-12 space-y-8 border-t border-slate-100">
                                <div className="flex items-end gap-3 px-2">
                                    <div className="h-10 w-2 bg-jdc-blue rounded-full"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-jdc-blue">Packaging</span>
                                        <h3 className="text-2xl font-serif font-black text-slate-900">Available Sizes</h3>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {product.packing.split(',')
                                        .map(s => s.trim())
                                        .filter(s => {
                                            const lowerSize = s.toLowerCase();
                                            const isTargetSize = lowerSize.includes('500') && (lowerSize.includes('ml') || lowerSize.includes('ml.'));
                                            return !(isStainer && isTargetSize);
                                        })
                                        .map((size, idx) => {
                                            const displaySize = size
                                                .replace(/Liter/gi, 'LTR')
                                                .replace(/ltr/gi, 'LTR')
                                                .replace(/liters/gi, 'LTR');

                                            return (
                                                <div
                                                    key={idx}
                                                    className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4 hover:border-jdc-orange hover:shadow-md transition-all duration-300"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-jdc-blue">
                                                        <Box size={20} />
                                                    </div>
                                                    <span className="text-sm font-black text-slate-800 uppercase tracking-wide">{displaySize}</span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-100">
                            <Link
                                to={PageRoute.CONTACT}
                                className="flex-1 px-8 py-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-jdc-orange transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
                            >
                                <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 w-full bg-gradient-to-r from-jdc-blue via-jdc-orange to-jdc-blue"></div>
        </div>
    );
};

export default ProductDetails;
