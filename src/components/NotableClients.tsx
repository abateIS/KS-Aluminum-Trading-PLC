import React from 'react';
import logoImg from '../assets/logo.png';

const clients = [
    { name: 'Ethiopian Air Force', logo: '/Notable Clients/AirForce.webp' },
    { name: 'Bishoftu City Administration', logo: '/Notable Clients/Bishoftu-City-Adminstration.png' },
    { name: 'Gedeb Construction', logo: '/Notable Clients/Gedeb Construction.jpg' },
    { name: 'Shimelis Getu Construction', logo: '/Notable Clients/Shimelis Getu Construction.jpg' },
];

// Each planet uses the classic CSS orbit technique:
//   transform: rotate(angle) translateX(radius) rotate(-angle)
// This keeps the logo upright while it orbits the center.
// Staggered animation-delay (-index * 14s/4) spreads logos evenly around the ring.
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

            <div className="nc-orbit-stage">
                {/* Decorative orbit ring */}
                <div className="nc-orbit-ring" />

                {/* 4 orbiting logos */}
                {clients.map((client, i) => (
                    <div
                        key={client.name}
                        className="nc-logo-planet"
                        style={{ '--planet-index': i } as React.CSSProperties}
                    >
                        <img src={client.logo} alt={client.name} className="nc-logo-img" />
                        <span className="nc-logo-name">{client.name}</span>
                    </div>
                ))}

                {/* Fixed centre hub */}
                <div className="nc-center-hub">
                    <img src={logoImg} alt="KS Aluminum" className="nc-hub-logo" />
                    <span className="nc-hub-label">KS ALUMINUM</span>
                </div>
            </div>
        </div>
    </section>
);
