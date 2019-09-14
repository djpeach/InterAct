import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const QuickPlayScreen = props => {
  return (
    <View>
      <Text>Test</Text>
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

export default QuickPlayScreen;
