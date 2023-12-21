import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  BookIcon,
  ExportIcon,
  TasksIcon,
  YouTubeIcon,
} from "../../../assets/icons/icon";

const CourseIncludes = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Этот курс включает:</Text>
      <View style={styles.courseIncludes}>
        <View style={styles.youtube}>
          <YouTubeIcon />
          <Text style={styles.youtubeText}>55 ч видео по запросу</Text>
        </View>
        <View style={styles.tasks}>
          <TasksIcon />
          <Text style={styles.tasksText}>500 заданий</Text>
        </View>
        <View style={styles.book}>
          <BookIcon />
          <Text style={styles.bookText}>230 статей</Text>
        </View>
        <View style={styles.export}>
          <ExportIcon />
          <Text style={styles.exportText}>153 ресурсов для скачивания</Text>
        </View>
      </View>
    </View>
  );
};

export default CourseIncludes;

const styles = StyleSheet.create({
  card: {
    height: 171,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingHorizontal: 19,
    paddingVertical: 20,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  courseIncludes: {
    paddingTop: 13,
  },
  youtube: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  youtubeText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: "#9A9A9A",
  },
  tasks: {
    paddingTop: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  tasksText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: "#9A9A9A",
  },
  book: {
    paddingTop: 6,

    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  bookText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: "#9A9A9A",
  },
  export: {
    paddingTop: 6,

    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  exportText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: "#9A9A9A",
  },
});
