import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

interface Client {
    name: string;
    logo: string;
    project: string;
    description: string;
}

const clients: Client[] = [
    {
        name: 'Ethiopian Air Force',
        logo: '/Notable Clients/AirForce.webp',
        project: 'Air Force Base Facility Glazing',
        description:
            'KS Aluminum Works supplied and installed high-performance aluminum curtain wall systems, structural glazing, and composite ACP cladding panels for multiple facility buildings at the Ethiopian Air Force base. The project required military-grade weather resistance, precision fabrication, and strict installation timelines. All window and door frames were custom-fabricated using heavy-duty imported aluminum profiles with anodized silver and champagne finishes.',
    },
    {
        name: 'Bishoftu City Administration',
        logo: '/Notable Clients/Bishoftu-City-Adminstration.png',
        project: 'Bishoftu City Corder Project',
        description:
            '<b>Bishoftu City Corder Project.</b> KS Aluminum Works and Trade PLC was contracted by the Bishoftu City Administration to supply and install aluminum window and door systems, glass curtain walls, and decorative ACP facade cladding for the landmark Corder city development project. The scope covered full exterior glazing, aluminum frame fabrication, and on-site installation across multiple floors of the complex. Premium electrophoresis champagne profiles and ocean-blue reflective glass were used to achieve the modern architectural vision of the city administration.',
    },
    {
        name: 'Gedeb Construction',
        logo: '/Notable Clients/Gedeb Construction.jpg',
        project: 'Multi-Storey Residential Glazing',
        description:
            'KS Aluminum supplied Gedeb Construction with locally extruded aluminum profiles and structural glass for a large-scale residential development project. The project involved manufacturing custom aluminum sliding windows, casement windows, and entrance door systems. All profiles were delivered in matte white and ivory finishes to match the architectural design. Quality anodized accessories, EPDM rubber gaskets, and weatherproof silicone sealants were also provided to ensure long-term durability.',
    },
    {
        name: 'Shimelis Getu Construction',
        logo: '/Notable Clients/Shimelis Getu Construction.jpg',
        project: 'Commercial Office Building Fit-Out',
        description:
            'KS Aluminum Works partnered with Shimelis Getu Construction for the full aluminum and glass fit-out of a commercial office building. The project covered supply and installation of floor-to-ceiling glass partitions, aluminum shopfront systems, curtain wall panels, and stainless steel handrails. Import-grade bronze and silver aluminum profiles were used throughout the building, complemented by 6mm tinted bronze glass for privacy and UV control.',
    },
    {
        name: 'Ethiopian Development Center',
        logo: '/Notable Clients/Ethiopian Development Center.png',
        project: 'Government Development Complex',
        description:
            'KS Aluminum Works was selected to provide aluminum fabrication and installation services for the Ethiopian Development Center complex. The scope included supply of heavy-duty imported aluminum profiles, double-glazed window systems, and fire-retardant ACP composite cladding panels. The project demanded high-precision engineering, with all profiles custom-cut and pre-assembled off-site before installation. The finished exterior reflects a clean, contemporary government facility aesthetic.',
    },
    {
        name: 'Ethiopian Navy Force',
        logo: '/Notable Clients/Ethiopian Navy Force.webp',
        project: 'Naval Facility Infrastructure Works',
        description:
            'KS Aluminum Works supplied corrosion-resistant, marine-grade aluminum profiles and tempered safety glass for the Ethiopian Navy Force facility infrastructure project. The materials were selected for their superior resistance to moisture and harsh environmental conditions. The contract included custom-fabricated aluminum louver systems, reinforced window frames, and structural glass bay installations. Stainless steel handrails and balustrades were also provided for safety compliance across walkway areas.',
    },
];

// 6 logos orbit evenly: 360/6 = 60° each, stagger delay = period/6
export const NotableClients: React.FC = () => {
    const [activeClient, setActiveClient] = useState<Client | null>(null);

    const createMarkup = (html: string) => ({ __html: html });

    return (
        <section className="notable-clients-section">
            <div className="container">
                <div className="section-title-wrapper nc-title-wrapper">
                    <span className="section-subtitle">Trusted By</span>
                    <h2 className="section-title">Our Notable Clients</h2>
                    <p className="section-desc">
                        Distinguished organisations across Ethiopia that trust KS Aluminum for quality
                        fabrication and precision installation. <em>Click a logo to see project details.</em>
                    </p>
                </div>

                <div className="nc-orbit-stage">
                    {/* Decorative orbit ring */}
                    <div className="nc-orbit-ring" />

                    {/* 6 orbiting logos */}
                    {clients.map((client, i) => (
                        <button
                            key={client.name}
                            className="nc-logo-planet"
                            style={{ '--planet-index': i, '--planet-total': clients.length } as React.CSSProperties}
                            onClick={() => setActiveClient(client)}
                            title={client.name}
                            aria-label={`View ${client.name} project details`}
                        >
                            <img src={client.logo} alt={client.name} className="nc-logo-img" />
                            <span className="nc-logo-name">{client.name}</span>
                        </button>
                    ))}

                    {/* Fixed centre hub */}
                    <div className="nc-center-hub">
                        <img src={logoImg} alt="KS Aluminum" className="nc-hub-logo" />
                        <span className="nc-hub-label">KS ALUMINUM</span>
                    </div>
                </div>
            </div>

            {/* Project description modal */}
            {activeClient && (
                <div className="nc-modal-overlay" onClick={() => setActiveClient(null)}>
                    <div className="nc-modal-card" onClick={e => e.stopPropagation()}>
                        <button className="nc-modal-close" onClick={() => setActiveClient(null)} aria-label="Close">✕</button>
                        <div className="nc-modal-header">
                            <div className="nc-modal-logo-wrap">
                                <img src={activeClient.logo} alt={activeClient.name} className="nc-modal-logo" />
                            </div>
                            <div>
                                <h3 className="nc-modal-client">{activeClient.name}</h3>
                                <p className="nc-modal-project">{activeClient.project}</p>
                            </div>
                        </div>
                        <div className="nc-modal-divider" />
                        <p
                            className="nc-modal-desc"
                            dangerouslySetInnerHTML={createMarkup(activeClient.description)}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
