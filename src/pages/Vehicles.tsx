import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

const Vehicles: React.FC = () => {
    return (
        <PageLayout
            title="Gestion des Véhicules"
            subtitle="Gérez votre parc automobile en toute simplicité"
        >
            <div style={styles.cardContent}>
                <p style={styles.cardText}>
                    Cette section vous permettra de gérer l'ensemble de votre flotte automobile :
                    ajout de véhicules, suivi kilométrique, entretiens, et bien plus encore.
                </p>
                <ResponsiveGrid>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📝</span>
                        <span>Ajout et modification des véhicules</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>🛣️</span>
                        <span>Suivi kilométrique détaillé</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>🔧</span>
                        <span>Gestion des entretiens</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📊</span>
                        <span>Statistiques d'utilisation</span>
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

export default Vehicles;