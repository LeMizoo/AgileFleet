export interface Vehicle {
    id: string;
    make: string;
    model: string;
    licensePlate: string;
    mileage: number;
    status: 'active' | 'maintenance' | 'inactive';
    assignedDriverId?: string;
    fuelType: 'essence' | 'diesel' | 'electrique';
    createdAt: Date;
}

export interface Driver {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive';
    assignedVehicleId?: string;
}

export interface FuelLog {
    id: string;
    vehicleId: string;
    date: Date;
    liters: number;
    cost: number;
    mileage: number;
    fuelType: string;
}

export interface MaintenanceLog {
    id: string;
    vehicleId: string;
    date: Date;
    description: string;
    cost: number;
    type: 'preventive' | 'corrective';
}

export interface CostSummary {
    totalCost: number;
    fuelCost: number;
    maintenanceCost: number;
    otherCosts: number;
    averageCostPerVehicle: number;
    trend: 'up' | 'down' | 'stable';
}