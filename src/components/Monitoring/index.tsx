import { Text, View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../constants/theme";

export interface MonitoringProps {
  quantity: number;
  quantityComplete: number;
}

export const Monitoring = (props: MonitoringProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Criadas</Text>
        <Text style={styles.value}>{props.quantity ?? 0}</Text>
      </View>

      <View style={styles.wrap}>
        <Text style={[styles.title, { color: Colors.purple }]}>Concluídas</Text>
        <Text style={styles.value}>{props.quantityComplete ?? 0}</Text>
      </View>
    </View>
  );
};
