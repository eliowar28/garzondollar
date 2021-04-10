import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import firebase from 'firebase'

import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Test = createStackNavigator();

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
 return subscriber;
  }, []);

  if (initializing) {
    return null;
  } else {
    return (
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }

};

export default Routes;
