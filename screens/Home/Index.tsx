import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Button, Divider, Image } from 'react-native-elements';

// Mock de datos de testimonios
const testimonies = [
  {
    id: 1,
    name: 'Fernanda Silva',
    text: 'Excelente servicio, me ayudaron a manejar mis finanzas de manera efectiva.',
    avatar: require('../../assets/images/content/t1.png'),
  },
  {
    id: 2,
    name: 'Alejandro Vargas',
    text: 'Gracias a esta app, he podido ahorrar y planificar mejor mis inversiones.',
    avatar: require('../../assets/images/content/t2.png'),
  },
  {
    id: 3,
    name: 'María González',
    text: 'La facilidad de uso de esta aplicación me ha permitido controlar mis gastos de forma efectiva.',
    avatar: require('../../assets/images/content/t3.png'),
  },
  {
    id: 4,
    name: 'Carla Pérez',
    text: 'Nunca había sido tan sencillo organizar mis presupuestos. ¡Recomendado!',
    avatar: require('../../assets/images/content/t4.png'),
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

function Home({ navigation }) {
  const handleReadNews = () => {
    // Abre el enlace externo en el navegador por defecto del dispositivo
    Linking.openURL('https://www.elfinanciero.com.mx/')
      .catch((err) => console.error('Error al abrir el enlace:', err));
  };

  const renderTestimonies = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {testimonies.map((testimony) => (
        <Card key={testimony.id} containerStyle={styles.testimonyCard}>
          <Image source={testimony.avatar} style={styles.testimonyAvatar} />
          <Text style={styles.testimonyText}>{testimony.text}</Text>
          <Text style={styles.testimonyName}>{testimony.name}</Text>
        </Card>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        {/* Imagen principal */}
        <ImageBackground
          source={require('../../assets/images/content/main-top.png')}
          style={styles.image}
        >
          <Text style={styles.headerText}>Bienvenido a <Text style={styles.highlightedText}>MoWi$e</Text></Text>
        </ImageBackground>

        {/* Contenido principal */}
        <View style={styles.contentContainer}>

          <Text style={styles.sectionTitle}>MoWi$e</Text>
          <Text style={styles.description}>
            En esta App podrás encontrar información sobre cómo manejar tus finanzas de manera eficiente,
            consejos de ahorro, inversión y mucho más. Explora nuestras secciones para obtener
            el máximo beneficio de nuestros servicios.
          </Text>
 
          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Últimas Noticias</Text>
          <Text style={styles.description}>
            Mantente al día con las últimas noticias del mundo financiero y económico.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleReadNews} // Aquí llamamos a la función handleReadNews al presionar el botón
          >
            <Text style={styles.buttonText}>Leer noticias</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Testimonios</Text>
          {renderTestimonies()}
        

        <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Únete</Text>
          <Text style={styles.description}>
            Crea una cuenta ya y forma parte de las miles de personas que administran y aprovechan mejor sus recursos.
          </Text>
        </View>
        {/* Botón de inicio de sesión */}
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => {
            // Lógica para navegar a la pantalla de inicio de sesión
            // navigation.navigate('Login')
          }}
        >
          <Text style={styles.loginButtonText}>¡Empieza ya! Inicia sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: imageHeight, // Ajustar la altura según necesidades
    resizeMode: 'cover',
    justifyContent: 'center', // Centrar contenido dentro de ImageBackground
    alignItems: 'center',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#ff7f50', // Puedes ajustar el color aquí según tus preferencias
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: '#3B58B8',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para mejorar la legibilidad del texto
    padding: 10,
    borderRadius: 5,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  testimonyCard: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 30,
    width: 300,
  },
  testimonyAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  testimonyText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  testimonyName: {
    fontWeight: 'bold',
  },
  loginButtonContainer: {
    
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#3B58B8',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
  divider: {
    height: 30,
  },
});

export default Home;
