import { StyleSheet, View, Pressable } from "react-native";
import { Color, EventColor, FontFamily, FontSize } from "../GlobalStyles";

const Modal = ({ visible, onClose, children }) => {
  return (
    <>
      {visible && (
        <Pressable style={styles.outside} onPress={onClose}>
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View style={styles.bubble}>
              <View style={styles.content}>{children}</View>
              <View style={styles.sharktoothBorder} />
              <View style={styles.sharktooth} />
            </View>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  outside: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  bubble: {
    position: "absolute",
    top: 100,
    right: 45,
    zIndex: 1,
    backgroundColor: Color.darkPurple,
  },
  content: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Color.white,
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
