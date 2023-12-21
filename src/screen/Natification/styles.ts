import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notificationContainer: {
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 36,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
    paddingTop: 26,
  },

  notificationCard: {
    marginTop: 20,
    paddingRight: 18,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 10,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },

  version: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  date: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 18,
    gap: 4,
  },

  dateText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    color: "#B5B5B5",
  },
});
