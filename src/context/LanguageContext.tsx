import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'am';

interface LangContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LangContextValue | null>(null);

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
    return ctx;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>('en');

    const t = (key: string): string => {
        const bundle = lang === 'am' ? am : en;
        return (bundle as Record<string, string>)[key] ?? (en as Record<string, string>)[key] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// ── English strings ──────────────────────────────────────────────────────────
const en: Record<string, string> = {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_products: 'Products',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_call_us: 'Call Us',

    // Hero
    hero_tag: 'Ethiopia\'s Premier Aluminium Supplier',
    hero_title: 'Precision Aluminium & Glass for Modern Architecture',
    hero_subtitle: 'Supplying premium imported & locally-extruded aluminium profiles, structural glass, composite panels, and specialist accessories to builders and contractors across Ethiopia.',
    hero_cta_products: 'Browse Products',
    hero_cta_gallery: 'View Gallery',

    // About
    about_eyebrow: 'Our Story',
    about_title: 'Built on Precision. Trusted Across Ethiopia.',
    about_desc1: 'KS Aluminum Works and Trade PLC was established with one goal: to bring world-class aluminium solutions to the Ethiopian construction and architectural sector. From glass and profiles to composite panels and handrails, we are the single reliable source.',
    about_desc2: 'Headquartered in Bishoftu (Debre Zeit), our team combines deep local market knowledge with globally-sourced materials to deliver precision-engineered products on time, every time.',
    about_stat_years: '+7 Years',
    about_stat_years_label: 'Of trusted service',
    about_stat_products: '50+',
    about_stat_products_label: 'Product lines',
    about_stat_clients: '200+',
    about_stat_clients_label: 'Projects delivered',
    about_cta: 'Learn More About Us',

    // Services
    svc_eyebrow: 'What We Offer',
    svc_title: 'KS ALUMINUM WORKS AND TRADE PLC',
    svc_tagline: 'Premium imported & locally extruded aluminium profiles, structural glass, composite panels, and accessories — all under one roof.',
    svc_cta_title: 'Need a custom specification?',
    svc_cta_desc: 'Our team is ready to assist with product selection and project estimates.',
    svc_cta_btn: 'Get in Touch',
    svc_import_origin: 'Import',
    svc_local_origin: 'Local',

    // Products
    prod_eyebrow: 'Product Catalog',
    prod_title: 'Our Range',
    prod_tagline: 'Browse our complete catalogue of aluminium profiles, glass, panels and specialist accessories.',
    prod_contact_us: 'Request a Quote',
    prod_spec: 'Spec Sheet',

    // Gallery
    gal_eyebrow: 'Our Work',
    gal_title: 'Gallery',
    gal_tagline: 'A visual showcase of KS Aluminium projects, fabrication work, and product installations.',
    gal_photos: 'Photos',
    gal_videos: 'Videos',
    gal_all: 'All',
    gal_cta_title: 'Request On-Site Project Consultation',
    gal_cta_desc: 'Our engineering and glass installation crews serve Bishoftu, Addis Ababa, and nearby cities.',
    gal_cta_btn: 'Contact Us',

    // Contact
    contact_eyebrow: 'Get In Touch',
    contact_title: 'Contact Us',
    contact_tagline: 'We\'re available Monday through Saturday. Reach out to discuss your aluminium and glass requirements.',
    contact_info_title: 'Contact Information',
    contact_address_label: 'Address',
    contact_address: 'Bishoftu (Debre Zeit), Oromia, Ethiopia',
    contact_phone_label: 'Phone',
    contact_email_label: 'Email',
    contact_hours_label: 'Business Hours',
    contact_hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
    contact_map_title: 'Find Us on the Map',
    contact_map_link: 'Open in Google Maps',
    contact_social: 'Follow Us',

    // Footer
    footer_about: 'Ethiopia\'s trusted supplier of premium aluminium profiles, structural glass, composite panels, and specialist accessories.',
    footer_quick_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_address: 'Bishoftu, Oromia, Ethiopia',
    footer_rights: 'All rights reserved.',
    footer_built: 'Built with ❤ in Ethiopia.',

    // AI Assistant
    ai_greeting: 'Hello! 👋 I\'m KS Aluminium\'s virtual assistant. Ask me about our products, location, or how to contact us.',
    ai_placeholder: 'Type your question…',
    ai_send: 'Send',
    ai_quick1: 'What products do you sell?',
    ai_quick2: 'Where are you located?',
    ai_quick3: 'Call me back',
    ai_quick4: 'Glass sizes',
};

// ── Amharic strings (contextual translation) ─────────────────────────────────
const am: Record<string, string> = {
    // Navbar
    nav_home: 'መነሻ',
    nav_about: 'ስለ እኛ',
    nav_products: 'ምርቶቻችን',
    nav_services: 'አገልግሎቶቻችን',
    nav_gallery: 'ፎቶ ማዕከል',
    nav_contact: 'ያግኙን',
    nav_call_us: 'ይደውሉልን',

    // Hero
    hero_tag: 'የኢትዮጵያ ቁንጮ አሉሚኒየም አቅራቢ',
    hero_title: 'ለዘመናዊ ሕንፃ ዲዛይን — ትክክለኛ አሉሚኒየምና ብርጭቆ',
    hero_subtitle: 'ከፍተኛ ጥራት ያለው ከውጭ የሚገቡ እና በአካባቢያችን የሚሠሩ አሉሚኒየም ፕሮፋይሎችን፣ የሕንፃ ብርጭቆን፣ ACP ፓናሎችን እና ልዩ ተጓዳኝ ዕቃዎችን ለሁሉም ሰሪዎች እና ተቋራጮች እናቀርባለን።',
    hero_cta_products: 'ምርቶቻችን',
    hero_cta_gallery: 'ፎቶ ልዩ',

    // About
    about_eyebrow: 'ታሪካችን',
    about_title: 'በጥሩ ሰራ ላይ የቆምን — በኢትዮጵያ ተወደዱ።',
    about_desc1: 'KS Aluminum Works and Trade PLC የተቋቋመው አንድ ዓላማ ይዞ ነው፦ ዓለም ደረጃ ያላቸው አሉሚኒየም ምርቶችን ለኢትዮጵያ የሕንፃ ዘርፍ ማቅረብ። ከብርጭቆ ፕሮፋይሎች እስከ ACP ፓናሎች፣ ሁሉም ምርቶቻችን ከአንድ ምንጭ ያገኛሉ።',
    about_desc2: 'ዋና ጽሕፈት ቤታችን ቢሾፍቱ (ደብረ ዘይት) ሲሆን፣ ቡድናችን ዓለም አቀፍ ቁሳቁሶችን ከአካባቢ ልምድ ጋር አዋህዶ ትክክለኛ ምርቶችን በወቅቱ ያቀርባል።',
    about_stat_years: '+7 ዓመታት',
    about_stat_years_label: 'የታመነ አገልግሎት',
    about_stat_products: '50+',
    about_stat_products_label: 'የምርት ዓይነቶች',
    about_stat_clients: '200+',
    about_stat_clients_label: 'ተጠናቀቁ ፕሮጀክቶች',
    about_cta: 'ስለ እኛ ዝርዝር',

    // Services
    svc_eyebrow: 'የምናቀርበው አገልግሎት',
    svc_title: 'KS ALUMINUM WORKS AND TRADE PLC',
    svc_tagline: 'ከፍተኛ ጥራት ያለው ከውጭ የሚገቡ እና አካባቢያዊ አሉሚኒየም ፕሮፋይሎችን፣ የሕንፃ ብርጭቆን፣ ACP ፓናሎችን እና ተጓዳኝ ዕቃዎችን ከአንድ ቦታ ያገኛሉ።',
    svc_cta_title: 'ልዩ ዝርዝር ያስፈልግዎታል?',
    svc_cta_desc: 'ቡድናችን ለምርት ምርጫ እና ሥራ ወጪ ግምት ዝግጁ ነው።',
    svc_cta_btn: 'ያነጋግሩን',
    svc_import_origin: 'ከውጭ',
    svc_local_origin: 'አካባቢያዊ',

    // Products
    prod_eyebrow: 'የምርት ዝርዝር',
    prod_title: 'ምርቶቻችን',
    prod_tagline: 'ሁሉንም አሉሚኒየም ፕሮፋይሎቻችን፣ ብርጭቆ፣ ፓናሎች እና ተጓዳኝ ዕቃዎቻችን ዳስሱ።',
    prod_contact_us: 'ዋጋ ጠይቁ',
    prod_spec: 'ዝርዝር ሰነድ',

    // Gallery
    gal_eyebrow: 'ሥራዎቻችን',
    gal_title: 'ፎቶ ማዕከል',
    gal_tagline: 'KS Aluminium ፕሮጀክቶች፣ ሙያዊ ሥራዎች እና ጫኖት ሂደቶች ፎቶ ስብስብ።',
    gal_photos: 'ፎቶዎች',
    gal_videos: 'ቪዲዮዎች',
    gal_all: 'ሁሉም',
    gal_cta_title: 'ወደ ፕሮጀክት ቦታ ምክር ጠይቁ',
    gal_cta_desc: 'ቡድናችን ቢሾፍቱ፣ አዲስ አበባ እና አቅራቢያ ከተሞችን ለማስ አልሚ ዝግጁ ነው።',
    gal_cta_btn: 'ያግኙን',

    // Contact
    contact_eyebrow: 'ያነጋግሩን',
    contact_title: 'አግኙን',
    contact_tagline: 'ከሰኞ እስከ ቅዳሜ ዝግጁ ነን። ስለ አሉሚኒየምና ብርጭቆ ፍላጎቶችዎ ያነጋግሩን።',
    contact_info_title: 'የድርጅቱ ዝርዝር',
    contact_address_label: 'አደራሻ',
    contact_address: 'ቢሾፍቱ (ደብረ ዘይት)፣ ኦሮሚያ፣ ኢትዮጵያ',
    contact_phone_label: 'ስልክ',
    contact_email_label: 'ኢሜይል',
    contact_hours_label: 'የሥራ ሰዓት',
    contact_hours: 'ሰኞ – ቅዳሜ፦ 8:00 ጥዋት – 6:00 ምሽት',
    contact_map_title: 'በካርታ ያግኙን',
    contact_map_link: 'ካርታ ከፍተህ ዝርዝር ይዩ',
    contact_social: 'ይከተሉን',

    // Footer
    footer_about: 'ለኢትዮጵያ ታዋቂ የሆነ ከፍተኛ ጥራት ያለው አሉሚኒየም፣ ብርጭቆ፣ ACP ፓናሎች እና ተጓዳኝ ዕቃዎች አቅራቢ።',
    footer_quick_links: 'ዋና ሊንኮች',
    footer_contact: 'ያግኙን',
    footer_address: 'ቢሾፍቱ፣ ኦሮሚያ፣ ኢትዮጵያ',
    footer_rights: 'መብቶች ሁሉ የተጠበቁ ናቸው።',
    footer_built: 'ከኢትዮጵያ ❤ ።',

    // AI Assistant
    ai_greeting: 'ሰላም! 👋 እኔ የKS Aluminium ምናባዊ ረዳት ነኝ። ምርቶቻችን፣ ቦታ ወይም አድራሻ ስለሚፈልጉ ይጠይቁኝ።',
    ai_placeholder: 'ጥያቄዎን ይጻፉ…',
    ai_send: 'ላክ',
    ai_quick1: 'ምን ምርት ይሸጣሉ?',
    ai_quick2: 'ቦታዎ የት ነው?',
    ai_quick3: 'መልሰው ይደውሉልኝ',
    ai_quick4: 'የብርጭቆ መጠኖች',
};
