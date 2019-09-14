const {GraphQLList} = require('graphql')
const { GameType } = require('../types')
const { GameModel } = require('../../mongodb')

module.exports.getAllGames = {
  type: GraphQLList(GameType),
  resolve(parent, args) {
    return GameModel.find({}).sort({timesPlayed: -1})
  }
}

module.exports.getGamesForTitleQuery = {
  type: GraphQLList(GameType),
  resolve(parent, args) {
    return GameModel.find({})
  }
}
