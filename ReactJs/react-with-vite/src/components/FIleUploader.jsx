import React, { useState } from 'react';
import XLSX from 'xlsx';

export function ExcelFileUploader({ onUpload }) {
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      parseExcelFile(file);
    }
  };

  const parseExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Process the parsed data, e.g., create users
      // Pass the created users or errors to the onUpload callback
      const users = processData(jsonData);
      onUpload(users);
    };

    reader.onerror = (e) => {
      setError('Error reading file');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      {error && <p>{error}</p>}
    </div>
  );
}


function UserCreationComponent() {
  const handleUpload = (users) => {
    // Handle user creation logic based on the parsed data
    // Show appropriate errors if needed
    console.log(users);
  };

  return (
    <div>
      <h1>User Creation</h1>
      <ExcelFileUploader onUpload={handleUpload} />
    </div>
  );
}

export default UserCreationComponent;
