import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Details from "./details-component";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  card: {
    padding: getScaleNumber(10),
    minWidth: getScaleNumber(200),
    marginVertical: getScaleNumber(10),
    marginHorizontal: getScaleNumber(10),
    borderWidth: 1,
    borderColor: "#DBDBDB",
    backgroundColor: "white",
  },
});

const Card = ({ data, onPress, customStyle, hasScrollView = false }) => {
  return (
    <TouchableOpacity style={[styles.card, customStyle]} onPress={onPress} activeOpacity={1}>
      {hasScrollView ? (
        <ScrollView fadingEdgeLength={5}>
          <Details data={data} />
        </ScrollView>
      ) : (
        <Details data={data} />
      )}
      
    </TouchableOpacity>
  );
};

export default Card;
