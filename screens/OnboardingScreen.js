import React from "react";
import { Image, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: "#EEE5E9",
          image: <Image source={require("../assets/onboarding-image/athentication.png")}  resizeMode="contain" resizeMethod='scale' style={styles.myimage} />,
          title: "Sign up",
          subtitle: "Create an account, you just need to set an email and password.",
        },
        {
          backgroundColor: "#EEE5E9",
          image: <Image source={require("../assets/onboarding-image/login.png")}  resizeMode="contain" resizeMethod='scale' style={styles.myimage} />,
          title: "Sign in",
          subtitle: "Login with your credentials.",
        },
        {
          backgroundColor: "#EEE5E9",
          image: <Image source={require("../assets/onboarding-image/starled.png")}  resizeMode="contain" resizeMethod='scale' style={styles.myimage} />,
          title: "Get scared",
          subtitle: "Now you will know the price of the dollar.",
        }
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  myimage:{
    width:300,
    height:200
  }
})

