import { useState } from 'react';
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

// SVG Helper for teaser placeholders
const getTeaserPlaceholderSvg = (title: string) => {
  const t = encodeURIComponent(title);
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%25" height="100%25"><rect width="100%25" height="100%25" fill="%230b1c3a"/><rect x="20" y="20" width="560" height="360" rx="6" fill="none" stroke="%23e5c158" stroke-width="2" opacity="0.1"/><circle cx="300" cy="180" r="40" fill="%23e5c158" fill-opacity="0.05" stroke="%23e5c158" stroke-width="2" stroke-dasharray="6,6"/><text x="300" y="260" font-family="system-ui, sans-serif" font-size="20" fill="%23e5c158" font-weight="600" text-anchor="middle">${t}</text></svg>`;
};

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Teasers Render function for Homepage
  const renderHomeContent = () => (
    <>
      <Hero onScrollTo={handlePageChange} />

      {/* About Us Teaser Section */}
      <section className="section section-about-teaser section-bg-alt">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="teaser-content">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title text-left">Pioneering Architectural Framing & Cladding</h2>
              <p className="teaser-paragraph" style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--text-body)' }}>
                <strong>KS Aluminum Work and Granite Solution PLC</strong> is a leading specialist in the supply, fabrication, and installation of superior architectural aluminum profiles and glass products in Ethiopia.
              </p>
              <button onClick={() => handlePageChange('about')} className="btn btn-primary">
                Read Full Profile & History →
              </button>
            </div>
            <div className="teaser-visual">
              <img src={getTeaserPlaceholderSvg('KS Aluminum Works')} style={{ borderRadius: 'var(--radius-md)', width: '100%', border: '1px solid rgba(229, 193, 88, 0.2)' }} alt="About Preview" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Teaser Section */}
      <section className="section section-products-teaser">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Catalog Preview</span>
            <h2 className="section-title">Premium Profile Extrusions & Glazing</h2>
            <p className="section-desc">We offer heavy-duty imported and locally extruded glass and aluminum systems.</p>
          </div>
          <div className="grid-3" style={{ gap: '2rem', marginTop: '2.5rem' }}>
            <div className="card glass-dark text-center" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '2.5rem' }}>🇨🇳</span>
              <h3 style={{ margin: '1rem 0', color: 'var(--text-white)' }}>Import Profiles</h3>
              <p style={{ fontSize: '0.85rem', color: '#a0aec0' }}>Anodized and electrophoresis champagne, bronze, and silver finishes.</p>
            </div>
            <div className="card glass-dark text-center" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '2.5rem' }}>🇪🇹</span>
              <h3 style={{ margin: '1rem 0', color: 'var(--text-white)' }}>Local Profiles</h3>
              <p style={{ fontSize: '0.85rem', color: '#a0aec0' }}>High-durability structural profiles extruded locally in multiple colours.</p>
            </div>
            <div className="card glass-dark text-center" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '2.5rem' }}>💎</span>
              <h3 style={{ margin: '1rem 0', color: 'var(--text-white)' }}>Glass Systems</h3>
              <p style={{ fontSize: '0.85rem', color: '#a0aec0' }}>Tempered structural glazing and weatherproof composite ACP cladding panels.</p>
            </div>
          </div>
          <div className="flex justify-center" style={{ marginTop: '2.5rem' }}>
            <button onClick={() => handlePageChange('products')} className="btn btn-accent">
              Browse Full Catalog Specs →
            </button>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="section section-services-teaser section-bg-alt">
        <div className="container text-center">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Complete Glazing & Granite Fit-out Solutions</h2>
          <p className="section-desc" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            From initial dimensions measurement up to glass curtain wall installation and precision granite masonry, we supply safety-certified results.
          </p>
          <button onClick={() => handlePageChange('services')} className="btn btn-primary">
            Explore Services & Specifications →
          </button>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="section section-gallery-teaser">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Showcase Preview</span>
            <h2 className="section-title">Featured Project Gallery</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem', marginTop: '2.5rem' }}>
            <img src="/gallery/Curtain wall.webp" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '240px', objectFit: 'cover', border: '1px solid rgba(229,193,88,0.2)' }} alt="Curtain Wall Project" />
            <img src="/gallery/Composite Cladding.jpg" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '240px', objectFit: 'cover', border: '1px solid rgba(229,193,88,0.2)' }} alt="Composite Cladding" />
            <img src="/gallery/Aluminum extrusion.jpeg" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '240px', objectFit: 'cover', border: '1px solid rgba(229,193,88,0.2)' }} alt="Aluminium Extrusion" />
          </div>
          <div className="flex justify-center" style={{ marginTop: '2.5rem' }}>
            <button onClick={() => handlePageChange('gallery')} className="btn btn-primary">
              View Project Gallery →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section directly on home page for quick forms */}
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
          {currentPage === 'products' && <Products />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'gallery' && <Gallery />}
          {currentPage === 'contact' && <Contact />}
        </main>

        <Footer onScrollTo={handlePageChange} />

        {/* Floating AI Assistant Chatbot widget */}
        <AIAssistant />
      </div>
    </LanguageProvider>
  );
}

export default App;
