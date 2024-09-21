import React, { useState } from 'react';
import { Table } from 'antd';

const BasicTable = () => {
  // Sample dataset for ML Engineer salaries from 2020 to 2024 with job titles and counts
  const data = [
    {
      year: 2020,
      total_jobs: 10,
      avg_salary: 80000,
      jobs: [
        { title: 'Machine Learning Engineer', count: 4 },
        { title: 'Data Scientist', count: 3 },
        { title: 'AI Engineer', count: 3 },
      ],
    },
    {
      year: 2021,
      total_jobs: 15,
      avg_salary: 85000,
      jobs: [
        { title: 'Machine Learning Engineer', count: 6 },
        { title: 'Data Scientist', count: 5 },
        { title: 'AI Engineer', count: 4 },
      ],
    },
    {
      year: 2022,
      total_jobs: 20,
      avg_salary: 90000,
      jobs: [
        { title: 'Machine Learning Engineer', count: 8 },
        { title: 'Data Scientist', count: 6 },
        { title: 'AI Engineer', count: 6 },
      ],
    },
    {
      year: 2023,
      total_jobs: 25,
      avg_salary: 95000,
      jobs: [
        { title: 'Machine Learning Engineer', count: 10 },
        { title: 'Data Scientist', count: 8 },
        { title: 'AI Engineer', count: 7 },
      ],
    },
    {
      year: 2024,
      total_jobs: 30,
      avg_salary: 100000,
      jobs: [
        { title: 'Machine Learning Engineer', count: 12 },
        { title: 'Data Scientist', count: 9 },
        { title: 'AI Engineer', count: 9 },
      ],
    },
  ];

  // State to store jobs for the selected year
  const [selectedYearJobs, setSelectedYearJobs] = useState(null);

  // Main table columns with sorting functionality
  const mainTableColumns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year, // Sorting by year
    },
    {
      title: 'Total Jobs',
      dataIndex: 'total_jobs',
      key: 'total_jobs',
      sorter: (a, b) => a.total_jobs - b.total_jobs, // Sorting by total jobs
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'avg_salary',
      key: 'avg_salary',
      sorter: (a, b) => a.avg_salary - b.avg_salary, // Sorting by average salary
    },
  ];

  // Second table columns for job titles and counts
  const jobTableColumns = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  // Function to handle row click in the main table
  const handleRowClick = (record) => {
    console.log(record)
    setSelectedYearJobs(record.jobs); // Set the jobs data for the selected year
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Main Table */}
      <h2>ML Engineer Salaries (2020-2024)</h2>
      <Table
        columns={mainTableColumns}
        dataSource={data}
        rowKey="year"
        onRow={(record) => ({
          onClick: () => handleRowClick(record), // Capture the click event for a row
        })}
      />

      {/* Conditional rendering of the second table */}
      {selectedYearJobs && (
        <>
          <h2>Job Titles for Selected Year</h2>
          <Table
            columns={jobTableColumns}
            dataSource={selectedYearJobs}
            rowKey="title"
          />
        </>
      )}
    </div>
  );
};

export default BasicTable;
