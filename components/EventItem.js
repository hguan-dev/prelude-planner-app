import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const getEventColor = (type) => {
  switch (type) {
    case "lessons":
      return "#72CCFF";
    case "masterclasses":
      return "#A276FF";
    case "recitals":
      return "#A3FD83";
    case "studio class":
      return "#ED8EFD";
    case "misc":
    default:
      return "#FFFFFF";
  }
};

const EventItem = ({ type, title, details, time, confirmation, propWidth, propAlignSelf }) => {
  const tableRowStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  const confirmationStyle = confirmation === "Unconfirmed" ? styles.confirmationUnconfirmed : styles.confirmation;
  const eventColor = getEventColor(type);

  return (
    <View style={[styles.tablerow, tableRowStyle]}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={[styles.title, styles.textCommon]}>{title}</Text>
          <Text style={[styles.details, styles.textCommon]}>{details}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={[styles.time, styles.textCommon]}>{time}</Text>
          <Text style={[confirmationStyle, styles.textCommon]}>{confirmation}</Text>
        </View>
      </View>
      <View style={[styles.eventLine, { backgroundColor: eventColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  tablerow: {
    width: '100%',
    marginBottom: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.p_5xs,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  textCommon: {
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
  },
  title: {
    fontSize: FontSize.defaultBoldHeadline_size,
    lineHeight: 22,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
  },
  details: {
    marginTop: 8,
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
  },
  time: {
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    color: Color.labelColorDarkPrimary,
  },
  confirmation: {
    color: "#34C759",
  },
  confirmationUnconfirmed: {
    color: "#C73434", 
  },
  eventLine: {
    height: 1,
    marginHorizontal: Padding.p_5xs,
    borderBottomLeftRadius: Border.br_sm,
    borderBottomRightRadius: Border.br_sm,
  },
});

export default EventItem;
