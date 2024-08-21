import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Padding, Gap } from "../GlobalStyles";
import RadialGradientCircle from "../assets/images/RadialGradientCircle";
import TimeIcon from "../assets/icons/TimeIcon";
import FileIcon from "../assets/icons/FileIcon";
import GroupIcon from "../assets/icons/GroupIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import UserIcon from "../assets/icons/UserIcon";

const EventDetails = ({
  event: { title, creator, participants, time, location, description },
  options,
  editing,
  onEdit,
}) => {
  return (
    <View style={styles.openedEventFullScreenPopup}>
      <View style={styles.backgroundContainer}>
        <RadialGradientCircle stop1="#191079" stop2="#211134" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.optionsBar}>
          <TextInput
            style={[styles.titleFont, editing ? styles.editing : {}]}
            value={title}
            placeholder="Title"
            onChangeText={(text) => onEdit("title", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
          />
          <View style={styles.optionButtons}>{options}</View>
        </View>
        <View style={styles.labelRow}>
          <UserIcon size={28} />
          <TextInput
            style={[styles.labelFont, editing ? styles.editing : {}]}
            value={creator}
            placeholder="Creator"
            onChangeText={(text) => onEdit("creator", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
          />
        </View>
        <View style={styles.labelRow}>
          <GroupIcon size={28} />
          <TextInput
            style={[styles.labelFont, editing ? styles.editing : {}]}
            value={participants}
            placeholder="Participants"
            onChangeText={(text) => onEdit("participants", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
          />
        </View>
        <View style={styles.labelRow}>
          <TimeIcon size={28} />
          <TextInput
            style={[styles.labelFont, editing ? styles.editing : {}]}
            value={time}
            placeholder="Time"
            onChangeText={(text) => onEdit("time", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
          />
        </View>
        <View style={styles.labelRow}>
          <LocationIcon size={28} />
          <TextInput
            style={[styles.labelFont, editing ? styles.editing : {}]}
            value={location}
            placeholder="Location"
            onChangeText={(text) => onEdit("location", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
          />
        </View>

        <View style={styles.labelRow}>
          <FileIcon size={28} />
          <TextInput
            style={[styles.labelFont, editing ? styles.editing : {}]}
            value={description}
            placeholder="Description"
            onChangeText={(text) => onEdit("description", text)}
            editable={editing}
            placeholderTextColor={"#bbb"}
            multiline={true}
          />
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
    padding: Padding.smaller,
    fontSize: FontSize.header,
    fontFamily: FontFamily.alata,
    color: Color.white,
    maxWidth: "75%",
  },
  labelFont: {
    padding: Padding.smaller,
    marginLeft: Padding.default,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.alata,
    color: Color.white,
    flex: 1,
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
    marginBottom: Padding.default,
  },
  editing: {
    borderBottomWidth: 1,
    marginBottom: -1,
    borderBottomColor: Color.white,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

export default EventDetails;
