const mongoose = require('mongoose')

const required = true

const GameInstanceSchema = new mongoose.Schema({
  currentPlayerId: { type: String, required },
  player1Id: { type: String, required },
  player1Type: {type: String, required },
  player2Id: { type: String, default: '' },
  gameId: {type: String, required}
})

module.exports = mongoose.model('GameInstance', GameInstanceSchema)
