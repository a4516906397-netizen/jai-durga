import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ImageSlider3D from '../components/ImageSlider3D';
import ProductCircularSlider from '../components/ProductCircularSlider';
import { COMPANY_NAME } from '../constants';
import { ShieldCheck, Settings, Users, ArrowRight, Activity, Globe, Factory, Layers, CheckCircle, Quote, ArrowUpRight, BadgeCheck, Building2, Train, Building, Cog, Hotel, Landmark, FlaskConical, PackageCheck, Truck, Zap, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
   return (
      <div className="bg-jdc-cream overflow-hidden pb-24 md:pb-0">
         <HeroSlider />

         {/* ── INNOVATION SLIDER & BRAND STORY ── */}
         <ImageSlider3D />

         {/* ── OUR PRODUCTS HEADING ── */}
         <section className="pt-24 pb-8 bg-white relative overflow-hidden text-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <div className="w-10 h-px bg-jdc-orange" />
                     <span className="text-jdc-orange text-[10px] font-black uppercase tracking-[0.5em]">Portfolio</span>
                     <div className="w-10 h-px bg-jdc-orange" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-jdc-blue">Our Products</h2>
                  <div className="mt-4 text-slate-400 font-light max-w-xl mx-auto italic mb-10">
                     Discover our range of high-performance decorative, industrial, and protective coatings.
                  </div>
                  <Link
                     to={PageRoute.PRODUCTS}
                     className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-jdc-blue hover:text-jdc-orange transition-all group"
                  >
                     Explore Collection
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 group-hover:border-jdc-orange group-hover:bg-jdc-orange/5 transition-all duration-500">
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </div>
                  </Link>
               </motion.div>
            </div>
         </section>

         {/* ── PRODUCT CIRCULAR SLIDER ── */}
         <ProductCircularSlider />

         {/* ── MANUFACTURING & QUALITY ASSURANCE ── */}
         <section className="py-24 md:py-40 bg-white relative overflow-hidden text-center border-t border-slate-100">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 font-sans">
               {/* Centered Heading */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 mb-20"
               >
                  <div className="flex items-center justify-center gap-3">
                     <div className="w-10 h-px bg-jdc-orange" />
                     <span className="text-jdc-orange text-[10px] font-black uppercase tracking-[0.5em]">Our Standards</span>
                     <div className="w-10 h-px bg-jdc-orange" />
                  </div>

                  <h2 className="text-4xl md:text-7xl font-serif text-jdc-blue leading-tight mb-4">
                     Manufacturing & <br />
                     <span className="text-jdc-blue">Quality Assurance.</span>
                  </h2>
               </motion.div>

               {/* Centered Bulletin Points - 6 points in 3 columns */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left max-w-6xl mx-auto">
                  {[
                     {
                        title: "Modern Manufacturing Facility",
                        icon: Factory,
                        desc: "Fully automated dosing and blending systems for perfect repeatability."
                     },
                     {
                        title: "Strict Quality Control",
                        icon: ShieldCheck,
                        desc: "Multistage batch testing ensuring zero deviation from technical specs."
                     },
                     {
                        title: "Large Scale Production Capacity",
                        icon: Layers,
                        desc: "High-volume output capability to support massive infrastructure projects."
                     },
                     {
                        title: "Eco-Friendly Practices",
                        icon: Zap,
                        desc: "Sustainable chemical handling and low-VOC manufacturing protocols."
                     },
                     {
                        title: "Innovation in Every Coat",
                        icon: FlaskConical,
                        desc: "R&D focused formulations that push the boundaries of durability and finish."
                     },
                     {
                        title: "Low VOC High Performance",
                        icon: BadgeCheck,
                        desc: "Exceptional coverage and strength with minimal environmental impact."
                     }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-start gap-6 group hover:translate-y-[-4px] transition-transform duration-300"
                     >
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-jdc-orange border border-jdc-orange text-white group-hover:bg-white group-hover:text-jdc-orange group-hover:border-slate-100 transition-all duration-500 shrink-0 shadow-lg shadow-jdc-orange/20 group-hover:shadow-sm">
                           <item.icon size={22} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-3">
                           <h4 className="text-jdc-blue font-serif font-bold text-xl transition-colors">{item.title}</h4>
                           <p className="text-slate-500 text-[13px] font-light leading-relaxed pr-4">{item.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>


      </div>
   );
};

export default Home;