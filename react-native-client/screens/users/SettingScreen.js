import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import firebase from "firebase";

const SettingScreen = props => {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("suc");
      })
      .catch(function(error) {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.settings}>
      <Text style={styles.settingsFont}>Change Password</Text>
      <Text style={styles.settingsFont}>Change E-mail</Text>
      <Text style={styles.settingsFont}>Change Name</Text>
      <Text style={styles.settingsFont}>Change Profile Picture</Text>
      <View style={styles.signOut}>
        <Button title="Sign Out" onPress={signOut} />
      </View>
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
  },
  signOut: {
    width: 200,
    height: 100
  }
});

export default SettingScreen;
