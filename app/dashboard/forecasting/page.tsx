'use client';
import React, { useState } from 'react';
import ForecastChart from './ForecastChart';
// Assuming you're using a chart library like Chart.js or Recharts for the line graphs

export default function ForecastingPage() {
    const [timeRange, setTimeRange] = useState(0); // 0: Tomorrow, 1: 7 Days, 2: 14 Days




    return (
        <div>
            <h1>UCY Microgrid Energy Forecast</h1>
            <div>
                <button onClick={() => setTimeRange(0)}>Tomorrow</button>
                <button onClick={() => setTimeRange(1)}>7 Days</button>
                <button onClick={() => setTimeRange(2)}>14 Days</button>
            </div>
            <div>
                <ForecastChart key={timeRange} timeRange={timeRange} />
            </div>
        </div>
    );
}