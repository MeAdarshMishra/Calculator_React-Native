import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Calculator from './components/Calculator';
import { Card } from 'react-native-paper';
import {
  StatusBar
}from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
