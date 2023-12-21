import { StyleSheet } from "react-native";
import { LinearGradient } from "react-native-svg";

export const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 23,
  },

  headText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  search: {
    marginTop: 13,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  category: {
    marginTop: 23,
  },

  categoryHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  allCategory: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#D3D3D3",
  },

  categoryText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  cards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  card: {
    justifyContent: "center",
  },

  cardImage: {
    height: 150,
    width: 100,
  },

  cardText: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "700",
    padding: "auto",
    bottom: 20,
    left: 0,
    right: 0,
    lineHeight: 20,
    textAlign: "center",
    color: "#29CB73",
  },

  topCourse: {
    marginTop: 23,
  },

  courseHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  allCourse: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#D3D3D3",
  },

  courseText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  courseCards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  courseCard: {
    width: 163,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  popular: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  popIcon: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  popText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: "#C8C8C8",
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

  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
    paddingTop: 5,
    paddingHorizontal: 10,
  },

  price: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 6,
  },
  priceText: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
    color: "#29CB73",
  },

  oldPrice: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: "#C8C8C8",
    textDecorationLine: "line-through",
  },

  reviews: {
    marginTop: 23,
  },

  reviewsHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  allReviws: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#D3D3D3",
  },

  reviewsText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  reviewsCards: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  reviewsCard: {
    width: 251,
    height: 118,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  comment: {
    paddingTop: 14,
    fontSize: 15,
    lineHeight: 18,
    color: "#C8C8C8",
  },

  reviewsTitle: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  subscribe: {
    marginTop: 23,
  },

  subscribeText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 20,
    color: "#343936",
    width: 240,
  },

  subscribeDict: {
    paddingTop: 10,
    fontSize: 12,
    lineHeight: 15,
    color: "#B5B5B5",
  },

  subscribeInput: {
    marginTop: 16,
  },

  input: {
    width: "100%",
    marginTop: 9,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 51,
  },

  button: {
    marginTop: 16,
    width: "100%",
    height: 62,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: "#29CB73",
    shadowColor: "rgba(41, 203, 115, 0.29)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 17,
    shadowOpacity: 1,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 30,
  },

  information: {
    marginTop: 15,
  },
  inforCard: {
    width: 335,
    height: 107,
    marginTop: 8,
    gap: 16,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 18,
  },

  about: {
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#343936",
  },

  dec: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 15,
    color: "#B5B5B5",
    width: 223,
    paddingTop: 7
  },
});
