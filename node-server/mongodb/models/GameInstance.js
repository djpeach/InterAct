const mongoose = require('mongoose')

const required = true

const GameInstanceSchema = new mongoose.Schema({
  currentPlayer: { type: String, required },
  players: { type: [{
      id: { type: String },
      type: { type: String }
    }],
    validate: [(val) => val.length <= 2, 'Only two players can join the same game']
  }
})

module.exports = mongoose.model('GameInstance', GameInstanceSchema)
