import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transContainer: {
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 36,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
    paddingTop: 26,
  },

  cards: {
    marginTop: 26,
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },

  card: {
    paddingVertical: 16,
    paddingHorizontal: 19,
    height: 114,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  id: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#B5B5B5",
  },

  date: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  dateText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#B5B5B5",
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
    paddingTop: 4,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 22,
    gap: 3,
  },

  statusText: {
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#343936",
  },

  paid: {
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#29CB73",
  },
});
