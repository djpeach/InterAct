const gql = require('graphql')
const profileAccessors = require('./Profile')
const gameAccessors = require('./Game')
const gameInstanceAccessors = require('./GameInstance')

module.exports = new gql.GraphQLObjectType({
  name: 'Accessors',
  fields: {
    ...profileAccessors,
    ...gameAccessors,
    ...gameInstanceAccessors,
  }
})
