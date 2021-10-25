import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CoursesDetails from "./CoursesDetails";
import DisplayCourses from "./DisplayCourses";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Display courses"
        options={{ headerShown: false }}
        component={DisplayCourses}
      />
      <Stack.Screen
        name="Course Details"
        options={{ headerShown: true }}
        component={CoursesDetails}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
