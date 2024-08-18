const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
  // Define your schema here
});

const Data = mongoose.model('Data', DataSchema);

app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json(newData);
});

app.put('/data/:id', async (req, res) => {
  const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedData);
});

app.delete('/data/:id', async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.json({ message: 'Data deleted' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
