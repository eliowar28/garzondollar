import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import { AntDesign } from "@expo/vector-icons";
import Logo from '../components/Logo'

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const getPrice = async () => {
  let response = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
  let data = await response.json();
  let price = data.USD.dolartoday;
  return price;
};

const Home = () => {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  
  const { user, logout } = useContext(AuthContext);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getPrice()
      .then((data) => {
        setPrice(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.logoPosition}>
        <Logo/>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHead}>
          <Text style={styles.cardTitle}>Dollar Price</Text>
        </View>
        <View style={styles.cardBody}>
          {price ? (
            <Text style={styles.cardBodyTitle}>
              Bs. {price}
            </Text>
          ) : (
            <ActivityIndicator color="#87ecae" size="large" />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogout} onPress={() => logout()}>
        <Text style={styles.buttonLogoutTitle}>Logout</Text>
        <AntDesign name="logout" size={16} color="#EEE5E9" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#87ecae",
  },
  card: {
    width: "80%",
    height: 250,
    flexDirection: "column",
    borderColor: "#001011",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.8,
  },
  cardHead: {
    width: "100%",
    height: "20%",
    padding: 10,
    backgroundColor: "#001011",
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    color: "#EEE5E9",
  },
  cardBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE5E9",
  },
  cardBodyTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 30,
    color: '#001011'
  },
  buttonLogout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    padding: 10,
    backgroundColor: "#001011",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  buttonLogoutTitle: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#EEE5E9",
    marginRight: 10,
  },
  logoPosition: {

    position: "absolute",
    top: 50,
    left: 20,

  }
});
