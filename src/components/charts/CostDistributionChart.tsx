import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface CostDistributionChartProps {
    data: {
        fuelCost: number;
        maintenanceCost: number;
        otherCosts: number;
    };
}

const COLORS = ['#2ECC71', '#3498DB', '#E74C3C', '#F39C12', '#9B59B6'];

export const CostDistributionChart: React.FC<CostDistributionChartProps> = ({ data }) => {
    const chartData = [
        { name: 'Carburant', value: data.fuelCost, color: COLORS[0] },
        { name: 'Maintenance', value: data.maintenanceCost, color: COLORS[1] },
        { name: 'Autres coûts', value: data.otherCosts, color: COLORS[2] },
    ].filter(item => item.value > 0);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        }).format(value);
    };

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-800">{payload[0].name}</p>
                    <p className="text-agile-primary font-medium">
                        {formatCurrency(payload[0].value)}
                    </p>
                    <p className="text-sm text-gray-600">
                        {((payload[0].value / data.fuelCost + data.maintenanceCost + data.otherCosts) * 100).toFixed(1)}%
                    </p>
                </div>
            );
        }
        return null;
    };

    if (chartData.length === 0) {
        return (
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Aucune donnée disponible</p>
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};