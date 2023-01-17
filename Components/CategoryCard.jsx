import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function CategoryCard(props) {
  const navigation = useNavigation();
  return (
    <Card containerStyle={styles.categoryCard}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Category Page", {
              CategoryName: props.cat,
              NoteList: props.InitNotesList,
            })
          }
        >
          <Text style={styles.categoryText}>{props.cat}:</Text>
        </TouchableOpacity>
        <Text style={styles.categoryCount}>
          {
            props.InitNotesList.filter((note) => note.category === props.cat)
              .length
          }
        </Text>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  categoryCard: {
    width: "60%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#03A9F4",
  },
  categoryContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 30,
    marginRight: 10,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
  },
  categoryCount: {
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
  },
});
