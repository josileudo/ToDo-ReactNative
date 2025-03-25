import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export const EmptyFile = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/clip.png")} alt="clip" />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
