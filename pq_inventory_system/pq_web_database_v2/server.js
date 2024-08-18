const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Update the MongoDB connection string to use only the database name
const mongoURI = 'mongodb://playquestadmin:94uBeLzGx2XeMwm4KvZHkqNRCMrk7uj7y8@pqdb.vanderstraeten.me:27017/card_inventory?authSource=admin';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const YourSchema = new mongoose.Schema({
    _id: String,
    id: String,
    name: String,
    set: String,
    number: String,
    quantity: Number,
    condition: String,
    language: String,
    image_url: String
}, { collection: 'card_list' }); // Explicitly specify the collection name

const YourModel = mongoose.model('CardList', YourSchema);

app.get('/data', async (req, res) => {
  try {
    const data = await YourModel.find();
    console.log('Data retrieved from MongoDB:', data); // Log the data being retrieved
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send(error);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
