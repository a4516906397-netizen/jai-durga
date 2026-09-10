import React, { useState, useRef, useMemo, useCallback } from 'react';
import { PRODUCT_LIST } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ProductCircularSliderStyle.css';

const angleStep = 24;

const ProductCircularSlider: React.FC = () => {
    // Products with valid images available for the circular slider
    const AVAILABLE_PRODUCTS = useMemo(() => 
        PRODUCT_LIST.filter(p => Boolean(p.image) && p.image !== 'missing'),
    []);

    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(AVAILABLE_PRODUCTS.length / 2));
    const lastScrollTime = useRef<number>(0);
    const stageRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const navigate = useNavigate();

    const move = useCallback((dir: number) => {
        setCurrentIndex(prev => {
            const newIndex = prev + dir;
            if (newIndex >= 0 && newIndex < AVAILABLE_PRODUCTS.length) {
                return newIndex;
            }
            return prev;
        });
    }, [AVAILABLE_PRODUCTS.length]);

    const handleWheel = (e: React.WheelEvent) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 250) return;

        if (Math.abs(e.deltaY) > 10) {
            lastScrollTime.current = now;
            if (e.deltaY > 0) {
                move(1);
            } else {
                move(-1);
            }
        }
    };

    // Smooth direct DOM parallax using requestAnimationFrame without triggering React re-renders
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!stageRef.current) return;
        if (rafId.current) cancelAnimationFrame(rafId.current);

        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 8;
        const y = (clientY / window.innerHeight - 0.5) * 8;

        rafId.current = requestAnimationFrame(() => {
            if (stageRef.current) {
                stageRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
            }
        });
    };

    const handleMouseLeave = () => {
        if (stageRef.current) {
            stageRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
    };

    return (
        <div className="circular-slider" onWheel={handleWheel} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-jdc-orange/5 rounded-full pointer-events-none z-0" />

            <div ref={stageRef} className="stage">
                <div className="side-nav">
                    <button onClick={() => move(-1)} aria-label="Previous">
                        <ArrowLeft size={32} strokeWidth={1.5} />
                    </button>
                    <button onClick={() => move(1)} aria-label="Next">
                        <ArrowRight size={32} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="carousel-track">
                    {AVAILABLE_PRODUCTS.map((product, i) => {
                        const diff = i - currentIndex;
                        const rotation = diff * angleStep;
                        const isActive = i === currentIndex;
                        const isVisible = Math.abs(diff) <= 6; // Optimize GPU: only render visible range

                        if (!isVisible) return null;

                        return (
                            <div
                                key={product.id || product.slug}
                                className={`card ${isActive ? 'active' : ''}`}
                                onClick={() => navigate(`/product/${product.slug}`)}
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                }}
                            >
                                <div className="card-content-wrapper">
                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: `url('${product.image || '/images/factory.png'}')`,
                                        }}
                                    />
                                    {isActive && <div className="card-shine" />}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="content">
                    {/* Simplified: Pure Visuals */}
                </div>
            </div>
        </div>
    );
};

export default ProductCircularSlider;
