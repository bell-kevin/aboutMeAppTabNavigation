import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'SQL', 'PHP', 'React Native'];

const HomeScreen = () => {
  return (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={styles.name}>Kevin Bell</Text>
      <Text style={styles.studentInfo}>
        I am a student at Davis Technical College, studying Software
        Development. My goal is to become a full-stack developer.
      </Text>
    </View>
  );
};

const SkillsScreen = () => {
  return (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={styles.name}>My Skills</Text>
      {skills.map((skill, index) => (
        <Text key={index}>{skill}</Text>
      ))}
    </View>
  );
};

const SchoolScreen = () => {
  const dtcImage = require('./assets/dtc.jpg');

  return (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={styles.school}>Davis Technical College</Text>
      <Image source={dtcImage} style={styles.image} />
      <Text style={styles.address}>550 East 300 South</Text>
      <Text style={styles.city}>
        Kaysville, Utah, United States of America 84037
      </Text>
      <Text style={styles.phone}>801-593-2500</Text>
    </View>
  );
};

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
  },
  skills: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8e6c9', //light green
  },
  school: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  address: {
    fontSize: 20,
    marginBottom: 10,
  },
  city: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  studentInfo: {
    width: '80%',
    textAlign: 'center',
  },
});


export default App;
