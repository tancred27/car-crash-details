import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { paginationLimit } from "../config";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    marginTop: getScaleNumber(10),
    flexDirection: "row",
    width: getScaleNumber(200),
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#3B9AE1",
  },
});

const Pagination = ({ onPressLeft, onPressRight, offset }) => {
  return (
    <View style={styles.container}>
      <AntDesign onPress={onPressLeft} name="stepbackward" size={getScaleNumber(16)} color="#3B9AE1" />
      <Text style={styles.text}>{`${offset} - ${offset + paginationLimit}`} records</Text>
      <AntDesign onPress={onPressRight} name="stepforward" size={getScaleNumber(16)} color="#3B9AE1" />
    </View>
  );
};

export default Pagination;
