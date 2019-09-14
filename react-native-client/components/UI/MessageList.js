import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MessageItem from "./MessageItem";

const MessageList = props => {
  console.log(props);
  const renderGameItem = itemData => {
    return (
      <MessageItem conversation={itemData.item.title} onSelectGame={() => {}} />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={props.listData.firstName}
        renderItem={renderGameItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default MessageList;
