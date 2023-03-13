import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';
import SchoolScreen from './screens/SchoolScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'OpenSans-Bold': OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3f51b5',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex'
            },
            null
          ]
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="School"
          component={SchoolScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="graduation-cap" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e6c9', //light green
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'OpenSans-Bold',
  },
  studentInfo: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
});

export default App;
