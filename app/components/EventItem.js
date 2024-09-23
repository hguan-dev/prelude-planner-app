import React, { useMemo } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  EventColor,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const getEventColor = (type) => {
  if (type in EventColor) {
    return EventColor[type];
  }
  return Color.white;
};

const EventItem = ({
  onPress,
  event: { type, title, creator, start_time, end_time, confirmation },
  propWidth,
  propAlignSelf,
}) => {
  const tableRowStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  const confirmationStyle =
    confirmation === "Unconfirmed"
      ? styles.confirmationUnconfirmed
      : styles.confirmation;
  const eventColor = getEventColor(type);

  return (
    <View style={[styles.tablerow, tableRowStyle]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={[styles.title, styles.textCommon]}>{title}</Text>
            <Text style={[styles.creator, styles.textCommon]}>{creator}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={[styles.time, styles.textCommon]}>
              {new Date(start_time)
                .toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
                .toLowerCase() +
                " - " +
                new Date(end_time)
                  .toLocaleString(undefined, {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                  .toLowerCase()}
            </Text>
            <Text style={[confirmationStyle, styles.textCommon]}>
              {confirmation}
            </Text>
          </View>
        </View>
        <View style={[styles.eventLine, { backgroundColor: eventColor }]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tablerow: {
    width: "100%",
    paddingHorizontal: Padding.larger,
    marginBottom: Padding.default,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.default,
  },
  leftContent: {
    flex: 1,
    justifyContent: "flex-start",
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  textCommon: {
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
  },
  title: {
    fontSize: FontSize.medium,
    lineHeight: 22,
    color: Color.white,
    textAlign: "left",
  },
  creator: {
    marginTop: 8,
    lineHeight: 13,
    fontSize: FontSize.small,
    color: Color.opacityGray,
    textAlign: "left",
  },
  time: {
    lineHeight: 20,
    fontSize: FontSize.medium,
    color: Color.white,
  },
  confirmation: {
    color: Color.green,
  },
  confirmationUnconfirmed: {
    color: Color.red,
  },
  eventLine: {
    height: 1,
  },
});

export default EventItem;
