// User login
const loginUser = async (req, res) => {
  res.json({message: 'login user'})
}

// User register
const registerUser = async (req, res) => {
  res.json({message: 'register user'})
}

module.exports = {loginUser, registerUser}