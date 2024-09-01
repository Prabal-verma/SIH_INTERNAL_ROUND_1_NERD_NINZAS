"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { storage } from '../../../lib/firebaseConfig'; // Adjust this path if needed

const FileSheet = () => {
  const router = useRouter();
  const query = router.query || {}; // Fallback to an empty object
  const fileID = query.fileName;

  const [spreadsheetData, setSpreadsheetData] = useState(null);

  useEffect(() => {
    const fetchFileData = async () => {
      if (fileID) {
        // Decode the filename
        const fileName = decodeURIComponent(fileID);

        // Fetch file from Firebase Storage
        const fileRef = ref(storage, `files/${fileName}`);
        try {
          const url = await getDownloadURL(fileRef);
          const response = await fetch(url);
          const data = await response.arrayBuffer(); // Adjust as needed
          setSpreadsheetData(data);
        } catch (error) {
          console.error('Error fetching file:', error);
        }
      }
    };

    fetchFileData();
  }, [fileID]);

  if (!fileID) return <p>No file selected</p>;

  return (
    <div>
      <h1>Spreadsheet: {fileID}</h1>
      {spreadsheetData ? (
        <SpreadsheetComponent
          openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
          saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
          height="600px"
          width="100%"
        >
          <SheetsDirective>
            <SheetDirective name="Sheet1">
              <RangesDirective>
                <RangeDirective dataSource={spreadsheetData} startCell="A1" />
              </RangesDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FileSheet;

