'use client';

import React, { useEffect, useState } from "react"; 
import SmartMeterData from "./SmartMeter";
import {SmartMeterDataProps} from "./SmartMeter";
import getData from "../GetData";


function isSmartMeterDataProp(obj: any): obj is SmartMeterDataProps {
  return (
    typeof obj.name === 'string' &&
    typeof obj.recievingInfo === 'boolean' &&
    typeof obj.active === 'number' &&
    typeof obj.reactive === 'number' &&
    typeof obj.apparent === 'number' &&
    typeof obj.frequency === 'number' &&
    typeof obj.powerFactor === 'number'
  );
}

export default function MonitorPage() {
  const getRTData = async () => {
    let rtAPIData: SmartMeterDataProps[] = [] as SmartMeterDataProps[];
    rtAPIData = await getData('/metrics/rt-all-meters/')
    if (!Array.isArray(rtAPIData)) {
      console.error('Error fetching data: rtAPIData is not an array');
      return []; // add functionality to make this an error view
    }
    rtAPIData.forEach(SmartMeterDataProp => {
      if (!isSmartMeterDataProp(SmartMeterDataProp)) {
        console.error('Error fetching data: Invalid SmartMeterDataProps');
        return []; // add functionality to make this an error view
      }
    });
    return rtAPIData;
  }
  
  const [rtData, setrtData] = useState([] as SmartMeterDataProps[]);
  

  const getSetRTData = async () => {
    let rtAPIData = await getRTData();
    setrtData(rtAPIData);
  };

  useEffect(() => {
    getSetRTData();

    const interval = setInterval(() => {
      getSetRTData();
    }, 10000); // Fetch data every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount


  return (
    <>
      <h1>Monitor</h1>
      {rtData.map((deviceData: SmartMeterDataProps) => {
        return (
          <SmartMeterData
            key={deviceData.name}
            name={deviceData.name}
            recievingInfo={deviceData.recievingInfo}
            active={deviceData.active}
            reactive={deviceData.reactive}
            apparent={deviceData.apparent}
            frequency={deviceData.frequency}
            powerFactor={deviceData.powerFactor}
          />
        );
      })  
      }
    </>
  );
}