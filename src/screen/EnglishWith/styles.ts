import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  englishContainer: {
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

  interesting: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  star: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  population: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  populationText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#C8C8C8",
  },

  starText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#29CB73",
  },

  includes: {
    marginTop: 14,
  },

  learn: {
    marginTop: 5,
  },
  material: {
    marginTop: 5,
  },
  descript: {
    marginTop: 5,
  },

  author: {
    marginTop: 19,
  },

  authorTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  authorCard: {
    marginTop: 16,
    width: "100%",
    height: 88,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },
  comment: {
    paddingTop: 4,
    fontSize: 15,
    fontStyle: "normal",
    lineHeight: 18,
    color: "#C8C8C8",
  },

  starView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    right: 12,
    top: 8,
  },

  footer: {
    paddingTop: 19,
    paddingBottom: 27,
    paddingLeft: 34,
    paddingRight: 20,
    width: 375,
    height: 86,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.0)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 17,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    width: 123,
    height: 37,
    borderRadius: 30,
    backgroundColor: "#29CB73",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#FFFFFF",
    paddingTop: 2,
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  total: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 16,
    color: "#29CB73",
    paddingTop: 5
  },
});
