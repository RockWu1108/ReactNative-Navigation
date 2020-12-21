import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function HomeScreen(props) {

    console.log('homescreen');
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button  title="go to next page" onPress={() =>{props.navigation.push('HomeDetailScreen')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
