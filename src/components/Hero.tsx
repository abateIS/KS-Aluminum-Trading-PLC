import React from 'react';
import { ArrowRight, Compass, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
    onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
    const { t } = useLanguage();

    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-pattern"></div>

            <div className="hero-container container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Award size={16} className="badge-icon" />
                        <span>{t('hero_tag')}</span>
                    </div>

                    <h1 className="hero-title">
                        {t('hero_title')}
                    </h1>

                    <p className="hero-description">
                        {t('hero_subtitle')}
                    </p>

                    <div className="hero-cta-buttons">
                        <button
                            onClick={() => onScrollTo('products')}
                            className="btn btn-accent hero-btn animate-pulse"
                        >
                            {t('hero_cta_products')}
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onScrollTo('gallery')}
                            className="btn btn-outline-white hero-btn"
                        >
                            {t('hero_cta_gallery')}
                            <Compass size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
