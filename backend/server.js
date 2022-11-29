require('dotenv').config()

const express = require('express');

// Express app
const app = express();

// Middelware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({message: "Welcome!"})
});

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on PORT 3000');
});