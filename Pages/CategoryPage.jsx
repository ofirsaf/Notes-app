import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NoteList from "../Components/NoteList";
import { ScrollView } from "react-native";
import { useContext } from "react";
import { NoteContext } from "../Components/NoteApp";

const CategoryPage = (props) => {
  const { NoteArrContext } = useContext(NoteContext);
  const CategoryName = props.route.params.CategoryName;
  const NoteArr = props.route.params.NoteList;
  const [NoteCategoryList, setNoteCategoryList] = useState([]);
  useEffect(() => {
    setNoteCategoryList(
      NoteArrContext.filter((note) => note.category === CategoryName)
    );
  }, [NoteArrContext]);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container1}>
        <Text style={styles.category}>{CategoryName}</Text>
        <View style={styles.lengthContainer}>
          <View style={styles.lengthCircle}>
            <Text style={styles.lengthText}>{NoteCategoryList.length}</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <NoteList NoteCategoryList={NoteCategoryList} />
        <Button
          icon={{
            name: "add",
            size: 30,
            color: "white",
          }}
          buttonStyle={styles.buttonStyle}
          onPress={() =>
            props.navigation.navigate("Note Page", {
              CategoryName: CategoryName,
              NoteList: NoteArr,
            })
          }
        />
      </ScrollView>
    </View>
  );
};
export default CategoryPage;
const styles = StyleSheet.create({
  lengthText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  category: {
    fontSize: 32,
    fontWeight: "bold",
    marginRight: 10,
    color: "#f4511e",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#f4511e",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 300,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },
});
