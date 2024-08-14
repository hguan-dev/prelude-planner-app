import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
import CheckIcon from "../assets/icons/CheckIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import EventDetails from "./EventDetails";

const NewEventPopup = ({ onClose }) => {
  const [newEvent, setNewEvent] = useState({});

  // function that saves and then calls on close
  function saveAndClose() {
    // save

    // close
    onClose();
  }
  const options = (
    <>
      <TouchableOpacity onPress={saveAndClose}>
        <CheckIcon size={28} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <CrossIcon size={18} />
      </TouchableOpacity>
    </>
  );

  return (
    <EventDetails
    event={newEvent}
    options={options}
    editing={true}
    onEdit={(field, text) =>
        setNewEvent({ ...newEvent, [field]: text })
    }
    />
  );
};

const styles = StyleSheet.create({
  outside: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
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

export default NewEventPopup;
