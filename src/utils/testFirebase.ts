import { db, analytics } from '../config/firebase';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';

export const testFirebaseConnection = async (): Promise<{ success: boolean; message: string }> => {
    try {
        console.log('🧪 Test de connexion Firebase AgileFleet...');

        // Test d'écriture
        const testDocRef = await addDoc(collection(db, 'testConnection'), {
            app: 'AgileFleet',
            test: 'Connexion Firebase',
            timestamp: new Date().toISOString(),
            status: 'success'
        });

        console.log('✅ Écriture réussie - Document ID:', testDocRef.id);

        // Test de lecture
        const querySnapshot = await getDocs(collection(db, 'testConnection'));
        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log('✅ Lecture réussie - Documents trouvés:', documents.length);

        // Test Analytics (seulement en client)
        if (analytics) {
            logEvent(analytics, 'firebase_test_success');
            console.log('✅ Analytics initialisé');
        }

        // Nettoyage (optionnel)
        await deleteDoc(doc(db, 'testConnection', testDocRef.id));
        console.log('✅ Test document nettoyé');

        return {
            success: true,
            message: `Firebase configuré avec succès! Projet: agilefleet-cf923`
        };

    } catch (error) {
        console.error('❌ Erreur Firebase:', error);

        return {
            success: false,
            message: `Erreur Firebase: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
        };
    }
};

export const initializeAppData = async (): Promise<void> => {
    try {
        console.log('🚀 Initialisation des données AgileFleet...');

        // Créer une collection de démonstration si vide
        const vehiclesSnapshot = await getDocs(collection(db, 'vehicles'));

        if (vehiclesSnapshot.empty) {
            console.log('📝 Création des données de démonstration...');

            // Données de démonstration
            const demoVehicles = [
                {
                    make: 'Renault',
                    model: 'Trafic',
                    licensePlate: 'AB-123-CD',
                    mileage: 125430,
                    status: 'active',
                    fuelType: 'diesel',
                    createdAt: new Date()
                },
                {
                    make: 'Peugeot',
                    model: 'Partner',
                    licensePlate: 'EF-456-GH',
                    mileage: 89210,
                    status: 'active',
                    fuelType: 'diesel',
                    createdAt: new Date()
                },
                {
                    make: 'Citroën',
                    model: 'Jumper',
                    licensePlate: 'IJ-789-KL',
                    mileage: 156780,
                    status: 'maintenance',
                    fuelType: 'diesel',
                    createdAt: new Date()
                }
            ];

            for (const vehicle of demoVehicles) {
                await addDoc(collection(db, 'vehicles'), vehicle);
            }

            console.log('✅ Données de démonstration créées');
        } else {
            console.log('✅ Données existantes trouvées');
        }

    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation:', error);
    }
};