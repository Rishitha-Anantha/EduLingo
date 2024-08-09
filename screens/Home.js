import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pretitle}>Welcome to</Text>
      <Text style={styles.title}>Edulingo</Text>
      <Text style={styles.subtitle}>Alphabets to Fluency</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3A1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pretitle: {
    fontSize: 40,
  },
  title: {
    fontSize: 60,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 28,
  },
});

export default Home;
