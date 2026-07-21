import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NotableClients } from './NotableClients';

interface ServiceCategory {
    id: string;
    badge: string;
    titleKey: string;
    image: string;
    items: string[];
}

const serviceCategories: ServiceCategory[] = [
    {
        id: 'import-profiles',
        badge: '🇨🇳',
        titleKey: 'svc_cat_import',
        image: '/Service page images/Aluminum Profioles.jpg',
        items: [
            'Premium electro-colored champagne finishes',
            'Sleek anodized black and silver options',
            'Rich bronze electrophoresis coating',
            'High weatherability structural profiles',
        ],
    },
    {
        id: 'local-profiles',
        badge: '🇪🇹',
        titleKey: 'svc_cat_local',
        image: '/Service page images/Local Aluminum.jpeg',
        items: [
            'Locally extruded matte white & grey',
            'Anodized silver and bronze finishes',
            'Polished coffee shine & ivory shades',
            'Flexible custom architectural sections',
        ],
    },
    {
        id: 'glass-works',
        badge: '💎',
        titleKey: 'svc_cat_glass',
        image: '/Service page images/Structural & Decorative Glass.webp',
        items: [
            'Clear Glass: 4mm, 5mm, 6mm, 10mm & 12mm',
            'Grey and dark grey reflective options: 5mm',
            'Bronze / tea colored glass: 5mm & 6mm',
            'Ocean blue high performance glass: 5mm',
        ],
    },
    {
        id: 'composite-panels',
        badge: '🧱',
        titleKey: 'svc_cat_acp',
        image: '/Service page images/Aluminium Composite Panel.jpg',
        items: [
            'Double F Cladding: Premium Structural Grade',
            'Single F Cladding: Decorative Interior Facades',
            'Weatherproof PE & Fire-Retardant Cores',
            'UV-resistant coil coating finishes',
        ],
    },
    {
        id: 'hardware-accessories',
        badge: '⚙️',
        titleKey: 'svc_cat_acc',
        image: '/Service page images/Aluminium Accessories.webp',
        items: [
            'Heavy-Duty Hinges, Pivots & Stays',
            'Friction Stays & Lock Handles',
            'Dual-Wheel Roller Assemblies',
            'Weatherproof EPDM Gaskets & Sealants',
        ],
    },
    {
        id: 'handrails-balustrades',
        badge: '🚧',
        titleKey: 'svc_cat_rail',
        image: '/Service page images/Handrails.webp',
        items: [
            'Glass-Secured Architectural Balustrades',
            'Structural High-Precision Stairway Rails',
            'Balcony Safety Railings & Frames',
            'Corrosion-Resistant Floor Mount Plates',
        ],
    },
    {
        id: 'stainless-steel',
        badge: '🔩',
        titleKey: 'svc_cat_steel',
        image: '/Service page images/Stainless Steel.jpg',
        items: [
            'Grade 304 & 316 Premium Profiles',
            'Satin Brushed & Polished Chrome Tubes',
            'Structural Handrail Balusters & Fixings',
            'Highly Polished Mirror Sheet Facades',
        ],
    },
];

export const Services: React.FC = () => {
    const { t } = useLanguage();
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Custom L-Angle Aluminum Profile Indicator SVG
    const renderLAngleBullet = () => (
        <svg viewBox="0 0 12 12" width="10" height="10" style={{ flexShrink: 0, marginRight: '10px', marginTop: '6px', color: 'var(--accent)' }} aria-hidden="true">
            <path d="M2,2 L10,2 L10,4 L4,4 L4,10 L2,10 Z" fill="currentColor" />
        </svg>
    );

    return (
        <section id="services" className="services-section">
            {/* Decorative background blobs */}
            <div className="services-bg-blob services-bg-blob--1" />
            <div className="services-bg-blob services-bg-blob--2" />

            <div className="container services-container">
                {/* Section Header */}
                <div className="services-header">
                    <span className="services-eyebrow">{t('svc_eyebrow')}</span>
                    <h2 className="services-title">
                        {t('svc_title')}
                    </h2>
                    <p className="services-tagline">
                        {t('svc_tagline')}
                    </p>
                    <div className="services-title-line" />
                </div>

                {/* ── 7 Vertical Scrolling Service Sections ───────────────────── */}
                <div className="vertical-services-list">
                    {serviceCategories.map((cat, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={cat.id}
                                className={`service-row ${isEven ? 'row-even' : 'row-odd'} ${hoveredIdx === idx ? 'focused' : ''}`}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {/* Text Details Pane */}
                                <div className="service-details-pane glass animate-fadeIn">
                                    <div className="service-pane-header">
                                        <span className="service-pane-badge">{cat.badge}</span>
                                        <h3 className="service-pane-title">{t(cat.titleKey)}</h3>
                                    </div>
                                    <ul className="service-specs-list">
                                        {cat.items.map((item, ii) => (
                                            <li key={ii} className="service-spec-item">
                                                {renderLAngleBullet()}
                                                <span className="color-name">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Graphic Frame Pane */}
                                <div className="service-graphic-pane">
                                    <div className="image-frame-container">
                                        <div className="frame-glow-ring" />
                                        <img
                                            src={cat.image}
                                            alt={t(cat.titleKey)}
                                            className="service-row-image"
                                            loading="lazy"
                                        />
                                        <div className="image-frame-border" />
                                        <span className="image-caption-tag">{t(cat.titleKey)}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Banner */}
                <div className="services-cta-banner glass">
                    <div className="cta-banner-inner">
                        <div>
                            <h3>{t('svc_cta_title')}</h3>
                            <p>{t('svc_cta_desc')}</p>
                        </div>
                        <a
                            href="#contact"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn btn-accent cta-banner-btn"
                        >
                            {t('svc_cta_btn')}
                        </a>
                    </div>
                </div>
            </div>
            <NotableClients />
        </section>
    );
};
