const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql')
const { GameInstanceType } = require('../types')
const { GameInstanceModel, ProfileModel } = require('../../mongodb')
const gqlLogger = require('easy-log')('app:gql')

module.exports.createGameInstance = {
    type: GameInstanceType,
    args: {
      uid: { type: GraphQLNonNull(GraphQLID)},
      gameId: { type: GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, {uid, gameId}) {
      return ProfileModel.findById(uid).then((doc) => {
        return new GameInstanceModel({currentPlayerId: uid, player1Id: uid, gameId: gameId, player1Type: doc.accountType}).save()
      })
    }
}

module.exports.joinGameInstance = {
  type: GameInstanceType,
  args: {
    gameInstanceId: { type: GraphQLNonNull(GraphQLID) },
    uid: { type: GraphQLNonNull(GraphQLID)}
  },
  resolve(parent, {gameInstanceId, uid}) {
    gqlLogger(`Player ${uid} is joining game ${gameInstanceId}`)
    return GameInstanceModel.update({_id: gameInstanceId}, {
      player2Id: uid
    }).then(() => {
      return GameInstanceModel.findById(gameInstanceId)
    })
  }
}

module.exports.transferTurn = {
  type: GameInstanceType,
  args: {
    gameInstanceId: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, {gameInstanceId}) {
    return GameInstanceModel.findById(gameInstanceId).then((doc) => {
      if (doc.player1Id === doc.currentPlayerId) {
        return GameInstanceModel.update({_id: gameInstanceId}, {
          currentPlayerId: doc.player2Id
        }).then(() => {
          return GameInstanceModel.findById(gameInstanceId)
        })
      } else if (doc.player2Id === doc.currentPlayerId) {
        return GameInstanceModel.update({_id: gameInstanceId}, {
          currentPlayerId: doc.player1Id
        }).then(() => {
          return GameInstanceModel.findById(gameInstanceId)
        })
      }
    })
  }
}
