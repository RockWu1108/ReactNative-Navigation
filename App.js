import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from './src/HomeScreen.js';
import ProfileScreen from './src/ProfileScreen.js';
import HomeDetailScreen from './src/HomeDetailScreen.js'
import {Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  // 創建底部Tab
  const Tab = createBottomTabNavigator();
  //上下頁跳轉
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator
      initialRouteName = 'Home'
      screenOptions ={{
        headerStyle :{backgroundColor:'tomato'},
        headerTintColor : 'white',
        headerBackTitle :'返回'
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
     </Stack.Navigator>

      {/* <Tab.Navigator
      screenOptions = { ({route}) =>({
        tabBarIcon : ({color})=>{
          let iconName ;
       
          if(route.name == 'Home'){
             //iconName = 'water'
             //自行設定icon image
          return<Image source={{uri : 'https://i.pinimg.com/originals/ed/c7/5e/edc75e41888082aa8323c725540624f5.jpg'}} 
                 style={{width:25 , height:25}}/>
          }
          else if (route.name =='Settings'){
            iconName='ios-options'
          }
          return <Ionicons name={iconName} size={30} color={color} />
        }
      })}
      
        tabBarOptions = {{
          activeTintColor : 'tomato' , 
          inactiveTintColor : 'gray'
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}


