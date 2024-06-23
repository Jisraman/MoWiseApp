import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const backgroundImg = require('../../assets/images/background.png');

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [photo, setPhoto] = useState(null);
  const [gender, setGender] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPhone = await AsyncStorage.getItem('phone');
        const storedBirthDay = await AsyncStorage.getItem('birthDay');
        const storedBirthMonth = await AsyncStorage.getItem('birthMonth');
        const storedBirthYear = await AsyncStorage.getItem('birthYear');
        const storedPhoto = await AsyncStorage.getItem('photo');
        const storedGender = await AsyncStorage.getItem('gender');

        if (
          storedName &&
          storedEmail &&
          storedPhone &&
          storedBirthDay &&
          storedBirthMonth &&
          storedBirthYear &&
          storedPhoto &&
          storedGender
        ) {
          setName(storedName);
          setEmail(storedEmail);
          setPhone(storedPhone);
          setBirthDay(storedBirthDay);
          setBirthMonth(storedBirthMonth);
          setBirthYear(storedBirthYear);
          setPhoto(storedPhoto);
          setGender(storedGender);
          setIsRegistered(true);
        }
      } catch (e) {
        console.error('Error loading user data', e);
      }
    };

    loadUserData();
  }, []);

  const handleSave = async () => {
    if (name && email && phone && birthDay && birthMonth && birthYear && photo && gender) {
      try {
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('phone', phone);
        await AsyncStorage.setItem('birthDay', birthDay);
        await AsyncStorage.setItem('birthMonth', birthMonth);
        await AsyncStorage.setItem('birthYear', birthYear);
        await AsyncStorage.setItem('photo', photo);
        await AsyncStorage.setItem('gender', gender);
        setIsRegistered(true);
        setIsEditing(false);
        Alert.alert(
          'Datos guardados',
          'Tus datos han sido guardados exitosamente.'
        );
      } catch (e) {
        console.error('Error saving user data', e);
      }
    } else {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const selectPhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setPhoto(uri);
      }
    });
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = Array.from(
    { length: getDaysInMonth(parseInt(birthMonth), parseInt(birthYear)) },
    (_, i) => (i + 1).toString()
  );
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>
    (currentYear - i).toString()
  );

  const renderForm = () => (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity style={styles.photoButton} onPress={selectPhoto}>
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: photo || 'https://example.com/default-photo.png' }}
            style={styles.selectedPhoto}
          />
          <Text style={styles.photoText}>Cambiar Foto</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Fecha de Nacimiento</Text>
        <View style={styles.datePickerContainer}>
          <Text style={styles.pickerLabel}>Año</Text>
          <Picker
            style={styles.picker}
            selectedValue={birthYear}
            onValueChange={value => setBirthYear(value)}
          >
            {years.map(year => (
              <Picker.Item key={year} label={year} value={year} />
            ))}
          </Picker>
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.pickerLabel}>Mes</Text>
          <Picker
            style={styles.picker}
            selectedValue={birthMonth}
            onValueChange={value => setBirthMonth(value)}
          >
            {months.map(month => (
              <Picker.Item key={month} label={month} value={month} />
            ))}
          </Picker>
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.pickerLabel}>Día</Text>
          <Picker
            style={styles.picker}
            selectedValue={birthDay}
            onValueChange={value => setBirthDay(value)}
          >
            {daysInMonth.map(day => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Género</Text>
        <Picker
          style={styles.picker}
          selectedValue={gender}
          onValueChange={value => setGender(value)}
        >
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{isEditing ? 'Guardar' : 'Registrar'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderProfile = () => (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.photoButton} onPress={selectPhoto}>
        <Image source={{ uri: photo }} style={styles.profilePhoto} />
      </TouchableOpacity>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>Hola, {name}.</Text>
        <Text style={styles.profileText}>Tu cuenta aún está en validación. Se paciente..</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <SafeAreaProvider>
        <View style={styles.container}>
          {!isRegistered || isEditing ? renderForm() : renderProfile()}
        </View>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 255, 0)', // Fondo azul con transparencia para permitir que se vea la imagen de fondo
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#fff', // Texto blanco para contrastar con el fondo azul
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Fondo blanco para el input
    color: '#333', // Color de texto oscuro para el input
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  pickerLabel: {
    fontSize: 16,
    color: '#fff', // Texto blanco para contrastar con el fondo azul
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff', // Fondo blanco para el picker
    paddingHorizontal: 10,
    color: '#333', // Color de texto oscuro para el picker
  },
  photoButton: {
    backgroundColor: '#007bff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 110,
    height: 110,
    marginTop: 20,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  selectedPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoText: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo blanco con transparencia
    borderRadius: 10,
    width: '100%',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white', // Color de texto oscuro para la información del perfil
  },
  button: {
    width: 'auto',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    marginTop: 40,
    backgroundColor: '#3B58B8',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Profile;
   
