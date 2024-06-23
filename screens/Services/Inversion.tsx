import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function Inversion() {
  return (
    <View style={styles.container}>
      {/* Imagen al 50% de la pantalla en la parte superior */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/images/content/services.jpeg')}
          style={styles.image}
        >
        </ImageBackground>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Invierte con plazos desde un año</Text>
        <Text style={styles.description}>
          Y genera buenos rendimientos desde 12.5% en un año hasta 15% invirtiendo de 5 años en adelante.
        </Text>
      </View>

      <View style={styles.barsContainer}>
        <View style={styles.graphContainer}>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 180 }]}>
              <Text style={styles.monthLabel}>12.5% a 1 año</Text>
            </View>
          </View>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 200 }]}>
              <Text style={styles.monthLabel}>13.5 de 2 a 4 años</Text>
            </View>
          </View>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 220 }]}>
              <Text style={styles.monthLabel}>15% 5 años +</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    marginBottom: 20,
    resizeMode: 'cover',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  barsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  graphContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  graphRow: {
    flexDirection: 'row',
    marginVertical: 'auto',
    alignItems: 'center',
    marginBottom: 10,
  },
  graphBar: {
    height: 50,
    backgroundColor: '#F16876',
    marginLeft: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  monthLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Inversion;
