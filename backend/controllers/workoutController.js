const Workout = require('../models/workoutModel');

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1});

  res.status(200).json(workouts);
}


// GET single workout


// CREATE workout
const createWorkout = async (req, res) => {
  const {title, reps, difficulty} = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({title, reps, difficulty});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// DELETE workout


// UPDATE workout


module.exports = {
  createWorkout,
  getWorkouts
}