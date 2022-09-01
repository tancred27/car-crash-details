import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Pagination from "./pagination-component";
import ToggleView from "./toggle-view-component";
import DatePicker from "./date-picker-component";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    marginVertical: getScaleNumber(10),
    paddingHorizontal: getScaleNumber(10),
    flexDirection: Platform.OS === "web" ? "row" : "column",
    width: Platform.OS === "web" ? "99vw" : "80%",
    borderColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    width: Platform.OS === "web" ? "40%" : "100%",
    flexDirection: "row",
    justifyContent: 'space-evenly',
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
