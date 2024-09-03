import * as React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
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
      onEdit={(field, text) => setNewEvent({ ...newEvent, [field]: text })}
    />
  );
};

export default NewEventPopup;
