import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  courseContainer: {
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

  rating: {
    width: 54,
    height: 54,
    borderRadius: 10,
    backgroundColor: "#29CB73",
    paddingHorizontal: 15,
    paddingVertical: 17,
  },

  courseHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  course: {
    paddingTop: 5,
    fontSize: 18,
    lineHeight: 20,
    color: "#9A9A9A",
  },

  ratingList: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  arrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  arrowText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: "#9A9A9A",
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

  titleCard: {
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
