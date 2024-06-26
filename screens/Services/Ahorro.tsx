import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';

// Función para calcular el crecimiento del ahorro
const calcularCrecimientoAhorro = (montoInicial, tasa) => {
  return montoInicial * (1 + tasa);
};

const Ahorro = () => {
  const [monto, setMonto] = useState('');
  const [resultados, setResultados] = useState([0, 0, 0, 0]);
  const tasaAhorro = 0.146; // Tasa de interés ajustada para un 14.6% de crecimiento

  const calcularAhorro = () => {
    const montoNumerico = parseFloat(monto);
    if (!isNaN(montoNumerico)&& montoNumerico >= 0) {
      const nuevosResultados = [
        calcularCrecimientoAhorro(montoNumerico, 0.103).toFixed(2), // 3 meses
        calcularCrecimientoAhorro(montoNumerico, 0.1047).toFixed(2), // 6 meses
        calcularCrecimientoAhorro(montoNumerico, 0.125).toFixed(2), // 12 meses
        calcularCrecimientoAhorro(montoNumerico, 0.142).toFixed(2), // 18 meses
      ];
      setResultados(nuevosResultados);
    } else{
      Alert.alert('Error', 'El monto debe un monto ser válido.');
      return;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Simulador de Ahorro</Text>

        <Text style={styles.fillerText}>
          ¿Alguna vez has imaginado alcanzar tus metas financieras con facilidad? Nuestro simulador de ahorro te ayuda a visualizar cómo tus decisiones de hoy pueden impactar tus ahorros futuros. Desde planificar unas vacaciones soñadas hasta asegurar tu jubilación, este simulador te ofrece una herramienta poderosa para tomar decisiones informadas.
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={monto}
          onChangeText={(text) => setMonto(text)}
          placeholder="Ingrese el monto a ahorrar"
        />

        <TouchableOpacity style={styles.button} onPress={calcularAhorro}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {/* Gráficos de tiempo predefinidos */}
        <View style={styles.graphContainer}>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 80 }]}>
              <Text style={styles.monthLabel}>3 meses</Text>
            </View>
            <Text style={styles.label}>${resultados[0]}</Text>
          </View>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 110 }]}>
              <Text style={styles.monthLabel}>6 meses</Text>
            </View>
            <Text style={styles.label}>${resultados[1]}</Text>
          </View>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 140 }]}>
              <Text style={styles.monthLabel}>12 meses</Text>
            </View>
            <Text style={styles.label}>${resultados[2]}</Text>
          </View>
          <View style={styles.graphRow}>
            <View style={[styles.graphBar, { width: 180 }]}>
              <Text style={styles.monthLabel}>18 meses</Text>
            </View>
            <Text style={styles.label}>${resultados[3]}</Text>
          </View>
        </View>

        {/* Texto sobre el ahorro a corto plazo */}
        <Text style={styles.sectionTitle}>¿Qué te ofrece el ahorro a corto plazo?</Text>
        <Text style={styles.description}>
          Un producto de ahorro a corto plazo es ideal para aquellas personas que quieran maximizar la rentabilidad de sus ahorros con acceso rápido a su dinero. Tu capital está seguro y nuestro equipo te ayuda a obtener los mejores beneficios posibles.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    width: '100%',
  },
  fillerText: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#3B58B8',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  graphContainer: {
    marginTop: 20,
    width: '100%',
  },
  graphRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  graphBar: {
    height: 50,
    backgroundColor: '#2B2A2A',
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 10,
  },
  monthLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Ahorro;
