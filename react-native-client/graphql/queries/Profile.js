import { gql } from 'apollo-boost'

export const getProfileById = gql`
  query($id: ID!) {
    getProfileById(id: $id) {
      id
      email
    }
  }
`
