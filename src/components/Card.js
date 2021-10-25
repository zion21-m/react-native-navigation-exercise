import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = ({ name, logo, color, onPress }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={logo} size={35} color={color} onPress={onPress} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 100,
    backgroundColor: "#ccc",
    borderColor: "gray",

    margin: 10,
  },
});

export default Card;
