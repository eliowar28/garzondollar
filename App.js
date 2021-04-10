import React from 'react';
import Providers from './navigation/index'
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const App = () => {
    
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

    return (
        <>
        <Providers />
        </>
    );
}

export default App;

