import React, { Component } from 'react';
import {
  TouchableHighlight,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Footer from '../components/Footer';

export default class Home extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton onPress={() => navigate('DrawerOpen')} />
        <View style={styles.landingPage}>
        <Text style={styles.appNameText}>TAX CALCULATOR</Text>
        <Text style={styles.landingMsgText}>Make the most of your</Text>
        <Text style={styles.landingMsgText}>Money</Text>
        <Text style={styles.landingMsgText}>we will tell you where!!!</Text>
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
  appNameText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  landingMsgText: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  footerText: {
    color: '#b22222',
    fontSize:20
  }
});
