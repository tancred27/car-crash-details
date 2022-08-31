import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { cardDataMap } from "../config";
import { getScaleNumber } from "../utils/functions";

const styles = StyleSheet.create({
  container: {
    padding: getScaleNumber(5),
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  cell: {
    borderWidth: 1,
    borderColor: "#DBDBDB",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Table = ({ navigation, data, headers }) => {
  const navigateToDetailScreen = (crashData) => {
    navigation.navigate({ name: "Details", params: { crashData } });
  };

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        {headers.map((header, index) => (
          <DataTable.Title key={index.toString()}>{header}</DataTable.Title>
        ))}
      </DataTable.Header>
      {data.map((row, index) => (
        <DataTable.Row key={index.toString()}>
          {cardDataMap(row).map((col, index) => (
            <DataTable.Cell centered onPress={() => navigateToDetailScreen(row)} key={index.toString()} style={styles.cell}>
              {col.content}
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Table;
