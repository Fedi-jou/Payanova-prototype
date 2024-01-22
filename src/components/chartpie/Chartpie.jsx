import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, LineElement, PointElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title } from 'chart.js';
Chart.register(ArcElement, LineElement, PointElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title);

const ChartPie = () => {
  // Define a linear gradient for the chart colors
  const gradient = document.createElement('canvas').getContext('2d');
  const linearGradient = gradient.createLinearGradient(0, 0, 0, 300);
  linearGradient.addColorStop(0, '#FF6384'); // Replace with your gradient colors
  linearGradient.addColorStop(1, '#4CAF50');

  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [
      {
        data: [25, 30, 20, 25], // Replace with your data points
        backgroundColor: [linearGradient, '#36A2EB', '#FFCE56', '#4CAF50'], // Use linear gradient for the first color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%', // Adjust the cutout to create a central circle
    plugins: {
      title: {
        display: true,
        text: 'Chart Title',
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const totalCircleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '120px', // Increase the size of the inner circle
    height: '120px', // Increase the size of the inner circle
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)', // Add a 3D effect using boxShadow
  };

  return (
    <div style={{ position: 'relative', width: '400px', height: '400px' }}>
      <Doughnut data={data} options={options} />
      <div style={totalCircleStyle}>
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Total</span>
      </div>
    </div>
  );
};

export default ChartPie;
