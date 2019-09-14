import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import GameItem from "./GameItem";

const GameList = props => {
  const renderGameItem = itemData => {
    return <GameItem title={itemData.item.title} onSelectGame={() => {}} />;
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.title}
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

export default GameList;
