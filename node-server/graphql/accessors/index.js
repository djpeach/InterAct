const gql = require('graphql')
const profileAccessors = require('./Profile')

module.exports = new gql.GraphQLObjectType({
  name: 'Accessors',
  fields: {
    ...profileAccessors,
  }
})
