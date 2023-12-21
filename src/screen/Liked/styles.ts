import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  likedContainer: {
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  head: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  cards: {
    marginTop: 14,
  },

  card: {
    width: "100%",
    marginTop: 8,
    height: 91,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },

  coursAbout: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  priceLesson: {
    paddingTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  price: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  coursPrice: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#29CB73",
  },

  coursPeople: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  popular: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  star: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  oldPrice: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: "#C8C8C8",
    textDecorationLine: "line-through",
  },

  popText: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#C8C8C8",
  },

  startText: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#29CB73",
  },
});
