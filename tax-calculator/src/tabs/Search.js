import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";
import Button from 'react-native-button';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Footer from '../components/Footer';
import Api from '../utilities/api';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      stateCode:'Select State',
      states : []
    };
  }
  handleAmount = (text) => {
   this.setState({ amount: text })
  }

  onSelect(value, label) {
    this.setState({stateCode : value});
  }

  componentDidMount(){
    Api.getStates().then((res) => {
      this.setState({
        states : res
      })
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton onPress={() => navigate('DrawerOpen')} />
        <View style={styles.landingPage}>
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Amount"
               placeholderTextColor = "#4F8EF7"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}/>
        <Text style={{height: 10}} />
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.stateCode}
            style = {styles.inputStyle}
            textStyle = {{color:"#4F8EF7"}}
            backdropStyle  = {{backgroundColor : "#ffaf40"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
          { this.state.states.map((item, key)=>(
            <Option value = {item.code}>{item.value}</Option>)
            )}
        </Select>
        <Text style={{height: 10}} />
        <Button
          containerStyle={styles.calculateButton}
          disabledContainerStyle={{backgroundColor: 'grey'}}
          onPress={() => navigate('Result', { state: this.state.stateCode, amount: this.state.amount })}
          style={{fontSize: 20, color: '#4F8EF7'}}>
          Calculate
        </Button>
        </View>
        <Footer/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaf40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingPage: {
    flex: 0.95,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 0.05,
    alignItems: 'center'
  },
  inputStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth : 0.5, 
    borderColor : "#4F8EF7",
    height:35,
    width: 300
  },
  footerText: {
    color: '#b22222',
    fontSize:20
  },
  calculateButton: {
    padding:10, 
    with:150,
    height:45, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: 'white'
  }
});
