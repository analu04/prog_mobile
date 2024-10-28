import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const managerEmail = 'gerente@empresa.com';
    const managerPassword = '123456';

    if (email === managerEmail && password === managerPassword) {
      navigation.navigate('MainTabs', { screen: 'Cardapio' });
    } else if (email !== '' && password !== '') {
      navigation.navigate('MainTabs', { screen: 'Home' });
    } else {
      Alert.alert('Erro', 'Por favor, insira um email e senha válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nando's Pizza</Text>
      <Image source={require('../assets/Flavio.jpg')} style={styles.image} />
      <Text style={styles.login}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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
  login: {
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  image: {
    margin: 10,
    width: 200,  
    height: 200,  
    resizeMode: 'contain',  
    borderRadius: 100,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 100,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#3498db',  
    paddingVertical: 13,         
    paddingHorizontal: 30,       
    borderRadius: 25,            
    marginTop: 20,
    width: 320,
  },
  buttonText: {
    color: '#fff',               
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
});

export default LoginScreen;