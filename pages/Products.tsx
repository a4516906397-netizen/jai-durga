import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCT_LIST } from '../constants';
import { Search, ArrowRight, Check, Tag, ShieldCheck, Zap, Droplets, Palette, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>(PRODUCT_LIST);

  useEffect(() => {
    const productsRef = ref(database, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Merge cloud descriptions into local product list
        const mergedProducts = PRODUCT_LIST.map(localProduct => {
          const cloudProduct = data[localProduct.slug];
          return {
            ...localProduct,
            description: cloudProduct?.description || "" // Use cloud description or empty if not found
          };
        });
        setProducts(mergedProducts);
      } else {
        // If no cloud data, use local list but with empty descriptions 
        // (per strict "local code se description nahi show hoga" rule)
        const productsWithNoDesc = PRODUCT_LIST.map(p => ({ ...p, description: "" }));
        setProducts(productsWithNoDesc);
      }
    });

    return () => unsubscribe();
  }, []);

  // Filter Logic (Search only)
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery, products]);

  return (
    <div className="pt-20 min-h-screen bg-white pb-32 font-sans overflow-hidden">

      {/* 1. PREMIUM HERO HEADER */}
      <div className="relative bg-jdc-dark pt-16 md:pt-32 pb-24 md:pb-48 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jdc-orange/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-jdc-blue/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm reveal-on-scroll">
            <ShieldCheck size={14} className="text-jdc-orange" />
            <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Premium Sakarni Range</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-6 md:mb-10 leading-tight md:leading-[1.1] reveal-on-scroll">
            Surface <span className="italic text-slate-400">Mastery.</span> <br />
            Product Portfolio
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed reveal-on-scroll">
            Explore our comprehensive range of high-performance coatings, stainers, and surface treatment solutions engineered for excellence.
          </p>
        </div>
      </div>

      {/* 2. CENTERED FLOATING SEARCH BAR */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 md:-mt-14 relative z-20">
        <div className="bg-white p-2 md:p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center group transition-all focus-within:ring-4 focus-within:ring-jdc-orange/5">
          <div className="pl-4 pr-3 text-slate-400 group-focus-within:text-jdc-orange transition-colors">
            <Search size={24} strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="Search by product name, category or use..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow py-4 md:py-5 border-none outline-none text-base md:text-xl text-jdc-blue placeholder:text-slate-300 font-light"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 text-slate-400 hover:text-jdc-orange transition-colors"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>
        <div className="mt-4 md:mt-6 text-center">
          <span className="text-xs md:text-sm text-slate-400 font-medium">
            Discovering <strong className="text-jdc-blue">{filteredProducts.length}</strong> advanced solutions
          </span>
        </div>
      </div>

      {/* 3. ENHANCED PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-24">

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white flex flex-col h-full relative">

                {/* Image Container with Editorial Look */}
                <div className="relative aspect-square mb-6 md:mb-8 bg-slate-50 rounded-3xl overflow-hidden border border-slate-50 group-hover:border-slate-100 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-700">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 md:p-12 transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-200">
                      <Tag size={80} strokeWidth={0.5} />
                    </div>
                  )}

                  {/* Kicker / Category Floating */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-jdc-blue text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-slate-100">
                      {product.category}
                    </span>
                  </div>

                  {/* Icon Indicator for Tech Spec */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-10 h-10 bg-jdc-blue text-white rounded-full flex items-center justify-center shadow-lg">
                      <Zap size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Link to={`/product/${product.slug}`} className="px-2 flex-grow group/details">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-jdc-blue mb-3 group-hover/details:text-jdc-orange transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Check size={14} className="text-green-500" />
                      <span className="text-xs uppercase tracking-wider font-bold">Tested Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Droplets size={14} className="text-blue-500" />
                      <span className="text-xs uppercase tracking-wider font-bold">Consistent Tint</span>
                    </div>
                  </div>
                </Link>

                {/* Footer Link */}
                <div className="px-2 pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <Link to={`/product/${product.slug}`} className="group/link inline-flex items-center gap-2 text-jdc-blue font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-slate-300 uppercase">
                    Ref: {product.slug.substring(0, 10).toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300 shadow-sm">
              <Search size={32} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-jdc-blue mb-3">No products matched your search</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-8 font-light">Try searching for generic terms like "Stainer", "Wood" or check for typos.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-8 py-3 bg-jdc-blue text-white font-bold rounded-lg hover:bg-jdc-orange transition-all uppercase tracking-widest text-xs shadow-lg"
            >
              View Full Collection
            </button>
          </div>
        )}
      </div>

      {/* 4. BOTTOM ADVISORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
        <div className="bg-jdc-blue rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">Need a customized surface solution?</h2>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10">
                Our R&D team partners with industrial projects and large-scale developers to formulate coatings tailored to specific functional requirements.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-jdc-orange text-white font-bold rounded-xl hover:bg-white hover:text-jdc-blue transition-all duration-300 uppercase tracking-widest text-xs md:text-sm shadow-2xl">
                Request Technical Consultation <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: ShieldCheck, title: "Warranty", desc: "Performance Guarantees" },
                { icon: Palette, title: "Color Match", desc: "Exact Shade Control" },
                { icon: Zap, title: "Rapid Dry", desc: "Optimized Workflow" },
                { icon: Info, title: "MSDS", desc: "Full Safety Data" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group/card hover:bg-white/10 transition-colors">
                  <item.icon className="text-jdc-orange mb-4 group-hover/card:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                  <h4 className="text-white font-bold mb-1 text-sm md:text-base uppercase tracking-wider">{item.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Products;