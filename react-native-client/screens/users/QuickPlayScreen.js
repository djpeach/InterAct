import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";;
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/react-hoc";
import { getAllGames } from "../../graphql";

const QuickPlayScreen = ({ getAllGames }) => {
  const { loading, getAllGames: games, error } = getAllGames;
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
      <View>
        {console.log(games)}
      </View>
    );
};

QuickPlayScreen.navigationOptions = navData => {
  return {
    headerTitle: "Home",
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
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight
  },
  searchbar: {
    backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    width: "90%",
    padding: 10,
    fontFamily: "San Francisco",
    fontSize: 20,
    borderRadius: 20
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

export default compose(graphql(getAllGames, { name: "getAllGames" }))(
  QuickPlayScreen
);
