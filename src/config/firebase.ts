import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Configuration Firebase depuis les variables d'environnement
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Collections Firestore
export const COLLECTIONS = {
    VEHICLES: 'vehicles',
    DRIVERS: 'drivers',
    FUEL_LOGS: 'fuelLogs',
    MAINTENANCE_LOGS: 'maintenanceLogs',
    OTHER_COSTS: 'otherCosts',
    USERS: 'users'
} as const;

export default app;