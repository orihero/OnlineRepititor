import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Description = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Описание</Text>
      <View style={styles.descript}>
        <Text style={styles.descText}>
          Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,
          the only course you need to learn to code with Python. With over
          500,000 5 STAR reviews and a 4.8 average, my courses are some of the
          HIGHEST RATED courses in the history of Udemy!
        </Text>
        <Text style={styles.descTexts}>
          Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,
          the only course you need to learn to code with Python. With over
          500,000 5 STAR reviews and a 4.8 average, my courses are some of the
          HIGHEST RATED courses in the history of Udemy!
        </Text>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    paddingVertical: 20,
    paddingHorizontal: 19,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  descript: {
    paddingTop: 14,
  },

  descText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#9A9A9A",
  },
  descTexts: {
    paddingTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: "#9A9A9A",
  },
});
