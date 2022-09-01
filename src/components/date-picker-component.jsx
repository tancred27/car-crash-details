import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { AntDesign } from "@expo/vector-icons";

import { getFormattedDate, getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: Platform.OS === "web" ? "40%" : "100%",
    marginVertical: getScaleNumber(10),
  },
  iconStyle: {
    marginHorizontal: getScaleNumber(5),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: getScaleNumber(5),
    borderWidth: 1,
    borderColor: "#3B9AE1",
    borderRadius: getScaleNumber(3),
  },
  text: {
    fontFamily: "Poppins",
    color: "lightgray",
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getScaleNumber(5),
    paddingHorizontal: getScaleNumber(10),
    backgroundColor: "#3B9AE1",
    borderWidth: 1,
    borderColor: "#3B9AE1",
    borderRadius: getScaleNumber(3),
  },
  buttonText: {
    color: 'white',
  }
});

const DatePicker = ({ value, onDateChange, clearDate }) => {
  const [open, setOpen] = useState(false);

  const handleDateChange = (value) => {
    onDateChange(value.date);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.pickerContainer}>
        <Text style={styles.text}>{value ? getFormattedDate(value.toISOString()) : "YYYY-MM-DD"}</Text>
        <AntDesign style={styles.iconStyle} name="calendar" size={getScaleNumber(16)} color="#3B9AE1" />
      </TouchableOpacity>
      <DatePickerModal mode="single" locale="en" visible={open} date={value || new Date()} onConfirm={handleDateChange} onDismiss={() => setOpen(false)} />
      <TouchableOpacity style={styles.button} onPress={clearDate}><Text style={[styles.text, styles.buttonText]}>Clear</Text></TouchableOpacity>
    </View>
  );
};

export default DatePicker;
