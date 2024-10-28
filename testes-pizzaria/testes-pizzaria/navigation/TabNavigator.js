import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClienteScreen from '../pages/ClienteScreen';
import CardapioScreen from '../pages/CardapioScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Cardapio') {
            iconName = 'pizza';  // Ícone para o cardápio
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={ClienteScreen} />
      <Tab.Screen name="Cardapio" component={CardapioScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;