import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

function Services() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
            source={require('../../assets/images/content/services/services.jpg')}
            style={styles.imageCover}
          >
          <Text style={styles.headerText}>Servicios <Text style={styles.highlightedText}>Financieros</Text></Text>
        </ImageBackground>

        
        <View style={styles.service}>
          <Image
            source={require('../../assets/images/content/services/ahorro.png')}
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceTitle}>Ahorro</Text>
          <Text style={styles.serviceDescription}>
            El servicio de ahorro te permite guardar tu dinero de manera segura y ganar intereses con el tiempo.
          </Text>
        </View>
        
        <View style={styles.service}>
          <Image
            source={require('../../assets/images/content/services/inversion.jpg')}
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceTitle}>Inversión</Text>
          <Text style={styles.serviceDescription}>
            La inversión te brinda la oportunidad de hacer crecer tu capital a través de diversos instrumentos financieros.
          </Text>
        </View>
        
        <View style={styles.service}>
          <Image
            source={require('../../assets/images/content/services/credito.jpg')}
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceTitle}>Crédito</Text>
          <Text style={styles.serviceDescription}>
            El crédito te permite acceder a fondos adicionales que puedes usar para compras o necesidades personales, con la obligación de devolverlos en el futuro.
          </Text>
        </View>
        
        <View style={styles.service}>
          <Image
            source={require('../../assets/images/content/services/prestamos.jpg')}
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceTitle}>Préstamos</Text>
          <Text style={styles.serviceDescription}>
            Los préstamos te proporcionan una suma de dinero que debes devolver en cuotas a lo largo del tiempo, generalmente con intereses.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageCover: {
    width: '100%',
    height: imageHeight, // Ajustar la altura según necesidades
    resizeMode: 'cover',
    justifyContent: 'center', // Centrar contenido dentro de ImageBackground
    alignItems: 'center',
    marginBottom: 20,
    padding: 0
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 0,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  service: {
    width: '90%',
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  serviceImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#ff7f50', // Puedes ajustar el color aquí según tus preferencias
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
});

export default Services;
