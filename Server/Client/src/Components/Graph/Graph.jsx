import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const ctx = document.getElementById('chartCanvas').getContext('2d');
      const labels = ['m5', 'h1', 'h6', 'h24'];
      const prices = labels.map(label => parseFloat(data.priceChange[label]));

      if (!chart) {
        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Price Change',
              data: prices,
              borderColor: 'red',
              tension: 0.1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        setChart(newChart);
      } else {
        chart.data.datasets[0].data = prices;
        chart.update();
      }
    }
  }, [data, chart]);

  return (
    <div className='flex justify-center bg-[#080808] w-screen h-[90vh]'>
      <canvas id="chartCanvas" width="2000" height="2000" className='bg-white'></canvas>
    </div>
  );
};

export default Graph;
