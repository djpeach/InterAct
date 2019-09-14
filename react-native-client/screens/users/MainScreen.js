import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

const MainScreen = props => {
  return (
    <View>
      <Text>Testw</Text>
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

export default MainScreen;
