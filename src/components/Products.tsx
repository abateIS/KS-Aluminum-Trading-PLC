import React, { useState, useEffect } from 'react';

interface ProductCategory {
    id: string;
    emoji: string;
    flag?: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    altImages?: string[];
    items: { label: string; note?: string }[];
    color: string;
}

const getPlaceholderSvg = (title: string, subtitle: string, variant: string = '') => {
    const t = encodeURIComponent(title + (variant ? ` (${variant})` : ''));
    const s = encodeURIComponent(subtitle);
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%25" height="100%25"><rect width="100%25" height="100%25" fill="%23051833"/><rect x="40" y="40" width="720" height="520" rx="8" fill="none" stroke="%23e5c158" stroke-width="2" opacity="0.2"/><circle cx="400" cy="240" r="60" fill="%23e5c158" fill-opacity="0.05" stroke="%23e5c158" stroke-width="2" stroke-dasharray="8,8"/><text x="400" y="360" font-family="system-ui, sans-serif" font-size="24" fill="%23e5c158" font-weight="600" text-anchor="middle">${t}</text><text x="400" y="400" font-family="system-ui, sans-serif" font-size="16" fill="%2394a3b8" text-anchor="middle">${s}</text><text x="400" y="450" font-family="system-ui, sans-serif" font-size="12" fill="%23475569" text-anchor="middle" letter-spacing="1">KS ALUMINUM PLC - ASSET PLACEHOLDER</text></svg>`;
};

const categories: ProductCategory[] = [
    {
        id: 'import-profile',
        emoji: '🇨🇳',
        title: 'Import Aluminium Profile',
        subtitle: 'Anodized & Electrophoresis Finishes',
        imageUrl: '/gallery/15.jpg',
        altImages: [
            '/gallery/15.jpg',
            getPlaceholderSvg('Import Aluminium Profile', 'Anodized & Electrophoresis Finishes', 'Section B'),
        ],
        items: [
            { label: 'Black' },
            { label: 'Silver' },
            { label: 'Bronze' },
            { label: 'Coffee Electrophoresis Champagne' },
        ],
        color: '#1a3a5c',
    },
    {
        id: 'local-profile',
        emoji: '🇪🇹',
        title: 'Local Aluminium Profile',
        subtitle: 'Locally Extruded — Multiple Finishes',
        imageUrl: '/gallery/16.jpg',
        altImages: [
            '/gallery/16.jpg',
        ],
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
        title: 'Structural & Decorative Glass',
        subtitle: 'Clear, Tinted & Reflective Options',
        imageUrl: '/gallery/19.jpg',
        altImages: [
            '/gallery/19.jpg',
        ],
        items: [
            { label: 'Clear', note: '4mm, 5mm, 6mm, 10mm & 12mm' },
            { label: 'Grey', note: '5mm' },
            { label: 'Dark Grey', note: '5mm' },
            { label: 'Brown', note: '5mm, 6mm' },
            { label: 'Blue', note: '5mm' },
            { label: 'Ocean Blue Reflective', note: '5mm' },
        ],
        color: '#0a3d62',
    },
    {
        id: 'acp',
        emoji: '💎',
        title: 'Aluminium Composite Panel',
        subtitle: 'ACP Cladding — Weatherproof Facades',
        imageUrl: '/gallery/17.jpg',
        altImages: [
            '/gallery/17.jpg',
        ],
        items: [
            { label: 'Double F', note: 'Dual-Facing PE Core' },
            { label: 'Single F', note: 'Single-Facing PE Core' },
        ],
        color: '#4a235a',
    },
    {
        id: 'accessories',
        emoji: '💎',
        title: 'Aluminium Accessories',
        subtitle: 'Hardware, Locks & Gaskets',
        imageUrl: '/gallery/19.jpg',
        altImages: [],
        items: [
            { label: 'Heavy-Duty Hinges & Pivots' },
            { label: 'Dual-Wheel Roller Assemblies' },
            { label: 'Multipart Locks & Latches' },
            { label: 'EPDM Weather Gaskets' },
        ],
        color: '#7b3f00',
    },
    {
        id: 'handrails',
        emoji: '💎',
        title: 'Handrails',
        subtitle: 'Balcony & Staircase Systems',
        imageUrl: '/gallery/18.jpg',
        altImages: [],
        items: [
            { label: 'Glass-Secured Balustrades' },
            { label: 'Aluminium Framework Rails' },
            { label: 'Structural Safety Bars' },
        ],
        color: '#1a252f',
    },
    {
        id: 'stainless',
        emoji: '💎',
        title: 'Stainless Steel',
        subtitle: 'Polished & Brushed Satin Finishes',
        imageUrl: '/gallery/18.jpg',
        altImages: [],
        items: [
            { label: 'Polished Chrome Mirror Sheets' },
            { label: 'Brushed Satin Pipes' },
            { label: 'Grade 304 & 316 Components' },
        ],
        color: '#2c3e50',
    },
];

interface SlideShowProps {
    images: string[];
}

const Slideshow: React.FC<SlideShowProps> = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const allImages = images;

    useEffect(() => {
        if (allImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % allImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [allImages.length]);

    return (
        <div className="product-slideshow">
            {allImages.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt=""
                    className={`product-slide-img ${i === current ? 'active' : ''}`}
                />
            ))}
            {allImages.length > 1 && (
                <div className="slide-dots">
                    {allImages.map((_, i) => (
                        <button
                            key={i}
                            className={`slide-dot ${i === current ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('import-profile');
    const active = categories.find(c => c.id === activeCategory) ?? categories[0];

    return (
        <section id="products" className="products-section">
            <div className="products-bg-pattern" />
            <div className="container products-container">

                {/* Header */}
                <div className="products-header">
                    <span className="products-eyebrow">Our Range</span>
                    <h2 className="products-title">Products Catalog</h2>
                    <p className="products-tagline">
                        Explore our complete range of imported profiles, local extrusions, structural glazing, cladding, and accessories.
                    </p>
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
                        <Slideshow
                            images={[active.imageUrl, ...(active.altImages ?? [])]}
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

                        <a
                            href="#contact"
                            className="btn btn-primary product-cta-btn"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Enquire About This Product
                        </a>
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
