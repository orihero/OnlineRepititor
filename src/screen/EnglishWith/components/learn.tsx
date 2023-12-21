import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CircleIcon, RadiusIcon } from "../../../assets/icons/icon";

const Learn = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Чему вы научитесь</Text>
      <View style={{ paddingTop: 8 }}>
        {[1, 2, 3].map((index) => {
          return (
            <View style={styles.cardsText} key={index}>
              <View style={{ paddingTop: 5 }}>
                <RadiusIcon />
              </View>
              <Text style={styles.text}>
                You will master the Python programming language by building 100
                unique projects over 100 days.
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 19,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },
  cardsText: {
    flexDirection: "row",
    paddingTop: 6,
    gap: 7,
  },

  text: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#9A9A9A",
  },
});
