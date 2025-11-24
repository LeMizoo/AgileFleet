// src/components/layout/PageLayout.tsx
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    showDevelopmentBadge?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    title,
    subtitle,
    showDevelopmentBadge = true
}) => {
    const { isMobile, isTablet } = useResponsive();

    const styles = {
        page: {
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            padding: isMobile ? '1rem 0.5rem' : '2rem 1rem'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
        },
        header: {
            textAlign: 'center' as const,
            marginBottom: isMobile ? '2rem' : '3rem'
        },
        title: {
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '0.5rem'
        },
        subtitle: {
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#64748b'
        },
        content: {
            display: 'flex',
            justifyContent: 'center'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: isMobile ? '0.75rem' : '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: isMobile ? '1.5rem' : '2rem',
            width: '100%',
            maxWidth: isTablet ? '600px' : '800px'
        },
        cardHeader: {
            display: 'flex',
            flexDirection: (isMobile ? 'column' : 'row') as 'column' | 'row',
            gap: isMobile ? '0.75rem' : '1rem',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            marginBottom: '1.5rem'
        },
        cardTitle: {
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontWeight: 'bold',
            color: '#1e293b'
        },
        badge: {
            backgroundColor: '#fef3c7',
            color: '#d97706',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            fontWeight: '500',
            whiteSpace: 'nowrap' as const
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>{title}</h1>
                    {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
                </div>

                <div style={styles.content}>
                    <div style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h2 style={styles.cardTitle}>{title}</h2>
                            {showDevelopmentBadge && <span style={styles.badge}>En développement</span>}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};