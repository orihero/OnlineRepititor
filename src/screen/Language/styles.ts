import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  langContainer: {
    paddingHorizontal: 20,
  },

  hello: {
    marginTop: 132,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  selectLang: {
    marginTop: 35,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  select: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 14,
    marginTop: 7,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
