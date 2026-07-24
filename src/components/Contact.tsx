import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSending, setIsSending] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const formattedText = `*New Website Inquiry*\n\n*Name:* ${name}\n*Contact:* ${contact}\n\n*Message:*\n${message}`;

        const BOT_TOKEN = "8450145686:AAESAPdnDPpMgVEkHSaclRI66EScEVPOGAU";
        const CHAT_ID = "-1004458466812";

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: formattedText,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                setIsSending(false);
                setSuccess(true);
                setName(''); setContact(''); setMessage('');
            } else {
                alert("Sorry, there was an error sending your message. Please try again.");
                setIsSending(false);
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please try again later.");
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="section section-contact section-bg-alt">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">{t('contact_eyebrow')}</span>
                    <h2 className="section-title">{t('contact_title')}</h2>
                    <p className="section-desc">{t('contact_tagline')}</p>
                </div>

                <div className="contact-layout grid-2">
                    {/* Form Card */}
                    <div className="contact-form-card glass">
                        <h3>Send Message</h3>

                        {success ? (
                            <div className="contact-success-msg animation-fadeIn">
                                <div className="success-badge"><MessageSquare size={32} /></div>
                                <h4>Message Transmitted!</h4>
                                <p>Thank you for reaching out. A KS Aluminum sales agent will respond shortly.</p>
                                <button onClick={() => setSuccess(false)} className="btn btn-primary">Send New Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="input-group">
                                    <label htmlFor="client-name">Your Full Name:</label>
                                    <input id="client-name" type="text" required value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Abebe Kebede" className="contact-text-input" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="client-contact">Phone or Email:</label>
                                    <input id="client-contact" type="text" required value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder="e.g. +251 9... or name@email.com" className="contact-text-input" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="client-msg">Project Requirement / Message:</label>
                                    <textarea id="client-msg" required rows={4} value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Describe your window, profile lengths, or granite requirements..."
                                        className="contact-textarea" />
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn flex items-center justify-center" disabled={isSending}>
                                    {isSending ? 'Sending...' : (<><span>Send Message</span><Send size={16} /></>)}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Column */}
                    <div className="contact-info-col">
                        <div className="contact-info-card glass-dark text-white">
                            <h3>{t('contact_info_title')}</h3>

                            <div className="contact-links-list">
                                <div className="contact-link-item">
                                    <Phone size={22} className="info-icon" />
                                    <div>
                                        <h4>{t('contact_phone_label')}</h4>
                                        <p><a href="tel:+251912253424" className="hover-accent">📞 0912 253 424</a></p>
                                        <p><a href="tel:+251911046073" className="hover-accent">📞 0911 046 073</a></p>
                                    </div>
                                </div>

                                <div className="contact-link-item">
                                    <Mail size={22} className="info-icon" />
                                    <div>
                                        <h4>{t('contact_email_label')}</h4>
                                        <p><a href="mailto:info@ksaluminum.com" className="hover-accent">info@ksaluminum.com</a></p>
                                        <p><a href="mailto:sales@ksaluminum.com" className="hover-accent">sales@ksaluminum.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-link-item">
                                    <MapPin size={22} className="info-icon" />
                                    <div>
                                        <h4>{t('contact_address_label')}</h4>
                                        <p>{t('contact_address')}</p>
                                        <p style={{ marginTop: '0.25rem' }}>
                                            <a href="https://maps.app.goo.gl/nSsft9tUcrxKGNRv9" target="_blank" rel="noopener noreferrer"
                                                className="text-accent hover-underline"
                                                style={{ fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <span>{t('contact_map_link')}</span><span>↗</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-link-item">
                                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
                                    <div>
                                        <h4>Tax Identification Number (TIN)</h4>
                                        <p style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1rem', letterSpacing: '0.05em' }}>0076860087</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="contact-social-section" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: 600 }}>{t('contact_social')}</h4>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <a href="#" className="social-link-item hover-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0aec0', fontSize: '0.85rem' }} onClick={e => e.preventDefault()}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className="social-link-item hover-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0aec0', fontSize: '0.85rem' }} onClick={e => e.preventDefault()}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="#" className="social-link-item hover-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0aec0', fontSize: '0.85rem' }} onClick={e => e.preventDefault()}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                        <span>Telegram</span>
                                    </a>
                                    <a href="#" className="social-link-item hover-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0aec0', fontSize: '0.85rem' }} onClick={e => e.preventDefault()}>
                                        <span style={{ fontWeight: 'bold' }}>🎵</span><span>TikTok</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Live Map Embed */}
                        <div className="contact-map-card glass" style={{ padding: '0.5rem', height: '300px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.4988350616!2d38.9774653!3d8.9328224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1d6df487a32d%3A0xc3cf9365e905d6e9!2sKS%2520ALUMINUM%2520WORKS%2520AND%2520TRADE%2520PLC!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                                width="100%" height="100%"
                                style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
                                allowFullScreen loading="lazy"
                                title="KS Aluminum Google Map Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
