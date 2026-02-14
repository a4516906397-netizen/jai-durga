import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, ArrowRight, HelpCircle, MessageSquare, PhoneCall } from 'lucide-react';
import { PageRoute } from '../types';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    return (
        <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24">
            {/* Editorial Header */}
            <section className="px-6 mb-16 md:mb-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-jdc-orange/10 px-4 py-2 rounded-full mb-6">
                        <Sparkles size={16} className="text-jdc-orange" />
                        <span className="text-jdc-orange font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif text-jdc-blue mb-8 leading-tight">
                        Common Inquiries & <span className="italic text-slate-400">Technical Support.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                        Detailed answers to common questions regarding our manufacturing processes,
                        product specifications, and partnership terms.
                    </p>
                </div>
            </section>

            {/* Accordion Section */}
            <section className="px-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-jdc-orange/20 hover:shadow-xl transition-all duration-500"
                        >
                            <button
                                onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-slate-50/50 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-colors ${activeFAQ === idx ? 'bg-jdc-orange border-jdc-orange text-white' : 'border-slate-200 text-slate-400'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                    <span className={`font-bold text-base md:text-lg pr-6 transition-colors leading-relaxed ${activeFAQ === idx ? 'text-jdc-blue' : 'text-slate-700 group-hover:text-jdc-blue'
                                        }`}>
                                        {faq.q}
                                    </span>
                                </div>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeFAQ === idx ? 'bg-jdc-blue text-white rotate-180' : 'bg-slate-100 text-slate-400'
                                    }`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFAQ === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <div className="pl-10 border-l border-slate-100">
                                        <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support Cards */}
            <section className="px-6 max-w-7xl mx-auto mt-24 md:mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <HelpCircle className="text-jdc-orange mb-6" size={32} />
                        <h3 className="text-2xl font-serif font-bold text-jdc-blue mb-4">Technical Help</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">Need specific data sheets or application guidance? Our chemists are ready.</p>
                        <Link to={PageRoute.CONTACT} className="text-jdc-blue font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                            Contact Technical <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="bg-jdc-blue p-10 rounded-3xl shadow-xl transform md:-translate-y-8">
                        <MessageSquare className="text-jdc-orange mb-6" size={32} />
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Live Inquiry</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">Looking for bulk pricing or dealership terms? Start a conversation now.</p>
                        <Link to={PageRoute.CONTACT} className="inline-flex items-center gap-2 px-6 py-3 bg-jdc-orange text-white font-bold rounded-lg hover:bg-white hover:text-jdc-blue transition-all duration-300 uppercase text-[10px] tracking-widest">
                            Inquire Now <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <PhoneCall className="text-jdc-orange mb-6" size={32} />
                        <h3 className="text-2xl font-serif font-bold text-jdc-blue mb-4">Direct Support</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">Prefer talking to a human? Our support lines are open Monday to Saturday.</p>
                        <a href="tel:+919971661234" className="text-jdc-blue font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                            Call Support <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
