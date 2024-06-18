import React from 'react';

interface DeviceProps {
    name: string;
    ipAddress: string;
    connectivityPercentage: number;
    latitude: number;
    longitude: number;
}

const Device: React.FC<DeviceProps> = ({
    name,
    ipAddress,
    connectivityPercentage,
    latitude,
    longitude,
}) => {
    return (
        <div className="smart-meter bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Smart Meter Information</h2>
            <p className="mb-1">Name: {name}</p>
            <p className="mb-1">IP Address: {ipAddress}</p>
            <p className="mb-1">Connectivity Percentage: {connectivityPercentage}%</p>
            <p className="mb-1">Latitude: {latitude}</p>
            <p className="mb-1">Longitude: {longitude}</p>
        </div>
    );
};

export default Device;