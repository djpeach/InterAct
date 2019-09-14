const {GameInstanceType} = require('../types')
const {GameInstanceModel, ProfileModel} = require('../../mongodb')
const {GraphQLNonNull, GraphQLID, GraphQLList} = require('graphql')
const gqlLogger = require('easy-log')('app:gql')

module.exports.findOpenGame = {
  type: GameInstanceType,
  args: {
    uid: { type: GraphQLNonNull(GraphQLID) },
    gameId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, {uid, gameId}) {
    return ProfileModel.findById(uid).then((doc) => {
      if (doc) {
        if (doc.accountType == "Public") {
          gqlLogger(`User ${uid}: ${doc.firstName} is a community memeber`)
          return GameInstanceModel.findOne({gameId: gameId, player2Id: '', player1Type: { $ne: "Public" }})
        } else {
          gqlLogger(`User ${uid}: ${doc.firstName} is a public servant`)
          return GameInstanceModel.findOne({gameId: gameId, player2Id: '', player1Type: "Public"})
        }
      }
    })
  }
}

module.exports.gamesByUser = {
  type: GraphQLList(GameInstanceType),
  args: {
    uid: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, {uid}) {
    return GameInstanceModel.find({currentPlayerId: uid})
  }
}
