import React, { useState } from 'react';
import { X, Play, Camera, Video } from 'lucide-react';

type MediaType = 'photo' | 'video';

interface GalleryItem {
    id: string;
    type: MediaType;
    src: string;
    thumb: string;
    caption: string;
    tag: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 'g1',
        type: 'photo',
        src: '/gallery/12.jpg',
        thumb: '/gallery/12.jpg',
        caption: 'Window Profile Installation',
        tag: 'Glazing',
    },
    {
        id: 'g2',
        type: 'photo',
        src: '/gallery/13.jpg',
        thumb: '/gallery/13.jpg',
        caption: 'Aluminium Architectural Assembly',
        tag: 'Profiles',
    },
    {
        id: 'g3',
        type: 'photo',
        src: '/gallery/14.jpg',
        thumb: '/gallery/14.jpg',
        caption: 'Facade Framing & Glazing',
        tag: 'Cladding',
    },
    {
        id: 'g4',
        type: 'photo',
        src: '/gallery/15.jpg',
        thumb: '/gallery/15.jpg',
        caption: 'Imported Aluminum Profile Stock',
        tag: 'Profiles',
    },
    {
        id: 'g5',
        type: 'photo',
        src: '/gallery/16.jpg',
        thumb: '/gallery/16.jpg',
        caption: 'Precision Profile Fabrication',
        tag: 'Workshop',
    },
    {
        id: 'g6',
        type: 'photo',
        src: '/gallery/17.jpg',
        thumb: '/gallery/17.jpg',
        caption: 'Composite Panel Cladding',
        tag: 'ACP',
    },
    {
        id: 'g7',
        type: 'photo',
        src: '/gallery/18.jpg',
        thumb: '/gallery/18.jpg',
        caption: 'Polished Handrails Installation',
        tag: 'Handrails',
    },
    {
        id: 'g8',
        type: 'photo',
        src: '/gallery/19.jpg',
        thumb: '/gallery/19.jpg',
        caption: 'Structural Glass & Accessories Supply',
        tag: 'Glass',
    },
    {
        id: 'g9',
        type: 'photo',
        src: '/gallery/11.jpg',
        thumb: '/gallery/11.jpg',
        caption: 'KS Aluminum Office & Work Area',
        tag: 'Office',
    },
    {
        id: 'v1',
        type: 'video',
        src: '',
        thumb: '/gallery/13.jpg',
        caption: 'Glass Installation Video',
        tag: 'Glazing',
    },
    {
        id: 'v2',
        type: 'video',
        src: '',
        thumb: '/gallery/16.jpg',
        caption: 'Profile Fabrication Video',
        tag: 'Workshop',
    },
];

const tags = ['All', 'Glazing', 'Profiles', 'Cladding', 'ACP', 'Handrails', 'Glass', 'Workshop', 'Office'];

export const Gallery: React.FC = () => {
    const [activeTag, setActiveTag] = useState('All');
    const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

    const filtered = activeTag === 'All'
        ? galleryItems
        : galleryItems.filter(i => i.tag === activeTag);

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

                {/* Media Type Stats */}
                <div className="gallery-stats-row">
                    <div className="gallery-stat glass">
                        <Camera size={22} />
                        <span><strong>{galleryItems.filter(i => i.type === 'photo').length}</strong> Photos</span>
                    </div>
                    <div className="gallery-stat glass">
                        <Video size={22} />
                        <span><strong>{galleryItems.filter(i => i.type === 'video').length}</strong> Videos</span>
                    </div>
                </div>

                {/* Filter Tags */}
                <div className="gallery-filter-row">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            className={`gallery-tag-btn ${activeTag === tag ? 'active' : ''}`}
                            onClick={() => setActiveTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="gallery-grid">
                    {filtered.map((item, i) => (
                        <button
                            key={item.id}
                            className={`gallery-item gallery-item--${i % 5 === 0 ? 'wide' : 'normal'}`}
                            onClick={() => setLightboxItem(item)}
                            aria-label={`Open ${item.caption}`}
                        >
                            <img src={item.thumb} alt={item.caption} className="gallery-item-img" />
                            <div className="gallery-item-overlay">
                                {item.type === 'video' && (
                                    <div className="gallery-play-btn">
                                        <Play size={28} fill="white" />
                                    </div>
                                )}
                                <div className="gallery-item-caption">
                                    <span className="gallery-item-tag">{item.tag}</span>
                                    <span className="gallery-item-label">{item.caption}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Upload prompt banner */}
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
                        {lightboxItem.type === 'photo' ? (
                            <img src={lightboxItem.src} alt={lightboxItem.caption} className="lightbox-media" />
                        ) : (
                            <div className="lightbox-video-placeholder">
                                <Play size={56} className="lbvp-icon" />
                                <p>Video: {lightboxItem.caption}</p>
                                <span>Installation demonstration in progress</span>
                            </div>
                        )}
                        <div className="lightbox-caption">
                            <span className="lightbox-tag">{lightboxItem.tag}</span>
                            <span className="lightbox-title">{lightboxItem.caption}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
