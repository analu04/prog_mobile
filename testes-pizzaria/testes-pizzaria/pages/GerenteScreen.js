import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GerenteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Gerente!</Text>
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

export default GerenteScreen;