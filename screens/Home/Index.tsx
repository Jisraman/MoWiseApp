import * as React from 'react';
import { View, Image, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, Divider } from '@rneui/themed'; // Importar componentes de React Native Elements

function Home() {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require('../../assets/images/content/main.png')} // Ruta de la imagen
          style={styles.image} // Ajustar dimensiones
        />
        
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            Invierte y haz crecer tu dinero sabiamente
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <Card containerStyle={styles.card}>
            <Card.Title>Préstamos</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Solicita un préstamo personal o hipotecario con tasas competitivas.</Text>
            <Button title="Más información" onPress={() => { /* Navegar a la sección de préstamos */ }} />
          </Card>

          <Divider style={styles.divider} />

          <Card containerStyle={styles.card}>
            <Card.Title>Fondos de ahorro</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Abre una cuenta de ahorro y haz crecer tu dinero de forma segura.</Text>
            <Button title="Ver opciones" onPress={() => { /* Navegar a la sección de fondos */ }} />
          </Card>

          <Divider style={styles.divider} />

          <Card containerStyle={styles.card}>
            <Card.Title>Crédito</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Obtén una tarjeta de crédito con beneficios exclusivos.</Text>
            <Button title="Solicitar tarjeta" onPress={() => { /* Navegar a la sección de crédito */ }} />
          </Card>

          <Divider style={styles.divider} />

          <Card containerStyle={styles.card}>
            <Card.Title>Inversiones</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Invierte en diversos instrumentos financieros y haz crecer tu patrimonio.</Text>
            <Button title="Explorar inversiones" onPress={() => { /* Navegar a la sección de inversiones */ }} />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    borderRadius: 10,
    padding: 10,
  },
  cardText: {
    marginBottom: 10,
    fontSize: 16,
  },
  divider: {
    height: 20,
  },
});

export default Home;
