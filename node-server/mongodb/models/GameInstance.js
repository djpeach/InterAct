const mongoose = require('mongoose')

const required = true

const GameInstanceSchema = new mongoose.Schema({
  currentPlayerId: { type: String },
  player1Id: { type: String },
  gameId: {type: String}
})

module.exports = mongoose.model('GameInstance', GameInstanceSchema)
