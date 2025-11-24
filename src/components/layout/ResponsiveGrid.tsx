// src/components/layout/ResponsiveGrid.tsx
import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface ResponsiveGridProps {
    children: React.ReactNode;
    columns?: {
        mobile: number;
        tablet: number;
        desktop: number;
    };
    gap?: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
    children,
    columns = { mobile: 1, tablet: 2, desktop: 3 },
    gap = { mobile: '1rem', tablet: '1.5rem', desktop: '2rem' }
}) => {
    const { isMobile, isTablet } = useResponsive();

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${isMobile ? columns.mobile : isTablet ? columns.tablet : columns.desktop
            }, 1fr)`,
        gap: isMobile ? gap.mobile : isTablet ? gap.tablet : gap.desktop
    };

    return <div style={gridStyles}>{children}</div>;
};