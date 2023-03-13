import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

    const dtcImage = require('../assets/dtc.jpg');
  
const SchoolScreen = () => {
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



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c8e6c9', //light green
    },
    school: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'OpenSans-Bold',
    },
    address: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'OpenSans-Bold',
    },
    city: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      fontFamily: 'OpenSans-Bold',
    },
    phone: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      fontFamily: 'OpenSans-Bold',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 20,
    },
  });

  export default SchoolScreen;