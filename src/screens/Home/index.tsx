import {
  FlatList,
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
import { Task } from "../../components/Task";

export const Home = () => {
  const [form, setForm] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React Native",
      isComplete: false,
    },
    {
      id: 2,
      title: "Estudar React",
      isComplete: false,
    },
    {
      id: 3,
      title: "Estudar Node",
      isComplete: true,
    },
  ]);

  const handleDelete = (id: number) => {
    console.log(id);
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplete = (id: number) => {
    console.log("complete");
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        } else {
          return item;
        }
      })
    );
  };

  const quantityComplete = (): number => {
    return tasks.filter((task) => task.isComplete).length;
  };

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
        <Monitoring
          quantity={tasks.length}
          quantityComplete={quantityComplete()}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <Task
                title={item.title}
                isComplete={item.isComplete}
                onAction={() => {
                  handleComplete(item.id);
                }}
                onDelete={() => {
                  handleDelete(item.id);
                }}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyFile />}
        />
      </View>
    </View>
  );
};
