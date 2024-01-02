const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  phnNo: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Workout', workoutSchema)