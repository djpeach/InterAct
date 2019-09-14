const gql = require('graphql')
// const suggestionMutator = require('./XXXMutator')

module.exports = new gql.GraphQLObjectType({
  name: 'Mutators',
  fields: {
    // ...xxxMutator,
  }
})
