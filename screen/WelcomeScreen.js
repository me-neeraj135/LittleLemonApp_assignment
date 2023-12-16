import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Logo from "../screen/Logo";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Logo />
      <Text style={Styles.titleText}>
        Little lemon your local {"\n"}Mediterranean Bistro
      </Text>

      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={Styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#40524C",
  },
  buttonText: { fontSize: 20, color: "white" },
});
