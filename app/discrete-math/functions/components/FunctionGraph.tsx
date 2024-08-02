"use client";

import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import 'chart.js/auto';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

function FunctionGraph() {
  const data = {
    datasets: [
      {
        label: 'f: {1, 2, 3} → {1, 2, 3}',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 3 },
        ],
        backgroundColor: 'rgb(120, 1, 199)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        beginAtZero: true,
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '200px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <Scatter data={data} options={options} />
    </div>
  );
}

export default FunctionGraph;
