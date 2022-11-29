const express = require('express');
const Workout = require('../models/Workout')
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({message: 'GET all workouts'})
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({message: 'GET single workout'})
});

// POST new workout
router.post('/', async (req, res) => {
  const {title, reps, difficulty} = req.body;

  try {
    const workout = await Workout.create({title, reps, difficulty});
    res.status(200),json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

});

// DELETE new workout
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE workout'})
});

// UPDATE new workout
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE workout'})
});

module.exports = router;