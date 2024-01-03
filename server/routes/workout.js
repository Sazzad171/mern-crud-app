const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout
} = require("../controllers/workoutController")

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workouts
router.post('/', createWorkout);

// DELETE a new workouts
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE a workouts'});
});

// UPDATE a new workouts
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE a workouts'});
});

module.exports = router;