import * as React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

function About({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        {/* Imagen principal */}
        <ImageBackground
          source={require('../../assets/images/content/mowise.png')} // Puedes ajustar la imagen según tus necesidades
          style={[styles.image, { height: imageHeight }]}
        >
        </ImageBackground>

        {/* Contenido principal */}
        <View style={styles.contentContainer}>

          <Text style={styles.sectionTitle}>Nuestra Misión</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.
          </Text>

          <Text style={styles.sectionTitle}>Nuestra Visión</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.
          </Text>

          <Text style={styles.sectionTitle}>Nuestros Objetivos</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.
          </Text>

          <Text style={styles.sectionTitle}>Nuestros Valores</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.
          </Text>
          
          <Divider style={styles.divider} />

          {/* Botón para regresar a la pantalla anterior */}
          <Button
            title="Regresar"
            onPress={() => navigation.goBack()}
            containerStyle={styles.loginButtonContainer}
          />
        </View>
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
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#ff7f50', // Puedes ajustar el color aquí según tus preferencias
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
  loginButtonContainer: {
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
  },
  divider: {
    height: 30,
  },
});

export default About;
