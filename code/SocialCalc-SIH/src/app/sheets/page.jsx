"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import FileList from '../../components/FileList';
import { fetchFiles } from '../../utils/fetchFiles';

const HomePage = () => {
  const { isSignedIn } = useUser();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (isSignedIn) {
      const getFiles = async () => {
        const fetchedFiles = await fetchFiles();
        setFiles(fetchedFiles);
      };
      getFiles();
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return (<div className="h-[60vh] flex items-center justify-center  bg-black text-white">
      <div className="text-center p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Our Application</h1>
        <p className="text-lg mb-6">Please sign in to access the application and start managing your data.</p>
      </div>
    </div>)
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', color: '#ffffff' }}>
      <FileList files={files} />
    </div>
  );
};

export default HomePage;
