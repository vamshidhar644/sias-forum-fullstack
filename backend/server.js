require('dotenv').config();
const userRoutes = require('./routes/user');
const express = require('express');
const { default: mongoose } = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/user', userRoutes);

// connect to db

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
