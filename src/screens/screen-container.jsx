import * as React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ScreenContainer = ({ children, style = null }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ScreenContainer;
