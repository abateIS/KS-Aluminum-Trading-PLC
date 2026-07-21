import React from 'react';

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

export const NotableClients: React.FC = () => (
    <section className="notable-clients-section">
        <div className="container">
            <div className="section-title-wrapper">
                <span className="section-subtitle">Trusted By</span>
                <h2 className="section-title">Our Notable Clients</h2>
                <p className="section-desc">
                    We are proud to have served distinguished organizations across Ethiopia with quality
                    aluminum fabrication and installation.
                </p>
            </div>

            <div className="clients-grid">
                {clients.map((client) => (
                    <div key={client.name} className="client-card">
                        {/* Aluminum frame background – rotates on hover */}
                        <div className="client-frame-bg">
                            <img
                                src="/Notable Clients/Aluminum frame.jpg"
                                alt="Aluminum Frame"
                                className="frame-img"
                            />
                        </div>
                        {/* Logo sits on top */}
                        <div className="client-logo-wrap">
                            <img src={client.logo} alt={client.name} className="client-logo" />
                        </div>
                        <p className="client-name">{client.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
