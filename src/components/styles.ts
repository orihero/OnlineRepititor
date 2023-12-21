import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#29CB73",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 28,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  notiText: {
    position: "absolute",
    right: -3,
    width: 19,
    height: 19,
    backgroundColor: "#F4B840",
    textAlign: "center",
    borderRadius: 100,
    top: -8,
  },

  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "#FFFFFF",
  },
});
