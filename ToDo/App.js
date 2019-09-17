import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import RootNavigator from "./src/navigator"
import SafeAreaView from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

          <RootNavigator/>
    </SafeAreaView>
  );
}
