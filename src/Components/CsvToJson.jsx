import React from 'react';
import { Upload, Button } from 'antd';
import * as XLSX from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';

const CsvToJson = () => {
  // Function to handle file upload and conversion to JSON
  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Print or use the JSON data
      console.log(jsonData);
      alert("data received")
    };

    reader.readAsBinaryString(file);
    return false; // Prevent default upload behavior
  };

  return (
    <div>
      <Upload customRequest={({ file }) => handleFileUpload(file)}>
        <Button icon={<UploadOutlined />}>Upload CSV</Button>
      </Upload>
    </div>
  );
};

export default CsvToJson;
