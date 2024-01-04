import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logInContainer: {
    paddingHorizontal: 20,
  },

  authorization: {
    marginTop: 44,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  authorizationText: {
    color: "#343936",
    fontSize: 28,
    fontWeight: "700"
  },

  authorizationDic: {
    color: "#C8C8C8",
    textAlign: "center",
    paddingTop: 10,
    lineHeight: 20
  },

  inputContainer: {
    marginTop: 9,
  },

  input: {
    width: "100%",
    marginTop: 9,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  forgotPass: {
    marginTop: 12,
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 13,
  },

  button: {
    marginTop: 19,
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

  noAccount: {
    textAlign: "center",
    paddingTop: 17,
    fontSize: 18,
    color: "rgba(201, 201, 201, 0.67)",
    lineHeight: 30
  },

  usingApp: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  app: {
    marginTop: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 17
  }
});
