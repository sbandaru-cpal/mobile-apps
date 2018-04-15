import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/tabs/Home';
import Search from './src/tabs/Search';
import Result from './src/screens/Result';
import Modal from './src/screens/Modal';
import Drawer from './src/components/Drawer';

export default class App extends React.Component {
  render() {
    return (
    <MainStackNavigator style={{backgroundColor: '#437F82'}} />
    );
  }
}

// Stack navigation for Search and Result screens
const SearchTab = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Result from Searchs
    },
  },
  Result: {
    screen: Result,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Result', { user: 'Tom' }
      title: `Search Result`,
    }),
  },
}, {
  headerMode: 'screen',
});

// Tab navigation for Home and Search screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Search: {
    screen: SearchTab,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-search' : 'ios-search-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
},{
  tabBarOptions : {
    style: {
      backgroundColor: '#ffaf40',
    }
  }
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
const MainStackNavigator =  StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});
