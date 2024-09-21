import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Data from "../Data"; // Adjust the import path as needed

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function JobsLineChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Calculate total jobs per year
    const dataByYear = {};
    Data.forEach(item => {
      const year = item.work_year;
      if (!dataByYear[year]) {
        dataByYear[year] = 0;
      }
      dataByYear[year] += 1; // Counting the number of jobs
    });

    // Prepare data for Chart.js
    const years = Object.keys(dataByYear).sort();
    const jobs = years?.map(year => dataByYear[year]);

    setChartData({
      labels: years, // X-axis labels
      datasets: [
        {
          label: 'Total Jobs',
          data: jobs,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderWidth: 1,
        }
      ],
    });
  }, []);

  return (
    <div>
      <h2>Jobs Over Time (2020 - 2024)</h2>
      <Line data={chartData} />
    </div>
  );
}

export default JobsLineChart;
