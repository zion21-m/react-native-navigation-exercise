import React from "react";
import Card from "../components/Card";
import List from "./Cours/coursesList";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const DisplayCourses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les cours que nous offrons</Text>
      <View style={styles.cardContainer}>
        {List.map((course, index) => {
          return (
            <Card
              name={course.name}
              logo={course.logo}
              color={course.color}
              key={index}
              onPress={() => {
                navigation.navigate("Course Details");
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default DisplayCourses;
