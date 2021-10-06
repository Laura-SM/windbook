const mongoose = require('mongoose');
const session = require('./session.model');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  lastName: String,
  gender: String,
  weight: Number,
  windsurfLevel: String,
  sessions: [session],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = mongoose.model('User', userSchema);
