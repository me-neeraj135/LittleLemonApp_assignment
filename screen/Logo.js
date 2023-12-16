import React from "react";
import { View, Image, StyleSheet } from "react-native";
const logo = require(`../assets/images/logo.png`);
const Logo = () => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="littleLemon_logo"
      />
    </View>
  );
};

export default Logo;

const Styles = StyleSheet.create({
  container: { marginVertical: 30 },
  logo: { width: 150, height: 200 },
});
