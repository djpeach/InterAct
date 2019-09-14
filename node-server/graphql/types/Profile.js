const { GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLList, GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = new GraphQLObjectType({
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
      communityRadius: { type: GraphQLInt }
    }
  }
})
