import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width - 80;

const InputRange = ({ min, max, steps, title, onValueChange }: any) => {
  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor: "orange",
      height: 3,
      marginTop: -3,
      borderRadius: 3,
      width: 100,
      transform: [{ translateX: 0 }],
    };
  });

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.labelsContainer}>
          <Text style={styles.label}>{min}</Text>
          <Text style={styles.label}>{max}</Text>
        </View>
        <View style={styles.track} />
        <Animated.View style={styleLine} />
        {/* <View>
          <PanGestureHandler>
            <Animated.View style={[styleLine]}/>
          </PanGestureHandler>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#eee",
    borderTopWidth: 1,
    borderColor: "#cccdb2",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    color: "#777",
    fontSize: 12,
  },
  rangeContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "#cccdb2",
    borderBottomWidth: 1,
  },

  labelsContainer: {
    width: WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 18,
  },

  label: {
    color: "#333",
    fontSize: 12,
  },

  track: {
    height: 3,
    backgroundColor: "#cccdb2",
    borderRadius: 3,
  },
});

export default InputRange;
