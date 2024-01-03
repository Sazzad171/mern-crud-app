const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createAt: -1});

  res.status(200).json(workouts);
}


// get a single workout
const getWorkout = async (req, res) => {
  const {id} = req.params;

  const workout = await Workout.findById(id);

  // if invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such workout"});
  }

  // if no id
  if (!workout) {
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);
}


// create new workout
const createWorkout = async (req, res) => {
  const {title, phnNo, isActive} = req.body

  try {
    const workout = await Workout.create({title, phnNo, isActive})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

  res.json({message: 'POST a new workouts'});
}


// delete a workout


// update a workout



module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout
}