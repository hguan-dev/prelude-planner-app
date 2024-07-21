import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const BottomNav = () => {
  return (
    <View style={styles.tabbar}>
      <View style={[styles.tabbar1, styles.tabbar1Position]}>
        <View style={styles.bar}>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.sizeGuideIcon, styles.tabbar1Position]}
              contentFit="cover"
              source={require("../assets/size-guide.png")}
            />
            <Text style={[styles.symbol, styles.symbolFlexBox]}>􀎞</Text>
          </View>
          <View style={[styles.stats, styles.homeLayout]}>
            <Image
              style={[styles.sizeGuideIcon, styles.tabbar1Position]}
              contentFit="cover"
              source={require("../assets/size-guide1.png")}
            />
            <Text style={[styles.symbol1, styles.symbolFlexBox]}>􀐿</Text>
          </View>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.sizeGuideIcon, styles.tabbar1Position]}
              contentFit="cover"
              source={require("../assets/size-guide2.png")}
            />
            <Text style={[styles.symbol2, styles.symbolFlexBox]}>􀊫</Text>
          </View>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.sizeGuideIcon, styles.tabbar1Position]}
              contentFit="cover"
              source={require("../assets/size-guide3.png")}
            />
            <Text style={[styles.symbol, styles.symbolFlexBox]}>􀊫</Text>
          </View>
          <View style={styles.homeLayout}>
            <Image
              style={[styles.sizeGuideIcon, styles.tabbar1Position]}
              contentFit="cover"
              source={require("../assets/size-guide.png")}
            />
            <Text style={[styles.symbol, styles.symbolFlexBox]}>{`􀉩 `}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.mintedButton, styles.mintedLayout]}>
        <Image
          style={[styles.mintedButtonChild, styles.mintedLayout]}
          contentFit="cover"
          source={require("../assets/polygon-3.png")}
        />
        <View style={[styles.minted, styles.homeLayout]}>
          <Image
            style={[styles.sizeGuideIcon, styles.tabbar1Position]}
            contentFit="cover"
            source={require("../assets/size-guide.png")}
          />
          <Text style={[styles.symbol5, styles.symbolFlexBox]}>􀅼</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar1Position: {
    overflow: "hidden",
    position: "absolute",
  },
  symbolFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularSubheadline,
    letterSpacing: 0,
    top: 0,
    height: 44,
    width: 44,
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 44,
    width: 44,
  },
  mintedLayout: {
    height: 78,
    width: 78,
    top: 0,
    position: "absolute",
  },
  sizeGuideIcon: {
    height: "63.64%",
    width: "63.64%",
    top: "18.18%",
    right: "18.18%",
    bottom: "18.18%",
    left: "18.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
  },
  symbol: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularSubheadline,
    letterSpacing: 0,
    top: 0,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  symbol1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularSubheadline,
    letterSpacing: 0,
    top: 0,
    fontSize: FontSize.size_3xl,
  },
  stats: {
    display: "none",
  },
  symbol2: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularSubheadline,
    letterSpacing: 0,
    top: 0,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    display: "none",
  },
  bar: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabbar1: {
    right: 0,
    bottom: 0,
    shadowColor: "rgba(41, 39, 130, 0.1)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    height: 100,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    left: 0,
  },
  mintedButtonChild: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  symbol5: {
    fontSize: FontSize.size_11xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularSubheadline,
    letterSpacing: 0,
    top: 0,
    fontWeight: "700",
  },
  minted: {
    top: 17,
    left: 17,
    position: "absolute",
    height: 44,
    width: 44,
  },
  mintedButton: {
    marginLeft: -39,
    left: "50%",
  },
  tabbar: {
    width: 390,
    height: 136,
  },
});

export default BottomNav;
