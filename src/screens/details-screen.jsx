import * as React from "react";
import { StyleSheet, Platform } from "react-native";

import { detailsDataMap } from "../config";
import ScreenContainer from "./screen-container";
import Card from "../components/card-component";
import { getScaleNumber, SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/functions";

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxHeight: Platform.OS === "web" ? "80vh" : SCREEN_HEIGHT * (3/4),
    padding: getScaleNumber(10),
    backgroundColor: "white",
    width: Platform.OS === "web" ? "80vw" : SCREEN_WIDTH - getScaleNumber(30),
  },
});

const DetailsScreen = ({ route }) => {
  return (
    <ScreenContainer style={styles.screen}>
      <Card customStyle={styles.container} data={detailsDataMap(route.params.crashData)} hasScrollView/>
    </ScreenContainer>
  );
};

export default DetailsScreen;
