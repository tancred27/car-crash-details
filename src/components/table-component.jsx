import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

import { cardDataMap } from "../config";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: getScaleNumber(8),
    marginVertical: getScaleNumber(16),
  },
  headers: {
    height: getScaleNumber(30),
    backgroundColor: "#DCDCDC",
  },
  cells: {
    height: getScaleNumber(30),
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
  text: {
    fontFamily: "PoppinsBold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
  colContainer: {
    flexGrow: 1,
    backgroundColor: "white",
    flexDirection: "row",
    height: getScaleNumber(50),
    padding: getScaleNumber(5),
    alignItems: 'center',
    justifyContent: "center",
  },
  colContent: {
    fontFamily: "Poppins",
    textAlign: "center",
  },
});

const TableView = ({ navigation, data, headers }) => {
  const navigateToDetailScreen = (crashData) => {
    navigation.navigate({ name: "Details", params: { crashData } });
  };

  const tableCell = (col, row) => (
    <TouchableOpacity onPress={() => navigateToDetailScreen(row)} style={{ overflow: "hidden" }}>
      <View style={styles.colContainer}>
        <Text style={styles.colContent}>{col.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={headers} style={styles.headers} textStyle={styles.text} />
        {data.map((row, index) => (
          <TableWrapper key={index.toString()} style={styles.row}>
            {cardDataMap(row).map((col, index) => (
              <Cell key={index.toString()} data={tableCell(col, row)} textStyle={styles.text} />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

export default TableView;
