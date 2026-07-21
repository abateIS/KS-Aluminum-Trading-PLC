import React from 'react';
import logoImg from '../assets/logo.png';

const clients = [
    {
        name: 'Ethiopian Air Force',
        logo: '/Notable Clients/AirForce.webp',
    },
    {
        name: 'Bishoftu City Administration',
        logo: '/Notable Clients/Bishoftu-City-Adminstration.png',
    },
    {
        name: 'Gedeb Construction',
        logo: '/Notable Clients/Gedeb Construction.jpg',
    },
    {
        name: 'Shimelis Getu Construction',
        logo: '/Notable Clients/Shimelis Getu Construction.jpg',
    },
];

// Each of the 4 logos sits at a corner of the orbit ring.
// CSS places them by rotating the containing arm from center then
// translating outward, then counter-rotating the logo itself so it stays upright.
export const NotableClients: React.FC = () => (
    <section className="notable-clients-section">
        <div className="container">
            <div className="section-title-wrapper nc-title-wrapper">
                <span className="section-subtitle">Trusted By</span>
                <h2 className="section-title">Our Notable Clients</h2>
                <p className="section-desc">
                    Distinguished organisations across Ethiopia that trust KS Aluminum for quality
                    fabrication and precision installation.
                </p>
            </div>

            {/* Orbital ring */}
            <div className="nc-orbit-stage">
                {/* Spinning ring */}
                <div className="nc-orbit-ring">
                    {clients.map((client, i) => (
                        <div
                            key={client.name}
                            className="nc-orbit-arm"
                            style={{ '--arm-index': i } as React.CSSProperties}
                        >
                            <div className="nc-logo-planet">
                                <img src={client.logo} alt={client.name} className="nc-logo-img" />
                                <span className="nc-logo-name">{client.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fixed centre hub */}
                <div className="nc-center-hub">
                    <img src={logoImg} alt="KS Aluminum" className="nc-hub-logo" />
                    <span className="nc-hub-label">KS ALUMINUM</span>
                </div>
            </div>
        </div>
    </section>
);
