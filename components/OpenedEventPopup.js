import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding, Gap } from "../GlobalStyles";
import BackgroundGradient from "../assets/images/BackgroundGradient";
import TimeIcon from "../assets/icons/TimeIcon";
import MeatBallIcon from "../assets/icons/MeatBallIcon";
import CrossIcon from "../assets/icons/CrossIcon";
import FileIcon from "../assets/icons/FileIcon";
import GroupIcon from "../assets/icons/GroupIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import UserIcon from "../assets/icons/UserIcon";

const OpenedEventPopup = ({ onClose, event }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const MenuPopup = () => {
    return (
      <View style={styles.menuPopup}>
        <Image
          style={styles.sharktoothIcon}
          contentFit="cover"
          source={require("../assets/images/OpenedEventPopupImages/sharktooth.png")}
        />
        <View style={styles.menuPopupOptions}>
          <View style={styles.editRow}>
            <TouchableOpacity
              onPress={() => {
                console.log("edit pressed");
              }}
            >
              <Text style={styles.labelFont}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: Color.white,
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.deleteRow}>
            <TouchableOpacity
              onPress={() => {
                console.log("delete pressed");
              }}
            >
              <Text style={styles.labelFont}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.openedEventFullScreenPopup}>
      <View style={styles.backgroundContainer}>
        <BackgroundGradient stop1="#191079" stop2="#211134" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.optionsBar}>
          <Text style={styles.titleFont}>{event.title}</Text>
          <View style={styles.optionButtons}>
            {isMenuVisible && <MenuPopup />}
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(!isMenuVisible);
              }}
            >
              <MeatBallIcon size={28}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <CrossIcon size={18}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.labelRow}>
          <UserIcon size={28}/>
          <Text style={styles.labelFont}>{event.creator}</Text>
        </View>
        <View style={styles.labelRow}>
          <GroupIcon size={28}/>
          <Text style={styles.labelFont}>{event.participants}</Text>
        </View>
        <View style={styles.labelRow}>
          <TimeIcon size={28}/>
          <Text style={styles.labelFont}>{event.time}</Text>
        </View>
        <View style={styles.labelRow}>
          <LocationIcon size={28}/>
          <Text style={styles.labelFont}>{event.location}</Text>
        </View>

        <View style={styles.labelRow}>
          <FileIcon size={28}/>
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
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.alata,
    color: Color.labelColorDarkPrimary,
    marginBottom: Padding.p_sm,
  },
  labelFont: {
    marginLeft: Padding.p_2xs,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.alata,
    color: Color.labelColorDarkPrimary,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    // PaddingTop: Padding.headerTop,
    // backgroundColor: Color.darkPurple,
  },
  menuPopup: {
    position: "absolute",
    top: 30,
    right: 22,
  },
  menuPopupOptions: {
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.white,
  },
  deleteRow: {
    backgroundColor: "red",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  editRow: {
    backgroundColor: "#211134",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  sharktoothIcon: {
    position: "absolute",
    top: -7.4,
    left: 90,
    zIndex: 1,
    width: 15,
    height: 15,
  },
});

export default OpenedEventPopup;
