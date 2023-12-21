import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LogoIcon } from "../assets/icons/icon";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <LogoIcon />
      <Text style={styles.logoText}>Online Tutor</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    marginTop: 73,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  logoText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#29CB73",
  },
});
