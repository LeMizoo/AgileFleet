import { useState, useEffect } from 'react';
import { dashboardService } from '../services/firestoreService';

export interface DashboardData {
    totalCost: number;
    fuelCost: number;
    maintenanceCost: number;
    averageCostPerVehicle: number;
    activeVehicles: number;
    totalVehicles: number;
}

export const useDashboardData = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            setLoading(true);
            const summary = await dashboardService.getSummary();
            setData(summary);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors du chargement des données');
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        refresh: loadDashboardData
    };
};