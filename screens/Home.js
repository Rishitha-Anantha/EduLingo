import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.title}>Edulingo</Text>
      <Text style={styles.subtitle}>Alphabets to Fluency</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chapters")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3A1F4", // Plum color
    paddingVertical: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "InknutAntiqua-Regular",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  title: {
    fontSize: 32,
    fontFamily: "InknutAntiqua-Regular",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 26,
    fontFamily: "InknutAntiqua-Regular",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF62A4", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 24,
    color: "#000",
    fontFamily: "InknutAntiqua-Regular",
    textAlign: "center",
  },
});

export default Home;
