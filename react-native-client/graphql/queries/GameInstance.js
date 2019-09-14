import gql from 'graphql-tag'
import firebase from 'firebase'

export const findOpenGame = gql`
  {
    findOpenGame(uid: ${firebase.auth().currentUser.uid}) {
      id
    }
  }
`
