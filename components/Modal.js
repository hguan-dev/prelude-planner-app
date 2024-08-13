import { StyleSheet, View, Pressable } from "react-native";
import { Color } from "../GlobalStyles";

// To handle closing the modal by pressing outside of it,
// wrap a Pressable around the entire outside area
// including the modal itself
const Modal = ({ visible, position, style, children }) => {
  return (
    <>
      {visible && (
        <View style={[styles.modal, position]}>
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View style={[styles.content, style]}>{children}</View>
            <View style={styles.sharktoothBorder} />
            <View style={styles.sharktooth} />
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    zIndex: 1,
  },
  content: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Color.white,
    backgroundColor: Color.darkPurple,
    overflow: "hidden",
  },
  sharktooth: {
    position: "absolute",
    top: -9,
    right: 22,
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderBottomWidth: 10,
    borderBottomColor: Color.darkPurple,
  },
  sharktoothBorder: {
    position: "absolute",
    top: -11,
    right: 20,
    borderLeftWidth: 12,
    borderLeftColor: "transparent",
    borderRightWidth: 12,
    borderRightColor: "transparent",
    borderBottomWidth: 12,
    borderBottomColor: Color.white,
  },
});

export default Modal;
