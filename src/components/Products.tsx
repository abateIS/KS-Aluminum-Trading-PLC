import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProductCategory {
    id: string;
    emoji: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    items: { label: string; note?: string }[];
    color: string;
}

interface ProductsProps {
    onNavigate: (pageId: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<string>('import-profile');

    const categories: ProductCategory[] = [
        {
            id: 'import-profile',
            emoji: '🇨🇳',
            title: t('svc_cat_import'),
            subtitle: 'Anodized & Electrophoresis Finishes',
            imageUrl: '/Service page images/Aluminum Profioles.jpg',
            items: [
                { label: 'Black Profile' },
                { label: 'Silver Profile' },
                { label: 'Bronze Profile' },
                { label: 'Coffee Electrophoresis Champagne' },
            ],
            color: '#1a3a5c',
        },
        {
            id: 'local-profile',
            emoji: '🇪🇹',
            title: t('svc_cat_local'),
            subtitle: 'Locally Extruded — Multiple Finishes',
            imageUrl: '/Service page images/Local Aluminum.jpeg',
            items: [
                { label: 'Black' },
                { label: 'Grey' },
                { label: 'Ivory' },
                { label: 'Bronze' },
                { label: 'Mat Coffee' },
                { label: 'White' },
                { label: 'Coffee Shine' },
                { label: 'Silver' },
            ],
            color: '#2d5016',
        },
        {
            id: 'glass',
            emoji: '💎',
            title: t('svc_cat_glass'),
            subtitle: 'Clear, Tinted & Reflective Options',
            imageUrl: '/Service page images/Structural & Decorative Glass.webp',
            items: [
                { label: 'Clear Glass', note: '4mm, 5mm, 6mm, 10mm & 12mm' },
                { label: 'Grey Glass', note: '5mm' },
                { label: 'Dark Grey Reflector', note: '5mm' },
                { label: 'Brown/Tea Glass', note: '5mm, 6mm' },
                { label: 'Light Blue Reflective', note: '5mm' },
                { label: 'Ocean Blue Reflective', note: '5mm' },
            ],
            color: '#0a3d62',
        },
        {
            id: 'acp',
            emoji: '🧱',
            title: t('svc_cat_acp'),
            subtitle: 'ACP Cladding — Weatherproof Facades',
            imageUrl: '/Service page images/Aluminium Composite Panel.jpg',
            items: [
                { label: 'Double F Cladding', note: 'Dual-Facing PE Core' },
                { label: 'Single F Cladding', note: 'Single-Facing PE Core' },
                { label: 'PE & Fire-Retardant Cores' },
            ],
            color: '#4a235a',
        },
        {
            id: 'accessories',
            emoji: '⚙️',
            title: t('svc_cat_acc'),
            subtitle: 'Hardware, Locks & Gaskets',
            imageUrl: '/Service page images/Aluminium Accessories.webp',
            items: [
                { label: 'Heavy-Duty Hinges & Pivots' },
                { label: 'Friction Stays & Lock Handles' },
                { label: 'Dual-Wheel Roller Assemblies' },
                { label: 'EPDM Weather Gaskets' },
            ],
            color: '#7b3f00',
        },
        {
            id: 'handrails',
            emoji: '🚧',
            title: t('svc_cat_rail'),
            subtitle: 'Balcony & Staircase Systems',
            imageUrl: '/Service page images/Handrails.webp',
            items: [
                { label: 'Glass-Secured Balustrades' },
                { label: 'Aluminium Framework Rails' },
                { label: 'Balcony Safety Railings' },
            ],
            color: '#1a252f',
        },
        {
            id: 'stainless',
            emoji: '🔩',
            title: t('svc_cat_steel'),
            subtitle: 'Polished & Brushed Satin Finishes',
            imageUrl: '/Service page images/Stainless Steel.jpg',
            items: [
                { label: 'Polished Chrome Mirror Sheets' },
                { label: 'Brushed Satin Pipes' },
                { label: 'Grade 304 & 316 Components' },
            ],
            color: '#2c3e50',
        },
    ];

    const active = categories.find(c => c.id === activeCategory) ?? categories[0];

    return (
        <section id="products" className="products-section">
            <div className="products-bg-pattern" />
            <div className="container products-container">

                {/* Header */}
                <div className="products-header">
                    <span className="products-eyebrow">{t('prod_eyebrow')}</span>
                    <h2 className="products-title">{t('prod_title')}</h2>
                    <p className="products-tagline">{t('prod_tagline')}</p>
                    <div className="products-header-line" />
                </div>

                {/* Category Tab Pills */}
                <div className="products-tab-scroll">
                    <div className="products-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`product-tab-pill ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                                style={activeCategory === cat.id ? { background: cat.color } : {}}
                            >
                                <span className="tab-pill-emoji">{cat.emoji}</span>
                                <span className="tab-pill-label">{cat.title.split(' ').slice(0, 2).join(' ')}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Category Detail Panel */}
                <div className="product-detail-panel" key={active.id}>
                    <div className="product-detail-visual">
                        <img
                            src={active.imageUrl}
                            alt={active.title}
                            className="product-detail-hero-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                            className="product-detail-color-bar"
                            style={{ background: active.color }}
                        />
                    </div>

                    <div className="product-detail-info">
                        <div className="product-detail-eyebrow">
                            <span className="detail-emoji">{active.emoji}</span>
                            <span className="detail-subtitle-txt">{active.subtitle}</span>
                        </div>
                        <h3 className="product-detail-title">{active.title}</h3>

                        <ul className="product-detail-items">
                            {active.items.map((item, i) => (
                                <li key={i} className="product-detail-item">
                                    <span className="product-pointer">👉</span>
                                    <span className="product-item-label">{item.label}</span>
                                    {item.note && (
                                        <span className="product-item-note">{item.note}</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <button
                            className="btn btn-primary product-cta-btn"
                            onClick={() => onNavigate('contact')}
                        >
                            {t('prod_contact_us')}
                        </button>
                    </div>
                </div>

                {/* All categories thumbnail strip */}
                <div className="products-thumb-strip">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`product-thumb ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <img src={cat.imageUrl} alt={cat.title} className="product-thumb-img" />
                            <div
                                className="product-thumb-overlay"
                                style={{ background: cat.color }}
                            />
                            <span className="product-thumb-emoji">{cat.emoji}</span>
                            <span className="product-thumb-label">{cat.title.split(' ').slice(0, 2).join(' ')}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
