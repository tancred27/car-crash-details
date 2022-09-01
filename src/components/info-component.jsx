import { View, Text, StyleSheet } from "react-native";

import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  row: {
    marginVertical: getScaleNumber(5),
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: "Poppins",
  },
  contentText: {
    fontFamily: "Poppins",
    color: "#757575",
  },
});

const Info = ({ header, content }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.headerText}>{header}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default Info;
