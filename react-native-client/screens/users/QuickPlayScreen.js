import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { SafeAreaView } from "react-navigation";

const LoginScreen = props => {
  return (
      <SafeAreaView style={styles.container}>
          <TextInput
            placeholder="Search:"
            style={styles.searchbar}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FlatList
            style={styles.game}
            data={games}
            renderItem={this.renderItem}
            keyExtractor={extractID}
          />
      </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: "Quick Play"
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
    },
    searchbar:{
        backgroundColor: 'pink',
        marginVertical: 8,
        marginHorizontal: 16,
        width: "90%",
        padding: 10,
        fontFamily: "San Francisco",
        fontSize: 20,
        borderRadius: 20
    },
    playFont:{
        fontFamily: "San Francisco",
        fontSize: 20,
        margin: 20,
    },
    playQueue: {
        flexDirection: "row",
        margin: 20,
        width: 75,
        height: 75,
        borderRadius: 100/2,
        backgroundColor: "pink",
    },
    game: {
        backgroundColor: 'pink',
        width: "90%",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 30,
        borderRadius: 20
    },
    playRow: {
        flexDirection: "row",
    },
});

export default LoginScreen;
