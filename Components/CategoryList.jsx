import { View, StyleSheet } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList(props) {
  return (
    <View style={styles.categoriesContainer}>
      {props.categoriesArray.map((cat, index) => (
        <CategoryCard
          key={index}
          cat={cat}
          InitNotesList={props.InitNotesList}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
