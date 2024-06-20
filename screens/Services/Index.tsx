import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Services() {
  return (
    <SafeAreaProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Services Screen</Text>
        </View>
    </SafeAreaProvider>
  );
}

export default Services;