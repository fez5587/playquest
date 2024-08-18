const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://playquestadmin:94uBeLzGx2XeMwm4KvZHkqNRCMrk7uj7y8@pqdb.vanderstraeten.me:27017/card_inventory/card_list?authSource=admin';

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
    set: Number,
    number: String,
    quantity: Number,
    condition: String,
    language: String,
    image_url: String
});

const YourModel = mongoose.model('card_list', YourSchema);

app.get('/data', async (req, res) => {
  try {
    const data = await YourModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
