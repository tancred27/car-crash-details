import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Details from "./details-component";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  card: {
    padding: getScaleNumber(10),
    minWidth: getScaleNumber(200),
    marginVertical: getScaleNumber(10),
    marginHorizontal: getScaleNumber(10),
    borderRadius: getScaleNumber(5),
    backgroundColor: "white",
    elevation: 2,
    shadowOpacity: 0.26,
    shadowRadius: getScaleNumber(3),
    shadowOffset: {
      width: getScaleNumber(1),
      height: getScaleNumber(2),
    },
  },
});

const Card = ({ data, onPress, customStyle, hasScrollView = false }) => {
  return (
    <TouchableOpacity style={[styles.card, customStyle]} onPress={onPress} activeOpacity={1}>
      {hasScrollView ? (
        <ScrollView fadingEdgeLength={5} contentContainerStyle={styles.contentContainer}>
          <Details data={data} />
        </ScrollView>
      ) : (
        <Details data={data} />
      )}
      
    </TouchableOpacity>
  );
};

export default Card;
