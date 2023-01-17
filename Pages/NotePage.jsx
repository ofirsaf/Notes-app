import { View, TextInput } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { NoteContext } from "../Componetns/NoteApp";
import { useContext } from "react";
export default function NotePage(props) {
  const { NoteArrContext, setNoteArrContext } = useContext(NoteContext);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const CategoryName = props.route.params.CategoryName;
  const NoteList = props.route.params.NoteList;
  const date = new Date().toLocaleString();

  const handleSaveNote = () => {
    const Newnote = {
      id: NoteArrContext.length + 1,
      category: CategoryName,
      title: title,
      body: note,
      date: date,
    };
    const arr = [...NoteArrContext, Newnote];
    setNoteArrContext(arr);
    props.navigation.navigate("Category Page", {
      CategoryName: CategoryName,
      NoteList: NoteArrContext,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Input
            value={date}
            inputContainerStyle={styles.inputContainer}
            leftIcon={{ type: "font-awesome", name: "calendar" }}
            inputStyle={styles.inputDate}
            editable={false}
          />
          <Input
            placeholder="Note Title"
            value={title}
            onChangeText={setTitle}
            inputContainerStyle={styles.inputContainer}
            leftIcon={{ type: "font-awesome", name: "sticky-note" }}
            inputStyle={styles.input}
          />
          <TextInput
            placeholder="Write your note here"
            value={note}
            onChangeText={setNote}
            multiline={true}
            style={styles.textInput}
          />
          <Button
            title="Save Note"
            onPress={handleSaveNote}
            buttonStyle={styles.button}
          />
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#f7f7f7",
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: "AppleSDGothicNeo-Bold",
  },
  inputDate: {
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "grey",
  },
  textInput: {
    height: 200,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    marginTop: 10,
    fontFamily: "AppleSDGothicNeo-Bold",
  },
  button: {
    backgroundColor: "#3DDC84",
    marginTop: 20,
    borderRadius: 20,
    fontFamily: "AppleSDGothicNeo-Bold",
  },
};
