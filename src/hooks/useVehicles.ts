import { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import { vehicleService } from '../services/firestoreService';

export const useVehicles = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            setLoading(true);
            const data = await vehicleService.getAll();
            setVehicles(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors du chargement des véhicules');
        } finally {
            setLoading(false);
        }
    };

    const addVehicle = async (vehicleData: Omit<Vehicle, 'id'>) => {
        try {
            const id = await vehicleService.create(vehicleData);
            setVehicles(prev => [...prev, { ...vehicleData, id } as Vehicle]);
            return id;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de l\'ajout du véhicule');
            throw err;
        }
    };

    const updateVehicle = async (id: string, vehicleData: Partial<Vehicle>) => {
        try {
            await vehicleService.update(id, vehicleData);
            setVehicles(prev => prev.map(vehicle =>
                vehicle.id === id ? { ...vehicle, ...vehicleData } : vehicle
            ));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de la mise à jour du véhicule');
            throw err;
        }
    };

    const deleteVehicle = async (id: string) => {
        try {
            await vehicleService.delete(id);
            setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de la suppression du véhicule');
            throw err;
        }
    };

    return {
        vehicles,
        loading,
        error,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        refresh: loadVehicles
    };
};