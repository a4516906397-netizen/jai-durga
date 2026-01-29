import React from 'react';
import { Settings, Truck, FlaskConical, PackageCheck, Factory, Zap } from 'lucide-react';

const Infrastructure: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 lg:h-[400px] overflow-hidden">
         <img src="/ima/factory.png" alt="Factory" className="w-full h-full object-cover grayscale" />
         <div className="absolute inset-0 bg-jdc-blue/80 mix-blend-multiply"></div>
         <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
              <span className="text-jdc-orange font-bold uppercase tracking-widest text-[8px] md:text-xs mb-3 md:mb-4 block animate-[fadeIn_1s_ease-out]">The Backbone of Quality</span>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-serif animate-[slideUp_0.8s_ease-out_0.2s]">
                Manufacturing <span className="block"></span>Infrastructure
              </h1>
              <p className="text-slate-200 text-xs md:text-base font-light animate-[slideUp_0.8s_ease-out_0.4s]">
                 Where automation meets expertise. 50,000+ sq. ft. of advanced chemical engineering.
              </p>
            </div>
         </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
           <div className="bg-white p-6 md:p-8 shadow-xl border-t-4 border-jdc-orange text-center">
              <Factory size={28} className="text-slate-300 mx-auto mb-3 md:mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-jdc-blue mb-1">50k+</div>
              <div className="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Sq. Ft. Facility</div>
           </div>
           <div className="bg-white p-6 md:p-8 shadow-xl border-t-4 border-jdc-blue text-center">
              <Zap size={28} className="text-slate-300 mx-auto mb-3 md:mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-jdc-blue mb-1">24/7</div>
              <div className="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Automated Lines</div>
           </div>
           <div className="bg-white p-6 md:p-8 shadow-xl border-t-4 border-jdc-orange text-center">
              <PackageCheck size={28} className="text-slate-300 mx-auto mb-3 md:mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-jdc-blue mb-1">100%</div>
              <div className="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">ISO 9001 Compliant</div>
           </div>
        </div>
      </div>

      {/* The Process - Visual Timeline */}
      <div className="max-w-7xl mx-auto px-6 py-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-jdc-blue mb-4">The Manufacturing Lifecycle</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From raw material sourcing to final dispatch, every step is monitored.</p>
         </div>

         <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
               {/* Step 1 */}
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-jdc-orange group-hover:scale-110 transition-all duration-300">
                     <FlaskConical className="text-jdc-blue group-hover:text-jdc-orange transition-colors" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-jdc-blue mb-2">1. R&D & Sourcing</h3>
                  <p className="text-sm text-slate-500 px-4">Raw materials tested for purity before entering the floor.</p>
               </div>

               {/* Step 2 */}
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-jdc-orange group-hover:scale-110 transition-all duration-300">
                     <Settings className="text-jdc-blue group-hover:text-jdc-orange transition-colors" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-jdc-blue mb-2">2. Automated Blending</h3>
                  <p className="text-sm text-slate-500 px-4">High-speed dispersers ensure uniform consistency.</p>
               </div>

               {/* Step 3 */}
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-jdc-orange group-hover:scale-110 transition-all duration-300">
                     <PackageCheck className="text-jdc-blue group-hover:text-jdc-orange transition-colors" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-jdc-blue mb-2">3. Quality Control</h3>
                  <p className="text-sm text-slate-500 px-4">Every batch tested for viscosity, gloss, and durability.</p>
               </div>

               {/* Step 4 */}
               <div className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-jdc-orange group-hover:scale-110 transition-all duration-300">
                     <Truck className="text-jdc-blue group-hover:text-jdc-orange transition-colors" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-jdc-blue mb-2">4. Dispatch</h3>
                  <p className="text-sm text-slate-500 px-4">Secure packaging and logistics for timely delivery.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Virtual Tour / Gallery Grid */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <span className="text-jdc-orange font-bold uppercase tracking-widest text-xs mb-3 block">Inside the Facility</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-jdc-blue mb-6">Built for Scale.</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Our infrastructure is designed to handle bulk orders without compromising on lead times. 
                  With dedicated lines for industrial epoxies and decorative emulsions, we ensure zero cross-contamination.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-jdc-orange rounded-full"></div>
                     <span className="text-slate-700 font-medium">Bead Mills for Micro-Grinding</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-jdc-orange rounded-full"></div>
                     <span className="text-slate-700 font-medium">Automatic Gravimetric Filling Machines</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-jdc-orange rounded-full"></div>
                     <span className="text-slate-700 font-medium">Environmentally Controlled Storage</span>
                  </li>
               </ul>
            </div>
            
            {/* Masonry-style Grid */}
            <div className="grid grid-cols-2 gap-4">
               <img src="/ima/test.png" alt="Lab" className="w-full h-64 object-cover rounded-sm shadow-md translate-y-8" />
               <img src="/ima/colour.png" alt="Storage" className="w-full h-64 object-cover rounded-sm shadow-md" />
               <img src="/ima/production.png" alt="Machinery" className="w-full h-64 object-cover rounded-sm shadow-md translate-y-8" />
               <img src="/ima/stainer.png" alt="Team" className="w-full h-64 object-cover rounded-sm shadow-md" />
            </div>
         </div>
      </div>

    </div>
  );
};

export default Infrastructure;