import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    flex:1
  }
});

const Row = (props) => (
  <View style={styles.container}>
  <Text style={styles.text}>
      {props.state}
    </Text>
    <Text style={styles.text}>
      {props.taxRate}
    </Text>
    <Text style={styles.text}>
      {props.taxAmount}
    </Text>
    <Text style={styles.text}>
      {props.totalAmount}
    </Text>
  </View>
);

export default Row;