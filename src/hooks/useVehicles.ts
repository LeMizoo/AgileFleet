import { useState, useEffect } from 'react';

// Interface locale
interface Vehicle {
    id: string;
    brand: string;
    model: string;
    licensePlate: string;
    year: number;
    mileage: number;
    status: 'active' | 'inactive' | 'maintenance';
}

export const useVehicles = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Données mockées temporairement
        const mockVehicles: Vehicle[] = [
            {
                id: '1',
                brand: 'Renault',
                model: 'Kangoo',
                licensePlate: 'AB-123-CD',
                year: 2020,
                mileage: 50000,
                status: 'active',
            },
            {
                id: '2',
                brand: 'Peugeot',
                model: 'Partner',
                licensePlate: 'EF-456-GH',
                year: 2019,
                mileage: 75000,
                status: 'active',
            },
        ];

        setTimeout(() => {
            setVehicles(mockVehicles);
            setLoading(false);
        }, 500);
    }, []);

    return { vehicles, loading };
};