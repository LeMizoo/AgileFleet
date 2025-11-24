import React from 'react';

const OtherCosts: React.FC = () => {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Autres Coûts</h1>
                    <p style={styles.subtitle}>Maîtrisez l'ensemble de vos dépenses opérationnelles</p>
                </div>

                <div style={styles.content}>
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h2 style={styles.cardTitle}>Autres Coûts</h2>
                            <span style={styles.badge}>En développement</span>
                        </div>
                        <div style={styles.cardContent}>
                            <p style={styles.cardText}>
                                Centralisez tous les coûts annexes : maintenance, réparations,
                                assurances, péages, amendes et autres frais opérationnels.
                            </p>

                            <div style={styles.costCategories}>
                                {/* Amendes et Contraventions */}
                                <div style={styles.category}>
                                    <h3 style={styles.categoryTitle}>
                                        <span style={styles.categoryIcon}>🚨</span>
                                        Amendes & Contraventions
                                    </h3>
                                    <div style={styles.categoryItems}>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Amendes radar</span>
                                            <span style={styles.itemBadge}>Priorité haute</span>
                                        </div>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Stationnement interdit</span>
                                            <span style={styles.itemBadge}>Fréquent</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Maintenance et Réparations */}
                                <div style={styles.category}>
                                    <h3 style={styles.categoryTitle}>
                                        <span style={styles.categoryIcon}>🔧</span>
                                        Maintenance & Réparations
                                    </h3>
                                    <div style={styles.categoryItems}>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Entretien programmé</span>
                                            <span style={styles.itemBadge}>Récurrent</span>
                                        </div>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Réparations imprévues</span>
                                            <span style={styles.itemBadge}>Imprévu</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Assurances et Taxes */}
                                <div style={styles.category}>
                                    <h3 style={styles.categoryTitle}>
                                        <span style={styles.categoryIcon}>🛡️</span>
                                        Assurances & Taxes
                                    </h3>
                                    <div style={styles.categoryItems}>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Assurance véhicule</span>
                                            <span style={styles.itemBadge}>Annuel</span>
                                        </div>
                                        <div style={styles.categoryItem}>
                                            <span style={styles.itemName}>Taxe régionale</span>
                                            <span style={styles.itemBadge}>Annuel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={styles.stats}>
                                <div style={styles.statCard}>
                                    <span style={styles.statNumber}>5</span>
                                    <span style={styles.statLabel}>Catégories</span>
                                </div>
                                <div style={styles.statCard}>
                                    <span style={styles.statNumber}>20+</span>
                                    <span style={styles.statLabel}>Types</span>
                                </div>
                                <div style={styles.statCard}>
                                    <span style={styles.statNumber}>100%</span>
                                    <span style={styles.statLabel}>Traçabilité</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '1rem 0.5rem',
        '@media (min-width: 768px)': {
            padding: '2rem 1rem'
        }
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
    },
    header: {
        textAlign: 'center' as const,
        marginBottom: '2rem',
        '@media (min-width: 768px)': {
            marginBottom: '3rem'
        }
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: '0.5rem',
        '@media (min-width: 768px)': {
            fontSize: '2.5rem'
        }
    },
    subtitle: {
        fontSize: '1rem',
        color: '#64748b',
        '@media (min-width: 768px)': {
            fontSize: '1.125rem'
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '1000px',
        '@media (min-width: 768px)': {
            borderRadius: '1rem',
            padding: '2rem'
        }
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.75rem',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #e2e8f0',
        paddingBottom: '1rem',
        '@media (min-width: 480px)': {
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1e293b',
        '@media (min-width: 768px)': {
            fontSize: '1.5rem'
        }
    },
    badge: {
        backgroundColor: '#fef3c7',
        color: '#d97706',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        fontSize: '0.75rem',
        fontWeight: '500',
        '@media (min-width: 768px)': {
            fontSize: '0.875rem'
        }
    },
    cardContent: {
        color: '#475569'
    },
    cardText: {
        marginBottom: '1.5rem',
        lineHeight: 1.6,
        fontSize: '0.9rem',
        '@media (min-width: 768px)': {
            fontSize: '1rem',
            marginBottom: '2rem'
        }
    },
    costCategories: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        marginBottom: '1.5rem',
        '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
        }
    },
    category: {
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem',
        padding: '1rem',
        border: '1px solid #e2e8f0',
        '@media (min-width: 768px)': {
            borderRadius: '0.75rem',
            padding: '1.5rem'
        }
    },
    categoryTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        '@media (min-width: 768px)': {
            fontSize: '1.125rem',
            marginBottom: '1rem'
        }
    },
    categoryIcon: {
        fontSize: '1rem',
        '@media (min-width: 768px)': {
            fontSize: '1.25rem'
        }
    },
    categoryItems: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
        '@media (min-width: 768px)': {
            gap: '0.75rem'
        }
    },
    categoryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        backgroundColor: 'white',
        borderRadius: '0.375rem',
        border: '1px solid #f1f5f9',
        '@media (min-width: 768px)': {
            padding: '0.75rem'
        }
    },
    itemName: {
        fontSize: '0.8rem',
        color: '#475569',
        fontWeight: '500',
        '@media (min-width: 768px)': {
            fontSize: '0.875rem'
        }
    },
    itemBadge: {
        fontSize: '0.7rem',
        color: '#64748b',
        backgroundColor: '#f1f5f9',
        padding: '0.2rem 0.4rem',
        borderRadius: '0.375rem',
        '@media (min-width: 768px)': {
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem'
        }
    },
    stats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e2e8f0',
        '@media (min-width: 768px)': {
            gap: '1rem',
            marginTop: '2rem',
            paddingTop: '2rem'
        }
    },
    statCard: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        padding: '0.75rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem',
        textAlign: 'center' as const,
        '@media (min-width: 768px)': {
            padding: '1rem',
            borderRadius: '0.75rem'
        }
    },
    statNumber: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#059669',
        marginBottom: '0.25rem',
        '@media (min-width: 768px)': {
            fontSize: '1.5rem',
            marginBottom: '0.5rem'
        }
    },
    statLabel: {
        fontSize: '0.7rem',
        color: '#64748b',
        '@media (min-width: 768px)': {
            fontSize: '0.875rem'
        }
    }
};

export default OtherCosts;