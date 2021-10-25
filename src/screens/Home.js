import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();
// const Home = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="NoProile" component={NoProfile} />
//     </Drawer.Navigator>
//   );
// };

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
