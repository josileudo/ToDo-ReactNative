import {
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Colors } from "../../constants/theme";
import React, { useRef, useState } from "react";
import { Header } from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Monitoring } from "../../components/Monitoring";
import { EmptyFile } from "../../components/EmptyFile";
import { Task } from "../../components/Task";
import { TodoProps } from "../../shared/interfaces/TodoProps";

export const Home = () => {
  const [form, setForm] = useState("");
  const [tasks, setTasks] = useState<TodoProps[]>([]);
  const addNewTaskRef = useRef<TextInput>(null);

  const handleAddTask = () => {
    if (!form) return;

    setTasks((prev) => [
      ...prev,
      {
        id: tasks.length + 1,
        title: form.trim(),
        isComplete: false,
      },
    ]);

    setForm("");
    addNewTaskRef.current?.blur();
  };

  const handleDeleteTask = (id: number) => {
    Alert.alert("Alerta", `Deseja remover essa task?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prev) => prev.filter((item) => item.id !== id));

          Alert.alert("Deletado");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  // TODO: Complete task
  const handleCompleteTask = (id: number) => {
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
          ref={addNewTaskRef}
          style={[
            styles.eventInput,
            addNewTaskRef.current?.isFocused() &&
              form.length > 0 &&
              styles.focusBorder,
          ]}
          placeholderTextColor={Colors.gray300}
          placeholder="Adicione uma nova tarefa"
          onChangeText={(text) => setForm(text)}
          onSubmitEditing={() => handleAddTask()}
          autoCorrect={false}
          returnKeyType="done"
          value={form}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {
            handleAddTask();
          }}
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
                  item.id && handleCompleteTask(item.id);
                }}
                onDelete={() => {
                  item.id && handleDeleteTask(item.id);
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
