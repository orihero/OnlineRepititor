import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  reviewContainer: {
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
    marginTop: 22,
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },

  card: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 14,
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  starView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  starText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: "#29CB73",
  },

  desc: {
    fontSize: 15,
    lineHeight: 18,
    color: "#C8C8C8",
    paddingTop: 14
  },

  remove: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingTop: 16
  }
});
