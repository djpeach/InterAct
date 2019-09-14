import gql from 'graphql-tag'

export const getAllGames = gql`
  {
    getAllGames {
      id title timesPlayed
    }
  }
`

export const searchGamesByTitle = gql`
  query($q: String){
    searchGamesByTitle(query: $q) {
      id title timesPlayed
    }
  }
`
