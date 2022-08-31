import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const getScaleNumber = (size) => {
  // return the dpi
  // return size * PixelRatio.get();
  const dimension = Math.min(SCREEN_HEIGHT, SCREEN_WIDTH);
  const dpi = Math.round(dimension / 375);
  if (dpi >= 2) {
    return (size * dpi) / 4 + size;
  }
  return size;
};

const getFormattedDate = (date) => date.split("T")[0];

const getFormattedTime = (time) => {
  const [hours, mins] = time.split(":");
  return `${hours.padStart(2, "0")}:${mins.padStart(2, "0")}`;
};

export { getScaleNumber, SCREEN_HEIGHT, SCREEN_WIDTH, getFormattedDate, getFormattedTime };
