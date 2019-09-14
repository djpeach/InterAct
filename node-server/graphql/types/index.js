const {GameModel, GameInstanceModel, ProfileModel} = require('../../mongodb')
const {GraphQLBoolean, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLObjectType} = require('graphql')

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => {
    return {
      _id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      accountType: { type: GraphQLString },
      phoneNumber: { type: GraphQLString },
      isNumberVerified: { type: GraphQLBoolean },
      email: { type: GraphQLString },
      topGames: { type: GraphQLList(GraphQLString)},
      communityRadius: { type: GraphQLInt },
      games: {
        type: new GraphQLList(GameInstanceType),
        resolve(parent, args) {
          return GameInstanceModel.find({
            $or: [
              {player1Id: parent._id},
              {player2Id: parent._id}
            ]
          })
        }
      }
    }
  }
})

const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      timesPlayed: { type: GraphQLInt },
    }
  }
})

const GameInstanceType = new GraphQLObjectType({
  name: 'GameInstance',
  fields: () => {
    return {
      id: { type: GraphQLID },
      game: {
        type: GameType,
        resolve(parent, args) {
          return GameModel.findById(parent.gameId)
        }
      },
      currentPlayerId: {
        type: GraphQLID,
        resolve(parent, args) {
          return parent.currentPlayerId
        }
      },
      player1: {
        type: ProfileType,
        resolve(parent, args) {
          return ProfileModel.findById(parent.player1Id)
        }
      },
      player2: {
        type: ProfileType,
        resolve(parent, args) {
          return ProfileModel.findById(parent.player2Id)
        }
      }
    }
  }
})

module.exports = {
  ProfileType, GameType, GameInstanceType
}
