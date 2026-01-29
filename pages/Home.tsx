import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import LeadershipCarousel from '../components/LeadershipCarousel';
import { COMPANY_NAME, PARENT_COMPANY, LEADERSHIP, LEADERSHIP_IMAGES } from '../constants';
import { ShieldCheck, Settings, Users, ArrowRight, Activity, Beaker, Globe, ChevronRight, Star, Factory, Layers, CheckCircle, Quote, ArrowUpRight, Ruler, ClipboardCheck, FileText, BadgeCheck, ChevronDown, Sparkles, Building2, Train, Building, Cog, BridesIcon as Bridge, Hotel, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';



const FAQS = [
   { q: "What makes your paints different from competitors?", a: "We focus on consistency and reliability. Every batch undergoes rigorous quality control, and our formulations are designed for industrial-grade performance, not just decorative appeal. Our automated dosing systems ensure that Batch #1 and Batch #1000 are identical." },
   { q: "Do you provide custom formulations for OEM partners?", a: "Absolutely. Our R&D team specializes in developing custom formulations based on your specific requirements—whether it's viscosity, drying time, chemical resistance, or finish specifications. We work directly with your technical team to match exact standards." },
   { q: "What is your minimum order quantity for bulk orders?", a: "For industrial products, our typical MOQ is 500 liters. For decorative paints, we supply pallet-sized loads. However, we're flexible for long-term partnerships and can discuss specific requirements based on your project needs." },
   { q: "How do you ensure quality consistency across batches?", a: "We use computer-controlled automated blending systems, batch-level testing, and maintain strict ISO 9001:2015 protocols. Every batch is certified and documented before dispatch, ensuring 100% repeatability and traceability." }
];

const Home: React.FC = () => {
   const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
   return (
      <div className="bg-jdc-cream overflow-hidden pb-24 md:pb-0">
         <HeroSlider />

         {/* STATS STRIP - Refined Typography & Mobile Grid */}
         <div className="bg-jdc-blue border-t border-white/10 relative z-10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-10 gap-x-4 md:gap-x-6 text-left">
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">25+</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Years of Mastery</span>
                  </div>
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">500+</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">OEM Partners</span>
                  </div>
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">10M+</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Liters Produced</span>
                  </div>
                  <div className="relative pl-4 md:pl-6 border-l-4 border-jdc-orange/20 hover:border-jdc-orange transition-colors duration-500 group">
                     <span className="block text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300 font-serif">ISO</span>
                     <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-jdc-orange transition-colors">Global Certified</span>
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
                     <span className="text-jdc-orange text-[9px] md:text-xs font-bold tracking-widest uppercase">The JDC Standard</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-jdc-blue mb-6 md:mb-10 leading-tight">
                     A Professionally Managed <span className="block"></span>
                     <span className="italic text-slate-400">Manufacturing Powerhouse.</span>
                  </h2>

                  <div className="space-y-4 md:space-y-6">
                     <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        <strong className="text-jdc-blue font-serif text-base md:text-xl">We are not just a factory.</strong> We are a system of excellence. {COMPANY_NAME} operates with a singular focus: process-driven manufacturing. We serve OEMs, infrastructure developers, and institutional buyers across India.
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
                     {['OEM Formulation', 'Infrastructure Projects', 'B2B Supply Chain', 'Institutional Sales'].map((tag, i) => (
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
                     <img src="/ima/production.png" alt="Industrial Facility" className="relative w-full h-[350px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl" />

                     {/* Overlay Image (The Human Touch) */}
                     <div className="absolute -bottom-6 -right-4 lg:-bottom-12 lg:-left-12 w-32 h-32 md:w-64 md:h-64 border-4 lg:border-8 border-jdc-cream shadow-xl rounded-sm overflow-hidden group z-20">
                        <img src="/ima/test.png" alt="Quality Check" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>

                     {/* "Certified" Stamp Badge */}
                     <div className="absolute -top-6 -right-2 lg:-top-8 lg:-right-8 w-20 h-20 md:w-32 md:h-32 bg-jdc-orange rounded-full flex items-center justify-center text-white shadow-lg animate-[spin_10s_linear_infinite] hover:animate-none cursor-pointer">
                        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                           <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                           <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                              <textPath href="#curve">
                                 • Professionally Managed • Est. 1998
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
                           { icon: Cog, text: 'OEM Partners', color: 'from-slate-500 to-slate-600' },
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
                     <img src="/ima/factory.png" alt="Hand holding test tube" className="relative rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 grayscale hover:grayscale-0" />
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
                           We treat every order as if it's for our own home. Our directors are personally involved in daily operations, ensuring that no shortcuts are ever taken.
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
                     <h3 className="text-xl md:text-xl font-bold font-serif text-jdc-blue mb-4 md:mb-4">Zero Compromise</h3>
                     <p className="text-slate-600 text-base md:text-base leading-relaxed">
                        We reject raw materials that don't meet our gold standard. Quality starts at the source.
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

         {/* LEADERSHIP SECTION */}
         <section className="relative overflow-hidden">
            {/* Desktop View */}
            <div className="hidden md:block py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
               {/* Subtle grain */}
               <div className="absolute inset-0 opacity-40 bg-noise mix-blend-multiply pointer-events-none"></div>

               <div className="max-w-7xl mx-auto px-6 relative z-10">

                  {/* Header: Editorial Style */}
                  <div className="text-center mb-16 md:mb-20 reveal-on-scroll">
                     <span className="font-hand text-2xl md:text-3xl text-jdc-orange transform -rotate-3 inline-block mb-4">Leadership</span>
                     <h2 className="text-4xl md:text-7xl font-serif text-jdc-blue mb-6">
                        Guided by Experience.
                     </h2>
                     <div className="w-px h-16 bg-jdc-blue/20 mx-auto"></div>
                  </div>

                  {/* Chairman: The Feature Story */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24 items-center">
                     <div className="lg:col-span-5 reveal-on-scroll relative">
                        {/* Image with decorative elements */}
                        <div className="relative pl-4 pt-4 group">
                           <div className="absolute top-0 left-0 w-full h-full border-l border-t border-jdc-blue/20 z-0 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                           <div className="relative z-10 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
                              <img src={LEADERSHIP_IMAGES.chairman} alt="Chairman" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2s]" />
                           </div>
                           {/* Editorial Name Tag */}
                           <div className="absolute -bottom-6 right-4 md:-right-8 bg-white p-6 shadow-2xl max-w-[240px] md:max-w-xs z-20 border-t-4 border-jdc-orange transition-transform duration-500 hover:-translate-y-2">
                              <h3 className="text-xl md:text-2xl font-serif font-bold text-jdc-blue leading-none mb-1">{LEADERSHIP.chairman}</h3>
                              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Founder & Chairman</span>
                           </div>
                        </div>
                     </div>

                     <div className="lg:col-span-7 reveal-on-scroll">
                        <Quote className="text-jdc-orange/20 mb-6" size={64} />
                        <h3 className="text-2xl md:text-5xl font-serif text-jdc-blue leading-tight mb-8">
                           "We didn't just build a factory. We built a culture where <span className="italic text-slate-400 border-b border-jdc-orange/30">excellence is the only metric.</span>"
                        </h3>
                        <div className="prose prose-lg text-slate-600 mb-10 font-light leading-relaxed">
                           <p>
                              For over 25 years, our mission has been singular: to provide industrial coatings that withstand the test of time.
                              In an industry driven by volume, we chose value. Every batch that leaves our facility carries my personal guarantee of quality.
                           </p>
                        </div>
                        <div className="flex items-center gap-6">
                           <span className="font-hand text-3xl md:text-4xl text-slate-800 rotate-[-2deg]">Ashok Gupta</span>
                           {/* Signature Line */}
                           <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Directors */}
                  <div className="relative pt-16 md:pt-24 mt-16 md:mt-20 border-t border-slate-200">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDFBF7] px-4 md:px-6 py-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-100 rounded-full shadow-sm whitespace-nowrap">
                        The Next Generation
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Director 1 - Vikas Jain */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 group hover:shadow-xl hover:border-jdc-orange/30 hover:-translate-y-2 transition-all duration-500">
                           <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-full border-4 border-slate-50 group-hover:border-jdc-orange transition-colors shadow-inner">
                                 <img src={LEADERSHIP_IMAGES.director_vikas} alt="Vikas Jain" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                              </div>
                              <div>
                                 <h4 className="text-2xl font-serif font-bold text-jdc-blue mb-1">Vikas Jain</h4>
                                 <span className="inline-block px-2 py-1 bg-blue-50 text-jdc-blue text-[10px] font-bold uppercase tracking-wider rounded mb-3">Director • Operations</span>
                                 <p className="text-slate-600 text-sm leading-relaxed italic">
                                    "Precision isn't an accident. It's engineered. We are digitizing our production lines to ensure 100% repeatability."
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Director 2 - Mohit Aggarwal */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 group hover:shadow-xl hover:border-jdc-orange/30 hover:-translate-y-2 transition-all duration-500">
                           <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-full border-4 border-slate-50 group-hover:border-jdc-orange transition-colors shadow-inner">
                                 <img src={LEADERSHIP_IMAGES.director_mohit} alt="Mohit Aggarwal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                              </div>
                              <div>
                                 <h4 className="text-2xl font-serif font-bold text-jdc-blue mb-1">Mohit Aggarwal</h4>
                                 <span className="inline-block px-2 py-1 bg-blue-50 text-jdc-blue text-[10px] font-bold uppercase tracking-wider rounded mb-3">Director • Strategy</span>
                                 <p className="text-slate-600 text-sm leading-relaxed italic">
                                    "To lead the market, we must first lead in innovation. Our R&D focus is second to none."
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Mobile View - 3D Carousel */}
            <div className="md:hidden bg-jdc-dark">
               <div className="text-center pt-12 pb-4 px-6">
                  <h2 className="text-3xl font-serif text-white mb-2">
                     Guided by Experience.
                  </h2>
               </div>
               <LeadershipCarousel
                  leaders={[
                     {
                        id: 1,
                        name: LEADERSHIP.chairman,
                        role: "Founder • Chairman",
                        image: LEADERSHIP_IMAGES.chairman,
                        quote: "We didn't just build a factory. We built a culture where excellence is the only metric."
                     },
                     {
                        id: 2,
                        name: LEADERSHIP.directors[0],
                        role: "Director • Operations",
                        image: LEADERSHIP_IMAGES.director_vikas,
                        quote: "Precision isn't an accident. It's engineered. We are digitizing our production lines."
                     },
                     {
                        id: 3,
                        name: LEADERSHIP.directors[1],
                        role: "Director • Strategy",
                        image: LEADERSHIP_IMAGES.director_mohit,
                        quote: "To lead the market, we must first lead in innovation. Our R&D focus is second to none."
                     }
                  ]}
               />
            </div>
         </section>

         {/* PRODUCT PORTFOLIO OVERVIEW - Parallax */}
         <section className="relative py-20 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/ima/production.png')" }}>
            <div className="absolute inset-0 bg-jdc-blue/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white reveal-on-scroll">
               <div className="w-16 md:w-20 h-1 bg-jdc-orange mx-auto mb-6 md:mb-8"></div>
               <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-serif">Comprehensive Product Portfolio</h2>
               <p className="text-lg md:text-xl text-slate-200 mb-10 md:mb-12 font-light leading-relaxed">
                  Our product portfolio is developed to meet the requirements of heavy-duty industrial usage, infrastructure projects, and specialized surface applications.
               </p>
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

         {/* PRODUCT COLLECTIONS - AUTHENTIC MINIMAL */}
         <section className="py-16 sm:py-24 md:py-32 bg-slate-50 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
               {/* Intro */}
               <div className="mb-16 sm:mb-20 md:mb-24 max-w-3xl">
                  <span className="text-jdc-orange text-xs font-bold uppercase tracking-widest mb-4 block">Product Range</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-jdc-blue leading-tight mb-6">
                     Every Surface <br />
                     <span className="italic text-slate-400 font-light text-3xl sm:text-4xl md:text-5xl">Tells a Story.</span>
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                     From interior walls to industrial infrastructure, we've developed specialized formulations that don't just perform—they endure. Here's what we build.
                  </p>
               </div>

               {/* Cards - Asymmetrical, Real Feel */}
               <div className="space-y-12 sm:space-y-16 md:space-y-20">

                  {/* 1. Decorative Emulsions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start group">
                     <div className="md:col-span-2 order-2 md:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-jdc-blue mb-4 font-bold">Decorative Emulsions</h3>
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                           Our workhorse product. Used on over 50,000 homes across India. Water-based, low-VOC, and designed to last 7+ years without fading. We've seen it hold up in coastal humidity, Delhi dust, and Mumbai monsoons.
                        </p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>99.2% coverage</strong> — minimal waste on application</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>Anti-microbial</strong> — resists mold in high-humidity zones</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>1000+ color options</strong> — or we'll custom match yours</span>
                           </li>
                        </ul>
                        <a href="#" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all">
                           View Shades <ArrowRight size={16} />
                        </a>
                     </div>
                     <div className="md:col-span-1 order-1 md:order-2">
                        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-8 border border-orange-200/50">
                           <div className="text-4xl md:text-5xl font-bold text-jdc-orange mb-2">50K+</div>
                           <p className="text-sm text-slate-600">Homes painted across India</p>
                           <div className="mt-6 pt-6 border-t border-orange-200/50">
                              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Average rating</p>
                              <div className="flex gap-1">
                                 {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-jdc-orange text-jdc-orange" />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* 2. Wood Protection */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start group">
                     <div className="md:col-span-2 md:col-start-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-jdc-blue mb-4 font-bold">Wood Protection</h3>
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                           Specification-grade varnish. We don't cut corners here. Used by architects for high-end residential projects. Penetrates deep, doesn't just sit on the surface. Proven to outlast cheaper alternatives by 3-4 years.
                        </p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>UV-stable</strong> — wood doesn't gray or fade</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>Water-resistant</strong> — used on outdoor decking, shutters</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>Eco-certified</strong> — low toxicity formulation</span>
                           </li>
                        </ul>
                        <a href="#" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all">
                           Specification Sheet <ArrowRight size={16} />
                        </a>
                     </div>
                     <div className="md:col-span-1">
                        <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-8 border border-amber-200/50">
                           <div className="text-sm text-slate-500 uppercase tracking-wider mb-3">Used By</div>
                           <p className="text-lg font-serif text-jdc-blue font-bold mb-4">150+ Architects</p>
                           <p className="text-xs text-slate-600 leading-relaxed">
                              "Industry standard for premium finishes" — HBA Architects, Mumbai
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* 3. Construction Chemicals */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start group">
                     <div className="md:col-span-2 order-2 md:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-jdc-blue mb-4 font-bold">Industrial Solutions</h3>
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                           Waterproofing membranes and structural adhesives. Built for infrastructure. We supply metro rail projects, bridge construction, and industrial warehouses. These aren't negotiable products.
                        </p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>30+ year durability</strong> — tested for structural integrity</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>Full waterproofing</strong> — used in subway tunnels, dams</span>
                           </li>
                           <li className="flex gap-3 text-sm text-slate-600">
                              <span className="text-jdc-orange font-bold mt-0.5">•</span>
                              <span><strong>ISO 9001 certified</strong> — batch-tested, documented</span>
                           </li>
                        </ul>
                        <a href="#" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all">
                           Project Case Studies <ArrowRight size={16} />
                        </a>
                     </div>
                     <div className="md:col-span-1 order-1 md:order-2">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 border border-blue-200/50">
                           <div className="text-4xl md:text-5xl font-bold text-jdc-blue mb-2">25+</div>
                           <p className="text-sm text-slate-600 mb-6">Infrastructure projects completed</p>
                           <div className="text-xs text-slate-600 leading-relaxed">
                              <strong>Current:</strong> Mumbai Metro Phase 3, National Highways Authority
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

               {/* Bottom CTA */}
               <div className="mt-20 sm:mt-24 md:mt-32 pt-16 border-t border-slate-200">
                  <div className="max-w-2xl mb-8">
                     <h3 className="text-xl sm:text-2xl font-serif text-jdc-blue mb-3">Need a custom solution?</h3>
                     <p className="text-slate-600 text-sm sm:text-base">Our R&D team works directly with projects to develop specialized formulations. Let's talk specifics.</p>
                  </div>
                  <Link to={PageRoute.CONTACT} className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-jdc-orange text-white font-bold rounded text-sm hover:bg-jdc-orange/90 transition-all">
                     Start a Project Inquiry <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
         </section>

         {/* MANUFACTURING & INFRASTRUCTURE */}
         <section className="bg-slate-50 py-20 md:py-32 border-t border-slate-200 relative overflow-hidden">
            {/* Background Subtle Blueprint Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(#0B1C3E 1px, transparent 1px), linear-gradient(90deg, #0B1C3E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

               {/* Left Column: Narrative */}
               <div className="order-2 lg:order-1 reveal-on-scroll">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-jdc-blue text-[10px] md:text-xs font-bold uppercase rounded-full mb-6 shadow-sm">
                     <Ruler size={14} className="text-jdc-orange" /> Precision Engineering
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif text-jdc-blue mb-6 leading-tight">
                     Consistency isn't magic. <br />
                     <span className="italic text-slate-400">It's mechanics.</span>
                  </h2>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                     We don't just "mix paint." We orchestrate a symphony of chemicals. From automated dispersers to micron-level filtration, our infrastructure is designed to remove human error.
                  </p>

                  <div className="space-y-4 mb-10">
                     {[
                        { title: "Automated Blending", desc: "Computer-controlled dosing for exact shade matching.", icon: Settings },
                        { title: "In-House R&D Wing", desc: "Testing formulations against extreme weather conditions.", icon: Beaker },
                        { title: "ISO 9001:2015", desc: "Global standard protocols at every production stage.", icon: ClipboardCheck },
                     ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-jdc-orange/50 hover:shadow-md transition-all duration-300 group">
                           <div className="mt-1 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-jdc-blue group-hover:bg-jdc-blue group-hover:text-white transition-colors shrink-0">
                              <item.icon size={20} strokeWidth={1.5} />
                           </div>
                           <div>
                              <h4 className="font-bold text-jdc-blue text-base font-serif">{item.title}</h4>
                              <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <Link to={PageRoute.INFRASTRUCTURE} className="inline-flex items-center gap-2 text-jdc-orange font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                     Explore The Facility <ArrowRight size={16} />
                  </Link>
               </div>

               {/* Right Column: Editorial Image Layout */}
               <div className="order-1 lg:order-2 reveal-on-scroll relative">
                  {/* Main Image - Intentionally Asymmetrical */}
                  <div className="relative lg:ml-12">
                     {/* Image with subtle offset frame */}
                     <div className="relative group">
                        {/* Back frame element */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-jdc-blue/10 rounded-lg"></div>

                        {/* Main image */}
                        <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[9/11] md:aspect-[4/5]">
                           <img src="/ima/stainer.png" alt="Manufacturing Precision" className="w-full h-full object-cover" />

                           {/* Subtle overlay */}
                           <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
                        </div>

                        {/* Floating label card - positioned like a designer would do */}
                        <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-6 lg:-right-20 bg-white rounded-lg p-5 md:p-7 shadow-xl border border-slate-100 max-w-[200px] md:max-w-[240px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                           <div className="flex items-start gap-3 mb-2">
                              <div className="w-2 h-2 bg-jdc-orange rounded-full mt-1.5"></div>
                              <div>
                                 <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Quality Assurance</p>
                                 <p className="text-sm md:text-base font-serif text-jdc-blue font-bold leading-snug">Every batch certified</p>
                              </div>
                           </div>
                           <div className="text-[9px] md:text-xs text-slate-500 leading-relaxed pl-5">
                              Tested against extreme conditions before dispatch
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* PARENT COMPANY TRUST */}
         <section className="py-16 md:py-20 bg-white border-y border-slate-100">
            <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
               <h3 className="text-xs md:text-lg font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-6">A Legacy of Trust</h3>
               <p className="text-xl md:text-3xl font-serif text-jdc-blue leading-snug mb-8">
                  "{COMPANY_NAME} operates under the manufacturing legacy and guidance of its parent company, <span className="text-jdc-orange">{PARENT_COMPANY}</span>."
               </p>
            </div>
         </section>

         {/* FAQ SECTION - Premium Design */}
         <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-jdc-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-jdc-blue/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
               <div className="text-center mb-12 md:mb-16 reveal-on-scroll">
                  <div className="inline-flex items-center gap-2 bg-jdc-orange/10 px-4 py-2 rounded-full mb-4">
                     <Sparkles size={16} className="text-jdc-orange" />
                     <span className="text-jdc-orange font-bold uppercase tracking-widest text-xs">Got Questions?</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-jdc-blue mb-4">Frequently Asked Questions</h2>
                  <p className="text-slate-600 text-base md:text-lg">Quick answers to common queries about our products and services</p>
               </div>

               <div className="space-y-4 reveal-on-scroll">
                  {FAQS.map((faq, idx) => (
                     <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                        <button
                           onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                           className="w-full flex justify-between items-center p-5 md:p-6 text-left hover:bg-slate-50/50 transition-colors group"
                        >
                           <span className={`font-bold text-sm md:text-base pr-6 transition-colors leading-relaxed ${activeFAQ === idx ? 'text-jdc-orange' : 'text-slate-800 group-hover:text-jdc-blue'
                              }`}>
                              {faq.q}
                           </span>
                           <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeFAQ === idx ? 'bg-jdc-orange text-white rotate-180' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                              }`}>
                              <ChevronDown size={20} />
                           </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFAQ === idx ? 'max-h-96 pb-5 md:pb-6' : 'max-h-0'
                           }`}>
                           <div className="px-5 md:px-6">
                              <div className="pt-4 border-t border-slate-100">
                                 <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                    {faq.a}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-12 md:mt-16 text-center reveal-on-scroll">
                  <p className="text-slate-600 mb-6 text-sm md:text-base">Still have questions? We're here to help.</p>
                  <Link
                     to={PageRoute.CONTACT}
                     className="inline-flex items-center gap-2 px-8 py-4 bg-jdc-blue text-white font-bold rounded-lg hover:bg-jdc-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wider text-sm"
                  >
                     Contact Our Team
                     <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
         </section>

         {/* FINAL CTA */}
         <section className="py-20 md:py-24 bg-jdc-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jdc-blue/30 to-transparent"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">Ready to secure your supply chain?</h2>
               <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm inline-block w-full md:w-auto hover:bg-white/10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                     <div className="text-center md:text-left">
                        <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Direct Line</span>
                        <span className="text-xl md:text-2xl font-mono text-white">+91 11 2345 6789</span>
                     </div>
                     <div className="hidden md:block w-px h-12 bg-white/10"></div>
                     <div className="text-center md:text-left">
                        <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Email Sales</span>
                        <span className="text-xl md:text-2xl font-mono text-white">sales@jaidurgachem.com</span>
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