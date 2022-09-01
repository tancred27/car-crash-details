import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from "react-native-paper-dates";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import ListScreen from "./src/screens/list-screen";
import DetailsScreen from "./src/screens/details-screen";

registerTranslation("en", en);

const fetchFonts = () => {
  return Font.loadAsync({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "PoppinsBold",
  }
})

export default function App() {
  const Stack = createNativeStackNavigator();
  const [dataLoaded, setDataLaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLaded(true)}
        onError={(err) => console.log(err)} 
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={ListScreen} options={{ title: "Car Crashes List", headerTitleStyle: styles.title }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Car Crash Details", headerBackTitle: "", headerTitleStyle: styles.title }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
