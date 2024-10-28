import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClienteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Cliente!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default ClienteScreen;