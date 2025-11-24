import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

const Fuel: React.FC = () => {
    return (
        <PageLayout
            title="Gestion du Carburant"
            subtitle="Suivez et optimisez vos consommations"
        >
            <div style={styles.cardContent}>
                <p style={styles.cardText}>
                    Enregistrez les pleins de carburant, analysez les consommations
                    et maîtrisez vos coûts énergétiques.
                </p>
                <ResponsiveGrid>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>⛽</span>
                        <span>Enregistrement des pleins</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📊</span>
                        <span>Calcul automatique de consommation</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>💰</span>
                        <span>Suivi des coûts par véhicule</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.featureIcon}>📈</span>
                        <span>Analyses et tendances</span>
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

export default Fuel;