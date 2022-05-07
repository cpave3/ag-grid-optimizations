import * as React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import getData from './get-data';
import Grid from './components/grid';
import NameFormatter from './components/name-formatter';

// import getData from './get-data';

function App() {
  const [data, setData] = React.useState([]);
  const [key, setKey] = React.useState(1);
  // const data = getData(10000);

  // api fetch
  React.useEffect(() => {
    (async () => {
      // fetch('https://b782d862-879a-44ef-9eb3-08b43ff81204.mock.pstmn.io/data').then((res) => res.json()).then(setData);
      setData(getData(100));
    })();
  }, []);

  const handleClick = () => {
    // fetch('https://b782d862-879a-44ef-9eb3-08b43ff81204.mock.pstmn.io/data').then((res) => res.json()).then(setData);
    setKey((oldKey) => oldKey + 1);
  };

  const columnDefs = React.useMemo(() => [
    { field: 'id' },
    { field: 'first_name', cellRenderer: NameFormatter },
    { field: 'last_name' },
    { field: 'email' },
    { field: 'gender' },
    { field: 'ip_address' },
  ], []);

  // const columnDefs = [
  //   { field: 'id' },
  //   { field: 'first_name', cellRenderer: NameFormatter },
  //   { field: 'last_name' },
  //   { field: 'email' },
  //   { field: 'gender' },
  //   { field: 'ip_address' },
  // ];

  const defaultColDef = React.useMemo(() => ({
    filter: true,
    sortable: true,
  }), []);

  return (
    <div key={key}>
      <button onClick={handleClick} type="button">Fetch Data</button>
      <Grid columnDefs={columnDefs} data={data} defaultColDef={defaultColDef} />
    </div>
  );
}

export default App;
