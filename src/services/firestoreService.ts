import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    Timestamp
} from 'firebase/firestore';
import { db, COLLECTIONS } from '../config/firebase';
import { Vehicle, Driver, FuelLog, MaintenanceLog } from '../types';

// Service générique pour les opérations CRUD
export class FirestoreService {
    // GET ALL
    static async getAll<T>(collectionName: string): Promise<T[]> {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as T[];
    }

    // GET BY ID
    static async getById<T>(collectionName: string, id: string): Promise<T | null> {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as T;
        }
        return null;
    }

    // CREATE
    static async create<T>(collectionName: string, data: Omit<T, 'id'>): Promise<string> {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        });
        return docRef.id;
    }

    // UPDATE
    static async update<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            ...data,
            updatedAt: Timestamp.now()
        });
    }

    // DELETE
    static async delete(collectionName: string, id: string): Promise<void> {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
    }
}

// Services spécifiques
export const vehicleService = {
    getAll: () => FirestoreService.getAll<Vehicle>(COLLECTIONS.VEHICLES),
    getById: (id: string) => FirestoreService.getById<Vehicle>(COLLECTIONS.VEHICLES, id),
    create: (data: Omit<Vehicle, 'id'>) => FirestoreService.create<Vehicle>(COLLECTIONS.VEHICLES, data),
    update: (id: string, data: Partial<Vehicle>) => FirestoreService.update<Vehicle>(COLLECTIONS.VEHICLES, id, data),
    delete: (id: string) => FirestoreService.delete(COLLECTIONS.VEHICLES, id)
};

export const fuelLogService = {
    getAll: () => FirestoreService.getAll<FuelLog>(COLLECTIONS.FUEL_LOGS),
    getByVehicle: async (vehicleId: string): Promise<FuelLog[]> => {
        const q = query(
            collection(db, COLLECTIONS.FUEL_LOGS),
            where('vehicleId', '==', vehicleId),
            orderBy('date', 'desc')
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as FuelLog[];
    },
    create: (data: Omit<FuelLog, 'id'>) => FirestoreService.create<FuelLog>(COLLECTIONS.FUEL_LOGS, data)
};

export const dashboardService = {
    getSummary: async () => {
        const [vehicles, fuelLogs, maintenanceLogs] = await Promise.all([
            vehicleService.getAll(),
            fuelLogService.getAll(),
            FirestoreService.getAll<MaintenanceLog>(COLLECTIONS.MAINTENANCE_LOGS)
        ]);

        const totalFuelCost = fuelLogs.reduce((sum, log) => sum + log.cost, 0);
        const totalMaintenanceCost = maintenanceLogs.reduce((sum, log) => sum + log.cost, 0);
        const totalCost = totalFuelCost + totalMaintenanceCost;
        const averageCostPerVehicle = vehicles.length > 0 ? totalCost / vehicles.length : 0;

        return {
            totalCost,
            fuelCost: totalFuelCost,
            maintenanceCost: totalMaintenanceCost,
            averageCostPerVehicle,
            activeVehicles: vehicles.filter(v => v.status === 'active').length,
            totalVehicles: vehicles.length
        };
    }
};