import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
} from 'react-native';

class Screen extends Component {
  render() {
    const { expression, result, isEqualPressed } = this.props;
    return (
      <View style={styles.screenComponent}>
        <View style={styles.expressionContainer}>
          <Text
            style={
              expression.length <= 20
                ? styles.expressionSmall
                : styles.expressionLarge
            }>
            {expression}
          </Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={isEqualPressed ? styles.highlightResult : styles.result}>
            {result}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenComponent: {
    backgroundColor: 'royalblue',
    flex: 1,
  },
  expressionContainer: {
    padding: 10,
    textAlign: 'right',
  },
  resultContainer: {
    padding: 10,
    textAlign: 'right',
  },
  expressionSmall: {
    color: 'white',
    fontSize: 34,
  },
  expressionLarge: {
    color: 'white',
    fontSize: 24,
  },
  result: {
    color: 'floralwhite',
    fontSize: 24,
  },
  highlightResult: {
    color: 'white',
    fontSize: 38,
  },
});

export default Screen;
