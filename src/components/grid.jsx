import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';

function Grid({ data, columnDefs, defaultColDef }) {
  return (
    <div className="ag-theme-alpine" style={{ height: '98vh' }}>
      <AgGridReact
        maintainColumnOrder
        defaultColDef={defaultColDef}
        rowData={data}
        columnDefs={columnDefs}
      />
    </div>
  );
}

// const Grid = React.memo(({ data, columnDefs, defaultColDef }) => (
//   <div className="ag-theme-alpine" style={{ height: '98vh' }}>
//     <AgGridReact
//       maintainColumnOrder
//       defaultColDef={defaultColDef}
//       rowData={data}
//       columnDefs={columnDefs}
//     />
//   </div>
// ));

export default Grid;
