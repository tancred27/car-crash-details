import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator, Text } from "react-native";
import axios from "axios";

import ScreenContainer from "./screen-container";
import Card from "../components/card-component";
import { getFormattedDate, getScaleNumber } from "../utils/functions";
import Pagination from "../components/pagination-component";
import DatePicker from "../components/date-picker-component";
import { baseUrl, cardDataMap, paginationLimit, tableHeaders } from "../config";
import Table from "../components/table-component";
import ToggleView from "../components/toggle-view-component";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: getScaleNumber(10),
    alignItems: "center",
    justifyContent: "center",
  },
  loaderStyle: {
    flex: 1,
  },
});

const ListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const getParams = () => {
    const pagination = { $offset: offset, $limit: paginationLimit };
    return date ? { crash_date: getFormattedDate(date.toISOString()), ...pagination } : pagination;
  };

  useEffect(() => {
    setLoading(true);
    const request = axios.get(baseUrl, { params: getParams() });
    request
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching data: ", err));
  }, [offset, date]);

  const navigateToDetailScreen = (crashData) => {
    navigation.navigate({ name: "Details", params: { crashData } });
  };

  const moveForward = () => {
    setOffset((offset) => offset + paginationLimit);
  };

  const moveBackward = () => {
    if (offset === 0) return;
    setOffset((offset) => offset - paginationLimit);
  };

  const onDateChange = (date) => {
    setDate(date);
  };

  const clearDate = () => setDate();

  const displayTable = (value) => {
    setShowTable(value);
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ToggleView showTable={showTable} displayTable={displayTable} />
        <DatePicker value={date} onDateChange={onDateChange} clearDate={clearDate} />
        <Pagination onPressLeft={moveBackward} onPressRight={moveForward} offset={offset} />
        {loading ? (
          <ActivityIndicator style={styles.loaderStyle} size="large" color="#3B9AE1" />
        ) : (
          <ScrollView fadingEdgeLength={5} contentContainerStyle={styles.cardsContainer}>
            {data.length === 0 ? (
              <Text>No data found!</Text>
            ) : showTable ? (
              <Table data={data} headers={tableHeaders} navigation={navigation} />
            ) : (
              data.map((crashData, index) => <Card onPress={() => navigateToDetailScreen(crashData)} key={index.toString()} data={cardDataMap(crashData)} />)
            )}
          </ScrollView>
        )}
      </View>
    </ScreenContainer>
  );
};

export default ListScreen;
