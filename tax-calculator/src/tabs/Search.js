import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Footer from '../components/Footer';
import Api from '../utilities/Api';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      stateDescription:'',
      stateCode: '',
      states : [],
      amountValid: true,
      stateValid: true
    };
  }
  handleAmount = (text) => {
    if(text !== '') {
      this.setState({ amount: text, amountValid: true})
    }else {
      this.setState({ amount: '', amountValid : false})
    }
   
  }

  onSelect(value, label) {
    if(value !== ''){
      this.setState({
        stateCode : value,
        stateDescription: value,
        stateValid:true
      });
    }else{
      this.setState({
        stateCode : '',
        stateDescription: '',
        stateValid: false
      });
    }
    
  }

  search() {
    if(this.state.stateValid && this.state.amountValid) {
      Api.calculate(this.state.stateCode, this.state.amount).then((res) => {
        this.props.navigation.navigate('Result', { 
          state: this.state.stateCode, 
          amount: this.state.amount,
          totalAmount: res.totalAmount })
      });
    }
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
        <TextInput style = {[styles.inputStyle, !this.state.amountValid ? styles.errorBorder: null]}
               keyboardType='numeric'
               underlineColorAndroid = "transparent"
               textAlign = "center"
               placeholder = "Enter Amount"
               placeholderTextColor = "#4F8EF7"
               autoCapitalize = "none"
               onChangeText = {this.handleAmount}/>
        <Text style={styles.errorText}>
          {!this.state.amountValid ? 'amount cannot be blank' :null}
        </Text>
        <Text style={{height: 10}} />
        <Picker
          selectedValue={this.state.stateDescription}
          itemStyle={{height: 44, color: "#4F8EF7"}}
          style={[styles.inputStyle, !this.state.stateValid ? styles.errorBorder: null]}
          onValueChange={this.onSelect.bind(this)}>
            <Picker.Item label='Select State' value="" />
          { this.state.states.map((item, key)=>(
            <Picker.Item label={item.value} value={item.code} />
            )
          )}
        </Picker>   
        <Text style={styles.errorText}>
          {!this.state.stateValid ? 'state cannot be blank' :null}
        </Text>    
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
  },
  errorBorder: {
    borderColor: 'red'
  },
  errorText: {
    color: 'red'
  }
});
