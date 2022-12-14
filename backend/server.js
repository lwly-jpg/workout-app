require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');


// Express app
const app = express();

// Middelware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// Connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to database & listening on PORT 3000');
    });

  })
  .catch((error) => {
    console.log(error);
  });