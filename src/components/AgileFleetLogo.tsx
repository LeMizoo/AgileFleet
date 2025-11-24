import React from 'react';

interface AgileFleetLogoProps {
    showText?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const AgileFleetLogo: React.FC<AgileFleetLogoProps> = ({
    showText = true,
    size = 'medium'
}) => {
    const sizeConfig = {
        small: { logo: 24, text: 12, gap: 4 },
        medium: { logo: 32, text: 14, gap: 6 },
        large: { logo: 48, text: 18, gap: 8 }
    };

    const { logo: logoSize, text: textSize, gap } = sizeConfig[size];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: gap
        }}>
            {/* Logo image */}
            <img
                src="/images/logos/Logo-AgileFleet.png"
                alt="AgileFleet - Gestion de flotte automobile"
                width={logoSize}
                height={logoSize}
                style={{
                    objectFit: 'contain',
                    display: 'block'
                }}
                onError={(e) => {
                    // Fallback si l'image ne charge pas
                    console.log('Logo not found, using fallback');
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                }}
            />

            {/* Texte AgileFleet */}
            {showText && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: 1.1
                }}>
                    <span style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: textSize,
                        fontWeight: 800,
                        color: '#27AE60',
                        letterSpacing: '-0.5px'
                    }}>
                        Agile
                    </span>
                    <span style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: textSize,
                        fontWeight: 800,
                        color: '#111111',
                        letterSpacing: '-0.5px'
                    }}>
                        Fleet
                    </span>
                </div>
            )}
        </div>
    );
};

export default AgileFleetLogo;