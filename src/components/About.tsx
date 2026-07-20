import React, { useEffect, useRef, useState } from 'react';
import { Layers, ShieldCheck, Hammer, Sparkles, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration: number = 1800, trigger: boolean = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        let start: number | null = null;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [trigger, target, duration]);
    return count;
}

// ── Stat card ────────────────────────────────────────────────────────────────
interface StatCardProps { target: number; suffix: string; label: string; trigger: boolean; }

const StatCard: React.FC<StatCardProps> = ({ target, suffix, label, trigger }) => {
    const count = useCountUp(target, 1600, trigger);
    return (
        <div className="about-stat-card">
            <span className="about-stat-num">{count}{suffix}</span>
            <span className="about-stat-label">{label}</span>
        </div>
    );
};

// ── Component ────────────────────────────────────────────────────────────────
export const About: React.FC = () => {
    const { t } = useLanguage();
    const statsRef = useRef<HTMLDivElement | null>(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const highlights = [
        { icon: <Layers size={28} className="highlight-icon" />, title: "Extensive Inventory", desc: "Comprehensive selection of premium international and robust local profiles in diverse color coatings." },
        { icon: <ShieldCheck size={28} className="highlight-icon" />, title: "Certified Safety", desc: "Engineered profiles and tempered glazing designed to meet rigorous wind, impact, and thermal standards." },
        { icon: <Hammer size={28} className="highlight-icon" />, title: "Professional Craftsmanship", desc: "Expert technicians handling precision cutting, fitting, and structural aluminum glazing installation." },
        { icon: <Sparkles size={28} className="highlight-icon" />, title: "Granite Solutions", desc: "Dual specialty integrating premium granite installations for complete, premium exterior and interior finishes." },
    ];

    return (
        <section id="about" className="section section-about">
            <div className="container">
                <div className="grid-2 align-center">
                    <div className="about-visual">
                        <div className="about-image-collage">
                            <img
                                src="/gallery/11.jpg"
                                alt="KS Aluminum Head Office & Work Area"
                                className="about-img main-img"
                            />
                            <div className="deco-border"></div>
                        </div>

                        {/* ── Animated Stats Row ──────────────────────────── */}
                        <div className="about-stats-row" ref={statsRef}>
                            <StatCard target={10} suffix="+" label={t('about_stat_years_label')} trigger={statsVisible} />
                            <StatCard target={100} suffix="+" label="Completed Projects" trigger={statsVisible} />
                            <StatCard target={40} suffix="+" label="Dedicated Staff" trigger={statsVisible} />
                        </div>
                    </div>

                    <div className="about-text-content">
                        <span className="section-subtitle">{t('about_eyebrow')}</span>
                        <h2 className="section-title text-left">{t('about_title')}</h2>
                        <p className="about-paragraph">{t('about_desc1')}</p>
                        <p className="about-paragraph">{t('about_desc2')}</p>

                        <div className="about-badge-row">
                            <div className="badge-item">
                                <Sliders size={20} />
                                <span>Precision Tailored</span>
                            </div>
                            <div className="badge-item">
                                <ShieldCheck size={20} />
                                <span>Certified Weatherproof</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlight Grid */}
                <div className="about-highlights-grid grid-4">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="highlight-card transition-hover">
                            <div className="icon-wrapper">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
