const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Static user register method
userSchema.statics.register = async function(email, password) {

  // Validation
  if (!email || !password) {
    throw Error('All fields are required.')
  }

  if (!validator.isEmail(email)) {
    throw Error('Invalid email address.')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password too weak.')
  }
  
  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email address is already in use.')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

module.exports = mongoose.model('User', userSchema);