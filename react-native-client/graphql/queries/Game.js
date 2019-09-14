import gql from 'graphql-tag'

export const getAllGames = gql`
  {
    getAllGames {
      id title timesPlayed
    }
  }
`

export const searchGameByTitle = gql`
  query($q: String){
    searchGameByTitle(query: $q) {
      id title timesPlayed
    }
  }
`
