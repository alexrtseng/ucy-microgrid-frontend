import React from 'react';

interface SmartMeterDataProps {
    name: string;
    connected: boolean;
    powerConsumption: number;
    reactiveConsumption: number;
    apparentPower: number;
    frequency: number;
    powerFactor: number;
}

const SmartMeterData: React.FC<SmartMeterDataProps> = ({
    name,
    connected,
    powerConsumption,
    reactiveConsumption,
    apparentPower,
    frequency,
    powerFactor,
}) => {
    return (
        <div className="smart-meter bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="mb-1">Connected: {connected ? 'Yes' : 'No'}</p>
            <p className="mb-1">Power Consumption: {powerConsumption} kW</p>
            <p className="mb-1">Reactive Consumption: {reactiveConsumption} kVAR</p>
            <p className="mb-1">Apparent Power: {apparentPower} kVA</p>
            <p className="mb-1">Frequency: {frequency} Hz</p>
            <p className="mb-1">Power Factor: {powerFactor}</p>
        </div>
    );
};

export default SmartMeterData;