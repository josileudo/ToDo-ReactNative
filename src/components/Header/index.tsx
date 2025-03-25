import { Image, View } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
    </View>
  );
};
