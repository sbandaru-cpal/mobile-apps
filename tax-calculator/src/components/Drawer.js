import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Drawer extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button style={styles.drawerItem}
          onPress={() => navigate('Search')}
          title="Search"
        />
        <Button style={styles.drawerItem}
          onPress={() => navigate('DrawerClose')}
          title="Close"
        />
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
  drawerItem: {
    fontSize: 20,
    marginVertical: 20,
  },
});
