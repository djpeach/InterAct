import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import GameList from "../../components/UI/GameList";
import MessageList from "../../components/UI/MessageList";

const MessagesScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <TextInput placeholder="Search Game" style={styles.searchBar} />
      </View>
      <View>{/*<MessageList listData={conversations} />*/}</View>
    </View>
  );
};

MessagesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Messages",
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

export default MessagesScreen;
