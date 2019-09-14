import React, {Component} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { graphql, withApollo } from "@apollo/react-hoc";
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import firebase from 'firebase'

const FIND_OPEN_GAME = gql`
  query($uid: ID!, $gameId: ID!) {
    findOpenGame(uid: $uid, gameId: $gameId) {
      game {
        title
      } player1 {
        firstName lastName
      } id
    }
  }
`

const JOIN_GAME_INSTANCE = gql`
  mutation($gameInstanceId: ID!, $uid: ID!) {
    joinGameInstance(gameInstanceId: $gameInstanceId, uid: $uid) {
      game {
        title
      } player1 {
        firstName lastName
      } player2 {
        firstName lastName
      } id
    }
  }
`

const CREATE_GAME_INSTANCE = gql`
  mutation($uid: ID!, $gameId: ID!) {
    createGameInstance(uid: $uid, gameId: $gameId) {
      game {
        title
      } player1 {
        firstName lastName
      } player2 {
        firstName lastName
      }
    }
  }
`

class GameItem extends Component {

  async findGame() {
    const uid = firebase.auth().currentUser.uid
    const { openGame } = await this.props.client.query({
      query: FIND_OPEN_GAME,
      variables: {
        uid: uid,
        gameId: this.props.game.item.id
      }
    })
    if (openGame.findOpenGame) {
      console.log(`found game: ${data.findOpenGame.id}`)
      const { joinedGame } = await this.props.client.query({
        query: JOIN_GAME_INSTANCE,
        variables: {
          uid: uid,
          gameInstanceId: openGame.findOpenGame.id
        }
      })
    } else {
      console.log(`no game`)
      const { createdGame } = await this.props.client.query({
        query: CREATE_GAME_INSTANCE,
        variables: {
          uid: uid,
          gameId: this.props.game.item.id
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.gameItem}>
        <TouchableOpacity onPress={this.findGame.bind(this)}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.gameHeader }}>
              <Text style={styles.title} numberOfLines={1}>
                {this.props.title}
              </Text>
            </View>
            <View style={{ ...styles.mealRow, ...styles.gameDetail }}>
              <View style={styles.playContainer}>
                <Text style={styles.details}>Play</Text>
                <Ionicons name="ios-play" size={40} color="black" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row"
  },
  gameItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#FCE8E8",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10
  },
  gameHeader: {
    height: "75%"
  },
  gameDetail: {
    backgroundColor: "#EFA3A3",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "25%"
  },
  title: {
    fontSize: 35,
    color: "black",
    paddingLeft: 30,
    paddingTop: 30
  },
  details: {
    fontSize: 25,
    paddingRight: 10,
    paddingTop: 5
  },
  playContainer: {
    flexDirection: "row"
  },
  rating: {
    paddingBottom: 2,
    fontSize: 25
  }
});

export default withApollo(GameItem);
