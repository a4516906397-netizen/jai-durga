import React, { useState, useEffect, useRef } from 'react';
import { PRODUCT_LIST } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ProductCircularSliderStyle.css';

const angleStep = 24;

const ProductCircularSlider: React.FC = () => {
    // Filter out coming soon products for a cleaner production look
    const AVAILABLE_PRODUCTS = PRODUCT_LIST.filter(p => !p.name.includes('(Coming Soon)') && p.image !== 'missing');

    const [currentIndex, setCurrentIndex] = useState(Math.floor(AVAILABLE_PRODUCTS.length / 2));
    const [activeProduct, setActiveProduct] = useState(AVAILABLE_PRODUCTS[Math.floor(AVAILABLE_PRODUCTS.length / 2)]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const lastScrollTime = useRef<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < AVAILABLE_PRODUCTS.length) {
            setActiveProduct(AVAILABLE_PRODUCTS[currentIndex]);
        }
    }, [currentIndex, AVAILABLE_PRODUCTS]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        setMousePos({ x, y });
    };

    const move = (dir: number) => {
        const newIndex = currentIndex + dir;
        if (newIndex >= 0 && newIndex < AVAILABLE_PRODUCTS.length) {
            setCurrentIndex(newIndex);
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 800) return;

        lastScrollTime.current = now;

        if (e.deltaY > 0) {
            move(1);
        } else {
            move(-1);
        }
    };

    return (
        <div className="circular-slider" onWheel={handleWheel} onMouseMove={handleMouseMove}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-jdc-orange/5 rounded-full blur-[150px] pointer-events-none z-0" />

            <div
                className="stage"
                style={{
                    transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                }}
            >
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
                        const rotation = (i - currentIndex) * angleStep;
                        const isActive = i === currentIndex;

                        return (
                            <div
                                key={product.id}
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
