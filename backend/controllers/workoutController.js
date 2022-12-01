const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET all workouts
const getWorkouts = async (req, res) => {

  const user_id = req.user._id

  const workouts = await Workout.find({ user_id }).sort({createdAt: -1});

  res.status(200).json(workouts);
}


// GET single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Workout does not exist"});
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({error: 'Workout does not exist'});
  }

  res.status(200).json(workout);
}

// CREATE workout
const createWorkout = async (req, res) => {
  const {title, reps, difficulty} = req.body;

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }

  if (!reps) {
    emptyFields.push('reps')
  }

  if (!difficulty) {
    emptyFields.push('difficulty')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: "Oops. Have you filled in every field?"})
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const workout = await Workout.create({title, reps, difficulty, user_id});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// DELETE workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Workout does not exist'})
  }

  const workout = await Workout.findOneAndDelete({_id: id});

  if (!workout) {
    return res.status(404).json({error: 'Workout does not exist'});
  }

  res.status(200).json(workout);
}

// UPDATE workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Workout does not exist'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!workout) {
    return res.status(404).json({error: 'Workout does not exist'});
  }

  res.status(200).json(workout);

}


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}