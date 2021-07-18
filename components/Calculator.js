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
  import Toast from 'react-native';

  import Screen from './Screen';
  import Buttons from './Buttons';
  import History from './History';

  import Constants from 'expo-constants';
  

class Calculator extends Component {

    constructor(props){
        super(props)

        this.state = {
            expression:'Calculator',
            result:'',
            actualExpression: '',
            history:[],
            isHistoryVisible: true,
            isEqualPressed: false,
        };
        this.historyRef = React.createRef();
    }


    showHistory = () => {
      this.setState({
        isHistoryVisible: true,
      });
    }

    hideHistory = () => {
      this.historyRef.current.slideOut(() => {
      });
      setTimeout(() => {
        this.setState({
          isHistoryVisible: false,
        });
      }, 500);
    }

    deleteHistory = () => {
       ToastAndroid.show('Clear', ToastAndroid.SHORT);
      this.setState({
        history: []
      });
    }
 

      
    calculate = ()=>{

        try{
        this.setState({
            expression: eval(this.state.text).toString(),
            result:eval(this.state.text).toString(),
        })
        }
        catch(err){
        // We can't Store here something  
                   
        }
    }

    getPressedButtonValue = (button) => {
      const {
        expression,
        actualExpression,
      } = this.state;
      if(expression === 'Calculator'){
        this.setState({
          expression: '',
          result: ''
        });
      }


      if(expression.length >= 30) {
        this.setState({
          isEqualPressed: false,
        })
        return;
      }
      let expressionWithActualCharacters = actualExpression;
      if(button === '÷'){
        expressionWithActualCharacters = `${expressionWithActualCharacters}/`;
      } else if(button === '×') {
        expressionWithActualCharacters = `${expressionWithActualCharacters}*`;
      } else if(button === '−') {
        expressionWithActualCharacters = `${expressionWithActualCharacters}-`;
      } else {
        expressionWithActualCharacters = `${expressionWithActualCharacters}${button}`;
      }
      let result = '';
      try{
        result= eval(expressionWithActualCharacters).toString();
        this.setState({
          result,
        })
        }
        catch(err){
                 console.log(err);
        }
      this.setState((prevState) => ({
        expression: `${prevState.expression}${button}`,
        actualExpression: expressionWithActualCharacters,
        isEqualPressed: false,
      }));
    }


    handleEqualPressed = () => {
      const{
        history,
        expression,
        result,
      } = this.state;

      

      history.push({
        expression,
        result,
      });

      this.setState({
        expression: 'Calculator',
        actualExpression: '',
        isEqualPressed: true,
      })
    }

    handleAllClear = () => {
      this.setState({
        expression: 'Calculator',
        result: '',
        actualExpression: '',
        isEqualPressed: false,
      });
    }

    handleSigleCharacterDelete = () => {
      const {
        expression,
        actualExpression,
      } = this.state;

      if(expression === 'Calculator') return;

      if(expression === '') {
        this.setState({
          expression: 'Calculator',
          result: '',
          actualExpression: '',
        })
        return;
      }

      let result = '';
      try{
        result= eval(actualExpression.slice(0, actualExpression.length-1)).toString();
        this.setState({
          result,
        });
        }
        catch(err){
                console.log(err);
        }      

      this.setState({
        expression: expression.slice(0, expression.length - 1),
        actualExpression: actualExpression.slice(0, actualExpression.length-1)
      });
    }

    render(){

      const {
        isHistoryVisible,
        expression,
        result,
        isEqualPressed,
        history,
      } = this.state;

        return (
            <>
              {isHistoryVisible &&
                <View style={styles.historyWrapper}>
                <History ref={this.historyRef} deleteHistory={this.deleteHistory} history={history} hideHistory={this.hideHistory}></History>
                </View>
              }
              <StatusBar barStyle="light-content" backgroundColor={'darkred'} />
              <View style={styles.calculatorWrapper}>
                <View style={styles.screenWrapper}>
                  <Screen
                    expression={expression}
                    result={result}
                    isEqualPressed={isEqualPressed}
                  ></Screen>
                </View>
                <View style={styles.buttonsWrapper}>
                  <Buttons
                    showHistory={this.showHistory}
                    getPressedButtonValue={this.getPressedButtonValue}
                    handleEqualPressed={this.handleEqualPressed}
                    handleAllClear={this.handleAllClear}
                    handleSigleCharacterDelete={this.handleSigleCharacterDelete}
                  ></Buttons>
                </View>
                
              </View>
            </>
          );
    }


}

const styles = StyleSheet.create({
  calculatorWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  screenWrapper: {
    flex: 3,
  },
  buttonsWrapper: {
    flex: 7,
  },
  historyWrapper: {
    position: 'absolute',
    top: 0,
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: 1,
    marginTop: Constants.statusBarHeight,
  }
});

export default Calculator;