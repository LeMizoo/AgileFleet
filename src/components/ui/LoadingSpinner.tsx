import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
    size?: number;
    className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 24,
    className = ""
}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <Loader2 size={size} className="animate-spin text-agile-primary" />
        </div>
    );
};

export const PageLoader: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <LoadingSpinner size={48} />
                <p className="mt-4 text-gray-600">Chargement d'AgileFleet...</p>
            </div>
        </div>
    );
};