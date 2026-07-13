import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const FAQ_RESPONSES: { keywords: string[]; answer: string }[] = [
    {
        keywords: ['product', 'offer', 'catalog', 'what do you sell', 'sell', 'buy', 'ምርት', 'ምን'],
        answer: 'We supply premium Imported Aluminium Profiles (Black, Silver, Bronze, Coffee Champagne), Locally Extruded Profiles (multiple finishes), Structural Glass, ACP Cladding Panels, handrails, stainless steel, and accessories.'
    },
    {
        keywords: ['glass', 'thickness', 'type', 'glazing', 'ብርጭቆ'],
        answer: 'Glass options: Clear (4mm–12mm), Grey (5mm), Dark Grey (5mm), Brown (5mm/6mm), Blue (5mm), Ocean Blue Reflective (5mm).'
    },
    {
        keywords: ['location', 'address', 'office', 'where', 'place', 'map', 'bishoftu', 'ቢሾፍቱ', 'ቦታ'],
        answer: 'Head Office: Bishoftu (Debre Zeyit), Oromia, Ethiopia. View on Google Maps: https://maps.app.goo.gl/nSsft9tUcrxKGNRv9'
    },
    {
        keywords: ['phone', 'contact', 'call', 'number', 'email', 'talk', 'sales', 'ስልክ', 'ይደውሉ'],
        answer: 'Call us: 📞 0912 253 424 or 📞 0910 114 323. Email: info@ksaluminum.com'
    },
    {
        keywords: ['profile', 'aluminum', 'colour', 'color', 'shades', 'local', 'import', 'ፕሮፋይል'],
        answer: 'Import profiles: Black, Silver, Bronze, Coffee Champagne. Local profiles: Black, Grey, Ivory, Bronze, Matte Coffee, White, Coffee Shine, Silver.'
    },
    {
        keywords: ['acp', 'composite', 'cladding', 'ፓናል'],
        answer: 'ACP panels in Double F (Dual-Facing) and Single F (Single-Facing) — ideal for weatherproof modern facades.'
    },
    {
        keywords: ['handrail', 'balcony', 'stainless', 'ሬሊንግ'],
        answer: 'We supply glass balustrades, aluminium handrails, structural safety bars, and Grade 304/316 stainless steel components.'
    }
];

export const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: t('ai_greeting') }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;
        setMessages(prev => [...prev, { sender: 'user', text }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const query = text.toLowerCase();
            let matchedAnswer = 'For custom requirements or pricing, call 📞 0912 253 424 or email sales@ksaluminum.com. You can also ask about "profiles", "glass", "ACP", or "location".';
            for (const item of FAQ_RESPONSES) {
                if (item.keywords.some(kw => query.includes(kw))) {
                    matchedAnswer = item.answer;
                    break;
                }
            }
            setMessages(prev => [...prev, { sender: 'bot', text: matchedAnswer }]);
            setIsTyping(false);
        }, 450);
    };

    const quickPrompts = [
        { label: t('ai_quick1'), query: 'product' },
        { label: t('ai_quick2'), query: 'location' },
        { label: t('ai_quick3'), query: 'call' },
        { label: t('ai_quick4'), query: 'glass thickness' },
    ];

    return (
        <div className="ai-assistant-wrapper">
            {/* Floating trigger button with blinking name */}
            {!isOpen && (
                <button
                    className="ai-chat-trigger"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open AI Assistant"
                >
                    <MessageSquare size={22} className="phone-anim" />
                    <span className="ai-trigger-label">KS Assistant</span>
                    <span className="trigger-pulse"></span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="ai-chat-window glass-dark animation-fadeIn">
                    <div className="ai-chat-header">
                        <div className="ai-brand">
                            <span className="ai-dot animate-pulse"></span>
                            <h4>KS AI Support</h4>
                        </div>
                        <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    <div className="ai-messages-container">
                        {messages.map((m, i) => (
                            <div key={i} className={`ai-message-bubble ${m.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
                                <p>{m.text}</p>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="ai-message-bubble bot-msg typing-bubble">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="ai-quick-prompts">
                        {quickPrompts.map((q, i) => (
                            <button key={i} className="quick-prompt-btn glass" onClick={() => handleSend(q.query)}>
                                {q.label}
                            </button>
                        ))}
                    </div>

                    <div className="ai-chat-input-row">
                        <input
                            type="text"
                            placeholder={t('ai_placeholder')}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                            className="ai-text-input"
                        />
                        <button className="ai-send-btn btn btn-primary" onClick={() => handleSend(input)} aria-label="Send">
                            <Send size={14} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
