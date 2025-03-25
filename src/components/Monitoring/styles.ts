import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.blue,
  },
  value: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontWeight: "bold",
    color: Colors.gray200,
    backgroundColor: Colors.gray400,
  },
});
