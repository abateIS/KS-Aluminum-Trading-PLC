import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';
import usaFlag from '../assets/usa.png';
import ethFlag from '../assets/ethiopia.png';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
    onScrollTo: (sectionId: string) => void;
    activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { lang, setLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { labelKey: 'nav_home', id: 'home' },
        { labelKey: 'nav_about', id: 'about' },
        { labelKey: 'nav_products', id: 'products' },
        { labelKey: 'nav_services', id: 'services' },
        { labelKey: 'nav_gallery', id: 'gallery' },
        { labelKey: 'nav_contact', id: 'contact' },
    ];

    const handleItemClick = (id: string) => {
        setIsMenuOpen(false);
        onScrollTo(id);
    };

    const toggleLang = () => setLang(lang === 'en' ? 'am' : 'en');

    return (
        <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#home" className="navbar-brand-link" onClick={(e) => { e.preventDefault(); handleItemClick('home'); }}>
                    <img src={logoImg} alt="KS Aluminum Works" className="navbar-logo" />
                    <div className="brand-text-col">
                        <span className="brand-title">KS ALUMINUM</span>
                        <span className="brand-subtitle">Works &amp; Trade PLC</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleItemClick(item.id);
                                    }}
                                >
                                    {t(item.labelKey)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-cta-group">
                    {/* Language Toggle */}
                    <button
                        className="lang-toggle-btn"
                        onClick={toggleLang}
                        title={lang === 'en' ? 'Switch to Amharic' : 'Switch to English'}
                        aria-label="Toggle language"
                    >
                        <img src={lang === 'en' ? ethFlag : usaFlag} alt="" style={{ width: '18px', height: '12px', objectFit: 'cover', borderRadius: '1px' }} />
                        <span>{lang === 'en' ? 'አማ' : 'EN'}</span>
                    </button>

                    <div className="phone-cta-badge">
                        <Phone size={16} className="phone-anim" />
                        <div className="phone-numbers-stack">
                            <a href="tel:+251912253424" className="phone-stack-link">0912 253 424</a>
                            <a href="tel:+251910114323" className="phone-stack-link">0910 114 323</a>
                        </div>
                    </div>
                    <button
                        onClick={() => handleItemClick('contact')}
                        className="btn btn-accent header-btn"
                    >
                        {t('svc_cta_btn')}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleItemClick(item.id);
                                    }}
                                >
                                    {t(item.labelKey)}
                                </a>
                            </li>
                        ))}
                        <li className="mobile-cta-li" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="tel:+251912253424" className="mobile-phone-cta btn btn-outline">
                                <Phone size={18} />
                                <span>{t('nav_call_us')}: 0912 253 424</span>
                            </a>
                            <a href="tel:+251910114323" className="mobile-phone-cta btn btn-outline">
                                <Phone size={18} />
                                <span>{t('nav_call_us')}: 0910 114 323</span>
                            </a>
                        </li>
                        <li className="mobile-cta-li" style={{ display: 'flex', gap: '0.75rem' }}>
                            <button
                                onClick={() => handleItemClick('contact')}
                                className="btn btn-primary mobile-calc-btn"
                                style={{ flex: 1 }}
                            >
                                {t('svc_cta_btn')}
                            </button>
                            <button className="lang-toggle-btn" onClick={toggleLang} style={{ flex: 1 }}>
                                <img src={lang === 'en' ? ethFlag : usaFlag} alt="" style={{ width: '18px', height: '12px', objectFit: 'cover', borderRadius: '1px' }} />
                                <span>{lang === 'en' ? 'አማ' : 'EN'}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
