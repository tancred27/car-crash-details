import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Pagination from "./pagination-component";
import ToggleView from "./toggle-view-component";
import DatePicker from "./date-picker-component";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    marginTop: getScaleNumber(10),
    paddingHorizontal: getScaleNumber(10),
    flexDirection: Platform.OS === "web" ? "row" : "column",
    width: Platform.OS === "web" ? "80vw" : "80%",
    borderColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: getScaleNumber(5),
    backgroundColor: "white",
    elevation: 2,
    shadowOpacity: 0.26,
    shadowRadius: getScaleNumber(3),
    shadowOffset: {
      width: getScaleNumber(1),
      height: getScaleNumber(1),
    },
  },
  innerContainer: {
    width: Platform.OS === "web" ? "30%" : "100%",
    flexDirection: "row",
  },
});

const Options = ({ onPressLeft, onPressRight, offset, showTable, displayTable, value, onDateChange, clearDate }) => {
  return (
    <View style={styles.container}>
      <DatePicker value={value} onDateChange={onDateChange} clearDate={clearDate} />
      <View style={styles.innerContainer}>
        <ToggleView showTable={showTable} displayTable={displayTable} />
        <Pagination onPressLeft={onPressLeft} onPressRight={onPressRight} offset={offset} />
      </View>
    </View>
  );
};

export default Options;
