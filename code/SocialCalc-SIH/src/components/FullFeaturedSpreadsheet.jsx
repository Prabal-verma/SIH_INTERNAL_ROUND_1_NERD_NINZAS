// components/FullFeaturedSpreadsheet.jsx
import React, { useRef, useEffect } from 'react';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective
} from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-buttons/styles/material.css';
import '@syncfusion/ej2-react-inputs/styles/material.css';
import '@syncfusion/ej2-react-dropdowns/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';

const FullFeaturedSpreadsheet = ({ data }) => {
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    if (data && spreadsheetRef.current) {
      spreadsheetRef.current.open({ data, type: 'xlsx' });
    }
  }, [data]);

  return (
    <div style={{ padding: '20px', maxWidth: '100%', overflowX: 'auto' }}>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        allowSorting={true}
        allowFiltering={true}
        allowEditing={true}
        showRibbon={true}
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
          <SheetDirective name="Spreadsheet Data">
            <RangesDirective>
              <RangeDirective dataSource={[]} startCell="A1" />
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default FullFeaturedSpreadsheet;
