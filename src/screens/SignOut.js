import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/action/actions";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../constants/Colors";
import { auth } from "../firebase/firebase";

const SignOut = () => {
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(logoutInitiate());
  };
  return (
    <View>
      <Text>Thanks for Downloading</Text>
      <View style={styles.btn}>
        <Button title="Sign Out" color={Colors.primary} onPress={handleAuth} />
      </View>
    </View>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    width: "70%",
    top: 100,
  },
});
