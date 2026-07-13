import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProfileGroup {
    flag: string;
    origin: string;
    label: string;
    colors: string[];
}

interface ServiceGroup {
    icon: string;
    label: string;
    items: string[];
}

const profiles: ProfileGroup[] = [
    {
        flag: '🇨🇳',
        origin: 'Import',
        label: 'Import Aluminium Profile',
        colors: ['Black', 'Silver', 'Bronze', 'Coffee Electrophoresis Champagne'],
    },
    {
        flag: '🇪🇹',
        origin: 'Local',
        label: 'Local Aluminium Profile',
        colors: ['Black', 'Grey', 'Ivory', 'Bronze', 'Mat Coffee', 'White', 'Coffee Shine', 'Silver'],
    },
];

const services: ServiceGroup[] = [
    {
        icon: '💎',
        label: 'Glasses',
        items: [
            'Clear Glass: 4mm, 5mm, 6mm, 10mm & 12mm',
            'Tinted Grey Glass: 5mm',
            'Dark Grey Reflector: 5mm',
            'Bronze/Tea Glass: 5mm, 6mm',
            'Light Blue Reflective option: 5mm',
            'Premium Ocean Blue Glass: 5mm',
        ],
    },
    {
        icon: '🧱',
        label: 'Aluminium Composite Panel',
        items: [
            'Double F Cladding: Premium Structural Grade',
            'Single F Cladding: Decorative Facades',
            'Weatherproof PE & Fire-Retardant Cores',
        ],
    },
    {
        icon: '⚙️',
        label: 'Aluminium Accessories',
        items: [
            'Heavy-Duty Hinges, Pivots & Stays',
            'Friction Stays & Lock Handles',
            'Dual-Wheel Roller Assemblies',
            'Weatherproof EPDM Gaskets & Sealants',
        ],
    },
    {
        icon: '🚧',
        label: 'Handrails',
        items: [
            'Glass-Secured Architectural Balustrades',
            'Structural High-Precision Stairway Rails',
            'Balcony Safety Rallings & Frames',
            'Corrosion-Resistant Floor Mount Plates',
        ],
    },
    {
        icon: '🔩',
        label: 'Stainless Steel',
        items: [
            'Grade 304 & 316 Premium Profiles',
            'Satin Brushed & Polished Chrome Tubes',
            'Structural Handrail Balusters & Fixings',
            'Highly Polished Mirror Sheet Facades',
        ],
    },
];

export const Services: React.FC = () => {
    const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const { t } = useLanguage();

    const profilesTranslated = [
        { ...profiles[0], origin: t('svc_import_origin') },
        { ...profiles[1], origin: t('svc_local_origin') },
    ];

    // Custom L-Angle Aluminum Profile Indicator SVG
    const renderLAngleBullet = () => (
        <svg viewBox="0 0 12 12" width="10" height="10" style={{ flexShrink: 0, marginRight: '10px', marginTop: '6px', color: 'var(--accent-light)' }} aria-hidden="true">
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

                {/* ── Aluminium Profiles ─────────────────────────────────────── */}
                <div className="profiles-grid">
                    {profilesTranslated.map((group, idx) => (
                        <div
                            key={idx}
                            className={`profile-card${hoveredProfile === idx ? ' hovered' : ''}`}
                            onMouseEnter={() => setHoveredProfile(idx)}
                            onMouseLeave={() => setHoveredProfile(null)}
                        >
                            {/* Card glow ring */}
                            <div className="profile-card-glow" />

                            <div className="profile-card-header">
                                <span className="profile-flag">{group.flag}</span>
                                <div>
                                    <span className="profile-origin-badge">{group.origin}</span>
                                    <h3 className="profile-card-title">{group.label}</h3>
                                </div>
                            </div>

                            <ul className="color-list">
                                {group.colors.map((color, ci) => (
                                    <li key={ci} className="color-list-item">
                                        {renderLAngleBullet()}
                                        <span className="color-name">{color}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="services-divider">
                    <span className="divider-line" />
                    <span className="divider-icon">✦</span>
                    <span className="divider-line" />
                </div>

                {/* ── Materials & Services Grid ───────────────────────────────── */}
                <div className="materials-grid">
                    {services.map((svc, idx) => (
                        <div
                            key={idx}
                            className={`material-card ${hoveredService === idx ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredService(idx)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="material-card-glow" />
                            <div className="material-card-header">
                                <span className="material-diamond">{svc.icon}</span>
                                <h3 className="material-label">{svc.label}</h3>
                            </div>

                            <ul className="material-items-list">
                                {svc.items.map((item, ii) => (
                                    <li key={ii} className="material-item">
                                        {renderLAngleBullet()}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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
        </section>
    );
};
