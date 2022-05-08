import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import getData from '../get-data';

function Grid({ columnDefs, defaultColDef }) {
  return (
    <div className="ag-theme-alpine" style={{ height: '98vh' }}>
      <AgGridReact
        maintainColumnOrder
        defaultColDef={defaultColDef}
        rowData={getData(10)}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default Grid;
