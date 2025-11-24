import React from 'react';
import { LucideIcon } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    disabled?: boolean;
    icon?: LucideIcon;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon: Icon,
    onClick,
    type = 'button',
    className = ''
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'bg-agile-primary text-white hover:bg-agile-primary-dark focus:ring-agile-primary disabled:bg-gray-400',
        outline: 'border border-agile-primary text-agile-primary hover:bg-agile-primary hover:text-white focus:ring-agile-primary disabled:border-gray-400 disabled:text-gray-400',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-gray-400'
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm gap-1.5',
        md: 'px-4 py-2 text-base gap-2',
        lg: 'px-6 py-3 text-lg gap-2.5'
    };

    const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
    ${className}
  `;

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading && <LoadingSpinner size={16} />}
            {!loading && Icon && <Icon size={16} />}
            {children}
        </button>
    );
};