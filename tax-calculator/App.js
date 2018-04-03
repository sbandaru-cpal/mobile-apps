import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.landingPage}>
        <Text style={styles.appNameText}>TAX CALCULATOR</Text>
        <Text style={styles.landingMsgText}>Make the most of your</Text>
        <Text style={styles.landingMsgText}>Money</Text>
        <Text style={styles.landingMsgText}>we will tell you where!!!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Designed and Developed by Cpal</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffaf40',
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
