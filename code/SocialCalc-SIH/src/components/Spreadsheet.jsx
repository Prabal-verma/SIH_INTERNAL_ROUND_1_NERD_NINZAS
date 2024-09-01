// components/Spreadsheet.jsx
import React, { useRef, useState, useEffect } from 'react';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective
} from '@syncfusion/ej2-react-spreadsheet';
import { ref, getBlob } from 'firebase/storage';
import { storage } from '../lib/firebaseConfig';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfVZdX2pWfFN0QXNYdVt0flZEcDwsT3RfQFljQX1Td0FjUX5WeHxSRA==');

const Spreadsheet = ({ fileURL }) => {
  const spreadsheetRef = useRef(null);
  const [currentFileURL, setCurrentFileURL] = useState(fileURL);

  useEffect(() => {
    if (currentFileURL) {
      const loadFile = async () => {
        try {
          const fileRef = ref(storage, currentFileURL);
          const fileBlob = await getBlob(fileRef);
          const arrayBuffer = await fileBlob.arrayBuffer();
          spreadsheetRef.current.open({ data: arrayBuffer, type: 'xlsx' });
        } catch (error) {
          console.error('Failed to load file.', error);
        }
      };

      loadFile();
    }
  }, [currentFileURL]);

  return (
    <div style={{ padding: '0px', backgroundColor: '#121212', color: '#ffffff' }}>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        allowSorting={true}
        allowFiltering={true}
        allowEditing={true}
        showRibbon={true}
        allowOpen={true}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
        showFormulaBar={true}
        allowConditionalFormat={true}
        allowDataValidation={true}
        allowHyperlink={true}
        allowNumberFormatting={true}
        allowChart={true}
        enableContextMenu={true}
        enableClipboard={true}
        scrollSettings={{ isFinite: false }}
        enablePersistence={true}
        height="600px"
        width="100%"
      >
        <SheetsDirective>
          <SheetDirective name="Sheet1">
            <RangesDirective>
              <RangeDirective />
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default Spreadsheet;
