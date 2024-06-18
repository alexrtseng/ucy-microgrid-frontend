import React from 'react';

export interface SmartMeterDataProps {
    name: string;
    recievingInfo: boolean;
    active: number;
    reactive: number;
    apparent: number;
    frequency: number;
    powerFactor: number;
}

const SmartMeterData: React.FC<SmartMeterDataProps> = ({
    name,
    recievingInfo,
    active,
    reactive,
    apparent,
    frequency,
    powerFactor,
}) => {
    return (
        <div className="smart-meter bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="mb-1">Connection: {recievingInfo ? 'Good' : 'Poor'}</p>
            <p className="mb-1">Power Consumption: {active} kW</p>
            <p className="mb-1">Reactive Consumption: {reactive} kVAR</p>
            <p className="mb-1">Apparent Power: {apparent} kVA</p>
            <p className="mb-1">Frequency: {frequency} Hz</p>
            <p className="mb-1">Power Factor: {powerFactor}</p>
        </div>
    );
};

export default SmartMeterData;