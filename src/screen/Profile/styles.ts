import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 20,
    paddingVertical: 23,
  },

  head: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#343936",
  },

  profileUpload: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  name: {
    paddingTop: 7,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 16,
    color: "#343936",
  },

  card: {
    width: 120,
    backgroundColor: "#fefefe",
    height: "auto",
    flexDirection: "column",
    margin: "auto",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    zIndex: 9999
  },
  cards: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
    right: 0,
    bottom: 0,
  },
  youReviews: {
    fontSize: 18,
    lineHeight: 20,
    color: "#9A9A9A",
  },

  circle: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#29CB73",
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderRadius: 100,
  },

  inputContainer: {
    marginTop: 39,
  },

  input: {
    width: "100%",
    height: 51,
    marginTop: 13,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  floor: {
    
  },

  select: {
    position: "absolute",
    right: 20,
    bottom: 22
  },

  cardLang: {
    opacity: 0,
  },

  button: {
    marginTop: 13,
    width: "100%",
    height: 51,
    paddingVertical: 10,
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
    color: "#FFFFFF",
  },

  buttonChange: {
    paddingVertical: 10,
    marginTop: 35,
    height: 51,
    borderRadius: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(41, 203, 115, 1.0)",
  },

  buttonTextChange: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 30,
    textAlign: "center",
    color: "#29CB73",
  },
});
