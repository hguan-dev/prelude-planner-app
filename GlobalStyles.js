/* fonts */
export const FontFamily = {
  alataRegular: "Alata-Regular",
  alata: "Alata",
};
/* font sizes */
export const FontSize = {
  huge: 37, // onboard page

  header: 28, // page header
  subheader: 22,
  large: 19, // sub sub header
  medium: 16, //normal text
  small: 13, //desc and such
};

export const IconSize = {
  navPlusIcon: 115, 

  iconSmall: 18, // for close icon
  iconDefault: 28, // most icons
};

/* Font Colors and Background colors */
export const Color = {
  white: "#fff",
  black: "#000",
  gray: "#a0a0a0",
  opacityGray: "rgba(190, 190, 190, 0.7)",

  // background / gradient
  darkPurple: "#211134", // default background color
  mediumPurple: "#27153D", // some weird purple
  strongBlue: "#191079",
  niceBlue: "#36437d",
  purplyBlue: "#372a48",
  //status
  green: "#34C759",
  red: "#C73434",

  // event filter colors
  lightGreen: "#a3fd83",
  lightPink: "#ed8efd",
  lightPurple: "#a276ff",
  lightSkyBlue: "#72ccff",
  white: "#fff",
};
/* Paddings (and margins ig) */
export const Padding = {
  p_3xl: 22,
  p_sm: 14,
  p_base: 16,
  p_2xs: 11,
  p_9xs: 4,
  p_8xs: 5,
  p_5xs: 8,
  p_xs: 12,

  headerTop: 40, // only used on main header component
  navIcon: 30, // only used in nav

  headerText: 30, // horizontal padding for header text
  pageHeaderTop: 55,  // distance from top of page

  content: 10,
};

/* gaps */
export const Gap = {
  navIcon: 30, // only used in nav

  headerIcon: 16, // go to gap between icons if in header
}

/* border radiuses and width */
export const Border = {
  // border radius
  hugeRadius: 50, // used on nav
  largeRadius: 20,
  defaultRadius: 15,
  smallRadius: 10,
  tinyRadius: 5,

  // border width
  defaultWidth: 2, 
};

export const EventColor = Object.freeze({
  lesson: Color.lightSkyBlue,
  masterclass: Color.lightPurple,
  recital: Color.lightGreen,
  "studio class": Color.lightPink,
  misc: Color.white,
});