import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Todo = ({ title = "Select a todo" }) => {
  return (
    <View>
      <Text>✅ {title}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({});
