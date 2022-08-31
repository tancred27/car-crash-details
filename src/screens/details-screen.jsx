import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { detailsDataMap } from "../config";
import ScreenContainer from "./screen-container";
import Card from "../components/card-component";
import { getScaleNumber, SCREEN_WIDTH } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    padding: getScaleNumber(10),
    backgroundColor: "white",
    width: SCREEN_WIDTH - getScaleNumber(20),
  },
});

const DetailsScreen = ({ route }) => {
  return (
    <ScreenContainer>
      <Card customStyle={styles.container} data={detailsDataMap(route.params.crashData)} disabled />
    </ScreenContainer>
  );
};

export default DetailsScreen;
