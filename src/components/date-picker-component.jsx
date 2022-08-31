import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { getFormattedDate, getScaleNumber } from "../utils/functions";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: getScaleNumber(250),
    marginTop: getScaleNumber(10),
  },
  iconStyle: {
    marginHorizontal: getScaleNumber(5),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: getScaleNumber(5),
    borderRadius: getScaleNumber(5),
    borderWidth: 1,
    borderColor: "#3B9AE1",
  },
  text: {
    color: "#3B9AE1",
  },
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
      <Button onPress={clearDate} title="Clear" />
    </View>
  );
};

export default DatePicker;
