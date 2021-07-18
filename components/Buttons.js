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

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      showHistory,
      getPressedButtonValue,
      handleEqualPressed,
      handleAllClear,
      handleSigleCharacterDelete,
    } = this.props;

    return (
      <View style={styles.buttonsComponent}>
        <View style={styles.leftSideButtonsContainer}>
          <View style={styles.leftSideButton}>
            <TouchableOpacity onPress={handleAllClear}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity onPress={handleSigleCharacterDelete}>
              <Text style={styles.buttonText}>DEL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('%');
              }}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('7');
              }}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('8');
              }}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('9');
              }}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('4');
              }}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('5');
              }}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('6');
              }}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('1');
              }}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('2');
              }}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('3');
              }}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity onPress={showHistory}>
              <Text style={styles.buttonText}>H</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('0');
              }}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftSideButton}>
            <TouchableOpacity
              onPress={() => {
                getPressedButtonValue('.');
              }}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rightSideButtonsContainer}>
          <View style={styles.rightSideButton}>
            <TouchableOpacity
              style={styles.rightButtonCircle}
              onPress={() => {
                getPressedButtonValue('÷');
              }}>
              <View>
                <Text style={styles.buttonText}>÷</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSideButton}>
            <TouchableOpacity
              style={styles.rightButtonCircle}
              onPress={() => {
                getPressedButtonValue('×');
              }}>
              <View>
                <Text style={styles.buttonText}>×</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSideButton}>
            <TouchableOpacity
              style={styles.rightButtonCircle}
              onPress={() => {
                getPressedButtonValue('−');
              }}>
              <View>
                <Text style={styles.buttonText}>−</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSideButton}>
            <TouchableOpacity
              style={styles.rightButtonCircle}
              onPress={() => {
                getPressedButtonValue('+');
              }}>
              <View>
                <Text style={styles.buttonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSideButton}>
            <TouchableOpacity
              style={styles.equalsButton}
              onPress={handleEqualPressed}>
              <View>
                <Text style={styles.equalButtonText}>=</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Buttons;

const styles = StyleSheet.create({
  buttonsComponent: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSideButtonsContainer: {
    flex: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightSideButtonsContainer: {
    flex: 2.5,
    flexDirection: 'column',
  },
  leftSideButton: {
    width: '33.33%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    borderRadius: 50,
  },
  rightSideButton: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
  rightButtonCircle: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'darksalmon',
    
  },
  equalsButton: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'chocolate',
    color: 'white',
  },
  buttonText: {
    fontSize: 34,
    position: 'relative',
    top: -3,
  },
  equalButtonText: {
    fontSize: 28,
    color: 'white',
    position: 'relative',
    top: -2,
  },
});
