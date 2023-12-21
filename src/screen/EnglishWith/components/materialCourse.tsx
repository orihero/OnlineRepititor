import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  BookIcon,
  SelectedIcon,
  YouTubeIcon,
} from "../../../assets/icons/icon";
// import { TouchableOpacity } from "react-native-gesture-handler";

const MaterialCourse = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number | null>(0);

  const TITLEOBJ = [
    {
      title: "1 - день.",
    },
    {
      title: "2 - день",
    },
    {
      title: "3 - день",
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Материалы курса</Text>
      <Text style={styles.sections}>101 раздел • 635 лекций </Text>
      <View>
        {TITLEOBJ.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setIsOpened(!isOpened);
                setIsSelected(index);
                if (isSelected === index) {
                  setIsSelected(null);
                } else {
                  setIsSelected(index);
                }
              }}
              style={styles.cardTask}
            >
              <View style={styles.tasks}>
                <Text style={styles.taskTitle}>{e.title}</Text>
                <TouchableOpacity
                  style={
                    isSelected === index
                      ? {
                          transform: [{ rotate: "-180deg" }],
                        }
                      : {}
                  }
                  onPress={() => {
                    setIsOpened(!isOpened);
                    if (isSelected === index) {
                      setIsSelected(null);
                    } else {
                      setIsSelected(index);
                    }
                  }}
                >
                  <SelectedIcon />
                </TouchableOpacity>
              </View>
              <View style={isSelected !== index ? styles.dn : styles.just}>
                <View style={styles.youtube}>
                  <YouTubeIcon />
                  <Text style={styles.youtubeText}>
                    Printing to the Console in Python
                  </Text>
                </View>
                <View style={styles.youtube}>
                  <BookIcon />
                  <Text style={styles.youtubeText}>
                    Printing to the Console in Python
                  </Text>
                </View>
                <View style={styles.youtube}>
                  <YouTubeIcon />
                  <Text style={styles.youtubeText}>
                    Printing to the Console in Python
                  </Text>
                </View>
                <View style={styles.youtube}>
                  <YouTubeIcon />
                  <Text style={styles.youtubeText}>
                    Printing to the Console in Python
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MaterialCourse;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 19,
    paddingVertical: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },
  sections: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    paddingTop: 3,
    color: "#9A9A9A",
  },
  dn: {
    height: 0,
    zIndex: -1000,
    textAlign: "center",
    opacity: 0,
  },
  just: {
    marginTop: 16,
  },

  cardTask: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(154, 154, 154, 0.14)",
    paddingBottom: 19,
  },

  tasks: {
    paddingTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  taskTitle: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  youtube: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 8.14,
  },

  youtubeText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#9A9A9A",
  },
});
