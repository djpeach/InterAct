const gql = require('graphql')
const profileAccessors = require('./Profile')
const gameAccessors = require('./Game')

module.exports = new gql.GraphQLObjectType({
  name: 'Accessors',
  fields: {
    ...profileAccessors,
    ...gameAccessors,
  }
})
