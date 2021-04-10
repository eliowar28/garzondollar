import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import AppLoading from "expo-app-loading";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import Logo from "../components/Logo";

import { AuthContext } from "../navigation/AuthProvider";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, setError, isLoading, setIsLoading } = useContext(
    AuthContext
  );

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  if (error) {
    Toast.show({
      text1: "Error",
      text2: error.message,
      type: "error",
      visibilityTime: 5000,
      autoHide: true,
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <View style={styles.formContainer}>
          <FormInput
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            onFocus={setError(null)}
          />
          <FormInput
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            onFocus={setError(null)}
          />
          <FormButton
            buttonTitle="Sing In"
            onPress={() => {
              login(email, password);
              setIsLoading(true);
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>Don't have an account yet?</Text>
          </TouchableOpacity>
        </View>

        <Toast ref={(ref) => Toast.setRef(ref)} />

        <Spinner
          visible={isLoading}
          textContent={"please wait..."}
          textStyle={styles.spinnerTextStyle}
          color="#5df95d"
          animation="fade"
          overlayColor="rgba(17, 17, 17, 0.877)"
          size="large"
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  formContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    marginTop: 10,
  },
  signupText: {
    color: "#001011",
    fontFamily: "Nunito_700Bold",
  },
  spinnerTextStyle: {
    color: "#fff",
  },
});
