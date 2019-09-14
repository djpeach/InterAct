const gql = require('graphql')
const {ProfileType} = require('../types')
const { ProfileModel} = require('../../mongodb')

module.exports.createProfile ={
    type: ProfileType,
    args: {
     username:{ type: gql.GraphQLNonNull(gql.GraphQLString) },     
     email:{ type: gql.GraphQLNonNull(gql.GraphQLString) },
    },
    resolve(parent, { username,email }) {
        return new ProfileModel({username,email}).save()
    }
}