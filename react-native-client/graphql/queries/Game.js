import gql from 'graphql-tag'

export const getAllGames = gql`
  {
    getAllGames {
      id title timesPlayed
    }
  }
`

export const searchGamesByTitle = gql`
  query($query: String) {
    searchGamesByTitle(query: $query) {
      title id
    }
  }
`
