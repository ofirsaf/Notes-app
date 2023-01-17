import React from "react";
import { View, StyleSheet } from "react-native";
import NoteCard from "./NoteCard";
export default function NoteList(props) {
  return (
    <View style={styles.container}>
      {props.NoteCategoryList.map((item, index) => (
        <NoteCard key={index} item={item} index={index} id={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
