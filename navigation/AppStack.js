import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const App = createStackNavigator();

export default function AppStack() {
  return (
    <App.Navigator  screenOptions={{
      headerShown: false
    }}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
}
