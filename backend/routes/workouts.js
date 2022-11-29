const express = require('express');
const {createWorkout, } = require('../controllers/workoutController');
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
router.post('/', createWorkout);

// DELETE new workout
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE workout'})
});

// UPDATE new workout
router.patch('/:id', (req, res) => {
  res.json({message: 'UPDATE workout'})
});

module.exports = router;