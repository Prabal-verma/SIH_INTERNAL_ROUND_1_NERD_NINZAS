// components/Dashboard.jsx
import React, { useState } from 'react';
import FileList from './FileList';
import FullFeaturedSpreadsheet from './FullFeaturedSpreadsheet';

const Dashboard = () => {
  const [selectedFileURL, setSelectedFileURL] = useState('');

  return (
    <div className="flex">
      <FileList onFileClick={setSelectedFileURL} />
      {selectedFileURL && <FullFeaturedSpreadsheet fileURL={selectedFileURL} />}
    </div>
  );
};

export default Dashboard;
