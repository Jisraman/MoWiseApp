import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Prestamo = () => {
  const [montoSolicitado, setMontoSolicitado] = useState('');
  const [cuota, setCuota] = useState('');
  const [plazo,  setPlazo ] = useState('mensual');
  const [plazoString,  setPlazoString ] = useState('mensual');
  const [tasaPromedio, setTasaPromedio] = useState(58.4); // Tasa de interés anual del 12%
  const [detallesCalculo, setDetallesCalculo] = useState(null); // Para almacenar los resultados intermedios
  const plazos = {
    mensual: 12,
    quincenal: 24,
    catorcenal: 26,
    semanal: 52,
  };
  
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calcularPrestamo = () => {
    const monto = parseFloat(montoSolicitado);
    const cuotaInput = parseFloat(cuota);
    handlePlazoChangeOnCalc(plazo);

    // Validar entrada
    if (isNaN(monto) || isNaN(cuotaInput) || monto <= 0 || cuotaInput <= 0) {
      Alert.alert('Error', 'Por favor, ingresa valores válidos para Monto solicitado y Cuota.');
      return;
    }

    // Validar que la cuota no sea mayor que el monto solicitado
    if (cuotaInput > monto) {
      Alert.alert('Error', 'La cuota no puede ser mayor que el monto solicitado.');
      return;
    }

    // Calcular el número de períodos necesarios para pagar el préstamo
    const interesPeriodico = tasaPromedio / 100 / plazos[plazo]; // Tasa de interés periódica ajustada según el período de pago
    const numerador = Math.log(cuotaInput / (cuotaInput - monto * interesPeriodico));
    const denominador = Math.log(1 + interesPeriodico);

    // Validar que el denominador no sea cero para evitar divisiones por cero
    if (denominador === 0 || numerador <= 0) {
      Alert.alert('Error', 'La cuota debe ser suficiente para cubrir los intereses. Por favor, ingresa una cuota mayor.');
      return;
    }

    const tiempoPagoUnidades = numerador / denominador;
    const tiempoPagoTotal = Math.ceil(tiempoPagoUnidades); // Redondeamos hacia arriba para obtener el número total de unidades de tiempo

    // Validar que el tiempo de pago no sea infinito
    if (!isFinite(tiempoPagoTotal)) {
      Alert.alert('Error', 'La cuota debe ser suficiente para cubrir los intereses. Por favor, ingresa una cuota mayor.');
      return;
    }

    setDetallesCalculo({
      tiempoPago: tiempoPagoTotal,
      totalPago: (cuotaInput * tiempoPagoTotal).toFixed(2),
    });
  };

  const handlePlazoChangeOnCalc = (value) => {
    setPlazoString(value);
  };

  const handlePlazoChange = (value) => {
    setPlazo(value);
  };

  const tiempoPagoTexto = () => {
    switch (plazoString) {
      case 'mensual':
        return 'meses';
      case 'quincenal':
        return 'quincenas';
      case 'catorcenal':
        return 'catorcenas';
      case 'semanal':
        return 'semanas';
      default:
        return 'meses';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Información adicional sobre los préstamos */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>PRESTAMOS EN MENOS DE 24 HORAS</Text>
          <Text style={styles.infoText}>
            Una vez que firmas tus contratos puedes recibir tu préstamo personal en 24 horas (o un día). El crédito personal solicitado está sujeto a aprobación.
          </Text>
          <Text style={styles.infoText}>
            ¡Realiza la solicitud de tu préstamo!, nuestro equipo de asesoría te puede ayudar en cualquier momento, contamos con un servicio de atención las 24 horas, los 7 días de la semana.
          </Text>
          <Text style={styles.infoText}>
            Al ser regulados por la CNBV® y la CONDUSEF®, cualquier proceso que inicies con nosotros es confiable y seguro. Así puedes adquirir préstamos seguros de acuerdo a las regulaciones establecidas.
          </Text>
          <Text style={styles.infoTitle}>Características de nuestros préstamos</Text>
          <Text style={styles.infoText}>• Montos a partir de $5,000 y hasta $100,000 MXN.</Text>
          <Text style={styles.infoText}>• Pagos flexibles con frecuencia semanal, catorcenal, quincenal o mensual.</Text>
          <Text style={styles.infoText}>• Plazos personalizados desde 4 meses y hasta 36 meses.</Text>
          <Text style={styles.infoText}>• Tasas de interés entre 16.50% y hasta 83.17%.</Text>
          <Text style={styles.infoText}>• Posibilidad de liquidarlo cuando quieras o hacer pagos adelantados sin penalizaciones, ni cargos extra.</Text>
        </View>

        {/* Simulador de préstamos */}
        <Text style={styles.title}>Simulador de Préstamos</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Monto solicitado"
          keyboardType="numeric"
          value={formatNumberWithCommas(montoSolicitado)}
          onChangeText={(text) => setMontoSolicitado(text.replace(/,/g, ''))}
        />
        <TextInput
          style={styles.input}
          placeholder={`Cuota ${plazo}`}
          keyboardType="numeric"
          value={formatNumberWithCommas(cuota)}
          onChangeText={(text) => setCuota(text.replace(/,/g, ''))}
        />

          <View style={styles.plazoButtonsContainer}>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.plazoButton, plazo === 'mensual' && styles.activeButton]}
                onPress={() => handlePlazoChange('mensual')}
              >
                <Text style={styles.buttonText}>Mensual</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.plazoButton, plazo === 'quincenal' && styles.activeButton]}
                onPress={() => handlePlazoChange('quincenal')}
              >
                <Text style={styles.buttonText}>Quincenal</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.plazoButton, plazo === 'catorcenal' && styles.activeButton]}
                onPress={() => handlePlazoChange('catorcenal')}
              >
                <Text style={styles.buttonText}>Catorcenal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.plazoButton, plazo === 'semanal' && styles.activeButton]}
                onPress={() => handlePlazoChange('semanal')}
              >
                <Text style={styles.buttonText}>Semanal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={calcularPrestamo}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {detallesCalculo && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Detalles del cálculo</Text>
            <View style={styles.resultRow}>
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Terminas de pagar en</Text>
                <Text style={styles.resultValue}>{detallesCalculo.tiempoPago} {tiempoPagoTexto()}</Text>
              </View>
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Tasa promedio</Text>
                <Text style={styles.resultValue}>{tasaPromedio}%</Text>
              </View>
            </View>
            <Text style={styles.totalPago}>
            Al finalizar, habrás pagado un total de ${formatNumberWithCommas(detallesCalculo.totalPago)}
            </Text>
          </View>
        )}
        {/* Requisitos */}
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsTitle}>Requisitos para el préstamo</Text>
          <Text style={styles.infoText}>- Tener buen historial crediticio</Text>
          <Text style={styles.infoText}>- Credencial para votar INE / IFE</Text>
          <Text style={styles.infoText}>- Comprobante de domicilio</Text>
          <Text style={styles.infoText}>- Comprobar ingresos de al menos $6,000 MXN al mes</Text>
          <Text style={styles.infoText}>- Comprobar al menos 6 meses en tu empleo</Text>
        </View>

        {/* Pasos para adquirir tu préstamo en línea */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Pasos para adquirir tu préstamo en línea</Text>
          <Text style={styles.infoText}>- Crea tu cuenta</Text>
          <Text style={styles.infoText}>- Regístrate con tu correo electrónico y una contraseña segura.</Text>
          <Text style={styles.infoText}>- Solicita tu préstamo</Text>
          <Text style={styles.infoText}>- Llena la solicitud con tus datos personales, información de tu empleo y el monto que necesitas.</Text>
          <Text style={styles.infoText}>- Espera la aprobación</Text>
          <Text style={styles.infoText}>- Nuestro equipo evaluará tu solicitud y recibirás una respuesta en poco tiempo.</Text>
          <Text style={styles.infoText}>- Recibe tu préstamo</Text>
          <Text style={styles.infoText}>- Firma tu contrato y recibe el dinero en tu cuenta bancaria.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 40,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    color: 'black',
    fontSize: 24,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  plazoButtonsContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  plazoButton: {
    flex: 1,
    backgroundColor: '#3B58B8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#2B2A2A',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: '#3B58B8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 20,
  },
  resultContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resultItem: {
    flex: 1,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 16,
  },
  totalPago: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  requirementsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  requirementsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Prestamo;
