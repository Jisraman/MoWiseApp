import * as React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider } from 'react-native-elements';
import { Linking } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

// Importa las imágenes de cada integrante del equipo
const alejandraImage = require('../../assets/images/content/about/alejandra.png');
const mariaImage = require('../../assets/images/content/about/maria.png');
const luisaImage = require('../../assets/images/content/about/luisa.png');
const carlosImage = require('../../assets/images/content/about/carlos.png');

function About({ navigation }) {
  
  const handleVisitWebsite = () => {
    // Abre el enlace en el navegador externo
    Linking.openURL('https://alexcarranco23.wixsite.com/mowise');
  };

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

          {/* Información sobre la empresa */}
          <Text style={styles.sectionTitle}>Sobre Nosotros</Text>
          <Text style={styles.description}>
            Somos una empresa emergente dedicada a proporcionar soluciones financieras, tales como préstamos, créditos, inversiones y opciones de ahorro. En este espacio, te invitamos a conocer más sobre nuestra trayectoria, filosofía y compromiso con nuestros clientes. Descubre cómo podemos ayudarte a alcanzar tus metas financieras.
          </Text>

          {/* Información sobre el equipo */}
          <Text style={styles.sectionTitle}>Nuestro Equipo</Text>
          <Text style={styles.description}>
            Como parte de nuestro compromiso, contamos con un equipo altamente calificado y dedicado a brindarte el mejor servicio. Conoce a las personas que hacen posible nuestro enfoque en la excelencia y la satisfacción del cliente:
          </Text>

          {/* Lista de integrantes del equipo con imágenes */}
          <View style={styles.teamMemberContainer}>
            <View style={styles.teamMember}>
              <Image source={alejandraImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Alejandra Noemí Carranco Estrada</Text>
              <Text style={styles.teamMemberContact}>Email: juan@mowise.com | Teléfono: 123-456-7890</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={mariaImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>María Rodríguez, CFO</Text>
              <Text style={styles.teamMemberContact}>Email: maria@mowise.com | Teléfono: 123-456-7890</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={luisaImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Luisa Gómez, Asesor Financiero</Text>
              <Text style={styles.teamMemberContact}>Email: luisa@mowise.com | Teléfono: 123-456-7890</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={carlosImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Carlos Sánchez, Gerente de Inversiones</Text>
              <Text style={styles.teamMemberContact}>Email: carlos@mowise.com | Teléfono: 123-456-7890</Text>
            </View>
          </View>

          {/* Botón para visitar la página web */}
          <Divider style={styles.divider} />
          <Button
            title="¡Visita nuestra web!"
            onPress={handleVisitWebsite}
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
  teamMemberContainer: {
    marginTop: 10,
  },
  teamMember: {
    marginBottom: 20,
    alignItems: 'center',
  },
  teamMemberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  teamMemberTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  teamMemberContact: {
    fontSize: 16,
    textAlign: 'center',
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
