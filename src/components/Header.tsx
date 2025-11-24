import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AgileFleetLogo from './AgileFleetLogo';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { path: '/', name: 'Tableau de bord' },
        { path: '/vehicles', name: 'Véhicules' },
        { path: '/drivers', name: 'Chauffeurs' },
        { path: '/fuel', name: 'Carburant' },
        { path: '/other-costs', name: 'Autres coûts' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.headerContent}>
                    {/* Logo */}
                    <Link to="/" style={styles.logo} onClick={closeMenu}>
                        <AgileFleetLogo size="small" showText={false} />
                        <span style={styles.logoText}>
                            <span style={styles.logoAgile}>Agile</span>
                            <span style={styles.logoFleet}>Fleet</span>
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav style={styles.desktopNav}>
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    ...styles.navLink,
                                    ...(location.pathname === item.path ? styles.navLinkActive : {})
                                }}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Menu Burger pour Mobile */}
                    <button
                        style={styles.burgerButton}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span style={{ ...styles.burgerLine, ...(isMenuOpen && styles.burgerLine1Open) }}></span>
                        <span style={{ ...styles.burgerLine, ...(isMenuOpen && styles.burgerLine2Open) }}></span>
                        <span style={{ ...styles.burgerLine, ...(isMenuOpen && styles.burgerLine3Open) }}></span>
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <nav style={styles.mobileNav}>
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    ...styles.mobileNavLink,
                                    ...(location.pathname === item.path ? styles.mobileNavLinkActive : {})
                                }}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>

            {/* Overlay pour fermer le menu en cliquant à côté */}
            {isMenuOpen && <div style={styles.overlay} onClick={closeMenu}></div>}
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky' as const,
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem',
        '@media (min-width: 640px)': {
            padding: '0 1rem'
        }
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.5rem',
        '@media (min-width: 768px)': {
            height: '4rem'
        }
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        zIndex: 60,
        gap: '0.5rem'
    },
    logoText: {
        display: 'flex',
        flexDirection: 'column' as const,
        lineHeight: 1.1
    },
    logoAgile: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 800,
        color: '#27AE60',
        letterSpacing: '-0.5px'
    },
    logoFleet: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 800,
        color: '#111111',
        letterSpacing: '-0.5px'
    },
    desktopNav: {
        display: 'none',
        alignItems: 'center',
        gap: '1.5rem',
        '@media (min-width: 768px)': {
            display: 'flex',
            gap: '2rem'
        }
    },
    navLink: {
        color: '#4b5563',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '0.875rem',
        padding: '0.5rem 0',
        position: 'relative' as const,
        transition: 'color 0.2s',
        whiteSpace: 'nowrap' as const
    },
    navLinkActive: {
        color: '#059669'
    },
    burgerButton: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-between',
        width: '1.5rem',
        height: '1rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        zIndex: 60,
        '@media (min-width: 768px)': {
            display: 'none'
        }
    },
    burgerLine: {
        width: '100%',
        height: '2px',
        backgroundColor: '#374151',
        borderRadius: '2px',
        transition: 'all 0.3s ease'
    },
    burgerLine1Open: {
        transform: 'rotate(45deg) translate(5px, 5px)'
    },
    burgerLine2Open: {
        opacity: 0
    },
    burgerLine3Open: {
        transform: 'rotate(-45deg) translate(5px, -5px)'
    },
    mobileNav: {
        position: 'absolute' as const,
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column' as const,
        padding: '0.75rem',
        gap: '0.25rem',
        zIndex: 50,
        '@media (min-width: 768px)': {
            display: 'none'
        }
    },
    mobileNavLink: {
        color: '#4b5563',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '0.875rem',
        padding: '0.75rem 0.5rem',
        borderRadius: '0.375rem',
        transition: 'all 0.2s'
    },
    mobileNavLinkActive: {
        color: '#059669',
        backgroundColor: '#d1fae5'
    },
    overlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 40,
        '@media (min-width: 768px)': {
            display: 'none'
        }
    }
};

// Ajout des styles hover
Object.assign(styles.navLink, { ':hover': { color: '#059669' } });
Object.assign(styles.mobileNavLink, { ':hover': { backgroundColor: '#f3f4f6' } });

export default Header;