import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Fontisto,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.identityContainer}>
        <Image
          style={styles.image}
          source={require("../images/emmanuella1.jpeg")}
        />
        <Text style={styles.name}>Emmanuella Mulanga</Text>
        <Text style={styles.profession}>Developpeur Fullstack</Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.text}>
          <Ionicons name="person" size={20} color="#858585" />
          Mon profile
        </Text>
        <Text style={styles.text}>
          <MaterialIcons name="library-books" size={20} color="#858585" /> Mes
          compétences
        </Text>
        <Text style={styles.text}>
          <Fontisto name="persons" size={20} color="#858585" /> Mes collègues de
          promo
        </Text>
        <Text style={styles.text}>
          <Feather name="inbox" size={20} color="#858585" /> Suivi de paiement
        </Text>
        <Text style={styles.text}>
          <Feather name="book-open" size={20} color="#858585" /> Opportunités
          d'emploi
        </Text>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={styles.text}>
          <Ionicons name="settings" size={20} color="#858585" /> Paramètres
        </Text>
        <Text style={styles.text}>
          <AntDesign name="logout" size={20} color="#858585" /> Se déconnecter
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: 15,
  },
  identityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 10,
  },
  name: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  profession: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  aboutContainer: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 18,
    padding: 10,
    color: "#858585",
  },
  settingsContainer: {
    marginTop: 15,
    paddingLeft: 20,
  },
});
export default Profile;
