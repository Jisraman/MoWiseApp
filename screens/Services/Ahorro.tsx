import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Función para calcular el rendimiento de la inversión
const calcularRendimientoInversion = (monto, tasa, tiempo) => {
  return monto * (1 + tasa * tiempo);
};

const Ahorro = () => {
  const [monto, setMonto] = useState('');
  const [resultados, setResultados] = useState([0, 0, 0, 0]);
  const tasaInversion = 0.146; // Tasa de interés ajustada para un 14.6% de rendimiento

  const calcularInversion = () => {
    const montoNumerico = parseFloat(monto);
    if (!isNaN(montoNumerico)) {
      const nuevosResultados = [
        calcularRendimientoInversion(montoNumerico, tasaInversion, 3).toFixed(2), // 3 meses
        calcularRendimientoInversion(montoNumerico, tasaInversion, 6).toFixed(2), // 6 meses
        calcularRendimientoInversion(montoNumerico, tasaInversion, 12).toFixed(2), // 12 meses
        calcularRendimientoInversion(montoNumerico, tasaInversion, 18).toFixed(2), // 18 meses
      ];
      setResultados(nuevosResultados);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Inversiones</Text>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={monto}
      onChangeText={(text) => setMonto(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularInversion}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      {/* Gráficos de tiempo predefinidos */}
      <View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    width: '100%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    height: 40, // Ajusta la altura de la barra según tus necesidades
    backgroundColor: 'green', // Color de ejemplo, puedes cambiarlo
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 5, // Ajusta el padding horizontal para centrar el mes
  },
  label: {
    color: 'black', // Cambia el color del resultado según tu diseño
    fontWeight: 'bold',
    textAlign: 'right', // Alinea el texto del resultado a la derecha
    marginLeft: 10, // Añade un margen izquierdo para separar el resultado de la barra
  },
  monthLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Alinea el texto del mes al centro
  },
});

export default Ahorro;
