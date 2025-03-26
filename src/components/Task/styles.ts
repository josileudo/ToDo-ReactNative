import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Colors.gray500,
    borderRadius: 8,
    borderColor: Colors.gray400,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
    position: "relative",
  },
  btnCheck: {
    borderRadius: 999,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCheckComplete: {
    borderWidth: 0,
    backgroundColor: Colors.purpleDark,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: Colors.gray100,
  },
  textComplete: {
    textDecorationLine: "line-through",
    color: Colors.gray300,
  },
  btnCheckHover: {
    color: Colors.danger,
    backgroundColor: Colors.gray200,
  },
  btnDelete: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: 32,
    height: 32,
  },
  btnDeletePress: {
    backgroundColor: Colors.gray400,
  },
  btnDeleteIcon: {
    borderRadius: 4,
    color: Colors.gray300,
    backgroundColor: "transparent",
  },
  btnDeleteIconPress: {
    color: Colors.danger,
  },
});
