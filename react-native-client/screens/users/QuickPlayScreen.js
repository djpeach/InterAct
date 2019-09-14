import React from "react";
import { StyleSheet, View, Text, FlatList, TextInput } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/react-hoc";
import { getAllGames, searchGameByTitle } from "../../graphql";

import GameList from "../../components/UI/GameList";
const QuickPlayScreen = ({ getAllGames, searchGameByTitle }) => {
  const { loading, getAllGames: games, error } = getAllGames;
  const {
    loadingTitle,
    searchGameByTitle: gamesByTitle,
    errorTitle
  } = searchGameByTitle;

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (games) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TextInput
            placeholder="Search Game"
            style={styles.searchBar}
            onChangeText={value => {
              gamesByTitle(value);
            }}
          />
        </View>
        <View>
          <GameList listData={games} />
        </View>
      </View>
    );
  }
};

QuickPlayScreen.navigationOptions = navData => {
  return {
    headerTitle: "Quick Play",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-contact"
          onPress={() => {
            navData.navigation.navigate("ProfileScreen");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  searchBar: {
    backgroundColor: "#FEF0F0",
    justifyContent: "center",
    width: "90%",
    padding: 15,
    fontSize: 20,
    borderRadius: 10
  },
  playFont: {
    fontFamily: "San Francisco",
    fontSize: 20,
    margin: 20
  },
  playQueue: {
    flexDirection: "row",
    margin: 20,
    width: 75,
    height: 75,
    borderRadius: 100 / 2,
    backgroundColor: "pink"
  },
  game: {
    backgroundColor: "pink",
    width: "90%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 30,
    borderRadius: 20
  },
  playRow: {
    flexDirection: "row"
  }
});

export default compose(
  graphql(getAllGames, { name: "getAllGames" }),
  graphql(searchGameByTitle, { name: "searchGameByTitle " })
)(QuickPlayScreen);
