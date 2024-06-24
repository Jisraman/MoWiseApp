import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

function Credito() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../assets/images/content/services.jpeg')}
            style={styles.image}
          >
          </ImageBackground>
        </View>
        <Text style={styles.title}>Conoce nuestra tarjeta de crédito</Text>
        <Text style={styles.text}>
          Esta opción es una tarjeta de crédito sin anualidad para comprar en tiendas y rápida de tramitar. De esta forma podemos conocerte mejor y puedes iniciar o mejorar tu historial de crediticio.
        </Text>

        <Text style={styles.title}>¿Cuáles son los requisitos?</Text>
        <Text style={styles.text}>
          Para solicitar la tarjeta de crédito MoWi$e debes ser mayor de edad y vivir en México. Por ello necesitarás tu INE, pasaporte o tarjeta de residencia vigente, una selfie y con todos tus datos personales calculamos tu CURP y RFC. Solo en algunos casos necesitaremos tu comprobante de domicilio. Todo lo anterior nos sirve para confirmar tu identidad.
        </Text>
        <Text style={styles.text}>
          También en tu solicitud vamos a pedir tu permiso para consultar tu historial crediticio.
        </Text>

        <Text style={styles.title}>Te damos transparencia y claridad</Text>
        <Text style={styles.text}>CAT Promedio 135% sin IVA</Text>
        <Text style={styles.text}>Tasa Promedio Ponderada anual fija 79.5% sin IVA</Text>
        <Text style={styles.text}>Comisión Anual $0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200, // Ajuste de altura para la imagen
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Credito;
