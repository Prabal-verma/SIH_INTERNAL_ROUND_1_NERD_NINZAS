// components/SheetsPage.jsx
import React, { useState, useEffect } from 'react';
import FileList from '../../components/FileList';
import { fetchFiles } from '../../utils/fetchFiles';

const SheetsPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const loadFiles = async () => {
      const fetchedFiles = await fetchFiles();
      setFiles(fetchedFiles);
    };

    loadFiles();
  }, []);

  const handleFileClick = (file) => {
    console.log('Opening file:', file);
    // Implement file opening logic here
  };

  return (
    <div className="sheets-page">
      <h1>My Files</h1>
      <FileList files={files} onFileClick={handleFileClick} />
    </div>
  );
};

export default SheetsPage;
