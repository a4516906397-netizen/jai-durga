import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, Send, Building2, Sparkles } from 'lucide-react';

const FAQS = [
   { q: "Do you offer custom formulations for industrial clients?", a: "Yes, we specialize in strategic partnerships. Our R&D team can reverse-engineer or develop custom formulations based on your viscosity, drying time, and finish requirements." },
   { q: "What is the minimum order quantity (MOQ) for bulk dispatch?", a: "For industrial products, our MOQ is typically 500 liters. For decorative paints, we supply pallet-sized loads. Please contact sales for specific product MOQs." },
   { q: "Do you provide on-site technical support?", a: "Absolutely. For large infrastructure projects, we deploy technical supervisors to ensure proper surface preparation and application." },
   { q: "Are your products REACH and RoHS compliant?", a: "Most of our industrial coatings are compliant. We provide specific MSDS and compliance certificates with every batch upon request." }
];

const Contact: React.FC = () => {
   const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

   return (
      <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-jdc-gray pb-16 md:pb-20 font-sans relative overflow-hidden">

         {/* Animated Background Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-jdc-orange/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-jdc-blue/5 rounded-full blur-3xl"></div>

         {/* Header with Gradient */}
         <div className="relative bg-gradient-to-br from-jdc-dark via-jdc-blue to-jdc-dark text-white pt-16 md:pt-24 pb-20 md:pb-32 px-4 md:px-6 text-center overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
               <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px] animate-pulse"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-jdc-orange rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-jdc-orange/50 rounded-full animate-ping delay-75"></div>

            <div className="max-w-5xl mx-auto relative z-10">
               <div className="inline-flex items-center gap-2 bg-jdc-orange/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 reveal-on-scroll border border-jdc-orange/30">
                  <Sparkles size={14} className="text-jdc-orange" />
                  <span className="text-jdc-orange font-bold uppercase tracking-widest text-[10px] md:text-xs">24/7 Expert Support</span>
               </div>

               <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 md:mb-6 reveal-on-scroll leading-tight">
                  Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-jdc-orange to-orange-300">Conversation</span>
               </h1>

               <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed reveal-on-scroll px-4">
                  Whether you need a custom quote, technical datasheet, or partnership details, our expert team is ready to assist you.
               </p>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 md:-mt-24 relative z-20">

            {/* Premium Department Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
               <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal-on-scroll relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jdc-orange to-orange-400"></div>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-jdc-orange/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-jdc-orange to-orange-400 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:rotate-6 transition-transform">
                        <Mail className="text-white" size={24} />
                     </div>
                     <h3 className="font-serif font-bold text-xl md:text-2xl text-jdc-blue mb-3 md:mb-4">Sales & Projects</h3>
                     <p className="text-slate-500 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">For bulk orders, dealership inquiries, and custom manufacturing.</p>
                     <a href="mailto:info@jaidurgachemical.com" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all group-hover:underline">
                        info@jaidurgachemical.com
                        <Send size={14} />
                     </a>
                  </div>
               </div>

               <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal-on-scroll relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jdc-blue to-blue-600"></div>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-jdc-blue/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-jdc-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:rotate-6 transition-transform">
                        <Phone className="text-white" size={24} />
                     </div>
                     <h3 className="font-serif font-bold text-xl md:text-2xl text-jdc-blue mb-3 md:mb-4">Technical Support</h3>
                     <p className="text-slate-500 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">For application guides, MSDS requests, and on-site troubleshooting.</p>
                     <a href="mailto:info@jaidurgachemical.com" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all group-hover:underline">
                        info@jaidurgachemical.com
                        <Send size={14} />
                     </a>
                  </div>
               </div>

               <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal-on-scroll relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-slate-600"></div>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-slate-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                     <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:rotate-6 transition-transform">
                        <Building2 className="text-white" size={24} />
                     </div>
                     <h3 className="font-serif font-bold text-xl md:text-2xl text-jdc-blue mb-3 md:mb-4">Careers</h3>
                     <p className="text-slate-500 text-sm md:text-base mb-5 md:mb-6 leading-relaxed">Join our team of chemists and engineers. Send us your CV.</p>
                     <a href="mailto:info@jaidurgachemical.com" className="inline-flex items-center gap-2 text-jdc-orange font-bold text-sm hover:gap-3 transition-all group-hover:underline">
                        info@jaidurgachemical.com
                        <Send size={14} />
                     </a>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

               {/* Left: Premium Contact Form */}
               <div className="lg:col-span-7 reveal-on-scroll">
                  <div className="bg-white p-6 md:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-jdc-orange/10 to-transparent rounded-full blur-2xl"></div>
                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-jdc-blue/10 to-transparent rounded-full blur-2xl"></div>

                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                           <div className="w-1.5 h-8 bg-gradient-to-b from-jdc-orange to-jdc-blue rounded-full"></div>
                           <h3 className="text-2xl md:text-3xl font-serif font-bold text-jdc-dark">Send us a Message</h3>
                        </div>

                        <form className="space-y-5 md:space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                              <div className="group">
                                 <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wider group-focus-within:text-jdc-orange transition-colors">First Name</label>
                                 <input
                                    type="text"
                                    className="w-full bg-slate-50 border-2 border-slate-200 p-3.5 md:p-4 outline-none focus:border-jdc-orange focus:bg-white transition-all rounded-xl text-slate-800 placeholder:text-slate-400"
                                    placeholder="John"
                                 />
                              </div>
                              <div className="group">
                                 <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wider group-focus-within:text-jdc-orange transition-colors">Last Name</label>
                                 <input
                                    type="text"
                                    className="w-full bg-slate-50 border-2 border-slate-200 p-3.5 md:p-4 outline-none focus:border-jdc-orange focus:bg-white transition-all rounded-xl text-slate-800 placeholder:text-slate-400"
                                    placeholder="Doe"
                                 />
                              </div>
                           </div>

                           <div className="group">
                              <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wider group-focus-within:text-jdc-orange transition-colors">Business Email</label>
                              <input
                                 type="email"
                                 className="w-full bg-slate-50 border-2 border-slate-200 p-3.5 md:p-4 outline-none focus:border-jdc-orange focus:bg-white transition-all rounded-xl text-slate-800 placeholder:text-slate-400"
                                 placeholder="john.doe@company.com"
                              />
                           </div>

                           <div className="group">
                              <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wider group-focus-within:text-jdc-orange transition-colors">Subject / Product Interest</label>
                              <select className="w-full bg-slate-50 border-2 border-slate-200 p-3.5 md:p-4 outline-none focus:border-jdc-orange focus:bg-white transition-all rounded-xl text-slate-700 cursor-pointer">
                                 <option>General Inquiry</option>
                                 <option>Bulk Order Quote</option>
                                 <option>Distributorship Application</option>
                                 <option>Technical Issue</option>
                                 <option>Custom Formulation Request</option>
                              </select>
                           </div>

                           <div className="group">
                              <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wider group-focus-within:text-jdc-orange transition-colors">Message</label>
                              <textarea
                                 rows={5}
                                 className="w-full bg-slate-50 border-2 border-slate-200 p-3.5 md:p-4 outline-none focus:border-jdc-orange focus:bg-white transition-all rounded-xl text-slate-800 placeholder:text-slate-400 resize-none"
                                 placeholder="Tell us about your requirements..."
                              ></textarea>
                           </div>

                           <button
                              type="button"
                              className="w-full bg-gradient-to-r from-jdc-blue to-jdc-blue/90 hover:from-jdc-orange hover:to-orange-500 text-white font-bold py-4 md:py-5 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl rounded-xl group relative overflow-hidden"
                           >
                              <span className="relative z-10">Submit Inquiry</span>
                              <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                              <div className="absolute inset-0 bg-gradient-to-r from-jdc-orange to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>

               {/* Right: Map & FAQs */}
               <div className="lg:col-span-5 space-y-8 md:space-y-10">

                  {/* Premium Map Card */}
                  <div className="relative h-64 md:h-72 bg-slate-200 rounded-2xl overflow-hidden group border-2 border-slate-200 shadow-xl reveal-on-scroll">
                     <img src="/images/test.png" alt="Location Map" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6">
                        <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl cursor-pointer hover:bg-jdc-orange hover:text-white transition-all hover:scale-105 flex items-center gap-2">
                           <MapPin size={20} />
                           <span className="text-sm font-bold uppercase tracking-wider">View on Google Maps</span>
                        </div>
                     </div>
                  </div>

                  {/* Corporate Address with Premium Design */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl reveal-on-scroll">
                     <div className="flex items-center gap-3 mb-5 md:mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-jdc-blue to-jdc-orange rounded-lg flex items-center justify-center">
                           <Building2 className="text-white" size={20} />
                        </div>
                        <h4 className="font-serif font-bold text-xl md:text-2xl text-jdc-blue">Corporate HQ</h4>
                     </div>

                     <ul className="space-y-4 md:space-y-5 text-slate-600">
                        <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                           <div className="w-8 h-8 bg-jdc-orange/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin className="text-jdc-orange" size={16} />
                           </div>
                           <span className="text-sm md:text-base leading-relaxed">site-5, J-10, Kasna Road, Industrial Area,<br />Surajpur Site V, Greater Noida, UP - 201312</span>
                        </li>
                        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                           <div className="w-8 h-8 bg-jdc-blue/10 rounded-lg flex items-center justify-center shrink-0">
                              <Phone className="text-jdc-blue" size={16} />
                           </div>
                           <a href="tel:+919971661234" className="text-sm md:text-base hover:text-jdc-orange transition-colors font-medium">+91 99716 61234</a>
                        </li>
                        <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                           <div className="w-8 h-8 bg-slate-500/10 rounded-lg flex items-center justify-center shrink-0">
                              <Clock className="text-slate-600" size={16} />
                           </div>
                           <span className="text-sm md:text-base">Mon - Sat: 9:00 AM - 6:00 PM</span>
                        </li>
                     </ul>
                  </div>

                  {/* Premium FAQ Accordion */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl reveal-on-scroll">
                     <h4 className="font-serif font-bold text-xl md:text-2xl text-jdc-blue mb-5 md:mb-6 flex items-center gap-2">
                        <Sparkles className="text-jdc-orange" size={24} />
                        FAQ's
                     </h4>
                     <div className="space-y-3">
                        {FAQS.map((faq, idx) => (
                           <div key={idx} className="border-2 border-slate-100 rounded-xl bg-slate-50/50 overflow-hidden hover:border-slate-200 transition-colors">
                              <button
                                 onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                                 className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-white transition-colors group"
                              >
                                 <span className={`font-bold text-xs md:text-sm pr-4 transition-colors ${activeFAQ === idx ? 'text-jdc-orange' : 'text-slate-700 group-hover:text-jdc-blue'}`}>{faq.q}</span>
                                 <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${activeFAQ === idx ? 'bg-jdc-orange text-white rotate-180' : 'bg-slate-200 text-slate-600'}`}>
                                    <ChevronDown size={16} />
                                 </div>
                              </button>
                              <div className={`overflow-hidden transition-all duration-300 ${activeFAQ === idx ? 'max-h-48 px-4 md:px-5 pb-4 md:pb-5' : 'max-h-0'}`}>
                                 <p className="text-xs md:text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-lg">
                                    {faq.a}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </div>
   );
};

export default Contact;