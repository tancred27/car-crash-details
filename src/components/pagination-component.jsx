import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { paginationLimit } from "../config";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    marginVertical: getScaleNumber(10),
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Poppins",
    textAlign: 'center',
    color: "#3B9AE1",
  },
});

const Pagination = ({ onPressLeft, onPressRight, offset }) => {
  return (
    <View style={styles.container}>
      <AntDesign onPress={onPressLeft} name="leftcircle" size={getScaleNumber(18)} color="#3B9AE1" />
      <Text style={styles.text}>{`${offset} - ${offset + paginationLimit}`} rows</Text>
      <AntDesign onPress={onPressRight} name="rightcircle" size={getScaleNumber(18)} color="#3B9AE1" />
    </View>
  );
};

export default Pagination;
