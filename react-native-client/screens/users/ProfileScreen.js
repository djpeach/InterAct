import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const ProfileScreen = props => {
  const profile = {
    firstName: "Logan",
    lastName: "Troyer",
    accountType: "Police"
  };
  const ProfileType = accountType => {
    let style = "";
    switch (accountType) {
      case "Law":
        return "#3400FF";
      case "EMS":
        return "black";
      case "Public":
        return null;
      case "Health":

      case "Fire":
        return "#FF0000";

      default:
        return "";
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.outerBorder} />
      <Image
        source={require("../../assets/IMG_6919.jpeg")}
        style={styles.profilePicture}
      />
      <Text style={styles.titles}>
        {profile.firstName + " " + profile.lastName}
      </Text>
      <Text style={styles.stats}>Test</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: "Profile",
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
  profilePicture: {
    position: "absolute",
    height: 200,
    width: 200,
    zIndex: 2,
    marginTop: "20%",
    borderRadius: Platform.OS === "ios" ? 200 / 2 : 100
  },
  titles: {
    fontSize: 40,
    marginTop: 10
  },
  stats: {
    fontSize: 30
  },
  outerBorder: {
    position: "absolute",
    marginTop: "20%",
    height: 250,
    width: 250,
    borderRadius: Platform.OS === "ios" ? 300 / 2 : 150
  }
});

export default ProfileScreen;
