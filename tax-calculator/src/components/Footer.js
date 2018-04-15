import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Footer extends Component {
render() {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>Designed and Developed by Cpal</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
    footer: {
      flex: 0.05,
      alignItems: 'center'
    },
    footerText: {
      color: '#b22222',
      fontSize:20
    }
  });