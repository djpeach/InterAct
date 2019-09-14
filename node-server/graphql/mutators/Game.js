const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql')
const { GameType } = require('../types')
const { GameModel } = require('../../mongodb')

module.exports.createGame = {
    type: GameType,
    args: {
      title: { type: GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, ...args) {
        return new GameModel(...args).save()
    }
}
