import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ data, title, type = 'line' }) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: title },
    },
    scales: {
      x: { type: 'category' },
      y: { type: 'linear' },
    },
  };

  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: title,
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return type === 'line' ? (
    <Line data={chartData} options={chartOptions} />
  ) : (
    <Bar data={chartData} options={chartOptions} />
  );
};

export default Charts;
