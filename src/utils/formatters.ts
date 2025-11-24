export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
};

export const formatNumber = (number: number): string => {
    return new Intl.NumberFormat('fr-FR').format(number);
};

export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
};

export const formatDateTime = (date: Date): string => {
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

export const calculateFuelConsumption = (liters: number, distance: number): number => {
    if (distance === 0) return 0;
    return (liters / distance) * 100;
};

export const calculateCostPerKm = (cost: number, distance: number): number => {
    if (distance === 0) return 0;
    return cost / distance;
};