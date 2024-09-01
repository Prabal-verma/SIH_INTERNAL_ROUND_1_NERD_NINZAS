"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaFileAlt } from 'react-icons/fa';

const FileList = ({ files }) => {
  const router = useRouter();

  const handleFileClick = (fileName) => {
    // Encode the filename to handle special characters
    const encodedFileName = encodeURIComponent(fileName);
    router.push(`/sheets/${encodedFileName}?fileName=${encodeURIComponent(fileName)}`);
  };

  return (
    <div className="file-list">
      {files.length > 0 ? (
        files.map((file) => (
          <div
            key={file.name}
            className="file-card"
            onClick={() => handleFileClick(file.name)}
          >
            <FaFileAlt />
            <div className="file-info">
              <h4>{file.name}</h4>
              <p>Click to open</p>
            </div>
          </div>
        ))
      ) : (
        <p>No files available</p>
      )}
      <style jsx>{`
        .file-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .file-card {
          background: #1e1e1e;
          color: #fff;
          padding: 20px;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          width: 200px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .file-card:hover {
          background: #333;
        }
        .file-info {
          margin-left: 10px;
        }
        .file-info h4 {
          margin: 0;
          font-size: 16px;
        }
        .file-info p {
          margin: 0;
          font-size: 12px;
          color: #bbb;
        }
      `}</style>
    </div>
  );
};

export default FileList;
