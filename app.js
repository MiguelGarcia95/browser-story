const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();


// configure mongoose to connect to mongodb
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(res => {
  console.log("MongoDB connected succesfully")
}).catch(err => {
  console.log("MongoDB connection failed.")
});

// Serve static assets 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Setup express feats
app.use(express.json());

// routes
const routes = require('./routes');
app.use('/api/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up on port: ${process.env.PORT}`);
}) 