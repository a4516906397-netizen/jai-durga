import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCT_LIST } from '../constants';
import {
  Search, ArrowRight, Check, Tag, ShieldCheck, Zap, Droplets,
  Palette, Info, ImageOff, Sparkles, LayoutGrid, Layers,
  Home, Sun, Flame, Umbrella, CheckCircle2, ChevronRight, X
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

// Category metadata with icons and descriptions
const CATEGORY_META: Record<string, { icon: React.FC<any>; desc: string }> = {
  'Exterior Emulsion': {
    icon: Sun,
    desc: 'High-weatherability exterior coatings engineered with UV and water barrier protection.'
  },
  'Primers': {
    icon: ShieldCheck,
    desc: 'Deep-penetrating acrylic and rust-inhibitive primers for maximum surface adhesion.'
  },
  'Interior Emulsion': {
    icon: Home,
    desc: 'Smooth matt and luxury washable emulsions providing rich, long-lasting aesthetic finishes.'
  },
  'Interior and Exterior': {
    icon: Sparkles,
    desc: 'Versatile dual-purpose coatings engineered for both interior aesthetic luxury and exterior durability.'
  },
  'Interior & Exterior': {
    icon: Sparkles,
    desc: 'Versatile dual-purpose coatings engineered for both interior aesthetic luxury and exterior durability.'
  },
  'Enamel': {
    icon: Flame,
    desc: 'High-gloss and semi-gloss protective coatings designed for wood, metal, and masonry.'
  },
  'Universal Stainer': {
    icon: Droplets,
    desc: 'High-concentration pigment concentrates engineered for accurate shade reproduction.'
  },
  'Distemper': {
    icon: Palette,
    desc: 'Economical acrylic distempers offering smooth coverage and vibrant pre-mixed colors.'
  },
  'Waterproofing': {
    icon: Umbrella,
    desc: 'Advanced polymer additives and elastomeric coatings for moisture and crack sealing.'
  },
  'Adhesive': {
    icon: Layers,
    desc: 'Heavy-duty polymer modified adhesives for ceramic, vitrified tiles, and natural stone.'
  },
  'Metallic Paint': {
    icon: Sparkles,
    desc: 'Luxury metallic and designer luster finishes delivering distinctive shimmer effects.'
  }
};

// Reusable Product Card Image Component with No-Image-Found Fallback
export const ProductCardImage: React.FC<{
  src?: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-6 text-center select-none">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-3 text-slate-300">
          <ImageOff size={28} strokeWidth={1.5} />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          No Image Found
        </span>
        <span className="text-[9px] text-slate-400 mt-1 font-mono">
          File sync pending
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grouped');
  const [products, setProducts] = useState<Product[]>(PRODUCT_LIST);

  // Sync category state with URL search param
  useEffect(() => {
    const catFromUrl = searchParams.get('category');
    if (catFromUrl) {
      // Find matching category case-insensitively
      setSelectedCategory(catFromUrl);
    } else {
      setSelectedCategory('ALL');
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'ALL') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: categoryName }, { replace: true });
    }
  };

  // 1. Live Sync from Firebase Realtime Database
  useEffect(() => {
    const productsRef = ref(database, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const localSlugs = new Set(PRODUCT_LIST.map(p => p.slug));

        // Merge cloud updates into baseline local list
        const merged: Product[] = PRODUCT_LIST
          .filter(localProduct => !data[localProduct.slug]?.isDeleted)
          .map(localProduct => {
          const cloudProduct = data[localProduct.slug];
          const cleanName = (cloudProduct?.name || localProduct.name).replace(/\s*\(Coming Soon\)\s*/gi, '').trim();
          const cleanSubTitle = cloudProduct?.subTitle !== undefined ? cloudProduct.subTitle : localProduct.subTitle;
          const finalSubTitle = (cleanSubTitle === 'Upcoming Product' && localProduct.subTitle !== 'Upcoming Product') ? localProduct.subTitle : cleanSubTitle;
          const finalDescription = (cloudProduct?.description && !cloudProduct.description.startsWith('COMING SOON')) ? cloudProduct.description : localProduct.description;

          return {
            ...localProduct,
            name: cleanName,
            category: cloudProduct?.category || localProduct.category,
            subTitle: finalSubTitle,
            image: cloudProduct?.image || localProduct.image,
            packing: cloudProduct?.packing || localProduct.packing,
            description: finalDescription,
            extraDetails: cloudProduct?.extraDetails !== undefined ? cloudProduct.extraDetails : localProduct.extraDetails,
            features: (cloudProduct?.features && cloudProduct.features.length > 0) ? cloudProduct.features : localProduct.features,
            seo: cloudProduct?.seo || localProduct.seo,
          };
        });

        // Add dynamically created custom products from cloud
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

        setProducts(merged);
      } else {
        setProducts(PRODUCT_LIST);
      }
    });

    return () => unsubscribe();
  }, []);

  // 2. Extract Categories and Counts
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    products.forEach((p) => {
      const cat = p.category || 'General';
      stats[cat] = (stats[cat] || 0) + 1;
    });
    return stats;
  }, [products]);

  const categoriesList = useMemo(() => {
    const existing = Object.keys(categoryStats);
    // Sort with known order first
    const preferredOrder = [
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

    const sorted = preferredOrder.filter(c => existing.includes(c));
    existing.forEach(c => {
      if (!sorted.includes(c)) sorted.push(c);
    });
    return sorted;
  }, [categoryStats]);

  // 3. Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const pCat = (product.category || '').toLowerCase();
      const sCat = selectedCategory.toLowerCase();
      const matchesCategory =
        selectedCategory === 'ALL' ||
        pCat === sCat ||
        pCat.replace(/\s+/g, ' ').replace('&', 'and') === sCat.replace(/\s+/g, ' ').replace('&', 'and');

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.packing && product.packing.toLowerCase().includes(query)) ||
        (product.features && product.features.some(f => f.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // 4. Products Grouped by Category (for Grouped View)
  const groupedProducts = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    categoriesList.forEach(cat => {
      grouped[cat] = [];
    });

    filteredProducts.forEach(product => {
      const cat = product.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(product);
    });

    return grouped;
  }, [filteredProducts, categoriesList]);

  return (
    <div className="pt-20 min-h-screen bg-slate-50 pb-32 font-sans overflow-hidden">

      {/* ── 1. HERO HEADER ── */}
      <div className="relative bg-jdc-dark pt-16 md:pt-28 pb-20 md:pb-36 px-6 overflow-hidden">
        {/* Decorative Ambient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jdc-orange/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-jdc-blue/20 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm shadow-inner"
          >
            <ShieldCheck size={14} className="text-jdc-orange" />
            <span className="text-white font-black uppercase tracking-[0.25em] text-[10px] md:text-xs">
              Complete JDC Catalog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-medium text-white mb-6 leading-tight tracking-tight"
          >
            Product <span className="italic text-slate-400">Portfolio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed"
          >
            Explore our advanced range of exterior and interior coatings, primers, stainers, adhesives, and waterproofing solutions.
          </motion.p>
        </div>
      </div>

      {/* ── 2. FLOATING SEARCH & CONTROLS ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 md:-mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200/80 flex flex-col md:flex-row items-center gap-4">

          {/* Search Input */}
          <div className="flex-1 w-full flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 group focus-within:border-jdc-orange/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-jdc-orange/5 transition-all">
            <Search size={20} className="text-slate-400 group-focus-within:text-jdc-orange mr-3 shrink-0 transition-colors" />
            <input
              type="text"
              placeholder="Search products, categories, features or pack sizes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-sm md:text-base text-slate-800 placeholder:text-slate-400 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 hover:bg-slate-200 text-slate-400 rounded-full transition-colors"
                title="Clear Search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* View Mode Switcher Toggle */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl shrink-0 self-end md:self-auto">
            <button
              onClick={() => setViewMode('grouped')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${viewMode === 'grouped' ? 'bg-white text-jdc-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              title="Group by Category"
            >
              <Layers size={14} /> Category View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${viewMode === 'grid' ? 'bg-white text-jdc-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              title="Grid View"
            >
              <LayoutGrid size={14} /> Grid
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. HORIZONTAL CATEGORY NAVIGATION BAR ── */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="relative">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 custom-scrollbar no-scrollbar select-none">
            {/* "ALL" Category Tab */}
            <button
              onClick={() => handleCategorySelect('ALL')}
              className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2.5 shrink-0 transition-all border ${selectedCategory === 'ALL'
                  ? 'bg-jdc-blue text-white border-jdc-blue shadow-lg shadow-jdc-blue/20'
                  : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
            >
              <Layers size={15} /> All Products
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${selectedCategory === 'ALL' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                {products.length}
              </span>
            </button>

            {/* Individual Category Tabs */}
            {categoriesList.map((catName) => {
              const count = categoryStats[catName] || 0;
              const meta = CATEGORY_META[catName] || { icon: Tag, desc: '' };
              const IconComp = meta.icon;
              const isSelected = selectedCategory.toLowerCase() === catName.toLowerCase();

              return (
                <button
                  key={catName}
                  onClick={() => handleCategorySelect(catName)}
                  className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2.5 shrink-0 transition-all border ${isSelected
                      ? 'bg-jdc-orange text-white border-jdc-orange shadow-lg shadow-jdc-orange/25'
                      : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <IconComp size={15} className={isSelected ? 'text-white' : 'text-jdc-orange'} />
                  {catName}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Bar & Results Count */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 py-2 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Showing <strong className="text-jdc-blue">{filteredProducts.length}</strong> of {products.length} solutions
            </span>
            {selectedCategory !== 'ALL' && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-jdc-orange/10 text-jdc-orange rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Category: {selectedCategory}</span>
                <button onClick={() => handleCategorySelect('ALL')} className="hover:opacity-75">
                  <X size={12} />
                </button>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-jdc-blue rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Search: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:opacity-75">
                  <X size={12} />
                </button>
              </div>
            )}
          </div>

          {(selectedCategory !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                handleCategorySelect('ALL');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-slate-400 hover:text-jdc-orange uppercase tracking-wider transition-colors"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* ── 4. PRODUCT DISPLAY (GROUPED VIEW OR GRID VIEW) ── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {filteredProducts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-28 bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Search size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-jdc-blue mb-2">No products matched your criteria</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm font-light leading-relaxed">
              We couldn't find any products under "{selectedCategory !== 'ALL' ? selectedCategory : ''}" matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                handleCategorySelect('ALL');
                setSearchQuery('');
              }}
              className="px-8 py-3.5 bg-jdc-blue text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-jdc-orange transition-all shadow-lg"
            >
              View All Products
            </button>
          </div>
        ) : viewMode === 'grouped' && selectedCategory === 'ALL' && !searchQuery ? (
          /* ── GROUPED BY CATEGORY VIEW ── */
          <div className="space-y-20">
            {categoriesList.map((catName) => {
              const catProducts = groupedProducts[catName] || [];
              if (catProducts.length === 0) return null;
              const meta = CATEGORY_META[catName] || { icon: Tag, desc: '' };
              const IconComp = meta.icon;

              return (
                <section key={catName} className="space-y-8 scroll-mt-28" id={catName.toLowerCase().replace(/\s+/g, '-')}>
                  {/* Category Section Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-jdc-orange/10 border border-jdc-orange/20 text-jdc-orange flex items-center justify-center shrink-0 shadow-sm mt-1">
                        <IconComp size={24} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl md:text-3xl font-serif font-bold text-jdc-blue">
                            {catName}
                          </h2>
                          <span className="px-2.5 py-0.5 bg-slate-200/80 text-slate-700 text-xs font-black rounded-full">
                            {catProducts.length}
                          </span>
                        </div>
                        {meta.desc && (
                          <p className="text-slate-500 text-xs md:text-sm font-light mt-1 max-w-2xl">
                            {meta.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCategorySelect(catName)}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-jdc-orange hover:text-jdc-blue transition-colors self-start md:self-auto"
                    >
                      Focus Category <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Category Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catProducts.map((product) => (
                      <ProductCard key={product.id || product.slug} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* ── UNIFIED GRID VIEW ── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id || product.slug} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* ── 5. TECHNICAL ADVISORY FOOTER BANNER ── */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-jdc-blue rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-white">
              <span className="text-jdc-orange text-xs font-black uppercase tracking-[0.3em] mb-2 block">
                Technical Formulations
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Need a customized surface solution?
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8">
                Our specialized R&D laboratory formulates bespoke coatings, custom stainers, and industrial primers tailored for large-scale builders and industrial projects.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-jdc-orange text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-jdc-blue transition-all shadow-xl shadow-jdc-orange/20"
              >
                Request Technical Consultation <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Warranty", desc: "Batch Repeatability" },
                { icon: Palette, title: "Color Match", desc: "Precision Tinting" },
                { icon: Zap, title: "Rapid Dry", desc: "High Efficiency" },
                { icon: Info, title: "MSDS", desc: "Compliant & Low VOC" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <item.icon className="text-jdc-orange mb-3" size={24} strokeWidth={1.8} />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// ── PRODUCT CARD SUB-COMPONENT ──
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 flex flex-col h-full overflow-hidden relative">

      {/* Product Image Container */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-8 border-b border-slate-100">
        <div className="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
          <ProductCardImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Coming Soon Indicator */}
        {product.subTitle === 'Upcoming Product' && (
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center p-4 z-10">
            <span className="px-6 py-2.5 bg-jdc-orange text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl border border-white/30">
              Coming Soon
            </span>
          </div>
        )}

        {/* Floating Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-jdc-blue text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm border border-slate-100">
            {product.category}
          </span>
        </div>

        {/* Packing Indicator if available */}
        {product.packing && (
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-mono uppercase tracking-wider rounded-lg">
              {product.packing}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex flex-col flex-1">
        <Link to={`/product/${product.slug}`} className="block group-hover:text-jdc-orange transition-colors">
          <h3 className="text-xl font-serif font-bold text-jdc-blue mb-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {product.subTitle && product.subTitle !== 'Upcoming Product' && (
          <p className="text-[11px] font-bold text-jdc-orange uppercase tracking-wider mb-3">
            {product.subTitle}
          </p>
        )}

        <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3 mb-6 flex-1">
          {product.description || 'Premium quality formulation engineered for superior protection, durability, and smooth surface application.'}
        </p>

        {/* Color Palette Preview for products with shades */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-6 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Available Shades
              </span>
              <span className="text-[9px] font-bold text-jdc-orange">
                {product.colors.length} Colors
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.colors.slice(0, 8).map((col, idx) => (
                <div
                  key={idx}
                  title={col.name}
                  className="w-4 h-4 rounded-full border border-slate-200 shadow-xs"
                  style={{ backgroundColor: col.hex }}
                />
              ))}
              {product.colors.length > 8 && (
                <span className="text-[9px] font-bold text-slate-400 ml-1">
                  +{product.colors.length - 8}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Card Footer CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-2 text-jdc-blue font-black uppercase tracking-widest text-[11px] group-hover:text-jdc-orange transition-colors"
          >
            {product.subTitle === 'Upcoming Product' ? 'View Details' : 'View Specifications'}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[9px] font-mono text-slate-300 uppercase">
            REF: {product.slug.substring(0, 8).toUpperCase()}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Products;