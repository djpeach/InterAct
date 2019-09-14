const { GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLString, GraphQLList} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'GameInstance',
  fields: () => {
    return {
      id: { type: GraphQLID },
      currentPlayer: { type: GraphQLString },
      players: { type: GraphQLList(GraphQLObjectType({
        
      })) },
    }
  }
})
