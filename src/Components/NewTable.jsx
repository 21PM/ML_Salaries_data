import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Data from '../Data'; // Assuming you are importing your data here
import Chart from 'chart.js/auto';
import { Bar,Line } from 'react-chartjs-2';


function NewTable() {
  const [mainTableData, setMainTableData] = useState([]);
  const [selectedYearData, setSelectedYearData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    // Prepare data for the main table from 2020 to 2024
    const years = [2020, 2021, 2022, 2023, 2024];
    const mainData = years.map((year) => {
      const jobsInYear = Data.filter((ele) => ele.work_year === year);
      const totalJobs = jobsInYear.length;
      const totalSalary = jobsInYear.reduce((acc, cur) => acc + cur.salary_in_usd, 0);
      const averageSalary = totalJobs ? (totalSalary / totalJobs).toFixed(2) : 0;

      return {
        year,
        totalJobs,
        averageSalary,
      };
    });

    setMainTableData(mainData);    
  }, []);

  const mainColumns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter:(a,b)=> a.year - b.year,
    },
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter:(a,b)=> a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter:(a,b)=> a.averageSalary - b.averageSalary,
    },
  ];

  // Aggregating job titles and counting how many times each job appears for the selected year
  const handleRowClick = (record) => {  
    console.log(record);
    
        
    
    const jobsForYear = Data.filter((ele) => ele.work_year === record.year);
    // Aggregating job titles
    const aggregatedJobTitles = jobsForYear.reduce((acc, cur) => {
      if (acc[cur.job_title]) {
        acc[cur.job_title] += 1;
      } else {
        acc[cur.job_title] = 1;
      }
      return acc;
    }, {});

    // Convert aggregated data into an array format for Ant Design Table
    const aggregatedData = Object.keys(aggregatedJobTitles).map((title) => ({
      job_title: title,
      job_count: aggregatedJobTitles[title],
    }));

    setSelectedYearData(aggregatedData);
    setSelectedYear(record.year);
  };

  const detailColumns = [
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      key: 'job_title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'job_count',
      key: 'job_count',
    },
  ];

  // Define expanded row render to show experience level, employment type, salary, and company size
  const expandedRowRender  = (record) => {
    const jobsForTitle = Data.filter(
      (ele) => ele.work_year === selectedYear && ele.job_title === record.job_title
    );  

    return (
      <Table
        columns={[
          { title: 'Experience Level', dataIndex: 'experience_level', key: 'experience_level' },
          { title: 'Employment Type', dataIndex: 'employment_type', key: 'employment_type' },
          { title: 'Salary (USD)', dataIndex: 'salary_in_usd', key: 'salary_in_usd' },
          { title: 'Company Size', dataIndex: 'company_size', key: 'company_size' },
        ]}
        dataSource={jobsForTitle}
        // pagination={false} // Disable pagination for the dropdown table
        rowKey={`experience_level ${jobsForTitle.salary_in_usd} ${jobsForTitle.employment_type}`} // Ensure each row has a unique key
       
      />
    );
  };


  return (
    <div>
      <div className='sm:flex-col sm:flex sm:w-full md:flex md:flex-row items-center justify-between gap-3 border-6'>
    
          <div className='border-2 sm:w-full   md:min-w-4/12 min-h-[330px]'>
          
              <Line
              data={{
                labels: ["2020","2021","2022","2023","2024"],
                datasets: [{
                  label: 'My First Dataset',
                  data:   mainTableData?.map(item => item.totalJobs) || [],  // Optimized data extraction
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
              }}
        />
          </div>  

          <div className='sm:w-full md:min-w-4/12  min-h-[330px]'>
          <h2>Main Table: Total Jobs and Average Salary</h2>

          <Table
            dataSource={mainTableData}
            columns={mainColumns}
            pagination={false}
            rowKey="year"
            onRow={(record) => {
              return {
                onClick: () => handleRowClick(record),
              };
            }}
          />
          </div>
      </div>

      {selectedYear && (
        <>
          <h2>Job Titles for {selectedYear}</h2>
          <Table
            dataSource={selectedYearData}
            columns={detailColumns}
            rowKey="job_title"
            expandable={{
              expandedRowRender, // Use expandedRowRender for row dropdown // this will help us to show the Dropdown Data
              rowExpandable: (record) => record.job_count > 0, // Only allow expansion if there are jobs
            }}
          />
        </>
      )}
    </div>
  );
}

export default NewTable;
