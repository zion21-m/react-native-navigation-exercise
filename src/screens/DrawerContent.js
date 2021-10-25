import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "./Profile";

// export function DrawerContent(props) {
//   return (
//     <View style={styles.container}>
//       <Text>This is a test</Text>
//     </View>
//   );
// }
function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Profile />

      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      /> */}
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default DrawerContent;
