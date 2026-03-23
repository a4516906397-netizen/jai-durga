import React from 'react';
import { Settings, Truck, FlaskConical, PackageCheck, Factory, Zap, ShieldCheck, Ruler, Activity, Boxes, Cpu } from 'lucide-react';

const Infrastructure: React.FC = () => {
   return (
      <div className="pt-20 min-h-screen bg-white pb-32 font-sans overflow-hidden">

         {/* 1. PREMIUM HERO SECTION */}
         <div className="relative h-[60vh] md:h-[70vh] min-h-[500px] overflow-hidden bg-jdc-dark">
            <img src="/images/factory.png" alt="Factory" className="w-full h-full object-cover scale-105" />

            {/* Cinematic Overlays REMOVED per user request */}
            <div className="absolute inset-0 opacity-[0.05] bg-noise pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center">
               <div className="max-w-4xl px-6 relative z-10">
                  <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm mx-auto">
                     <div className="w-2 h-2 rounded-full bg-jdc-orange animate-pulse"></div>
                     <span className="text-white font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">Manufacturing Command Center</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium text-white mb-6 md:mb-10 leading-tight md:leading-[1.1]">
                     Built for <span className="italic text-slate-400">Scale.</span> <br />
                     Engineered for Precision.
                  </h1>
                  <p className="text-slate-300 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                     Our 50,000+ sq. ft. facility represents the pinnacle of chemical engineering, where automated precision meets human expertise.
                  </p>
               </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
         </div>

         {/* 2. CORE CAPACITY STATS */}
         <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-24 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {[
                  { icon: Factory, value: "50,000+", label: "Sq. Ft. Production Floor", color: "border-jdc-orange" },
                  { icon: Zap, value: "24/7", label: "Automated Mixing Lines", color: "border-jdc-blue" },
                  { icon: ShieldCheck, value: "Zero", label: "Contamination Protocol", color: "border-jdc-orange" }
               ].map((stat, i) => (
                  <div key={i} className={`bg-white p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-3xl border-t-8 ${stat.color} transition-transform hover:-translate-y-2 duration-500`}>
                     <stat.icon size={36} className="text-slate-200 mb-6" strokeWidth={1.5} />
                     <div className="text-4xl md:text-5xl font-serif font-bold text-jdc-blue mb-2">{stat.value}</div>
                     <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        {stat.label}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* 3. TECHNICAL SPECIFICATIONS SECTION - (No Images) */}
         <div className="max-w-7xl mx-auto px-6 py-24 md:py-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
               {/* Left: Content Card */}
               <div className="lg:col-span-5">
                  <span className="text-jdc-orange font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Facility Capabilities</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-jdc-blue mb-8 leading-tight">Inside the <br />Command Center.</h2>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                     Our facility is segmented into high-purity zones to ensure zero cross-contamination between industrial epoxies and decorative stainers.
                  </p>

                  <div className="space-y-6">
                     {[
                        { icon: Cpu, title: "Precision Automation", desc: "PLC controlled dispersers for micron-level consistency." },
                        { icon: Activity, title: "Yield Management", desc: "Real-time monitoring of batch weights and temperatures." },
                        { icon: Boxes, title: "Smart Inventory", desc: "Automated racking system for rapid material retrieval." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                           <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-jdc-blue group-hover:bg-jdc-orange group-hover:text-white transition-colors">
                              <item.icon size={24} strokeWidth={1.5} />
                           </div>
                           <div>
                              <h4 className="text-lg font-serif font-bold text-jdc-blue mb-1">{item.title}</h4>
                              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right: Technical Grid (Data-driven visual) */}
               <div className="lg:col-span-7 bg-jdc-blue rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40"></div>

                  <div className="relative z-10">
                     <h3 className="text-2xl md:text-3xl font-serif font-bold mb-10 flex items-center gap-4">
                        <Ruler className="text-jdc-orange" /> Machine Specifications
                     </h3>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {[
                           { label: "High Speed Dispersers", value: "8 Units", info: "Dual-shaft technology" },
                           { label: "Vertical Sand Mills", value: "12 Units", info: "Zirconia bead grinding" },
                           { label: "Storage Vats", value: "150,000L", info: "Climate controlled tanks" },
                           { label: "Filling Lines", value: "Automated", info: "Gravimetric precision" },
                           { label: "Filtration", value: "Micron-level", info: "Multi-stage process" },
                           { label: "Power Backup", value: "100%", info: "Uninterrupted operation" }
                        ].map((spec, i) => (
                           <div key={i} className="border-b border-white/10 pb-6 group/spec">
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 group-hover/spec:text-jdc-orange transition-colors">{spec.label}</p>
                              <div className="text-xl md:text-2xl font-bold mb-1">{spec.value}</div>
                              <p className="text-xs text-slate-500 font-light italic">{spec.info}</p>
                           </div>
                        ))}
                     </div>

                     <div className="mt-16 pt-10 border-t border-white/10">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
                           <div>
                              <p className="text-2xl md:text-3xl font-serif font-bold text-jdc-orange">100% Reliability.</p>
                              <p className="text-slate-400 font-light">Zero production downtime since 36 months.</p>
                           </div>
                           <Truck className="text-white/20 hidden md:block" size={64} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* 4. THE LIFECYCLE - (Enhanced Flow) */}
         <div className="bg-slate-50 py-24 md:py-48 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
               <div className="text-center mb-20 md:mb-32">
                  <span className="text-jdc-orange font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Operational Excellence</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-jdc-blue mb-6">The Smart Lifecycle</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light">How we maintain the "Jai Durga" standard across every project.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
                  {/* Visual Connector Line */}
                  <div className="hidden md:block absolute top-[60px] left-0 w-full h-px bg-slate-200 z-0"></div>

                  {[
                     { step: "01", icon: FlaskConical, title: "Analysis", desc: "Chemical auditing of raw materials for grade purity." },
                     { step: "02", icon: Settings, title: "Blending", desc: "High-speed automated processing ensures uniform and reliable results." },
                     { step: "03", icon: PackageCheck, title: "QC Check", desc: "Batch testing for gloss, viscosity and durability." },
                     { step: "04", icon: Truck, title: "Logistics", desc: "Optimized supply ensures smooth and reliable delivery." }
                  ].map((item, i) => (
                     <div key={i} className="relative z-10 text-center group">
                        <div className="w-[120px] h-[120px] mx-auto bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl group-hover:border-jdc-orange group-hover:-translate-y-2 transition-all duration-500">
                           <item.icon className="text-jdc-blue group-hover:text-jdc-orange transition-colors" size={40} strokeWidth={1.2} />
                           <div className="absolute -top-4 -right-4 w-10 h-10 bg-jdc-dark text-white rounded-full flex items-center justify-center font-mono text-sm font-bold border-4 border-white">
                              {item.step}
                           </div>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-jdc-blue mb-4 leading-none">{item.title}</h3>
                        <p className="text-sm text-slate-500 px-6 font-light leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

      </div>
   );
};

export default Infrastructure;