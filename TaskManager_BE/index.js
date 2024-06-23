const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const uri = 'mongodb+srv://TaskManager:qexZRCvaVC6Wse0s@cluster0.k9kjljg.mongodb.net/'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Atlas connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });


app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
