import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: Colors.gray300,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 48,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.gray300,
    marginTop: 16,
    fontFamily: "inter_bold",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray300,
    fontFamily: "inter_regular",
  },
});
