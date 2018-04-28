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
import Api from '../utilities/Api';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      stateDescription:'Select State',
      stateCode: '',
      states : []
    };
  }
  handleAmount = (text) => {
   this.setState({ amount: text})
  }

  onSelect(value, label) {
    this.setState({
      stateCode : value,
      stateDescription: label
    });
  }

  search() {
    Api.calculate(this.state.stateCode, this.state.amount).then((res) => {
      this.props.navigation.navigate('Result', { 
        state: this.state.stateCode, 
        amount: this.state.amount,
        totalAmount: res })
    });
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
               keyboardType='numeric'
               underlineColorAndroid = "transparent"
               placeholder = "Enter Amount"
               placeholderTextColor = "#4F8EF7"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}/>
        <Text style={{height: 10}} />
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText = {this.state.stateDescription}
            style = {styles.inputStyle}
            textStyle = {{color:"#4F8EF7"}}
            backdropStyle  = {{backgroundColor : "#ffaf40"}}
            optionListStyle = {{backgroundColor : "#4F8EF7"}}
          >
          { this.state.states.map((item, key)=>(
            <Option value = {item.code}>{item.value}</Option>)
            )}
        </Select>
        <Text style={{height: 10}} />
        <Button
          containerStyle={styles.calculateButton}
          disabledContainerStyle={{backgroundColor: 'grey'}}
          onPress={this.search.bind(this)}
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
  inputStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth : 0.5, 
    borderWidth: 0,
    borderColor : "#4F8EF7",
    color : "#4F8EF7",
    height:35,
    width: 300
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
