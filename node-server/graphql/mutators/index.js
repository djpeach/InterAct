const gql = require('graphql')
const profileMutators = require('./Profile')

module.exports = new gql.GraphQLObjectType({
  name: 'Mutators',
  fields: {
    ...profileMutators,
  }
})
