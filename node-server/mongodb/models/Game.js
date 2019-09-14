const mongoose = require('mongoose')

const required = true

const GameSchema = new mongoose.Schema({
  title: { type: String, required },
  timesPlayed: { type: Number, default: 0 }
})

module.exports = mongoose.model('Game', GameSchema)
