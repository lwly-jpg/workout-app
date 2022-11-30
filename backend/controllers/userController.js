const User = require('../models/userModel');
const jsonwebtoken = require('jsonwebtoken');

const createToken = (_id) => {
  return jsonwebtoken.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// User login
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // Create token
    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

// User register
const registerUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.register(email, password)

    // Create token
    const token = createToken(user._id)

    res.status(200).json({email, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

module.exports = { loginUser, registerUser }