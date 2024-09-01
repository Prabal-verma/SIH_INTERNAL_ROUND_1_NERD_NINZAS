"use client"
// components/FileList.jsx
import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../lib/firebaseConfig';

const FileList = ({ onSelectFile }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const listRef = ref(storage, 'spreadsheets/');
      const res = await listAll(listRef);
      const filePromises = res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { name: itemRef.name, url };
      });
      const fileList = await Promise.all(filePromises);
      setFiles(fileList);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>My Files</h1>
      <ul>
        {files.map(file => (
          <li key={file.name} onClick={() => onSelectFile(file.url)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
