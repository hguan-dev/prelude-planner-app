import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
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
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.NewNotifPopUp}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Notifications</Text>
          <View style={styles.IconContainer}>
            <CheckIcon size={IconSize.iconDefault} />
            <TouchableOpacity onPress={closeModal}>
              <CrossIcon size={IconSize.iconSmall} />
            </TouchableOpacity>
            <View style={styles.modalContent}></View>
          </View>
        </View>
      </View>
      {/* </View> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

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
    flex: 1,
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.darkPurple,
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
});

export default NewNotifPopUp;
