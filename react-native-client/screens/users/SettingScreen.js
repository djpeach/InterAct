import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const SettingScreen = props => {
  return (
    <View style={styles.settings}>
      <Text style={styles.settingsFont}>Change Password</Text>
      <Text style={styles.settingsFont}>Change E-mail</Text>
      <Text style={styles.settingsFont}>Change Name</Text>
      <Text style={styles.settingsFont}>Change Profile Picture</Text>
    </View>
  );
};

SettingScreen.navigationOptions = navData => {
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
  settings: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 40
  },
  settingsFont: {
    //fontFamily: "San Francisco",
    fontSize: 20,
    margin: 20
  }
});

export default SettingScreen;
