const { GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLString} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Game',
  fields: () => {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      timesPlayed: { type: GraphQLInt },
    }
  }
})
