import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';

interface GalleryItem {
    id: string;
    src: string;
    thumb: string;
    caption: string;
}

const galleryItems: GalleryItem[] = [
    { id: 'g10', src: '/gallery/Curtain wall.webp', thumb: '/gallery/Curtain wall.webp', caption: 'Curtain Wall Installation Project' },
    { id: 'g11', src: '/gallery/Composite Cladding.jpg', thumb: '/gallery/Composite Cladding.jpg', caption: 'Composite Panel Cladding Works' },
    { id: 'g12', src: '/gallery/Aluminum extrusion.jpeg', thumb: '/gallery/Aluminum extrusion.jpeg', caption: 'Aluminium Extrusion Fabrication' },
    { id: 'g1', src: '/gallery/12.jpg', thumb: '/gallery/12.jpg', caption: 'Window Profile Installation' },
    { id: 'g2', src: '/gallery/13.jpg', thumb: '/gallery/13.jpg', caption: 'Aluminium Architectural Assembly' },
    { id: 'g3', src: '/gallery/14.jpg', thumb: '/gallery/14.jpg', caption: 'Facade Framing & Glazing' },
    { id: 'g4', src: '/gallery/15.jpg', thumb: '/gallery/15.jpg', caption: 'Imported Aluminum Profile Stock' },
    { id: 'g5', src: '/gallery/16.jpg', thumb: '/gallery/16.jpg', caption: 'Precision Profile Fabrication' },
    { id: 'g6', src: '/gallery/17.jpg', thumb: '/gallery/17.jpg', caption: 'Composite Panel Cladding' },
    { id: 'g7', src: '/gallery/18.jpg', thumb: '/gallery/18.jpg', caption: 'Polished Handrails Installation' },
    { id: 'g8', src: '/gallery/19.jpg', thumb: '/gallery/19.jpg', caption: 'Structural Glass & Accessories Supply' },
    { id: 'g9', src: '/gallery/11.jpg', thumb: '/gallery/11.jpg', caption: 'KS Aluminum Office & Work Area' },
];

export const Gallery: React.FC = () => {
    const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-bg-pattern" />
            <div className="container gallery-container">

                {/* Header */}
                <div className="gallery-header">
                    <span className="gallery-eyebrow">Our Work</span>
                    <h2 className="gallery-title">Gallery</h2>
                    <p className="gallery-tagline">
                        A visual showcase of KS Aluminium projects, fabrication work, and product installations.
                    </p>
                    <div className="gallery-header-line" />
                </div>

                {/* ── Hero Video Banner ──────────────────────────────────── */}
                <div className="gallery-video-hero">
                    <video
                        className="gallery-video-el"
                        src="/gallery/KS Aluminum Video.mp4"
                        autoPlay
                        loop
                        playsInline
                    />
                    <div className="gallery-video-overlay">
                        <div className="gallery-video-badge">
                            <span className="video-badge-dot" />
                            LIVE — Watch Our Work
                        </div>
                        <h3 className="gallery-video-title">KS Aluminum Works &amp; Trade PLC</h3>
                        <p className="gallery-video-sub">Ethiopia's premier aluminum profiles &amp; glass fabrication partner</p>
                    </div>
                </div>

                {/* Photo Count */}
                <div className="gallery-stats-row">
                    <div className="gallery-stat glass">
                        <Camera size={22} />
                        <span><strong>{galleryItems.length}</strong> Photos</span>
                    </div>
                </div>

                {/* ── Flat Masonry Grid ─────────────────────────────────── */}
                <div className="gallery-grid">
                    {galleryItems.map((item, i) => (
                        <button
                            key={item.id}
                            className={`gallery-item gallery-item--${i % 5 === 0 ? 'wide' : 'normal'}`}
                            onClick={() => setLightboxItem(item)}
                            aria-label={`Open ${item.caption}`}
                        >
                            <img src={item.thumb} alt={item.caption} className="gallery-item-img" />
                            <div className="gallery-item-overlay">
                                <div className="gallery-item-caption">
                                    <span className="gallery-item-label">{item.caption}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="gallery-upload-banner glass">
                    <Camera size={28} className="gallery-upload-icon" />
                    <div>
                        <h4>Request On-Site Project Consultation</h4>
                        <p>Our engineering and glass installation crews serve Bishoftu, Addis Ababa, and nearby cities.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary gallery-upload-btn"
                        onClick={e => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxItem && (
                <div className="gallery-lightbox" onClick={() => setLightboxItem(null)}>
                    <button className="lightbox-close" onClick={() => setLightboxItem(null)} aria-label="Close lightbox">
                        <X size={30} />
                    </button>
                    <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                        <img src={lightboxItem.src} alt={lightboxItem.caption} className="lightbox-media" />
                        <div className="lightbox-caption">
                            <span className="lightbox-title">{lightboxItem.caption}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
