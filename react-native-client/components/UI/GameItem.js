import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GameItem = props => {
  return (
    <View style={styles.gameItem}>
      <TouchableOpacity onPress={props.onSelectGame}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.gameHeader }}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.gameDetail }}>
            <View style={styles.playContainer}>
              <Text style={styles.details}>Play</Text>
              <Ionicons name="ios-play" size={40} color="black" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row"
  },
  gameItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#FCE8E8",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10
  },
  gameHeader: {
    height: "75%"
  },
  gameDetail: {
    backgroundColor: "#EFA3A3",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "25%"
  },
  title: {
    fontSize: 35,
    color: "black",
    paddingLeft: 30,
    paddingTop: 30
  },
  details: {
    fontSize: 25,
    paddingRight: 10,
    paddingTop: 5
  },
  playContainer: {
    flexDirection: "row"
  },
  rating: {
    paddingBottom: 2,
    fontSize: 25
  }
});

export default GameItem;
