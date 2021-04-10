import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

import Logo from "../components/Logo";

import { AuthContext } from "../navigation/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
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
        />
        <FormInput
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
      </View>

      <FormButton
        buttonTitle="Sing Up"
        onPress={() => {
          register(email, password);
          setIsLoading(true);
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  formContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
