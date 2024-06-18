import React from "react";
import Device from "./Device"

export default function DevicesPage() {
  return (
    <>
    <h1>Smart Meters</h1>
    <Device 
      name="Device 1"
      ipAddress="172.20.49.1"
      connectivityPercentage={100}
      latitude={35.1444}
      longitude={33.4116}
    />
    <Device 
      name="Device 2"
      ipAddress="172.20.49.2"
      connectivityPercentage={30}
      latitude={32.34}
      longitude={34.34}
    />
    </>
  );
}