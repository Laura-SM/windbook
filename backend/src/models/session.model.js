import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  spot: String,
  date: Date,
  board: { brand: String, name: String, volume: Number },
  sail: { brand: String, name: String, size: Number },
  wind: { speed: Number, gusts: Number, direction: String },
  descritption: String,
  photos: [String],
});

export default model('Session', sessionSchema);
