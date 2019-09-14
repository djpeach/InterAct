import gql from 'graphql-tag'

export const getAllProfiles = gql`
query {
  getAllProfiles {
    _id
    email
  }
}
`

export const createProfile = gql`
mutation($_id: ID!, $firstName: String!, $lastName: String!, $accountType: String!, $phoneNumber: String!
  $isNumberVerified: Boolean, $email: String!, $topGames: [String], $communityRadius: Int) {
  createProfile(_id: $_id, firstName: $firstName, lastName: $lastName, accountType: $accountType, phoneNumber: $phoneNumber,
    isNumberVerified: $isNumberVerified, email: $email, topGames: $topGames communityRadius: $communityRadius) {
      _id firstName lastName accountType phoneNumber isNumberVerified email topGames communityRadius
  }
}
`
