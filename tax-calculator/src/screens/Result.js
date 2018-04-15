import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Result extends Component {

  static navigationOptions = {
    // Customize header background color to make it look cleaner
    headerStyle: {
      backgroundColor: '#ffaf40',
    },
  };

  render() {
    // Pull navigate out of this.props.navigation
    // and params out of this.props.navigation.state
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Tax Results for State {params.state}  and amount {params.amount}
        </Text>
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
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
