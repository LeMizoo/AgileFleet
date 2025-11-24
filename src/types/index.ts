// Types de base pour l'application
export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    licensePlate: string;
    year: number;
    mileage: number;
    status: 'active' | 'inactive' | 'maintenance';
}

export interface Driver {
    id: string;
    firstName: string;
    lastName: string;
    licenseNumber: string;
    email: string;
    phone: string;
}

export interface FuelLog {
    id: string;
    vehicleId: string;
    liters: number;
    cost: number;
    date: string;
    odometer: number;
}

export interface MaintenanceLog {
    id: string;
    vehicleId: string;
    type: string;
    cost: number;
    date: string;
    description: string;
}