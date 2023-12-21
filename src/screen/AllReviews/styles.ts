import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  reviewContainer: {
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
    paddingTop: 19,
  },

  cards: {
    marginTop: 14,
  },

  card: {
    marginTop: 8,
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 14,
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  star: {
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

  profile: {
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

  desc: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 18,
    color: "#C8C8C8",
  },
});
