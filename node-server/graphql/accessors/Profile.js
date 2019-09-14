const {GraphQLNonNull, GraphQLID, GraphQLList} = require('graphql')
const { ProfileType } = require('../types')
const { ProfileModel } = require('../../mongodb')

module.exports.getProfileById = {
  type: ProfileType,
  args: {
    _id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve(parent, { _id }) {
    return ProfileModel.findById(_id)
  }
}
