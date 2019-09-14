import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import GameItem from "./GameItem";
import {searchGamesByTitle} from '../../graphql'
import { graphql } from "@apollo/react-hoc";
import {flowRight as compose, get} from 'lodash'

const GameList = ({searchGamesByTitle}) => {
  const {loading, searchGamesByTitle: games, error} = searchGamesByTitle
  console.log(searchGamesByTitle)
  const renderGameItem = itemData => {
    return <GameItem title={itemData.item.title} onSelectGame={() => {}} />;
  };
  if (loading) {
    return (
      <View><Text>Loading...</Text></View>
    )
  } else if (error) {
    return(
      <View><Text>Error: {error.message}</Text></View>
    )
  } else if(games) {
    return (
      <View style={styles.list}>
        <FlatList
          data={games}
          keyExtractor={(item, index) => item.title}
          renderItem={renderGameItem}
          style={{ width: "100%" }}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  list: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default compose(
  graphql(searchGamesByTitle, {
    name: 'searchGamesByTitle',
    options: (props) => {
      return {
        variables: {
          query: props.searchValue
        }
      }
    }
  })
)(GameList)
