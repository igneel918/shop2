import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { registerInitiate } from "../redux/action/actions";
import { useDispatch } from "react-redux";

const RegisterScreen = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("error");
      return null;
    }

    dispatch(registerInitiate(email, password));
    setState({ email: "", password: "" });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar stype="light" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setState({ ...state, password: text })}
        />
        <View style={styles.button}>
          <Button title="Register" onPress={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 20,
  },
});

export default RegisterScreen;
