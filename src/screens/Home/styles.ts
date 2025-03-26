import { StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray600,
  },
  form: {
    marginTop: -28,
    width: "100%",
    height: 52,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 24,
  },
  eventInput: {
    flex: 1,
    height: "100%",
    padding: 16,
    backgroundColor: Colors.gray500,
    borderColor: Colors.gray700,
    borderRadius: 6,
    fontSize: 16,
    color: Colors.gray100,
    zIndex: 10,
    fontFamily: "inter_regular",
  },
  button: {
    height: "100%",
    width: 52,
    backgroundColor: Colors.blueDark,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  tasks: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 24,
  },
  focusBorder: {
    borderColor: Colors.purple,
    borderWidth: 1,
  },
});
