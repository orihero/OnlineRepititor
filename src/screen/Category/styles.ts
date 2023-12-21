import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryContainer: {
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
    paddingTop: 26
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

  card: {
    width: "auto"
  },

  category: {
    marginTop: 23,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 6.6
  },


  cardImage: {
    position: "relative",
  },

  cardText: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "700",
    padding: "auto",
    bottom: 14,
    left: 0,
    right: 0,
    lineHeight: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },

});
