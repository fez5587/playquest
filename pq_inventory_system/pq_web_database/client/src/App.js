import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from '@shadcn/ui';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Set', accessor: 'set' },
    { Header: 'Number', accessor: 'number' },
    { Header: 'Quantity', accessor: 'quantity' },
    { Header: 'Condition', accessor: 'condition' },
    { Header: 'Language', accessor: 'language' },
    { Header: 'Image URL', accessor: 'image_url' },
];

  return (
    <div className="App">
      <h1>MongoDB Data Table</h1>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default App;
