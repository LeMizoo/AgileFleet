import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.footerContent}>
                    {/* Section Logo et Description */}
                    <div style={styles.brandSection}>
                        <div style={styles.logo}>
                            <span style={styles.logoAgile}>Agile</span>
                            <span style={styles.logoFleet}>Fleet</span>
                        </div>
                        <p style={styles.description}>
                            Solution de gestion de flotte automobile pour optimiser vos coûts
                            et améliorer votre performance opérationnelle.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div style={styles.linksSection}>
                        <h3 style={styles.linksTitle}>Navigation</h3>
                        <div style={styles.linksGrid}>
                            <Link to="/" style={styles.footerLink}>Tableau de bord</Link>
                            <Link to="/vehicles" style={styles.footerLink}>Véhicules</Link>
                            <Link to="/drivers" style={styles.footerLink}>Chauffeurs</Link>
                            <Link to="/fuel" style={styles.footerLink}>Carburant</Link>
                            <Link to="/other-costs" style={styles.footerLink}>Autres coûts</Link>
                        </div>
                    </div>

                    {/* Contact et Informations */}
                    <div style={styles.contactSection}>
                        <h3 style={styles.linksTitle}>Contact</h3>
                        <div style={styles.contactInfo}>
                            <p style={styles.contactItem}>📧 contact@agilefleet.com</p>
                            <p style={styles.contactItem}>📞 +33 1 23 45 67 89</p>
                            <p style={styles.contactItem}>📍 Paris, France</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={styles.bottomBar}>
                    <div style={styles.copyright}>
                        © {currentYear} AgileFleet. Tous droits réservés.
                    </div>
                    <div style={styles.legalLinks}>
                        <a href="#" style={styles.legalLink}>Confidentialité</a>
                        <a href="#" style={styles.legalLink}>Conditions d'utilisation</a>
                        <a href="#" style={styles.legalLink}>Mentions légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#111827',
        color: 'white',
        marginTop: 'auto'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem 1rem'
    },
    footerContent: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        marginBottom: '2rem',
        '@media (min-width: 768px)': {
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '3rem'
        }
    },
    brandSection: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    logoAgile: {
        color: '#10b981'
    },
    logoFleet: {
        color: 'white'
    },
    description: {
        color: '#9ca3af',
        lineHeight: 1.6,
        fontSize: '0.875rem'
    },
    linksSection: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem'
    },
    linksTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '0.5rem'
    },
    linksGrid: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem'
    },
    footerLink: {
        color: '#d1d5db',
        textDecoration: 'none',
        fontSize: '0.875rem',
        transition: 'color 0.2s',
        ':hover': {
            color: '#10b981'
        }
    },
    contactSection: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem'
    },
    contactItem: {
        color: '#d1d5db',
        fontSize: '0.875rem',
        margin: 0
    },
    bottomBar: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid #374151',
        gap: '1rem',
        '@media (min-width: 768px)': {
            flexDirection: 'row'
        }
    },
    copyright: {
        color: '#9ca3af',
        fontSize: '0.875rem'
    },
    legalLinks: {
        display: 'flex',
        gap: '1.5rem'
    },
    legalLink: {
        color: '#9ca3af',
        textDecoration: 'none',
        fontSize: '0.875rem',
        transition: 'color 0.2s',
        ':hover': {
            color: '#10b981'
        }
    }
};

export default Footer;