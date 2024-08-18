import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from '@shadcn/ui';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ /* initial form state here */ });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:3001/data', formData);
      setData([...data, response.data]);
      setFormData({ /* reset form state here */ });
    } catch (error) {
      console.error('Error adding data', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/data/${id}`, formData);
      setData(data.map(item => item._id === id ? response.data : item));
      setFormData({ /* reset form state here */ });
    } catch (error) {
      console.error('Error updating data', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/data/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data', error);
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {/* Define your table headers here */}
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              {/* Render your data cells here */}
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>
                <Button onClick={() => handleUpdate(item._id)}>Update</Button>
                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        {/* Create your form inputs here to add/update data */}
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <Button onClick={handleAdd}>Add Data</Button>
      </div>
    </div>
  );
};

export default DataTable;
