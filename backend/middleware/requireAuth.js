const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = (req, res, next) => {

  // Verify user authentication
  const { authorisation } = req.headers

  if (!authorisation) {
    return res.status(401).json({error: 'Authorisation token required'})
  }

  const token = authorisation.split(" ")[1]

  try {
    const {_id} = jsonwebtoken.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id}).select(('_id'))
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request not authorised'})
  }


}

module.exports = requireAuth