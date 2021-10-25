import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Lessons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lessonTitle}>Lessons 1</Text>
      <Text style={styles.lessonTitle}>Lessons 2</Text>
      <Text style={styles.lessonTitle}>Lessons 3</Text>
      <Text style={styles.lessonTitle}>Lessons 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  lessonTitle: {
    fontSize: 15,
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
    width: 100,
    marginTop: 5,
    width: "100%",
    padding: 10,
  },
});
export default Lessons;
