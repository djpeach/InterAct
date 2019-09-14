import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const MessagesScreen = props => {
  return (
    <View>
      <Text>Messages</Text>
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MessagesScreen;
