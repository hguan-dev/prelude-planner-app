import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
import MeatBallIcon from "../assets/icons/MeatBallIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import EventDetails from "./EventDetails";
import Modal from "../components/Modal";

const MenuButtons = ({ onPressEdit, onPressDelete }) => {
  return (
    <View style={styles.menuPopupOptions}>
      <TouchableOpacity onPress={onPressEdit}>
        <View style={styles.editRow}>
          <Text style={styles.labelFont}>Edit</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: Color.white,
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity onPress={onPressDelete}>
        <View style={styles.deleteRow}>
          <Text style={styles.labelFont}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const OpenedEventPopup = ({ onClose, event }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const options = editing ? (
    <>
      <TouchableOpacity onPress={() => setEditing(false)}>
        <CheckIcon size={28} />
      </TouchableOpacity>
    </>
  ) : (
    <>
      <TouchableOpacity
        onPress={() => {
          setMenuVisible(true);
        }}
      >
        <MeatBallIcon size={28} />
        <Modal
          visible={isMenuVisible}
          onClose={() => setMenuVisible(false)}
          position={{ top: 40, left: -56 }}
        >
          <MenuButtons
            onPressEdit={() => {
              setEditing(true);
              setMenuVisible(false);
            }}
            onPressDelete={() => {
              console.log("delete pressed");
              onClose();
            }}
          />
        </Modal>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <CrossIcon size={18} />
      </TouchableOpacity>
    </>
  );

  return (
    <EventDetails
      event={editedEvent}
      options={options}
      editing={editing}
      onEdit={(field, text) =>
        setEditedEvent({ ...editedEvent, [field]: text })
      }
    />
  );
};

const styles = StyleSheet.create({
  labelFont: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.alata,
    color: Color.white,
  },
  // bad menu popup css
  menuPopupOptions: {
    width: 100,
  },
  deleteRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.red,
    paddingVertical: Padding.smaller,
  },
  editRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Padding.smaller,
  },
});

export default OpenedEventPopup;
