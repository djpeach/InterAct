import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { getAllProfiles } from "../../graphql";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import GameList from "../../components/UI/GameList";

const test = [{ title: "test" }, { title: "test1" }, { title: "test2" }];
const MainScreen = ({ getAllProfiles }) => {
  const { loading, getAllProfiles: profiles, error } = getAllProfiles;
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
  } else if (profiles) {
    return (
      <View>
        {profiles.map(profile => {
          return <Text key={profile._id}>{profile.email}</Text>;
        })}
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <TextInput placeholder="Search Game" style={styles.searchBar} />
      </View>
      <View>{/*<GameList listData={games} />*/}</View>
    </View>
  );
};

MainScreen.navigationOptions = navData => {
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default compose(graphql(getAllProfiles, { name: "getAllProfiles" }))(
  MainScreen
);
