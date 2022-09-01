import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, ScrollView, ActivityIndicator, Text, Platform, FlatList } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import ScreenContainer from "./screen-container";
import Card from "../components/card-component";
import Table from "../components/table-component";
import Options from "../components/options-component";
import { getFormattedDate, getScaleNumber, SCREEN_WIDTH } from "../utils/functions";
import { baseUrl, cardDataMap, paginationLimit, tableHeaders } from "../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loaderStyle: {
    flex: 1,
  },
  tableContainerStyle: {
    width: Platform.OS === "web" ? "80vw" : SCREEN_WIDTH - getScaleNumber(10),
  },
});

const ListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const opacity = useSharedValue(showTable);

  const animatedTableStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value ? withTiming(1) : withTiming(0),
    };
  });

  const animatedListStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value ? withTiming(0) : withTiming(1),
    };
  });

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
    opacity.value = value;
    setShowTable(value);
  };

  const renderCard = ({ item }) => <Card onPress={() => navigateToDetailScreen(item)} data={cardDataMap(item)} />

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Options
          showTable={showTable}
          displayTable={displayTable}
          value={date}
          onDateChange={onDateChange}
          clearDate={clearDate}
          onPressLeft={moveBackward}
          onPressRight={moveForward}
          offset={offset}
        />
        {loading ? (
          <ActivityIndicator style={styles.loaderStyle} size="large" color="#3B9AE1" />
        ) : (
          <ScrollView fadingEdgeLength={5} contentContainerStyle={styles.cardsContainer}>
            {data.length === 0 ? (
              <Text>No data found!</Text>
            ) : showTable ? (
              <Animated.View style={[animatedTableStyles, styles.tableContainerStyle]}>
                <Table data={data} headers={tableHeaders} navigation={navigation} />
              </Animated.View>
            ) : (
              <Animated.View style={[animatedListStyles, styles.cardsContainer]}>
                <FlatList 
                  data={data}
                  renderItem={renderCard}
                  keyExtractor={(_, index) => index.toString()}
                  initialNumToRender={5}
                  maxToRenderPerBatch={3}
                />
              </Animated.View>
            )}
          </ScrollView>
        )}
      </View>
    </ScreenContainer>
  );
};

export default ListScreen;
