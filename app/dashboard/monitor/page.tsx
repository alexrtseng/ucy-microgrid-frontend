import React from "react"; 
import SmartMeterData from "./SmartMeter";



export default function MonitorPage() {
  return (
    <>
      <h1>Monitor</h1>
      <SmartMeterData
        name="Smart Meter 1"
        connected={true}
        powerConsumption={10}
        reactiveConsumption={5}
        apparentPower={15}
        frequency={60}
        powerFactor={0.8}
      />
      <SmartMeterData
        name="Smart Meter 2"
        connected={false}
        powerConsumption={20}
        reactiveConsumption={10}
        apparentPower={30}
        frequency={60}
        powerFactor={0.9}
      />
    </>
  );
}