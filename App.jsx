import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListScreen from "./src/screens/list-screen";
import DetailsScreen from "./src/screens/details-screen";

import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={ListScreen} options={{ title: "Car Crashes List" }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Car Crash Details", headerBackTitle: "" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
