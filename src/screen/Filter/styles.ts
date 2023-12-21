import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filterContainer: {
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

  filterSection: {
    marginTop: 22,
  },

  regionText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "#C8C8C8",
  },

  input: {
    width: "100%",
    height: 51,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginTop: 13,
    paddingHorizontal: 20,
  },

  button: {
    marginTop: 440,
    width: "100%",
    height: 51,
    paddingVertical: 11,
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
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 30,
    textAlign: "center",
    color: "#FFFFFF"
  },
});
