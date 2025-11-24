/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ✅ Palette Identité primaire (transport agile) - RECOMMANDÉE
                'agile': {
                    // Couleurs principales
                    'primary': {
                        50: '#f0fdf4',
                        100: '#dcfce7',
                        200: '#bbf7d0',
                        300: '#86efac',
                        400: '#4ade80',
                        500: '#2ECC71',  // Vert vif - DEFAULT
                        600: '#27AE60',  // Vert profond - dark
                        700: '#15803d',
                        800: '#166534',
                        900: '#14532d',
                    },
                    // Couleurs neutres
                    'dark': {
                        DEFAULT: '#111111',  // Noir charbon
                        50: '#fafafa',
                        100: '#f4f4f5',
                        200: '#e4e4e7',
                        300: '#d4d4d8',
                        400: '#a1a1aa',
                        500: '#71717a',
                        600: '#52525b',
                        700: '#3f3f46',
                        800: '#27272a',
                        900: '#111111',
                    },
                    'blue': {
                        DEFAULT: '#2C3E50',  // Bleu nuit
                        50: '#f8fafc',
                        100: '#f1f5f9',
                        200: '#e2e8f0',
                        300: '#cbd5e1',
                        400: '#94a3b8',
                        500: '#64748b',
                        600: '#475569',
                        700: '#334155',
                        800: '#1e293b',
                        900: '#2C3E50',
                    },
                    'gray': {
                        light: '#ECF0F1',  // Gris clair (vitres)
                        DEFAULT: '#BDC3C7', // Gris (reflets)
                    }
                },

                // ✅ Alternative sobre (institutionnelle)
                'institutional': {
                    'green': {
                        forest: '#1E8449',
                        sage: '#6DBE7B',
                        pine: '#0F7B4D',
                    },
                    'cream': '#F4F6F7',
                    'anthracite': '#2B2B2B',
                    'neutral': '#7F8C8D',
                    'accent': {
                        gold: '#D4AF37',
                        lime: '#A3E635',
                    }
                },

                // ✅ Contraste élevé (digital/écran)
                'digital': {
                    'neon': '#00E676',
                    'black': '#000000',
                    'white': '#FFFFFF',
                    'gray': {
                        dark: '#1F2937',
                    },
                    'accent': {
                        cyan: '#22D3EE',
                    }
                },

                // ✅ Palette warm & trust (B2B)
                'trust': {
                    'sage': '#6DBE7B',
                    'pine': '#0F7B4D',
                    'ivory': '#FAFAF5',
                    'graphite': '#333333',
                    'accent': {
                        gold: '#D4AF37',
                    }
                }
            },

            // Gradients personnalisés inspirés du logo
            backgroundImage: {
                'agile-gradient': 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
                'vehicle-gradient': 'url(#vehicleGreen)',
                'agile-shine': 'linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(39, 174, 96, 0.2) 100%)',
            },

            // Animation pour les éléments interactifs
            animation: {
                'vehicle-move': 'vehicleMove 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },

            keyframes: {
                vehicleMove: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(4px)' },
                }
            },

            // Typographie inspirée du logo
            fontFamily: {
                'sans': ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
                'agile-display': ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
            },

            // Espacement et bordures cohérents
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },

            borderRadius: {
                'agile': '0.5rem',
                'agile-lg': '0.75rem',
            },

            // Shadows inspirées des reflets du logo
            boxShadow: {
                'agile': '0 4px 6px -1px rgba(39, 174, 96, 0.1), 0 2px 4px -1px rgba(39, 174, 96, 0.06)',
                'agile-lg': '0 10px 15px -3px rgba(39, 174, 96, 0.1), 0 4px 6px -2px rgba(39, 174, 96, 0.05)',
                'vehicle': '0 0 0 1px rgba(44, 62, 80, 0.1), 0 2px 4px rgba(44, 62, 80, 0.1)',
            }
        },
    },
    plugins: [],
}