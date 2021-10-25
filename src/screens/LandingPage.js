import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Cours from "./Cours";
import Dialogues from "./Dialogues";
import Messages from "./Messages";
import Presence from "./Presence";
import {
  Entypo,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function LandingPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Cours"
        component={Cours}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="library-books" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Dialogues"
        component={Dialogues}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-people-sharp" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-reply"
              size={24}
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Presences"
        component={Presence}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="location-on" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
