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

const GENERAL_DISCLAIMER_TEXT = "Looking for something else? The items listed above are just our most popular selections. We carry a wide range of additional profiles, glass dimensions, custom colors, hardware, and architectural toolings in our warehouse. Just contact us for any specific requirements!";

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
                { label: 'Import Profile - Matte Black', note: 'Jet Black, Matte Finish' },
                { label: 'Import Profile - Classic Silver', note: 'Bright & Matte Silver' },
                { label: 'Import Profile - Architectural Bronze', note: 'Dark & Light Bronze Options' },
                { label: 'Import Profile - Champagne', note: 'Coffee Electrophoresis Champagne' },
                { label: 'Import Profile - Wood Grain', note: 'Oak, Walnut & Cherry finishes' },
                { label: 'Heavy Curtain Wall Series', note: 'Mullion & Transom systems' },
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
                { label: 'Standard Windows/Doors Profile', note: 'Black, Grey, Ivory, Bronze, Mat Coffee, White, Silver' },
                { label: 'Local Office Partition Profiles', note: 'Lightweight structural dividers' },
                { label: 'Local Aluminum Louver Blades', note: 'Fixed and adjustable ventilation blades' },
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
                { label: 'Clear Architectural Float Glass', note: '4mm, 5mm, 6mm, 8mm, 10mm, 12mm' },
                { label: 'Toned Grey & Dark Grey Glass', note: '5mm, 6mm, 8mm' },
                { label: 'Bronze & Blue Tinted Glass', note: '5mm, 6mm' },
                { label: 'Ocean Blue Reflective Glass', note: '5mm, 6mm' },
                { label: 'Tempered / Toughened Safety Glass', note: '6mm, 8mm, 10mm, 12mm' },
                { label: 'Frosted & Patterned Glass', note: '4mm, 5mm, 6mm' },
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
                { label: 'Standard Double F Cladding', note: 'Dual-Facing PE Core. Silver, White, Blue, Red, Gold, Black' },
                { label: 'Fire-Retardant ACP (FR Grade)', note: 'B1 & A2 Fire Rating compliance' },
                { label: 'Wood/Marble Texture ACP', note: 'Printed PE coatings simulating natural textures' },
                { label: 'Single F Cladding', note: 'Single-Facing PE Core for quick interior works' },
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
                { label: 'Window & Door Locking Gears', note: 'Multi-point espagnolette & crescent locks' },
                { label: 'Friction Stays & Heavy Hinges', note: 'Grade 304 Stainless Steel' },
                { label: 'Structural Silicones & Gaskets', note: 'Neutral cure sealant & EPDM rubbers' },
                { label: 'Sliding Door & Window Rollers', note: 'Nylon & Brass adjustable wheels' },
                { label: 'Spider Glass Routels & Fittings', note: 'For frameless canopy/facade glazing' },
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
                { label: 'Frameless Glass Balustrade Bases', note: 'Heavy duty aluminum U-channels' },
                { label: 'Aluminium Framework Rails', note: 'Corrosion resistant top rails' },
                { label: 'Balcony Safety Railings', note: 'Post and rail systems' },
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
                { label: 'Stainless Steel Handrail Pipes', note: 'Polished chrome mirror and satin finishes' },
                { label: 'Stainless Steel Glass Standoffs', note: 'Pins for frameless staircase glass' },
                { label: 'Grade 304 & 316 Components', note: 'Industrial structural standard' },
            ],
            color: '#2c3e50',
        },
        {
            id: 'others',
            emoji: '🔨',
            title: 'Other Products & Toolings',
            subtitle: 'Fabrication Machinery & Supplies',
            imageUrl: '/gallery/12.jpg',
            items: [
                { label: 'Aluminum Cutting Machinery', note: 'Double mitre chop saws & routers' },
                { label: 'TCT Saw Blades & Drilling Bits', note: 'Tungsten carbide extrusions bits' },
                { label: 'Glass Installation Suction Lifters', note: 'Heavy-duty vacuum cups' },
            ],
            color: '#4e5659',
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

                {/* General Disclaimer */}
                <div className="products-disclaimer" style={{ marginTop: '2rem', marginBottom: '2rem', padding: '1.25rem 1.5rem', background: 'rgba(229, 193, 88, 0.08)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                        <strong style={{ color: 'var(--text-white)' }}>Looking for something specific? </strong>
                        {GENERAL_DISCLAIMER_TEXT}
                    </p>
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

