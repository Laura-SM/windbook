const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  spot: String,
  date: Date,
  board: { brand: String, name: String, volume: Number },
  sail: { brand: String, name: String, size: Number },
  wind: { speed: Number, gusts: Number, direction: String },
  descritption: String,
  photos: [String],
});

module.exports = mongoose.model('Session', sessionSchema);
