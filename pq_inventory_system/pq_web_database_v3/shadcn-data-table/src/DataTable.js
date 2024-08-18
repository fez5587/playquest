import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper 
} from '@mui/material';

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Data Table</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Set</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Condition</TableCell>
                            <TableCell>Language</TableCell>
                            <TableCell>Image URL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => (
                            <TableRow key={item._id}>
                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.set}</TableCell>
                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.condition}</TableCell>
                                <TableCell>{item.language}</TableCell>
                                <TableCell><a href={item.image_url} target="_blank" rel="noopener noreferrer">Image</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;
