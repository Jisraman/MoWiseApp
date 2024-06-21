/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import Index from './routes/Index';
import Menu from './routes/Menu';

import {
  SafeAreaView,
  Text
} from 'react-native';



function App(): React.JSX.Element {
    useEffect(() => {
      SplashScreen.hide();  // Oculta la splash screen cuando la app está lista
    }, []);
    useEffect(() => {
      // Lock the orientation to portrait
      Orientation.lockToPortrait();
    }, []);
  return (
      <SafeAreaView style={{flex:1}}>
        <Menu  />
        
      </SafeAreaView>
  );
}

export default App;
