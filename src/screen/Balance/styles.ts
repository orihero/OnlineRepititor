import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  balanceContainer: {
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  totalCard: {
    height: 69,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: 9,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  price: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  priceText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#B5B5B5",
  },

  priceNumber: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
    color: "#29CB73",
  },

  cards: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 11,
  },

  card: {
    width: 159,
    height: 125,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  active: {
    width: 159,
    height: 125,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(41, 203, 115, 0.45)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 17,
    shadowOpacity: 1,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  button: {
    marginTop: 39,
    height: 51,
    borderRadius: 30,
    backgroundColor: "#29CB73",
    paddingVertical: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
