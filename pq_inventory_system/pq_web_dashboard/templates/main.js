const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Import required modules

// Create an Express app
const app = express();
app.use(express.json());

// Connect to the SQLite database
const db = new sqlite3.Database('pq_database.db');

// Define a route to handle the table-header update
app.put('/table-header', (req, res) => {
    const newHeader = req.body.header;

    // Update the table-header in the database
    db.run('UPDATE your_table SET header = ?', [newHeader], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Table header updated successfully');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});