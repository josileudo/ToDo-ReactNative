import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../constants/theme";

export const Monitoring = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Criadas</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.wrap}>
        <Text style={[styles.title, { color: Colors.purple }]}>Concluídas</Text>
        <Text style={styles.value}>0</Text>
      </View>
    </View>
  );
};
