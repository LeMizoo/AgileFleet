import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

const Drivers: React.FC = () => {
    return (
        <PageLayout
            title="Gestion des Chauffeurs"
            subtitle="Organisez votre équipe de conducteurs"
        >
            <div style={styles.cardContent}>
                <p style={styles.cardText}>
                    Gérez efficacement vos chauffeurs : profils, permis, véhicules attribués
                    et historique de conduite.
                </p>
                <ResponsiveGrid>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>👤</span>
                        <span>Gestion des profils chauffeurs</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📄</span>
                        <span>Suivi des documents et permis</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>🚗</span>
                        <span>Attribution des véhicules</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📈</span>
                        <span>Statistiques de conduite</span>
                    </div>
                </ResponsiveGrid>
            </div>
        </PageLayout>
    );
};

const styles = {
    cardContent: {
        color: '#475569'
    },
    cardText: {
        marginBottom: '1.5rem',
        lineHeight: 1.6
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem'
    },
    featureIcon: {
        fontSize: '1.25rem'
    }
};

export default Drivers;