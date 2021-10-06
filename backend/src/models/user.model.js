import { Schema, model } from 'mongoose';
import session from './session.model';

const userSchema = new Schema({
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

export default model('User', userSchema);
