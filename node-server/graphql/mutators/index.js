const gql = require('graphql')
const profileMutators = require('./Profile')
const gameMutators = require('./Game')

module.exports = new gql.GraphQLObjectType({
  name: 'Mutators',
  fields: {
    ...profileMutators,
    ...gameMutators,
  }
})
