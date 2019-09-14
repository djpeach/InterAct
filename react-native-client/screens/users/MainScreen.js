import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { getAllProfiles } from "../../graphql";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

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
