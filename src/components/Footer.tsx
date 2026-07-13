import React from 'react';
import { Phone, Clock, HelpCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
    onScrollTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="footer-container">
            <div className="container footer-grid grid-4">
                {/* Info Column */}
                <div className="footer-brand-col">
                    <div className="footer-brand" onClick={() => onScrollTo('hero')}>
                        <img src={logoImg} alt="KS Logo" className="footer-logo" />
                        <div>
                            <h3>KS ALUMINUM</h3>
                            <p>Works &amp; Trade PLC</p>
                        </div>
                    </div>
                    <p className="footer-mission">{t('footer_about')}</p>
                </div>

                {/* Navigation Column */}
                <div className="footer-links-col">
                    <h3>{t('footer_quick_links')}</h3>
                    <ul className="footer-links">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); onScrollTo('about'); }}>{t('nav_about')}</a></li>
                        <li><a href="#products" onClick={(e) => { e.preventDefault(); onScrollTo('products'); }}>{t('nav_products')}</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollTo('services'); }}>{t('nav_services')}</a></li>
                        <li><a href="#gallery" onClick={(e) => { e.preventDefault(); onScrollTo('gallery'); }}>{t('nav_gallery')}</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); onScrollTo('contact'); }}>{t('nav_contact')}</a></li>
                    </ul>
                </div>

                {/* Business Hours Column */}
                <div className="footer-hours-col">
                    <h3>{t('contact_hours_label')}</h3>
                    <ul className="hours-list">
                        <li className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Saturday: 8:00 AM – 4:00 PM</span>
                        </li>
                        <li className="flex items-center gap-2 font-semibold text-accent">
                            <Clock size={16} className="text-accent" />
                            <span>Sunday: Closed</span>
                        </li>
                    </ul>
                </div>

                {/* Support Column */}
                <div className="footer-support-col">
                    <h3>{t('contact_info_title')}</h3>
                    <div className="support-badge glass" style={{ marginBottom: '1rem' }}>
                        <Phone size={20} className="phone-anim" />
                        <div>
                            <p>{t('nav_call_us')}:</p>
                            <a href="tel:+251912253424" className="footer-phone-link">📞 0912 253 424</a>
                            <br />
                            <a href="tel:+251910114323" className="footer-phone-link">📞 0910 114 323</a>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e0', marginBottom: '0.5rem' }}>
                        📍 {t('footer_address')}
                    </p>
                    <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                        <a href="https://maps.app.goo.gl/nSsft9tUcrxKGNRv9" target="_blank" rel="noopener noreferrer"
                            style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                            {t('contact_map_link')} ↗
                        </a>
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                        <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: 'rgba(255,255,255,0.2)', color: '#cbd5e0' }} onClick={e => e.preventDefault()}>FB</a>
                        <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: 'rgba(255,255,255,0.2)', color: '#cbd5e0' }} onClick={e => e.preventDefault()}>IG</a>
                        <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: 'rgba(255,255,255,0.2)', color: '#cbd5e0' }} onClick={e => e.preventDefault()}>TG</a>
                        <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: 'rgba(255,255,255,0.2)', color: '#cbd5e0' }} onClick={e => e.preventDefault()}>TT</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container flex justify-between align-center mobile-stack-bottom">
                    <p>&copy; {currentYear} KS Aluminum Works And Trade PLC. {t('footer_rights')}</p>
                    <div className="footer-legal-links">
                        <a href="#legal" className="legal-link flex items-center gap-1">
                            <HelpCircle size={14} />
                            <span>{t('footer_built')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
