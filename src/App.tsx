import { useState, useEffect, useRef, type ReactNode } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import './App.css';

// ── Scroll-reveal wrapper ────────────────────────────────────────────────────
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const dirClass = `reveal-${direction}`;
  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ── Need React import for JSX ────────────────────────────────────────────────
import React from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const initAudio = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(v => {
        v.muted = false;
        v.play().catch(() => { });
      });
    };
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('touchstart', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });
    return () => {
      window.removeEventListener('click', initAudio);
      window.removeEventListener('touchstart', initAudio);
      window.removeEventListener('keydown', initAudio);
    };
  }, []);

  const renderHomeContent = () => (
    <>
      <Hero onScrollTo={handlePageChange} />

      {/* ── Who We Are ──────────────────────────────────────────────── */}
      <section className="section section-about-teaser section-bg-alt">
        <div className="container">
          <div className="grid-2 align-center">
            <Reveal direction="left">
              <div className="teaser-content">
                <span className="section-subtitle">Who We Are</span>
                <h2 className="section-title text-left">Pioneering Architectural Framing &amp; Cladding</h2>
                <p className="teaser-paragraph" style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-body)' }}>
                  <strong>KS Aluminum Works And Trade PLC</strong> is a leading specialist in the supply, fabrication, and installation of superior architectural aluminum profiles and glass products in Ethiopia.
                </p>
                <button onClick={() => handlePageChange('about')} className="btn btn-primary">
                  Read Full Profile &amp; History →
                </button>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="teaser-visual">
                <img src="/gallery/aluminum-framing-3-1024x352.jpg" style={{ borderRadius: 'var(--radius-md)', width: '100%', objectFit: 'cover', border: '1px solid rgba(229, 193, 88, 0.2)' }} alt="KS Aluminum Framing Works" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Products Teaser ──────────────────────────────────────────── */}
      <section className="section section-products-teaser">
        <div className="container">
          <Reveal direction="up">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Catalog Preview</span>
              <h2 className="section-title">Premium Profile Extrusions &amp; Glazing</h2>
              <p className="section-desc">We offer heavy-duty imported and locally extruded glass and aluminum systems.</p>
            </div>
          </Reveal>
          <div className="grid-3" style={{ gap: '2rem', marginTop: '2.5rem' }}>
            {[
              { flag: '🇨🇳', title: 'Import Profiles', desc: 'Anodized and electrophoresis champagne, bronze, and silver finishes.' },
              { flag: '🇪🇹', title: 'Local Profiles', desc: 'High-durability structural profiles extruded locally in multiple colours.' },
              { flag: '💎', title: 'Glass Systems', desc: 'Tempered structural glazing and weatherproof composite ACP cladding panels.' },
            ].map((card, i) => (
              <Reveal key={i} direction="up" delay={i * 100}>
                <div className="card glass-dark text-center home-product-card">
                  <span style={{ fontSize: '2.5rem' }}>{card.flag}</span>
                  <h3 style={{ margin: '1rem 0', color: 'var(--text-white)' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#a0aec0' }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={300}>
            <div className="flex justify-center" style={{ marginTop: '2.5rem' }}>
              <button onClick={() => handlePageChange('products')} className="btn btn-accent">
                Browse Full Catalog Specs →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Company Video Section ────────────────────────────────────── */}
      <section className="section home-video-section">
        <div className="home-video-wrapper">
          <video
            className="home-video-el"
            src="/gallery/KS Aluminum Video.mp4"
            autoPlay
            loop
            playsInline
          />
          <div className="home-video-overlay">
            <Reveal direction="scale">
              <div className="home-video-inner">
                <span className="home-video-eyebrow">▶ In Action</span>
                <h2 className="home-video-title">See How We Build Excellence</h2>
                <p className="home-video-sub">From raw profile to precision installation — watch KS Aluminum deliver world-class craftsmanship across Ethiopia.</p>
                <button onClick={() => handlePageChange('gallery')} className="btn btn-accent">
                  Explore Full Gallery →
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Teaser ──────────────────────────────────────────── */}
      <section className="section section-services-teaser section-bg-alt">
        <div className="container text-center">
          <Reveal direction="up">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Complete Glazing &amp; Granite Fit-out Solutions</h2>
            <p className="section-desc" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              From initial dimensions measurement up to glass curtain wall installation and precision granite masonry, we supply safety-certified results.
            </p>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <button onClick={() => handlePageChange('services')} className="btn btn-primary">
              Explore Services &amp; Specifications →
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── Featured Gallery Teaser ──────────────────────────────────── */}
      <section className="section section-gallery-teaser">
        <div className="container">
          <Reveal direction="up">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Showcase Preview</span>
              <h2 className="section-title">Featured Project Gallery</h2>
            </div>
          </Reveal>
          <div className="grid-3" style={{ gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { src: '/gallery/Curtain wall.webp', alt: 'Curtain Wall Project' },
              { src: '/gallery/Composite Cladding.jpg', alt: 'Composite Cladding' },
              { src: '/gallery/Aluminum extrusion.jpeg', alt: 'Aluminium Extrusion' },
            ].map((img, i) => (
              <Reveal key={i} direction="up" delay={i * 120}>
                <div className="gallery-teaser-card">
                  <img src={img.src} style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '240px', objectFit: 'cover', border: '1px solid rgba(229,193,88,0.2)', display: 'block' }} alt={img.alt} />
                  <div className="gallery-teaser-label">{img.alt}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={360}>
            <div className="flex justify-center" style={{ marginTop: '2.5rem' }}>
              <button onClick={() => handlePageChange('gallery')} className="btn btn-primary">
                View Project Gallery →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar onScrollTo={handlePageChange} activeSection={currentPage} />

        <main className="main-content" style={{ minHeight: 'calc(100vh - 180px)', paddingTop: '80px' }}>
          {currentPage === 'home' && renderHomeContent()}
          {currentPage === 'about' && <About />}
          {currentPage === 'products' && <Products onNavigate={handlePageChange} />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'gallery' && <Gallery />}
          {currentPage === 'contact' && <Contact />}
        </main>

        <Footer onScrollTo={handlePageChange} />
        <AIAssistant />
      </div>
    </LanguageProvider>
  );
}

export default App;
