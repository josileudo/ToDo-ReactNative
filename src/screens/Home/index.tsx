import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Colors } from "../../constants/theme";
import { useState } from "react";
import { Header } from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Monitoring } from "../../components/Monitoring";
import { EmptyFile } from "../../components/EmptyFile";

export const Home = () => {
  const [form, setForm] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={[styles.eventInput, isFocus && styles.focusBorder]}
          placeholderTextColor={Colors.gray300}
          placeholder="Adicione uma nova tarefa"
          onChangeText={(text) => setForm(text)}
          onFocus={() => setIsFocus(() => true)}
          onBlur={() => setIsFocus(() => false)}
          value={form}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {}}
        >
          <Ionicons
            name="add-circle-outline"
            size={16}
            color={Colors.gray100}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <Monitoring />
        <FlatList
          data={[]}
          renderItem={() => {
            return (
              <View>
                <Text style={{ color: "#ffff" }}>teste</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyFile />}
        />
      </View>
    </View>
  );
};
