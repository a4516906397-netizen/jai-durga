import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, Send, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQS = [
   { q: "Do you offer custom formulations?", a: "Yes, our R&D team specializes in developing custom formulations based on specific viscosity, drying time, and finish requirements for industrial partners." },
   { q: "What is your minimum order quantity?", a: "For industrial products, typical MOQ is 500 liters. Decorative paints are available in pallet-sized loads. Contact sales for specific product details." },
   { q: "Do you provide technical support?", a: "Absolutely. We deploy technical supervisors for large infrastructure projects to ensure proper surface preparation and application." },
   { q: "Are products certified?", a: "Our industrial coatings meet strict compliance standards. MSDS and quality certificates are provided with every batch." }
];

const Contact: React.FC = () => {
   const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

   return (
      <div className="bg-slate-50 min-h-screen pt-20">
         {/* Hero Section - Clean & Professional */}
         <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                     Contact <span className="text-jdc-blue">Us</span>
                  </h1>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                     Get in touch for bulk orders, technical support, or partnership inquiries. <br className="hidden md:block" />
                     Our team is available 6 days a week to assist you.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Contact Info Cards */}
         <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {[
                  { icon: Phone, title: "Call Us", desc: "Mon-Sat, 9am - 6pm", action: "+91 99716 61234", link: "tel:+919971661234", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Mail, title: "Email Us", desc: "For quotes & support", action: "info@jaidurgachemical.com", link: "mailto:info@jaidurgachemical.com", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: MapPin, title: "Visit Factory", desc: "Greater Noida, UP", action: "Get Directions", link: "https://maps.app.goo.gl/XfQFFabfzoz9Zz7s7", color: "text-green-600", bg: "bg-green-50" },
               ].map((item, idx) => (
                  <motion.a
                     href={item.link}
                     target={item.icon === MapPin ? "_blank" : "_self"}
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-jdc-orange/30 transition-all group flex flex-col items-center text-center"
                  >
                     <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon size={28} className={item.color} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                     <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                     <span className={`font-bold text-sm ${item.color} flex items-center gap-2`}>
                        {item.action} {item.icon === MapPin && <ExternalLink size={14} />}
                     </span>
                  </motion.a>
               ))}
            </div>
         </div>

         {/* Main Content Grid */}
         <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

               {/* Left: Contact Form */}
               <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                  <div className="mb-8">
                     <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Send Message</h2>
                     <p className="text-slate-500 text-sm">We usually respond within 24 hours.</p>
                  </div>

                  <form className="space-y-5">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                           <label className="text-xs font-bold text-slate-700 uppercase">Name</label>
                           <input
                              type="text"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-jdc-orange focus:ring-1 focus:ring-jdc-orange transition-all placeholder:text-slate-400 text-sm"
                              placeholder="Your Name"
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-xs font-bold text-slate-700 uppercase">Email</label>
                           <input
                              type="email"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-jdc-orange focus:ring-1 focus:ring-jdc-orange transition-all placeholder:text-slate-400 text-sm"
                              placeholder="email@example.com"
                           />
                        </div>
                     </div>

                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Subject</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-jdc-orange focus:ring-1 focus:ring-jdc-orange transition-all cursor-pointer text-sm">
                           <option>General Inquiry</option>
                           <option>Bulk/Wholesale Order</option>
                           <option>Job Application</option>
                           <option>Other</option>
                        </select>
                     </div>

                     <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase">Message</label>
                        <textarea
                           rows={5}
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-jdc-orange focus:ring-1 focus:ring-jdc-orange transition-all placeholder:text-slate-400 text-sm resize-none"
                           placeholder="How can we help you?"
                        ></textarea>
                     </div>

                     <button
                        type="button"
                        className="bg-jdc-blue text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-jdc-orange transition-colors duration-300 w-full flex items-center justify-center gap-2 mt-2"
                     >
                        Submit Inquiry <Send size={14} />
                     </button>
                  </form>
               </div>

               {/* Right: Map & Details */}
               <div className="lg:col-span-5 space-y-8">
                  {/* Map Card */}
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                     <div className="bg-slate-100 rounded-xl overflow-hidden h-72 relative group">
                        <iframe
                           src="https://maps.google.com/maps?q=Jai+Durga+Chemical+Site-5+Kasna+Road+Greater+Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                        <a
                           href="https://maps.app.goo.gl/XfQFFabfzoz9Zz7s7"
                           target="_blank"
                           rel="noreferrer"
                           className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 hover:bg-jdc-orange hover:text-white transition-colors"
                        >
                           <MapPin size={14} /> Open in Google Maps
                        </a>
                     </div>
                  </div>

                  {/* Corporate Address */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                     <h3 className="font-serif font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                        <Building2 size={18} className="text-jdc-blue" /> Corporate Office
                     </h3>
                     <div className="space-y-4 text-sm text-slate-600">
                        <p className="leading-relaxed pl-8 relative">
                           <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-jdc-orange"></span>
                           <strong className="text-slate-900 block mb-1">Jai Durga Chemical</strong>
                           Site-5, J-10, Kasna Road, Industrial Area,<br />
                           Surajpur Site V, Greater Noida,<br />
                           Uttar Pradesh - 201312
                        </p>
                        <div className="border-t border-slate-100 my-4"></div>
                        <p className="leading-relaxed pl-8 relative">
                           <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                           <strong className="text-slate-900 block mb-1">Support Hours</strong>
                           Monday - Saturday<br />
                           09:00 AM - 06:00 PM
                        </p>
                     </div>
                  </div>

                  {/* FAQ Teaser */}
                  <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
                     <h3 className="font-serif font-bold text-lg text-blue-900 mb-2 flex items-center justify-center gap-2">
                        <Sparkles size={18} className="text-blue-500" /> Have Questions?
                     </h3>
                     <p className="text-sm text-slate-600 mb-6">Find answers to common questions about our products, custom formulations, and minimum orders.</p>
                     <a href="/#/faq" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        View Knowledge Base
                     </a>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Contact;