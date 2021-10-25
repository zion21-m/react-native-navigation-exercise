import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Lessons from "./Lessons";
import Exercises from "./Exercises";
import Notes from "./Notes";

const Tab = createMaterialTopTabNavigator();

const CoursesDetails = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lessons" component={Lessons} />
      <Tab.Screen name="Exercises" component={Exercises} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>
  );
};

export default CoursesDetails;
