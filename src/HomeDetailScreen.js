import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function HomeDetailScreen(props) {

    
  return (
    <View style={styles.container}>
      <Text>HomeDetailScreen</Text>
      <Button  title="go back" onPress={() =>{props.navigation.pop()}}/>

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
