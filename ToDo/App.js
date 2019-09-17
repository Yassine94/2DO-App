import { StyleSheet, Text, View } from 'react-native';
import { 
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer 
} from 'react-navigation';

import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
