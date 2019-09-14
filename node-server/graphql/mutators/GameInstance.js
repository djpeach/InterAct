const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql')
const { GameInstanceType } = require('../types')
const { GameInstanceModel, ProfileModel } = require('../../mongodb')

module.exports.createGameInstance = {
    type: GameInstanceType,
    args: {
      uid: { type: GraphQLNonNull(GraphQLID)},
      gameId: { type: GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, {uid, gameId}) {
      return new GameInstanceModel({currentPlayerId: uid, player1Id: uid, gameId: gameId}).save()
    }
}
