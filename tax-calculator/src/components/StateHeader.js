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
        fontWeight: 'bold',
        fontSize: 16,
        flex:1
      }
});

const StateHeader = (props) => (
    <View style={styles.container}>
    <Text style={styles.text}>
        State Code
      </Text>
      <Text style={styles.text}>
        Tax Rate
      </Text>
      <Text style={styles.text}>
        Tax Amount
      </Text>
      <Text style={styles.text}>
        Total Amount
      </Text>
    </View>
);

export default StateHeader;