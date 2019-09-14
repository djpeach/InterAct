import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MessageItem = props => {
  return (
    <View style={styles.gameItem}>
      <TouchableOpacity onPress={props.onSelectGame}>
        <View>
          <View style={{ ...styles.messageRow, ...styles.messageHeader }}>
            <Text style={styles.title} numberOfLines={1}>
              {props.data.firstName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  messageRow: {
    flex: 1
  },
  messageItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#FCE8E8",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10
  },
  messageHeader: {
    height: "75%"
  },
  title: {
    fontSize: 35,
    color: "black",
    paddingLeft: 30,
    paddingTop: 30
  }
});

export default MessageItem;
