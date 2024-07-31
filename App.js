import {View, Text, Image, StyleSheet } from 'react-native';
const Img = require("./assets/image/4.jpg");

export default function App(){
  return (
    <View style= {styles.container}>
      <Text>Welcome to Edulingo</Text>
      <Image source={Img} style={{width: 300, height: 300}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});