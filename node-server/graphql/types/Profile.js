const { GraphQLNonNull, GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Profile',
  fields: () => {
    return {
      _id: { type: GraphQLNonNull(GraphQLID) },
      firstName: { type: GraphQLNonNull(GraphQLString) },
      lastName: { type: GraphQLNonNull(GraphQLString) },
      accountType: { type: GraphQLNonNull(GraphQLString) },
      phoneNumber: { type: GraphQLNonNull(GraphQLString) },
      isNumberVerified: { type: GraphQLNonNull(GraphQLBoolean) },
      email: { type: GraphQLNonNull(GraphQLString) },
      topGames: { type: GraphQLList(GraphQLString)},
      communityRadius: { type: GraphQLInt }
    }
  }
})
