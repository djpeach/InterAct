const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Profile',
  fields: () => {
    return {
      id: { type: GraphQLID },
      username: { type: GraphQLString },
      email: { type: GraphQLString }
    }
  }
})
