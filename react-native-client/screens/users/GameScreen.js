import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.innerView}>
        <Text style={styles.turn}>Turn</Text>
        <Text style={styles.display}>Test</Text>
        <View style={styles.button}>
          <Button title="Play" onPress={() => {}} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerView: {
    height: "90%",
    width: "90%",
    borderRadius: 30,
    backgroundColor: "#FBE1E1",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    fontSize: 30,
    justifyContent: "center",
    borderRadius: 10
  },
  display: {
    fontSize: 40,
    paddingBottom: 60
  },
  turn: {
    fontSize: 60,
    color: "white"
  }
});

export default GameScreen;
