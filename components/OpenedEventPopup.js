import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";
import NewBackgroundGradient from "../assets/images/NewBackgroundGradient";

const OpenedEventPopup = ({ setPopupVisible, event }) => {
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
            <View style={styles.menuRow}>
              <TouchableOpacity
                onPress={() => {
                  console.log("edit pressed");
                }}
              >
                <Text style={styles.labelFont}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: Color.colorWhite,
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.deleteRow}>
            <View style={styles.menuRow}>
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
      </View>
    );
  };

  return (
    <View style={styles.openedEventFullScreenPopup}>
      <View style={styles.backgroundContainer}>
        <NewBackgroundGradient stop1="#191079" stop2="#211134" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.optionButtons}>
          {isMenuVisible && <MenuPopup />}
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(!isMenuVisible);
            }}
          >
            <View style={styles.meatballIcon}>
              <Image
                style={styles.miniIcon}
                contentFit="cover"
                source={require("../assets/images/OpenedEventPopupImages/dot-menu.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={setPopupVisible}>
            <View style={styles.exitIcon}>
              <Image
                style={styles.miniIcon}
                contentFit="cover"
                source={require("../assets/images/OpenedEventPopupImages/exit-button.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleFont}>{event.title}</Text>
        <View style={styles.labelRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/creator-icon.png")}
          />
          <Text style={styles.labelFont}>{event.creator}</Text>
        </View>
        <View style={styles.labelRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/participants-icon.png")}
          />
          <Text style={styles.labelFont}>{event.participants}</Text>
        </View>
        <View style={styles.labelRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/clock.png")}
          />
          <Text style={styles.labelFont}>{event.time}</Text>
        </View>
        <View style={styles.labelRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/location-icon.png")}
          />
          <Text style={styles.labelFont}>{event.location}</Text>
        </View>

        <View style={styles.labelRow}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/images/OpenedEventPopupImages/file-dock.png")}
          />
          <Text style={styles.labelFont}>{event.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  openedEventFullScreenPopup: {
    width: "100%",
    height: "100%",
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 30,
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
  icon: {
    width: 34,
    height: 34,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    width: "75%",
  },
  exitIcon: {},
  meatballIcon: {
    marginRight: 10,
  },
  miniIcon: {
    width: 20,
    height: 20,
  },
  optionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  menuPopup: {
    position: "absolute",
    top: 25,
    right: 17,
  },
  menuPopupOptions: {
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.colorWhite,
  },
  menuRow: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
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
    top: -7.8,
    left: 90,
    zIndex: 1,
    width: 15,
    height: 15,
  },
});

export default OpenedEventPopup;
