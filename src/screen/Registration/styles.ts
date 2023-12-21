import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  registerContainer: {
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

  inputContainer: {
    marginTop: 39,
  },

  input: {
    width: "100%",
    height: 51,
    marginTop: 13,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5
  },

  button: {
    marginTop: 37,
    width: "100%",
    height: 62,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "#29CB73",
    shadowColor: "rgba(41, 203, 115, 0.29)",
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowRadius: 17,
    shadowOpacity: 1
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30
  },
});
