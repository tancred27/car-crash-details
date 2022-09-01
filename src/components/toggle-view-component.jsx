import { View, StyleSheet, Platform } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: getScaleNumber(10),
    width: Platform.OS === "web" ? "50%" : getScaleNumber(100),
  },
});

const ToggleView = ({ showTable, displayTable }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="table" onPress={() => displayTable(true)} size={getScaleNumber(18)} color={showTable ? "#3B9AE1" : "black"} />
      <FontAwesome name="list" onPress={() => displayTable(false)} size={getScaleNumber(18)} color={!showTable ? "#3B9AE1" : "black"} />
    </View>
  );
};

export default ToggleView;
