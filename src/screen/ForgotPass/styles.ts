import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  forgotPassContainer: {
    paddingHorizontal: 20,
  },

  sms: {
    marginTop: 57,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "700",
    color: "#343936",
  },

  inputPass: {
    marginTop: 44,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  input: {
    width: 49,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomColor: "#C8C8C8",
    borderBottomWidth: 1,
    fontSize: 38,
  },

  button: {
    marginTop: 58,
    width: "100%",
    height: 62,
    paddingVertical: 16,
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
    fontSize: 20,
    lineHeight: 30,
  },

  timer: {
    marginTop: 50,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#C9C9C9",
  },

  againPass: {
    marginTop: 47,
    marginHorizontal: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderBottomColor: "#C9C9C9",
    borderBottomWidth: 1,
  }
});
