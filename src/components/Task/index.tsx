import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/theme";
import { TodoProps } from "../../shared/interfaces/TodoProps";

export interface TaskProps extends TodoProps {
  onAction?: () => void;
  onDelete?: () => void;
}

export const Task = (props: TaskProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onAction} activeOpacity={0.8}>
        <View
          style={[styles.btnCheck, props.isComplete && styles.btnCheckComplete]}
        >
          {props.isComplete && (
            <Ionicons name="checkmark" size={14} color={Colors.gray100} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, props.isComplete && styles.textComplete]}>
        {props.title}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <Ionicons name="trash-outline" size={20} color={Colors.gray300} />
      </TouchableOpacity>
    </View>
  );
};
