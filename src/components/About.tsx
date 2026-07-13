import React from 'react';
import { Layers, ShieldCheck, Hammer, Sparkles, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
    const { t } = useLanguage();

    const highlights = [
        {
            icon: <Layers size={28} className="highlight-icon" />,
            title: "Extensive Inventory",
            desc: "Comprehensive selection of premium international and robust local profiles in diverse color coatings."
        },
        {
            icon: <ShieldCheck size={28} className="highlight-icon" />,
            title: "Certified Safety",
            desc: "Engineered profiles and tempered glazing designed to meet rigorous wind, impact, and thermal standards."
        },
        {
            icon: <Hammer size={28} className="highlight-icon" />,
            title: "Professional Craftsmanship",
            desc: "Expert technicians handling precision cutting, fitting, and structural aluminum glazing installation."
        },
        {
            icon: <Sparkles size={28} className="highlight-icon" />,
            title: "Granite Solutions",
            desc: "Dual specialty integrating premium granite installations for complete, premium exterior and interior finishes."
        }
    ];

    return (
        <section id="about" className="section section-about">
            <div className="container">
                <div className="grid-2 align-center">
                    <div className="about-visual">
                        <div className="about-image-collage">
                            <img
                                src="/gallery/11.jpg"
                                alt="KS Aluminum Head Office &amp; Work Area"
                                className="about-img main-img"
                            />
                            <div className="overlay-achievement glass">
                                <span className="achievement-num">10+</span>
                                <span className="achievement-lbl">{t('about_stat_years_label')}</span>
                            </div>
                            <div className="deco-border"></div>
                        </div>
                    </div>

                    <div className="about-text-content">
                        <span className="section-subtitle">{t('about_eyebrow')}</span>
                        <h2 className="section-title text-left">{t('about_title')}</h2>
                        <p className="about-paragraph">
                            {t('about_desc1')}
                        </p>
                        <p className="about-paragraph">
                            {t('about_desc2')}
                        </p>

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
