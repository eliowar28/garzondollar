import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import OnboardingScreen from "../screens/OnboardingScreen";

const Auth = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
 
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });


  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Auth.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Auth.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="SignUp" component={SignUp} />
      </Auth.Navigator>
    );
  } else {
    return (
      <Auth.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="SignUp" component={SignUp} />
      </Auth.Navigator>
    );
  }
};

export default AuthStack;
