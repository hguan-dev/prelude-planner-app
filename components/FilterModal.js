import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, EventColor, FontSize } from "../GlobalStyles";
import Checkmark from "../assets/icons/Checkmark";

const filters = ["lesson", "studio class", "recital", "masterclass", "misc"];

const capitalize = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const Checkbox = ({
  checked,
  onChange,
  style,
  activeStyle,
  checkmarkColor,
}) => {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={[style, checked ? activeStyle : {}]}
    >
      {checked && <Checkmark color={checkmarkColor} size={24} />}
    </Pressable>
  );
};

const FilterModal = ({ visible, onClose, activeFilters, onChange }) => {
  return (
    <>
      {visible && (
        <Pressable style={styles.outside} onPress={onClose}>
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View style={styles.filter}>
              <View style={styles.sharktoothBorder} />
              <View style={styles.sharktooth} />
              {filters.map((filter) => (
                <View style={styles.filterRow} key={filter}>
                  <Checkbox
                    style={[
                      styles.checkbox,
                      { borderColor: EventColor[filter] },
                    ]}
                    activeStyle={{ backgroundColor: EventColor[filter] }}
                    checkmarkColor={Color.black}
                    checked={activeFilters.includes(filter)}
                    onChange={(checked) => {
                      if (checked) {
                        onChange([...activeFilters, filter]);
                      } else {
                        onChange(
                          activeFilters.filter(
                            (activeFilter) => activeFilter !== filter
                          )
                        );
                      }
                    }}
                  />
                  <Text style={styles.filterText}>{capitalize(filter)}</Text>
                </View>
              ))}
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
  filter: {
    position: "absolute",
    top: 164,
    right: 10,
    zIndex: 1,
    backgroundColor: Color.darkPurple,
    borderColor: Color.white,
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    color: Color.white,
    fontSize: FontSize.filterText,
  },
  sharktooth: {
    position: "absolute",
    top: -10,
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
    top: -12,
    right: 20,
    borderLeftWidth: 12,
    borderLeftColor: "transparent",
    borderRightWidth: 12,
    borderRightColor: "transparent",
    borderBottomWidth: 12,
    borderBottomColor: Color.white,
  },
});

export default FilterModal;
