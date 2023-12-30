const express = require("express");

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({message: 'Get all workouts'});
});

// GET a single workouts
router.get('/:id', (req, res) => {
  res.json({message: 'Get a single workouts'});
});

// POST a new workouts
router.post('/', (req, res) => {
  res.json({message: 'POST a new workouts'});
});

// DELETE a new workouts
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE a workouts'});
});

// UPDATE a new workouts
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE a workouts'});
});

module.exports = router;