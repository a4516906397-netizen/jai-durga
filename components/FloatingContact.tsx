import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact: React.FC = () => {
    const whatsappNumber = "+919971661234";
    const emailAddress = "info@jaidurgachemicals.com";

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hi Jai Durga Chemical Team, I have an inquiry.");
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className="fixed bottom-24 right-6 z-[9999] flex flex-col gap-4">
            {/* Email Button */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEmailClick}
                className="w-14 h-14 bg-white text-jdc-blue rounded-full shadow-2xl flex items-center justify-center border border-slate-100 hover:bg-jdc-blue hover:text-white transition-colors group relative"
            >
                <Mail size={24} />
                <span className="absolute right-full mr-4 px-3 py-1 bg-jdc-blue text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
                    info@jaidurgachemicals.com
                </span>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsAppClick}
                className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors group relative"
            >
                <MessageCircle size={24} fill="currentColor" />
                <span className="absolute right-full mr-4 px-3 py-1 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                    WhatsApp
                </span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </motion.button>
        </div>
    );
};

export default FloatingContact;
