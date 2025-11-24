// src/hooks/useResponsive.ts
import { useState, useEffect } from 'react';

export interface Breakpoints {
    mobile: number;
    tablet: number;
    desktop: number;
}

export const defaultBreakpoints: Breakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024
};

export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export const useResponsive = (breakpoints: Breakpoints = defaultBreakpoints) => {
    const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < breakpoints.mobile) {
                setScreenSize('mobile');
            } else if (width < breakpoints.tablet) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoints]);

    const isMobile = screenSize === 'mobile';
    const isTablet = screenSize === 'tablet';
    const isDesktop = screenSize === 'desktop';

    return {
        screenSize,
        isMobile,
        isTablet,
        isDesktop
    };
};