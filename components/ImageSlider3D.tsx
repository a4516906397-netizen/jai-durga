import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import './ImageSlider3D.css';

const ImageSlider3D: React.FC = () => {
    // Dynamic images from public/event directory
    const [images, setImages] = useState([
        "/event/1.jpeg",
        "/event/2.jpeg",
        "/event/3.jpeg",
        "/event/4.png",
        "/event/5.jpeg",
        "/event/6.jpeg",
        "/event/7.jpeg",
        "/event/8.jpeg",
        "/event/9.jpeg",
        "/event/10.jpeg",
        "/event/11.jpeg",
        "/event/12.jpeg",
        "/event/13.jpeg",
        "/event/14.jpeg",
        "/event/15.jpeg"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages(prev => {
                const newArray = [...prev];
                const first = newArray.shift();
                if (first) newArray.push(first);
                return newArray;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="special-3d-section">
            <div className="grid-overlay" />

            {/* BRAND NARRATIVE: Simplified Text, no card wrapper */}
            <div className="brand-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-jdc-orange" />
                        <span className="text-jdc-orange text-[13px] font-black uppercase tracking-[0.4em]">About Jai Durga Chemical</span>
                    </div>

                    <p className="mb-10 text-slate-600 leading-relaxed max-w-md">
                        Jai Durga Chemical Pvt. Ltd. is a <strong>professionally managed</strong> leader in paint manufacturing, specializing in high-performance decorative coatings and professional-grade surface treatments.
                    </p>

                    <Link
                        to={PageRoute.ABOUT}
                        className="group relative inline-flex items-center gap-6 px-10 py-5 bg-jdc-orange text-white rounded-full text-[11px] font-black uppercase tracking-[0.25em] shadow-[0_15px_30px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] transition-all duration-500 hover:-translate-y-1 active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Link>
                </motion.div>
            </div>

            {/* IMAGE CONTAINER: Smaller, more original feel */}
            <div className="img-container">
                {images.slice(0, 5).map((src, index) => (
                    <div className="box" key={`${src}-${index}`}>
                        <img src={src} alt={`JDC Production ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageSlider3D;
