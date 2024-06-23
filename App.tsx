import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import Menu from './routes/Menu'; // Asegúrate de importar el componente correcto para el menú
import Perfil from './screens/Profile/Index'
const { width, height } = Dimensions.get('window');

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = width * 0.8; // Ancho del drawer (80% del ancho de la pantalla)
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    SplashScreen.hide(); // Oculta la splash screen cuando la app está lista
    Orientation.lockToPortrait(); // Lock the orientation to portrait
  }, []);

  const toggleDrawer = () => {
    const toValue = drawerOpen ? 0 : 1;
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setDrawerOpen(!drawerOpen);
  };

  const backdropOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const drawerTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerWidth, 0],
  });

  return (
    <View style={styles.container}>
      <Menu />
      <TouchableOpacity style={styles.drawerButton} onPress={toggleDrawer}>
        <Text style={styles.drawerButtonText}>☰</Text>
      </TouchableOpacity>
      {drawerOpen && (
        <TouchableOpacity style={[styles.backdrop, { opacity: backdropOpacity }]} onPress={toggleDrawer}>
          <View />
        </TouchableOpacity>
      )}
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerTranslateX }] }]}>
        <View style={styles.drawerContent}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
            <Text style={styles.closeButtonText}>☰</Text>
          </TouchableOpacity>
          <Perfil/>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  drawerButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  drawerButtonText: {
    color: 'white',
    fontSize: 20,
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: width*.2,
    width: width * 0.8,
    padding: 0,
    backgroundColor: 'white',
    elevation: 10, // Elevación para Android
    shadowColor: 'black', // Sombra para iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  drawerContent: {
    flex: 1,
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default App;
