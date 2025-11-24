import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                {/* En-tête de bienvenue */}
                <div style={styles.hero}>
                    <h1 style={styles.heroTitle}>
                        Bienvenue sur <span style={styles.heroAgile}>Agile</span>
                        <span style={styles.heroFleet}>Fleet</span>
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Une solution pensée pour optimiser la gestion des coûts et améliorer la performance
                        opérationnelle de votre parc automobile.
                    </p>
                </div>

                <div style={styles.grid}>
                    {/* Section Ce que vous obtenez */}
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>
                            <span style={styles.bullet}></span>
                            Ce que vous obtenez
                        </h2>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Vue d'ensemble claire de vos coûts</strong>, avec des graphiques intuitifs
                                    (carburant, maintenance, frais divers).
                                </span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Suivi précis des véhicules et des chauffeurs</strong>, avec une connexion
                                    en temps réel entre les données.
                                </span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Gestion du carburant facilitée</strong> : enregistrement des consommations,
                                    coûts et lieux de ravitaillement.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Section Pourquoi choisir notre solution */}
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>
                            <span style={styles.bullet}></span>
                            Pourquoi choisir notre solution
                        </h2>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Centralisation des données</strong> : une base unique qui relie toutes les
                                    entités.
                                </span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Mise à jour automatique</strong> : chaque opération se répercute sur l'ensemble du système.
                                </span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.bulletPoint}>•</span>
                                <span style={styles.listText}>
                                    <strong>Accessibilité et simplicité</strong> : navigation claire et indicateurs pertinents.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Appel à l'action */}
                <div style={styles.cta}>
                    <h2 style={styles.ctaTitle}>
                        Prêt à transformer la gestion des coûts ?
                    </h2>
                    <p style={styles.ctaSubtitle}>
                        Parcourez les onglets pour découvrir les fonctionnalités.
                    </p>
                    <div style={styles.ctaButtons}>
                        <Link to="/vehicles" style={styles.primaryButton}>
                            Découvrir
                        </Link>
                        <button style={styles.secondaryButton}>
                            Demander une démo
                        </button>
                    </div>
                </div>

                {/* Navigation rapide vers les modules */}
                <div style={styles.modules}>
                    <h3 style={styles.modulesTitle}>
                        Accès rapide
                    </h3>
                    <div style={styles.modulesGrid}>
                        {[
                            { to: '/vehicles', label: '🚗 Véhicules', color: '#3B82F6' },
                            { to: '/drivers', label: '👤 Chauffeurs', color: '#8B5CF6' },
                            { to: '/fuel', label: '⛽ Carburant', color: '#F59E0B' },
                            { to: '/other-costs', label: '💰 Autres coûts', color: '#EF4444' },
                        ].map((module) => (
                            <Link
                                key={module.to}
                                to={module.to}
                                style={{ ...styles.moduleCard, backgroundColor: module.color }}
                            >
                                {module.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        padding: '0.75rem 0.25rem',
        '@media (min-width: 375px)': {
            padding: '1rem 0.5rem'
        },
        '@media (min-width: 768px)': {
            padding: '2rem 1rem'
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
    },
    hero: {
        textAlign: 'center' as const,
        marginBottom: '1.5rem',
        '@media (min-width: 768px)': {
            marginBottom: '3rem'
        }
    },
    heroTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '0.75rem',
        lineHeight: 1.2,
        '@media (min-width: 375px)': {
            fontSize: '1.75rem'
        },
        '@media (min-width: 768px)': {
            fontSize: '3rem'
        }
    },
    heroAgile: {
        color: '#059669'
    },
    heroFleet: {
        color: '#111827'
    },
    heroSubtitle: {
        fontSize: '0.9rem',
        color: '#6b7280',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: 1.5,
        padding: '0 0.25rem',
        '@media (min-width: 375px)': {
            fontSize: '1rem',
            padding: '0 0.5rem'
        },
        '@media (min-width: 768px)': {
            fontSize: '1.25rem',
            padding: 0
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        marginBottom: '1.5rem',
        '@media (min-width: 1024px)': {
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '3rem'
        }
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
        padding: '1rem',
        '@media (min-width: 375px)': {
            borderRadius: '0.75rem',
            padding: '1.5rem'
        },
        '@media (min-width: 768px)': {
            borderRadius: '1rem',
            padding: '2rem'
        }
    },
    cardTitle: {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 768px)': {
            fontSize: '1.5rem',
            marginBottom: '1.5rem'
        }
    },
    bullet: {
        width: '8px',
        height: '8px',
        backgroundColor: '#059669',
        borderRadius: '50%',
        marginRight: '0.5rem',
        '@media (min-width: 768px)': {
            width: '12px',
            height: '12px',
            marginRight: '0.75rem'
        }
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '0.5rem',
        '@media (min-width: 768px)': {
            marginBottom: '1rem'
        }
    },
    bulletPoint: {
        color: '#059669',
        marginRight: '0.5rem',
        fontSize: '0.875rem',
        lineHeight: 1.2,
        flexShrink: 0,
        marginTop: '0.125rem',
        '@media (min-width: 768px)': {
            marginRight: '0.75rem',
            fontSize: '1rem'
        }
    },
    listText: {
        color: '#374151',
        lineHeight: 1.4,
        fontSize: '0.8rem',
        '@media (min-width: 375px)': {
            fontSize: '0.85rem'
        },
        '@media (min-width: 768px)': {
            fontSize: '1rem',
            lineHeight: 1.5
        }
    },
    cta: {
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
        padding: '1rem',
        textAlign: 'center' as const,
        marginBottom: '1.5rem',
        '@media (min-width: 375px)': {
            borderRadius: '0.75rem',
            padding: '1.5rem'
        },
        '@media (min-width: 768px)': {
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '3rem'
        }
    },
    ctaTitle: {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '0.5rem',
        '@media (min-width: 768px)': {
            fontSize: '1.5rem',
            marginBottom: '1rem'
        }
    },
    ctaSubtitle: {
        fontSize: '0.8rem',
        color: '#d1fae5',
        marginBottom: '1rem',
        '@media (min-width: 375px)': {
            fontSize: '0.9rem'
        },
        '@media (min-width: 768px)': {
            fontSize: '1.125rem',
            marginBottom: '2rem'
        }
    },
    ctaButtons: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
        justifyContent: 'center',
        '@media (min-width: 375px)': {
            gap: '0.75rem'
        },
        '@media (min-width: 480px)': {
            flexDirection: 'row',
            gap: '1rem'
        }
    },
    primaryButton: {
        backgroundColor: 'white',
        color: '#059669',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.2s',
        fontSize: '0.8rem',
        textAlign: 'center' as const,
        '@media (min-width: 375px)': {
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem'
        },
        '@media (min-width: 768px)': {
            padding: '0.75rem 2rem',
            fontSize: '1rem'
        }
    },
    secondaryButton: {
        border: '1px solid white',
        color: 'white',
        backgroundColor: 'transparent',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontSize: '0.8rem',
        '@media (min-width: 375px)': {
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem',
            border: '2px solid white'
        },
        '@media (min-width: 768px)': {
            padding: '0.75rem 2rem',
            fontSize: '1rem'
        }
    },
    modules: {
        textAlign: 'center' as const
    },
    modulesTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '1rem',
        '@media (min-width: 768px)': {
            fontSize: '1.25rem',
            marginBottom: '2rem'
        }
    },
    modulesGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.5rem',
        '@media (min-width: 375px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem'
        },
        '@media (min-width: 480px)': {
            gap: '1rem'
        },
        '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
        }
    },
    moduleCard: {
        color: 'white',
        padding: '0.75rem 0.25rem',
        borderRadius: '0.375rem',
        textDecoration: 'none',
        fontWeight: '600',
        textAlign: 'center' as const,
        transition: 'opacity 0.2s',
        fontSize: '0.75rem',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (min-width: 375px)': {
            padding: '1rem 0.5rem',
            fontSize: '0.8rem',
            minHeight: '60px'
        },
        '@media (min-width: 480px)': {
            padding: '1.5rem 1rem',
            fontSize: '0.9rem',
            minHeight: '80px'
        },
        '@media (min-width: 768px)': {
            fontSize: '1rem',
            minHeight: '100px'
        }
    }
};

export default Dashboard;