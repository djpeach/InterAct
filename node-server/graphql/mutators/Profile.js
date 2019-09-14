const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql')
const { ProfileType } = require('../types')
const { ProfileModel } = require('../../mongodb')

module.exports.createProfile = {
    type: ProfileType,
    args: {
      _id: { type: GraphQLNonNull(GraphQLID) },
      firstName: { type: GraphQLNonNull(GraphQLString) },
      lastName: { type: GraphQLNonNull(GraphQLString) },
      accountType: { type: GraphQLNonNull(GraphQLString) },
      phoneNumber: { type: GraphQLNonNull(GraphQLString) },
      isNumberVerified: { type: GraphQLBoolean },
      email: { type: GraphQLNonNull(GraphQLString) },
      topGames: { type: GraphQLList(GraphQLString)},
      communityRadius: { type: GraphQLInt }
    },
    resolve(parent, ...args) {
        return new ProfileModel(...args).save()
    }
}
