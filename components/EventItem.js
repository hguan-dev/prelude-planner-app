import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventItem = ({
  label,
  label1,
  label2,
  label3,
  propWidth,
  propAlignSelf,
}) => {
  const tableRowStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  return (
    <View style={[styles.tablerow, tableRowStyle]}>
      <View style={styles.content}>
        <View style={[styles.leftContent, styles.bitcoinIconFlexBox]}>
          <View style={[styles.bitcoinIconParent, styles.bitcoinIconFlexBox]}>
            <View style={[styles.bitcoinIcon, styles.iconLayout]}>
              <Text style={styles.symbol}>1</Text>
              <Image
                style={[styles.shapeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/shape.png")}
              />
            </View>
            <View style={styles.labelParent}>
              <Text style={[styles.label, styles.labelTypo1]}>{label}</Text>
              <Text style={[styles.label1, styles.labelTypo]}>{label1}</Text>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.bitcoinIconFlexBox}>
              <Image
                style={styles.ethereumIcon}
                contentFit="cover"
                source={require("../assets/ethereum.png")}
              />
              <Text style={[styles.label2, styles.labelTypo1]}>{label2}</Text>
            </View>
            <Text style={[styles.label3, styles.labelTypo]}>{label3}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bitcoinIconFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 44,
    display: "none",
  },
  labelTypo1: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  labelTypo: {
    marginTop: 8,
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alataRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  symbol: {
    fontFamily: FontFamily.defaultRegularSubheadline,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkSecondary,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    display: "none",
  },
  shapeIcon: {
    width: 44,
    marginLeft: 10,
    display: "none",
    borderRadius: Border.br_3xs,
  },
  bitcoinIcon: {
    width: 61,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.defaultBoldHeadline_size,
    lineHeight: 22,
  },
  label1: {
    color: Color.labelColorDarkSecondary,
    marginTop: 8,
    lineHeight: 13,
    fontSize: FontSize.size_smi,
  },
  labelParent: {
    width: 128,
    marginLeft: 15,
  },
  bitcoinIconParent: {
    width: 210,
  },
  ethereumIcon: {
    width: 8,
    height: 15,
    opacity: 0.5,
    display: "none",
  },
  label2: {
    marginLeft: 6,
    lineHeight: 20,
    fontSize: FontSize.defaultRegularSubheadline_size,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.alataRegular,
  },
  label3: {
    color: Color.defaultSystemGreenLight,
  },
  frameParent: {
    width: 76,
    alignItems: "flex-end",
  },
  leftContent: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
  },
  content: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: Color.colorLightskyblue,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  tablerow: {
    width: 358,
    height: 60,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 16,
    borderRadius: Border.br_3xs,
  },
});

export default EventItem;
