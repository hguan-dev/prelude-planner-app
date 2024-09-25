import * as React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";
import {
  FontFamily,
  Color,
  IconSize,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";
import CrossIcon from "../assets/icons/CrossIcon";
import CheckIcon from "../assets/icons/CheckIcon";

const NewNotifPopUp = ({ modalVisible, closeModal }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.NewNotifPopUp}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Add Notification</Text>
          <View style={styles.IconContainer}>
            <TouchableOpacity onPress={closeModal}>
              <CheckIcon size={IconSize.iconDefault} />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <CrossIcon size={IconSize.iconSmall} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.SubTextBox} // Always apply editing style
            value={subject} // Bound value to state
            placeholder="Subject" // Placeholder text
            onChangeText={(text) => setSubject(text)} // Update state with text input
            placeholderTextColor="#bbb" // Placeholder color
          />
          <TextInput
            style={styles.DescTextBox} // Always apply editing style
            value={description} // Bound value to state
            placeholder="Description" // Placeholder text
            onChangeText={(text) => setDescription(text)} // Update state with text input
            placeholderTextColor="#bbb" // Placeholder color
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Padding.pageHeaderTop,
    paddingHorizontal: Padding.headerText,
    marginBottom: Padding.larger,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alataRegular,
    color: Color.white,
  },
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.headerIcon,
  },
  NewNotifPopUp: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.darkPurple,
  },
  SubTextBox: {
    color: Color.white,
    height: 40,
    margin: 20,
    borderWidth: 1.5,
    padding: 5,
    borderColor: Color.white,
    borderRadius: 5,
  },
  DescTextBox: {
    color: Color.white,
    height: 100,
    margin: 20,
    borderWidth: 1.5,
    borderColor: Color.white,
    borderRadius: 5,
    padding: 5,
  },
});

export default NewNotifPopUp;
