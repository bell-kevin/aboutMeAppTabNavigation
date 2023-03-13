import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  studentInfo: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default HomeScreen;
