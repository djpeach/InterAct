import gql from 'graphql-tag'

export const getAllProfiles = gql`
query {
  getAllProfiles {
    _id
    email
  }
}
`;
