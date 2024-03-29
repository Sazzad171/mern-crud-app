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
const deleteWorkout = async (req, res) => {
  const {id} = req.params;

  // if invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such workout"});
  }

  const workout = await Workout.findOneAndDelete({_id: id});

  // if no id
  if (!workout) {
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);
}


// update a workout
const updateWorkout = async (req, res) => {
  const {id} = req.params;

  // if invalid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such workout"});
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  // if no id
  if (!workout) {
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);
}


module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
}