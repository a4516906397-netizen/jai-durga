import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import { COMPANY_NAME, PARENT_COMPANY } from '../constants';
import { ShieldCheck, Settings, Users, ArrowRight, Activity, Beaker, Globe, ChevronRight, Star, Factory, Layers, CheckCircle, Quote, ArrowUpRight, Ruler, ClipboardCheck, FileText, BadgeCheck, ChevronDown, Sparkles, Building2, Train, Building, Cog, BridesIcon as Bridge, Hotel, Landmark, FlaskConical, PackageCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';




const Home: React.FC = () => {
   return (
      <div className="bg-jdc-cream overflow-hidden pb-24 md:pb-0">
         <HeroSlider />

         {/* STATS STRIP - Refined Typography & Mobile Grid */}
         <div className="bg-jdc-blue border-t border-white/10 relative z-10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-4 md:gap-x-12 text-center md:text-left">
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">45+</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Years of Mastery</span>
                  </div>
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">2500+</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Global Clients</span>
                  </div>
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">100%</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Quality Assured</span>
                  </div>
               </div>
            </div>
         </div>

         {/* COMPANY OVERVIEW - "Director's Desk" / Human Designed Feel */}
         <section className="py-12 md:py-32 px-6 max-w-7xl mx-auto relative">
            {/* Background typographic watermark */}
            <div className="absolute top-10 md:top-20 left-2 md:left-10 text-[80px] md:text-[200px] font-serif font-bold text-jdc-blue opacity-[0.03] select-none pointer-events-none" style={{ zIndex: 0 }}>
               Legacy
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start relative z-10">

               {/* Left: The Narrative (Manifesto Style) */}
               <div className="lg:col-span-6 reveal-on-scroll pt-0 md:pt-8">
                  <div className="inline-flex items-center gap-3 mb-4 md:mb-8">
                     <span className="w-6 md:w-12 h-[1px] bg-jdc-orange"></span>
                     <span className="text-jdc-orange text-[9px] md:text-xs font-bold tracking-widest uppercase">Our Standard</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-jdc-blue mb-6 md:mb-10 leading-tight">
                     A Professionally Managed <span className="block"></span>
                     <span className="italic text-slate-400">Manufacturing Powerhouse.</span>
                  </h2>

                  <div className="space-y-4 md:space-y-6">
                     <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        <strong className="text-jdc-blue font-serif text-base md:text-xl">We are not just a factory.</strong> We are a system of excellence. {COMPANY_NAME} operates with a singular focus: process-driven manufacturing. We serve dealers, industrial clients, infrastructure developers, and institutional buyers across India.
                     </p>
                  </div>

                  {/* The "Handwritten" Note */}
                  <div className="mt-8 md:mt-12 relative inline-block pl-2">
                     <div className="absolute -inset-2 bg-yellow-50 transform -rotate-2 rounded-sm -z-10 shadow-sm border border-yellow-100/50"></div>
                     <p className="font-hand text-lg md:text-2xl text-slate-800 rotate-[-1deg]">
                        "Quality is not an act, it is a habit."
                     </p>
                     <div className="mt-3 md:mt-4 flex items-center gap-3">
                        <div className="h-px w-6 md:w-12 bg-slate-300"></div>
                        <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Approved by Board</span>
                     </div>
                  </div>

                  <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-slate-200/60 flex flex-wrap gap-2 md:gap-3">
                     {['Retail Market Requirements', 'Industrial Formulation', 'Infrastructure Projects', 'B2B Supply Chain', 'Institutional Sales'].map((tag, i) => (
                        <span key={i} className="px-2 md:px-3 py-1.5 md:py-2 bg-white text-jdc-blue text-[8px] md:text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-200 shadow-sm hover:border-jdc-orange transition-colors cursor-default">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Right: The Visual Moodboard (Collage) */}
               <div className="lg:col-span-6 relative reveal-on-scroll mt-8 lg:mt-0" style={{ transitionDelay: '200ms' }}>

                  {/* Main Image (The Facility) */}
                  <div className="relative z-10 lg:ml-10 lg:mt-10 group">
                     <div className="absolute inset-0 bg-slate-200 -translate-x-3 -translate-y-3 lg:-translate-x-6 lg:-translate-y-6 rounded-sm transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                     <img src="/images/production.png" alt="Industrial Facility" className="relative w-full h-[350px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl" />


                     {/* "Certified" Stamp Badge */}
                     <div className="absolute -top-6 -right-2 lg:-top-8 lg:-right-8 w-20 h-20 md:w-32 md:h-32 bg-jdc-orange rounded-full flex items-center justify-center text-white shadow-lg animate-[spin_10s_linear_infinite] hover:animate-none cursor-pointer">
                        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                           <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                           <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                              <textPath href="#curve">
                                 • Professionally Managed • Excellence Driven
                              </textPath>
                           </text>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <BadgeCheck size={24} className="md:w-8 md:h-8" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* INDUSTRY APPLICATIONS MARQUEE - Enhanced with Icons */}
         <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-jdc-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-jdc-blue/5 rounded-full blur-3xl"></div>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-slate-50/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-slate-50/80 to-transparent z-10"></div>

            {/* Header */}
            <div className="text-center mb-12 md:mb-16 relative z-10">
               <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-4 shadow-sm">
                  <Globe size={14} className="text-jdc-orange" />
                  <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Proven Across Industries</span>
               </div>
               <h3 className="text-2xl md:text-4xl font-serif font-bold text-jdc-blue">Trusted by Leading Sectors</h3>
            </div>

            {/* Marquee Container */}
            <div className="overflow-hidden relative w-full">
               <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...Array(2)].map((_, i) => (
                     <div key={i} className="flex gap-6 md:gap-12 mx-4 md:mx-8 items-center">
                        {[
                           { icon: Building2, text: 'Infrastructure', color: 'from-blue-500 to-blue-600' },
                           { icon: Factory, text: 'Manufacturing', color: 'from-orange-500 to-orange-600' },
                           { icon: Train, text: 'Metro Rail', color: 'from-purple-500 to-purple-600' },
                           { icon: Building, text: 'Commercial', color: 'from-green-500 to-green-600' },
                           { icon: Cog, text: 'Industrial Clients', color: 'from-slate-500 to-slate-600' },
                           { icon: Activity, text: 'Construction', color: 'from-cyan-500 to-cyan-600' },
                           { icon: Hotel, text: 'Hospitality', color: 'from-pink-500 to-pink-600' },
                           { icon: Landmark, text: 'Government', color: 'from-indigo-500 to-indigo-600' }
                        ].map((item, idx) => {
                           const IconComponent = item.icon;
                           return (
                              <div
                                 key={idx}
                                 className="flex flex-col items-center gap-3 md:gap-4 group cursor-default min-w-[120px] md:min-w-[160px] p-4 md:p-6 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                              >
                                 {/* Icon Badge with Gradient */}
                                 <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                                    <IconComponent className="text-white" size={28} strokeWidth={1.5} />
                                 </div>

                                 {/* Label */}
                                 <span className="text-xs md:text-sm font-bold text-slate-700 group-hover:text-jdc-blue transition-colors text-center whitespace-nowrap">
                                    {item.text}
                                 </span>

                                 {/* Decorative Dot */}
                                 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-jdc-orange transition-colors"></div>
                              </div>
                           );
                        })}
                     </div>
                  ))}
               </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="max-w-4xl mx-auto mt-12 md:mt-16">
               <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>
         </section>

         {/* MANUFACTURING PHILOSOPHY */}
         <section className="bg-jdc-dark text-white py-12 sm:py-20 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
               <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16 reveal-on-scroll">
                  <span className="text-jdc-orange text-[9px] xs:text-xs sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 sm:mb-4 block">Our Philosophy</span>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-serif font-medium leading-tight mb-4 sm:mb-6 md:mb-8">
                     Precision. <br className="hidden sm:block" />
                     Discipline. <br className="hidden sm:block" />
                     <span className="text-slate-500 italic font-serif">Accountability.</span>
                  </h2>
                  <p className="text-xs xs:text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                     At {COMPANY_NAME}, manufacturing is guided by precision, discipline, and accountability. Each product is developed through controlled processes that ensure formulation consistency.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 border-t border-white/10 pt-8 sm:pt-12 md:pt-16 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                  <div className="p-4 sm:p-5 md:p-0 bg-white/8 sm:bg-white/6 md:bg-transparent rounded-lg md:rounded-none group hover:-translate-y-2 transition-transform duration-300">
                     <Settings className="text-jdc-orange mb-3 sm:mb-4 md:mb-6 group-hover:rotate-90 transition-transform duration-700" size={28} strokeWidth={1.2} />
                     <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-serif font-bold mb-2 md:mb-4">Controlled Processes</h3>
                     <p className="text-slate-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">We integrate modern production practices with in-house quality monitoring to maintain reliability across every batch.</p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-0 bg-white/8 sm:bg-white/6 md:bg-transparent rounded-lg md:rounded-none group hover:-translate-y-2 transition-transform duration-300">
                     <Layers className="text-jdc-orange mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500" size={28} strokeWidth={1.2} />
                     <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-serif font-bold mb-2 md:mb-4">Scalability</h3>
                     <p className="text-slate-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">Production systems structured to support bulk requirements while maintaining performance uniformity.</p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-0 bg-white/8 sm:bg-white/6 md:bg-transparent rounded-lg md:rounded-none sm:col-span-2 md:col-span-1 group hover:-translate-y-2 transition-transform duration-300">
                     <CheckCircle className="text-jdc-orange mb-3 sm:mb-4 md:mb-6 group-hover:text-green-500 transition-colors duration-500" size={28} strokeWidth={1.2} />
                     <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-serif font-bold mb-2 md:mb-4">Compliance</h3>
                     <p className="text-slate-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">Strict in-house checks ensure that every product meets defined technical and functional benchmarks before dispatch.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* CORE STRENGTHS - "The Human Touch" (Bento Grid) */}
         <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-20 -left-20 w-96 h-96 bg-jdc-orange/5 rounded-full blur-3xl"></div>
               <div className="absolute bottom-20 -right-20 w-96 h-96 bg-jdc-blue/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
                  <div className="reveal-on-scroll">
                     <h2 className="text-4xl md:text-6xl font-serif text-jdc-blue mb-6 leading-tight">
                        Not just a factory. <br />
                        <span className="italic text-jdc-orange">A team of craftsmen.</span>
                     </h2>
                     <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        Machines blend the paint, but humans define the quality. At {COMPANY_NAME}, we combine industrial automation with the watchful eye of experienced chemists.
                     </p>
                  </div>
                  <div className="relative reveal-on-scroll delay-100 hidden lg:block">
                     {/* Abstract Line Art or Signature visual */}
                     <div className="absolute inset-0 bg-slate-100 transform -rotate-2 rounded-lg scale-95 origin-bottom-right"></div>
                     <img src="/images/factory.png" alt="Hand holding test tube" className="relative rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 grayscale hover:grayscale-0" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Card 1: Large Feature (Dark) */}
                  <div className="md:col-span-2 bg-jdc-blue text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden group reveal-on-scroll border border-white/5 hover:border-jdc-orange/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
                     <div className="relative z-10">
                        <div className="w-12 h-12 md:w-12 md:h-12 bg-jdc-orange rounded-full flex items-center justify-center mb-6 md:mb-6 shadow-glow transition-transform duration-500 group-hover:rotate-12">
                           <Star fill="white" size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">The "Founder's Mentality"</h3>
                        <p className="text-slate-300 text-lg md:text-lg leading-relaxed max-w-lg">
                           We treat every order as if it's for our own home. Our management are personally involved in daily operations, ensuring that no shortcuts are ever taken.
                        </p>
                     </div>
                  </div>

                  {/* Card 2: Vertical Feature (Light) */}
                  <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 hover:border-jdc-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group reveal-on-scroll delay-100">
                     <div className="mb-6 md:mb-6 bg-white w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Activity className="text-jdc-blue" size={28} strokeWidth={1.5} />
                     </div>
                     <h3 className="text-xl md:text-xl font-bold font-serif text-jdc-blue mb-4 md:mb-4">Consistency is King</h3>
                     <p className="text-slate-600 text-base md:text-base leading-relaxed">
                        Automated dosing ensures that Batch #1 and Batch #1000 are identical. Reliability you can trust.
                     </p>
                  </div>

                  {/* Card 3: Vertical Feature (Light) */}
                  <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 hover:border-jdc-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group reveal-on-scroll delay-200">
                     <div className="mb-6 md:mb-6 bg-white w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="text-jdc-blue" size={28} strokeWidth={1.5} />
                     </div>
                     <h3 className="text-xl md:text-xl font-bold font-serif text-jdc-blue mb-4 md:mb-4">Built on Superior Standards</h3>
                     <p className="text-slate-600 text-base md:text-base leading-relaxed">
                        Our commitment to quality begins with the materials we trust.
                     </p>
                  </div>

                  {/* Card 4: Horizontal Feature across bottom (Orange tint) */}
                  <div className="md:col-span-2 bg-gradient-to-r from-orange-50 to-white p-8 md:p-10 rounded-2xl border border-orange-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 reveal-on-scroll delay-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="shrink-0 hidden md:block">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md text-jdc-orange group-hover:animate-pulse">
                           <Users size={36} />
                        </div>
                     </div>
                     <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-2xl font-bold font-serif text-jdc-blue mb-2">A Partnership, Not a Transaction</h3>
                        <p className="text-slate-700 text-lg md:text-lg">
                           We don't just ship paint; we provide technical support, on-site guidance, and long-term warranties. We are in this together.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         {/* PRODUCT PORTFOLIO OVERVIEW - Parallax */}
         <section className="relative py-20 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/production.png')" }}>
            <div className="absolute inset-0 bg-jdc-blue/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white reveal-on-scroll">
               <div className="w-16 md:w-20 h-1 bg-jdc-orange mx-auto mb-6 md:mb-8"></div>
               <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-serif">Comprehensive Product Portfolio</h2>
               <p className="text-lg md:text-xl text-slate-200 mb-10 md:mb-12 font-light leading-relaxed">
                  Our portfolio supports infrastructure development, specialized surface treatments, and reliable supply for retail markets.               </p>
               <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                  {['Industrial Paints', 'Surface Coating Systems', 'Construction Chemicals', 'Protective Enamels'].map((item, i) => (
                     <span key={i} className="px-4 py-2 md:px-6 md:py-3 border border-white/20 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-jdc-blue transition-colors cursor-default backdrop-blur-sm">
                        {item}
                     </span>
                  ))}
               </div>
               <div className="mt-10 md:mt-12">
                  <Link to={PageRoute.PRODUCTS} className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-jdc-orange text-white font-bold rounded-sm hover:bg-white hover:text-jdc-orange transition-all duration-300 shadow-xl hover:shadow-glow uppercase tracking-widest text-xs md:text-sm hover:-translate-y-1">
                     Browse Full Catalog <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
         </section>


         {/* OPERATIONAL EXCELLENCE / THE SMART LIFECYCLE */}
         <section className="bg-slate-50 py-24 md:py-40 border-y border-slate-100 relative overflow-hidden">
            {/* Background Subtle Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(#0B1C3E 1px, transparent 1px), linear-gradient(90deg, #0B1C3E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center mb-20 md:mb-32 reveal-on-scroll">
                  <span className="text-jdc-orange font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Operational Excellence</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-jdc-blue mb-6">The Smart Lifecycle</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">How we maintain the "Jai Durga" standard across every project.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative reveal-on-scroll">
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
                        <h3 className="text-xl font-serif font-bold text-jdc-blue mb-4 leading-none transition-colors group-hover:text-jdc-orange">{item.title}</h3>
                        <p className="text-sm text-slate-500 px-6 font-light leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* PARENT COMPANY TRUST */}
         <section className="py-16 md:py-20 bg-white border-y border-slate-100">
            <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
               <h3 className="text-xs md:text-lg font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-6">A Legacy of Trust</h3>
               <p className="text-xl md:text-3xl font-serif text-jdc-blue leading-snug mb-8">
                  {COMPANY_NAME} is driven by proven expertise, advanced manufacturing, and a commitment to superior quality.
               </p>
            </div>
         </section>


         {/* FINAL CTA */}

         {/* FINAL CTA */}
         <section className="py-20 md:py-24 bg-jdc-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jdc-blue/30 to-transparent"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">Ready to secure your supply chain?</h2>
               <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm inline-block w-full md:w-auto hover:bg-white/10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                     <div className="text-center md:text-left">
                        <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Direct Line</span>
                        <span className="text-xl md:text-2xl font-mono text-white">+91 99716 61234</span>
                     </div>
                     <div className="hidden md:block w-px h-12 bg-white/10"></div>
                     <div className="text-center md:text-left">
                        <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Email Sales</span>
                        <span className="text-xl md:text-2xl font-mono text-white">info@jaidurgachemical.com</span>
                     </div>
                     <div className="hidden md:block w-px h-12 bg-white/10"></div>
                     <Link to={PageRoute.CONTACT} className="px-8 py-4 bg-jdc-orange text-white font-bold rounded-lg hover:bg-white hover:text-jdc-orange transition-all duration-300 w-full md:w-auto block text-center uppercase tracking-widest text-xs hover:-translate-y-1 shadow-lg">
                        Get Custom Quote
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;