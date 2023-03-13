import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'SQL', 'PHP', 'React Native'];

const SkillsScreen = () => {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.name}>My Skills</Text>
        {skills.map((skill, index) => (
          <Text style={styles.skillsList} key={index}>{skill}</Text>
        ))}
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
    fontFamily: 'OpenSans-Bold',
  },
  skills: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8e6c9', //light green
    fontFamily: 'OpenSans-Bold',
    fontSize: 40,
  },
  skillsList: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
});

export default SkillsScreen;