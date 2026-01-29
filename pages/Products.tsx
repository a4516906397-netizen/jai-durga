import React, { useState, useMemo } from 'react';
import { PRODUCT_LIST } from '../constants';
import { Search, Filter, ArrowRight, Check, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(PRODUCT_LIST.map(p => p.category)))];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* Header */}
      <div className="bg-jdc-blue text-white py-12 md:py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="max-w-7xl mx-auto relative z-10">
           <span className="text-jdc-orange font-bold uppercase tracking-widest text-[8px] md:text-xs mb-2 block">Catalog 2024</span>
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4">Product Portfolio</h1>
           <p className="text-slate-300 max-w-2xl text-sm md:text-base font-light">
             Engineered surface solutions for industrial, commercial, and decorative applications.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-12 flex flex-col lg:flex-row gap-8 md:gap-12">
        
        {/* Sidebar Filters (Desktop) / Top Bar (Mobile) */}
        <div className="lg:w-1/4 shrink-0">
          <div className="space-y-6 md:space-y-8">
            
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-white border border-slate-200 rounded-sm focus:border-jdc-orange outline-none shadow-sm transition-all text-sm md:text-base"
              />
              <Search className="absolute left-3 top-2.5 md:top-3.5 text-slate-400" size={16} />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-[8px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                <Filter size={14} /> Filter by Category
              </h3>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold text-left rounded-sm transition-all duration-300 border
                      ${activeCategory === cat 
                        ? 'bg-jdc-orange border-jdc-orange text-white shadow-md' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-jdc-orange/50 hover:text-jdc-blue'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Catalog Download CTA */}
            <div className="hidden lg:block bg-jdc-blue p-6 rounded-sm text-white relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h4 className="font-serif font-bold text-base md:text-lg mb-2">Download Brochure</h4>
                <p className="text-xs text-slate-300 mb-4">Get the full technical specifications PDF.</p>
                <span className="text-jdc-orange text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Download <ArrowRight size={14} />
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="mb-4 md:mb-6 flex justify-between items-center">
             <span className="text-xs md:text-sm text-slate-500 font-medium">Showing <strong className="text-jdc-blue">{filteredProducts.length}</strong> results</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-slate-200 rounded-sm p-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  {/* Card Header (Category Tag) */}
                  <div className="px-6 pt-6 flex justify-between items-start">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-sm group-hover:bg-jdc-orange group-hover:text-white transition-colors">
                      {product.category}
                    </span>
                    {/* Visual Indicator for "Stock Available" or similar */}
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold font-serif text-jdc-blue mb-3 group-hover:text-jdc-orange transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    {/* Technical Mock-Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                       <span className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                          <Tag size={10} /> ISO Certified
                       </span>
                       <span className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                          <Check size={10} /> High Durability
                       </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto flex justify-between items-center">
                     <span className="text-xs font-bold text-slate-400">ID: #{product.id.padStart(4, '0')}</span>
                     <Link to="#" className="text-jdc-blue text-xs font-bold uppercase tracking-widest hover:text-jdc-orange transition-colors flex items-center gap-2">
                        Tech Data Sheet <ArrowRight size={14} />
                     </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-dashed border-slate-300 rounded-sm">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                 <Search size={24} />
               </div>
               <h3 className="text-lg font-bold text-slate-700 mb-2">No products found</h3>
               <p className="text-slate-500 text-sm">Try adjusting your search or category filter.</p>
               <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-4 text-jdc-orange font-bold text-sm hover:underline">
                 Clear all filters
               </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Products;