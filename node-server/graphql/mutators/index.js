const gql = require('graphql')
const profileMutators = require('./Profile')
const gameMutators = require('./Game')
const gameInstanceMutators = require('./GameInstance')

module.exports = new gql.GraphQLObjectType({
  name: 'Mutators',
  fields: {
    ...profileMutators,
    ...gameMutators,
    ...gameInstanceMutators,
  }
})
