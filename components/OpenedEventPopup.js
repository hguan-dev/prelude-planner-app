import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  IconSize,
} from "../GlobalStyles";
import RadialGradientCircle from "../assets/images/RadialGradientCircle";
import TimeIcon from "../assets/icons/TimeIcon";
import MeatBallIcon from "../assets/icons/MeatBallIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import FileIcon from "../assets/icons/FileIcon";
import GroupIcon from "../assets/icons/GroupIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import UserIcon from "../assets/icons/UserIcon";
import Modal from "./Modal";
const OpenedEventPopup = ({ onClose, event }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const MenuButtons = () => {
    return (
      <View style={styles.menuPopupOptions}>
        <TouchableOpacity
          onPress={() => {
            console.log("edit pressed");
          }}
        >
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
        <TouchableOpacity
          onPress={() => {
            console.log("delete pressed");
          }}
        >
          <View style={styles.deleteRow}>
            <Text style={styles.labelFont}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.openedEventFullScreenPopup}>
      <Modal visible={isMenuVisible} onClose={() => setMenuVisible(false)}>
        <MenuButtons />
      </Modal>
      <View style={styles.backgroundContainer}>
        <RadialGradientCircle stop1={Color.strongBlue} stop2={Color.darkPurple} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.optionsBar}>
          <Text style={styles.titleFont}>{event.title}</Text>
          <View style={styles.optionButtons}>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(!isMenuVisible);
              }}
            >
              <MeatBallIcon size={IconSize.iconDefault} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <CrossIcon size={IconSize.iconSmall} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labelRow}>
          <UserIcon size={IconSize.iconDefault} />
          <Text style={styles.labelFont}>{event.creator}</Text>
        </View>
        <View style={styles.labelRow}>
          <GroupIcon size={IconSize.iconDefault} />
          <Text style={styles.labelFont}>{event.participants}</Text>
        </View>
        <View style={styles.labelRow}>
          <TimeIcon size={IconSize.iconDefault} />
          <Text style={styles.labelFont}>{event.time}</Text>
        </View>
        <View style={styles.labelRow}>
          <LocationIcon size={IconSize.iconDefault} />
          <Text style={styles.labelFont}>{event.location}</Text>
        </View>

        <View style={styles.labelRow}>
          <FileIcon size={IconSize.iconDefault} />
          <Text style={styles.labelFont}>{event.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  openedEventFullScreenPopup: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: Padding.headerText,
    marginTop: Padding.pageHeaderTop,
  },
  titleFont: {
    fontSize: FontSize.header,
    fontFamily: FontFamily.alata,
    color: Color.white,
    marginBottom: Padding.default,
  },
  labelFont: {
    marginLeft: Padding.default,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.alata,
    color: Color.white,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: Padding.default,
    width: "75%",
  },
  optionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.headerIcon,
  },
  optionsBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  editRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OpenedEventPopup;
