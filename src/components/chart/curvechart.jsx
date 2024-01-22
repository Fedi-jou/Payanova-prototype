// CurveChart.jsx
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js

const CurveChart = () => {
  useEffect(() => {
    // Cleanup: Destroy existing chart instance when the component unmounts
    return () => {
      Chart.helpers.each(Chart.instances, (instance) => {
        instance.destroy();
      });
    };
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Curve Chart',
        data: [10, 15, 8, 20, 12, 18, 15], // Replace with your actual data
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };
  

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: data.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Curve Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default CurveChart;
