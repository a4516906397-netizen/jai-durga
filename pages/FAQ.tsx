import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, User, Building2, Phone, MessageSquare, MapPin, CheckCircle } from 'lucide-react';
import { database } from '../firebase';
import { ref, push, serverTimestamp } from 'firebase/database';


const DealerEnquiry: React.FC = () => {
    const [formData, setFormData] = useState({
        dealerName: '',
        companyName: '',
        mobileNumber: '',
        address: '',
        remark: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);

        try {
            // 1. Save to Firebase Realtime Database
            const submissionsRef = ref(database, 'submissions/dealers');
            await push(submissionsRef, {
                ...formData,
                timestamp: serverTimestamp(),
                type: 'Dealer Enquiry'
            });

            // 2. Clear status and set submitted
            setIsSubmitting(false);
            setIsSubmitted(true);

            // 3. Construct WhatsApp Message (Optional Redirect)
            const message = `*DEALER ENQUIRY - JDC*\n\n` +
                `*Name:* ${formData.dealerName}\n` +
                `*Firm:* ${formData.companyName}\n` +
                `*Mobile:* ${formData.mobileNumber}\n` +
                `*Address:* ${formData.address}\n` +
                `*Remark:* ${formData.remark || 'N/A'}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/919971661234?text=${encodedMessage}`;

            // Redirect to WhatsApp after success
            window.open(whatsappUrl, '_blank');

            // 4. Reset form
            setFormData({
                dealerName: '',
                companyName: '',
                mobileNumber: '',
                address: '',
                remark: ''
            });

        } catch (error) {
            console.error("Firebase submission error:", error);
            setIsSubmitting(false);
            setSubmitError(true);
        }
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-jdc-blue/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* LEFT CONTENT: Minimal & Professional */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-jdc-orange/10 px-4 py-2 rounded-full">
                            <Sparkles size={16} className="text-jdc-orange" />
                            <span className="text-jdc-orange font-black uppercase tracking-widest text-[10px]">Partnership Portal</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif text-jdc-blue leading-tight">
                            Expand Your <br />
                            <span className="italic text-slate-400 font-light">Business with Us.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                            Join the Jai Durga Chemical network. We provide premium decorative coatings
                            and comprehensive support to our nationwide dealer partners.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-jdc-blue group-hover:bg-jdc-orange group-hover:text-white transition-all duration-300">
                                    <Building2 size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-jdc-blue text-sm uppercase tracking-wider">Premium Quality</h4>
                                    <p className="text-xs text-slate-400">Consistent formulations for high-stakes projects.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-jdc-blue group-hover:bg-jdc-orange group-hover:text-white transition-all duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-jdc-blue text-sm uppercase tracking-wider">Wide Network</h4>
                                    <p className="text-xs text-slate-400">Serving infrastructure and retail sectors nationwide.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT: Next-Level Form UI */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-jdc-orange/10 blur-3xl opacity-50 rounded-[40px] pointer-events-none" />

                        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(11,28,62,0.1)] border border-white relative overflow-hidden">

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-jdc-blue">Application Sent.</h3>
                                    <p className="text-slate-500 max-w-xs mx-auto">Our dealership department will review your profile and contact you within 2-3 business days.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-jdc-orange font-bold uppercase tracking-widest text-xs hover:underline pt-4"
                                    >
                                        Send another enquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Dealer Name */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Dealer Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-jdc-orange transition-colors" size={18} />
                                                <input
                                                    required
                                                    type="text"
                                                    name="dealerName"
                                                    value={formData.dealerName}
                                                    onChange={handleInputChange}
                                                    placeholder="Full Name"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none placeholder:text-slate-300 text-jdc-blue font-medium"
                                                />
                                            </div>
                                        </div>

                                        {/* Company Name */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Firm Name</label>
                                            <div className="relative group">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-jdc-orange transition-colors" size={18} />
                                                <input
                                                    required
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    placeholder="Firm / Shop Name"
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none placeholder:text-slate-300 text-jdc-blue font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Mobile Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-jdc-orange transition-colors" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                onChange={handleInputChange}
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none placeholder:text-slate-300 text-jdc-blue font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Business Address</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-4 text-slate-300 group-focus-within:text-jdc-orange transition-colors" size={18} />
                                            <textarea
                                                required
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Complete Business Address"
                                                rows={2}
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none placeholder:text-slate-300 text-jdc-blue font-medium resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Remark */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Requirements (Remark)</label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-4 text-slate-300 group-focus-within:text-jdc-orange transition-colors" size={18} />
                                            <textarea
                                                name="remark"
                                                value={formData.remark}
                                                onChange={handleInputChange}
                                                placeholder="Experience, Current Brands, Any Message..."
                                                rows={3}
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-jdc-orange focus:ring-4 focus:ring-jdc-orange/5 transition-all outline-none placeholder:text-slate-300 text-jdc-blue font-medium resize-none"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-jdc-blue text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-jdc-blue/20 hover:bg-jdc-orange hover:shadow-jdc-orange/20 transition-all duration-500 mt-4 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Processing...' : (
                                            <>Submit Application <Send size={16} /></>
                                        )}
                                    </button>

                                    {submitError && (
                                        <p className="text-red-500 text-[10px] text-center font-bold mt-2 animate-pulse">
                                            Submission failed. Please check your connection or try again.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DealerEnquiry;
