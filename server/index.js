// import required packages
require('dotenv').config();
const express = require("express");
const cors = require('cors');

// initiate route
const workoutRoutes = require('./routes/workout');

// express app initiate
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// middleware for hitting path & method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

// app.get('/', (req, res) => {
//   res.json({message: 'Welcome to the app'});
// });

app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('server running.', process.env.PORT);
});