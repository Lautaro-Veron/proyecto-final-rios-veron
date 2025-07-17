
import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChange: (text: string) => void;
  onAdd: () => void;
};

export default function ToDoInput({ value, onChange, onAdd }: Props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Agregar nueva tarea"
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={onAdd}>
        <Ionicons name="add-circle" size={32} color="green" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 16 : 8,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
