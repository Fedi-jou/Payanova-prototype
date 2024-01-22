import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
    const data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN" , "JUL"],
        datasets: [{
            data: [8, 7.8, 6, 8, 7, 5],
            backgroundColor: 'transparent',
            borderColor: '#1C1BA5',
            // pointBorderColor: 'yellow', 
            pointBackgroundColor: 'yellow', // Set point color to yellow
            pointBorderWidth: 10,
            tension: 0.9,
        }],
    };

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
              
                min: 2,
                max: 10,
                ticks: {
                    stepSize: 2,
                    callback: (value) => value + 'k'
                },
                grid: {
                    // borderDash: [10],
                    display:false
                }
            }
        }
    };

    return (
        <div style={{ width: '720px', height: '395px' }}>
            <Line data={data} options={options}></Line>
        </div>
    );
};

export default LineChart;
