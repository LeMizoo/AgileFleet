import { useState, useEffect } from 'react';

interface DashboardData {
    totalVehicles: number;
    totalDrivers: number;
    totalFuelCost: number;
    totalMaintenanceCost: number;
}

export const useDashboardData = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simuler le chargement de données
        const mockData: DashboardData = {
            totalVehicles: 10,
            totalDrivers: 8,
            totalFuelCost: 1500,
            totalMaintenanceCost: 800,
        };

        setTimeout(() => {
            setData(mockData);
            setLoading(false);
        }, 1000);
    }, []);

    return { data, loading };
};