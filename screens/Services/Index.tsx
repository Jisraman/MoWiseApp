import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Inversion from './Inversion';
import Prestamo from './Prestamo';
import Ahorro from './Ahorro';
import Credito from './Credito';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

function Services() {
  const [currentService, setCurrentService] = useState(null);

  const renderServiceScreen = () => {
    switch (currentService) {
      case 'Ahorro':
        return <Ahorro />;
      case 'Prestamos':
        return <Prestamo />;
      case 'Credito':
        return <Credito />;
      case 'Inversiones':
        return <Inversion />;
      default:
        return null;
    }
  };

  const renderServicePreview = (serviceTitle, serviceImage, serviceDescription) => (
    <View style={styles.service}>
      <Image
        source={serviceImage}
        style={styles.serviceImage}
        resizeMode="cover"
      />
      <Text style={styles.serviceTitle}>{serviceTitle}</Text>
      <Text style={styles.serviceDescription}>{serviceDescription}</Text>
      <TouchableOpacity
        style={styles.goButton}
        onPress={() => setCurrentService(serviceTitle)}
      >
        <Text style={styles.goButtonText}>Ir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {currentService ? (
          <>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentService(null)}>
              <FontAwesomeIcon icon={faArrowLeft} size={20} />
              <Text style={styles.backButtonText}>Regresar a Servicios</Text>
            </TouchableOpacity>
            {renderServiceScreen()}
          </>
        ) : (
          <>
            <ImageBackground
              source={require('../../assets/images/content/wallet/wallet-top.jpeg')}
              style={styles.image}
            >
              <Text style={styles.headerText}>Nuestros <Text style={styles.highlightedText}> Servicios Financieros</Text></Text>
            </ImageBackground>
            <Text style={styles.descriptionText}>
              Prueba nuestros simuladores financieros para obtener una vista detallada de sus opciones.
            </Text>

            <View style={styles.servicesContainer}>
              {renderServicePreview(
                'Ahorro',
                require('../../assets/images/content/services/ahorro.png'),
                'El servicio de ahorro te permite guardar tu dinero de manera segura y ganar intereses con el tiempo.'
              )}
              {renderServicePreview(
                'Inversiones',
                require('../../assets/images/content/services/inversion.jpg'),
                'La inversión te brinda la oportunidad de hacer crecer tu capital a través de diversos instrumentos financieros.'
              )}
              {renderServicePreview(
                'Crédito',
                require('../../assets/images/content/services/credito.jpg'),
                'El crédito te permite acceder a fondos adicionales que puedes usar para compras o necesidades personales, con la obligación de devolverlos en el futuro.'
              )}
              {renderServicePreview(
                'Prestamos',
                require('../../assets/images/content/services/prestamos.jpg'),
                'Los préstamos te proporcionan una suma de dinero que debes devolver en cuotas a lo largo del tiempo, generalmente con intereses.'
              )}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: imageHeight,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#ff7f50',
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
  descriptionText: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    color: '#333', // Color de texto para mejor contraste
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  service: {
    width: '100%',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  goButton: {
    backgroundColor: '#3B58B8',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  goButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Services;
