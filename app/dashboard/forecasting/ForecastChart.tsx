import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import getData from "../GetData"


type ForecastChartProps = {
    timeRange: number;
};

interface ForecastData {
    Timestamp: any;
    PV: number;
    Load: number;
    NetLoad: number;
}

export default async function ForecastChart(props: ForecastChartProps) {
    const { timeRange } = props;
    const tomorrow = new Date();
    const endDate = new Date();
    let range = 1;
    if (timeRange == 1) {
        range = 7;
    } else if (timeRange == 2) {
        range = 14;
    }
    tomorrow.setDate(tomorrow.getDate() + 1);
    endDate.setDate(tomorrow.getDate() + range);
    const tomorrowISO = tomorrow.toISOString().split('T')[0];
    const endISO = endDate.toISOString().split('T')[0];


    endDate.setDate(tomorrow.getDate() + range);

    let data = await getData(`forecasting/forecast-net-load?start=${tomorrowISO}&end=${endISO}&ess_optimization=energy_export&resolution=30&${timeRange == 0 ? 'min_resolution=true' : 'min_resolution=false'}`);
    console.log(data)
    data = data['values']

    data.forEach((element: ForecastData) => {
        const timestamp = new Date(element['Timestamp']);
        const options = { timeZone: 'Asia/Nicosia' };
        element['Timestamp'] = timestamp.toLocaleString('en-US', options);
    })
    console.log(data)
    return (
        <>
            <LineChart width={1000} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Timestamp" label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} tickFormatter={(tick) => {
                    const date = new Date(tick);
                    if (timeRange == 0) {
                        return date.toLocaleTimeString().split(':00 ')[0];
                    } else {
                        return date.toLocaleDateString();
                    }
                }} ticks={[data[0]['Timestamp'], data[40]['Timestamp']]} />
                <YAxis label={{ value: 'Power (MW)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PV" stroke="blue" />
                <Line type="monotone" dataKey="Load" stroke="red" />
            </LineChart>
            <LineChart width={1000} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Timestamp" label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} tickFormatter={(tick) => {
                    const date = new Date(tick);
                    if (timeRange == 0) {
                        return date.toLocaleTimeString().split(':00 ')[0];
                    } else {
                        return date.toLocaleDateString();
                    }
                }} ticks={[data[0]['Timestamp'], data[40]['Timestamp']]} />
                <YAxis label={{ value: 'Power (MW)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Net-Load" stroke="purple" />
                <Line type="monotone" dataKey="State of Charge" stroke="blue" />
                <Line type="monotone" dataKey="Optimal Charge Rate" stroke="green" />
            </LineChart>
        </>
    );
}