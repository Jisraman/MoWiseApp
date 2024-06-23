import * as React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Divider } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.5;

const alejandraImage = require('../../assets/images/content/about/alejandra.png');
const tanyImage = require('../../assets/images/content/about/tani.png');
const fabianImage = require('../../assets/images/content/about/fabian.png');
const edgarImage = require('../../assets/images/content/about/edgar.png');

function About({ navigation }) {
  
  const handleVisitWebsite = () => {
    Linking.openURL('https://alexcarranco23.wixsite.com/mowise');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <ImageBackground
          source={require('../../assets/images/content/mowise.png')}
          style={[styles.image, { height: imageHeight }]}
        >
        </ImageBackground>

        <View style={styles.contentContainer}>

          <Text style={styles.sectionTitle}>Sobre Nosotros</Text>
          <Text style={styles.description}>
            Somos una empresa emergente dedicada a proporcionar soluciones financieras, tales como préstamos, créditos, inversiones y opciones de ahorro. En este espacio, te invitamos a conocer más sobre nuestra trayectoria, filosofía y compromiso con nuestros clientes. Descubre cómo podemos ayudarte a alcanzar tus metas financieras.
          </Text>

          <Text style={styles.sectionTitle}>Nuestro Equipo</Text>
          <Text style={styles.description}>
            Como parte de nuestro compromiso, contamos con un equipo altamente calificado y dedicado a brindarte el mejor servicio. Conoce a las personas que hacen posible nuestro enfoque en la excelencia y la satisfacción del cliente:
          </Text>

          <View style={styles.teamMemberContainer}>
            <View style={styles.teamMember}>
              <Image source={alejandraImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Alejandra Noemí Carranco Estrada, Directora General</Text>
              <Text style={styles.teamMemberContact}>Email: alejandrance@mowise.com | Teléfono: 123-456-7890</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={tanyImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Diana Tanybeth Zamora Pérez, Gerente de Inversiones</Text>
              <Text style={styles.teamMemberContact}>Email: dianatzp@mowise.com | Teléfono: 123-456-7891</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={fabianImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Fabian Sánchez Torres Gómez, Asesor Financiero</Text>
              <Text style={styles.teamMemberContact}>Email: fabianst@mowise.com | Teléfono: 123-456-7892</Text>
            </View>

            <View style={styles.teamMember}>
              <Image source={edgarImage} style={styles.teamMemberImage} />
              <Text style={styles.teamMemberTitle}>Edgar Andrés Trejo Jiménez, Gerente Financiero</Text>
              <Text style={styles.teamMemberContact}>Email: edgartj@mowise.com | Teléfono: 123-456-7893</Text>
            </View>
            
          </View>

          <Divider style={styles.divider} />
          <TouchableOpacity
            onPress={handleVisitWebsite}
            style={styles.visitButton}
          >
            <Text style={styles.visitButtonText}>¡Visita nuestra web!</Text>
          </TouchableOpacity>
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
  visitButton: {
    backgroundColor: '#3B58B8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  visitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 30,
  },
});

export default About;
