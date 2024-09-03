import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, EventColor, FontFamily, FontSize } from "../GlobalStyles";
import Checkmark from "../assets/icons/Checkmark";
import Modal from "./Modal";

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

const FilterModal = ({
  visible,
  onClose,
  position,
  activeFilters,
  onChange,
}) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      position={position}
      style={styles.filter}
    >
      {filters.map((filter) => (
        <View style={styles.filterRow} key={filter}>
          <Checkbox
            style={[styles.checkbox, { borderColor: EventColor[filter] }]}
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  filter: {
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
    fontFamily: FontFamily.alataRegular,
    fontSize: FontSize.medium,
  },
});

export default FilterModal;
