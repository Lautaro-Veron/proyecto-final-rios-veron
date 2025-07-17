
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Platform, Switch } from "react-native";
import { Checkbox } from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: { id: number; title: string; isDone: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function ToDoItem({ item, onToggle, onDelete }: Props) {
  return (
    <View style={styles.todoContainer}>
      {Platform.OS === "web" ? (
  <Switch value={item.isDone} onValueChange={() => onToggle(item.id)} />
) : (
  <Checkbox value={item.isDone} onValueChange={() => onToggle(item.id)} />
)}

      <Text style={[styles.todoText, item.isDone && styles.todoTextDone]}>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
    color: "#333",
  },
  todoTextDone: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});
