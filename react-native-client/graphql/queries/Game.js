import gql from 'graphql-tag'

export const getAllGames = gql`
  {
    getAllGames {
      id title timesPlayed
    }
  }
`
