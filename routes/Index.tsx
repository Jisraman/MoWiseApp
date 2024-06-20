import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
;

import {
    Text,
  } from 'react-native';

import Home from '../screens/Home/Index';
import Services from '../screens/Services/Index';  
import Profile from '../screens/Profile/Index';  
import About from '../screens/About/Index';  


const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer> 

  );
}
export default Index;