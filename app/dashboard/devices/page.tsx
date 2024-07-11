import React from "react";
import Device from "./Device"
import {DeviceProps} from "./Device"
import getData from "../GetData"

function isSmartMeter(obj: any): obj is DeviceProps {
  return (
    typeof obj.name === 'string' &&
    typeof obj.ipAddress === 'string' &&
    typeof obj.connectivityPercentage === 'number' &&
    typeof obj.latitude === 'number' &&
    typeof obj.longitude === 'number'
  );
}

export default async function DevicesPage() {
  let smInfo: DeviceProps[] = [];
  smInfo = await getData('metrics/devices');

  if (!Array.isArray(smInfo)) {
    console.error('Error fetching data: smInfo is not an array');
    return;
  }

  smInfo.forEach(DeviceProps => {
    if (!isSmartMeter(DeviceProps)) {
      console.error('Error fetching data: Invalid DeviceProps');
      return null;
    }
  });
  
  return (
    <>
    <h1 className="text-xl font-bold mb-2">Smart Meters</h1>
    {smInfo.map((device: DeviceProps) => {
      return (
        <Device
          key={device.name}
          name={device.name}
          ipAddress={device.ipAddress}
          connectivityPercentage={device.connectivityPercentage}
          latitude={device.latitude}
          longitude={device.longitude}
        />
      );
    })}
    </>
  );
}