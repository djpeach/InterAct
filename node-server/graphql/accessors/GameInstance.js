const {GameInstanceType} = require('../types')
const {GameInstanceModel, ProfileModel} = require('../../mongodb')
const {GraphQLNonNull, GraphQLID} = require('graphql')
const gqlLogger = require('easy-log')('app:gql')

module.exports.findOpenGame = {
  type: GameInstanceType,
  args: {
    uid: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, {uid}) {
    return ProfileModel.findById(uid).then((doc) => {
      if (doc.accountType == "Public") {
        gqlLogger(`User ${uid}: ${doc.firstName} is a community memeber`)
        return GameInstanceModel.findOne({player2Id: '', player1Type: { $ne: "Public" }})
      } else {
        gqlLogger(`User ${uid}: ${doc.firstName} is a public servant`)
        return GameInstanceModel.findOne({player2Id: '', player1Type: "Public"})
      }
    })

  }
}
