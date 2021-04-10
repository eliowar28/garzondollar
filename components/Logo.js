import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const Logo = () => {

  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require("../assets/adaptive-icon.png")}
      />
      <Text style={styles.logoTitle}>GarzonDollar</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  logoTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 25,
  },
});
