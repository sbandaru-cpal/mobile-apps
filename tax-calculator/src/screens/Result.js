import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ListView
} from 'react-native';
import Api from '../utilities/Api';
import StateHeader from '../components/StateHeader';
import StateRow from '../components/StateRow';


var {height} = Dimensions.get('window');
export default class Result extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentDidMount(){
    Api.calculateForAllStates(this.props.navigation.state.params.amount).then((res) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(res)
      })
    });
  }

  render() {
    // Pull navigate out of this.props.navigation
    // and params out of this.props.navigation.state
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style= {styles.searchResultView}>
        <Text style={styles.resultText}>
          CALCULATED TAX FOR STATE: {params.state}
        </Text>
        <Text style={styles.resultText}>${params.totalAmount}</Text>
        </View>
        <View style= {styles.allStatesResultView}>
        <View style = {styles.infoMsgView}>
        <Text style = {styles.infoBoxText}>
         However.
        </Text>
        <Text style = {styles.infoBoxText}>
         If you buy in any of these states, here is the price breakdown!!!
        </Text>
        </View>
        <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(data) => <StateRow {...data} />}
        renderHeader={() => <StateHeader />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  listView: {
    flex: 1,
    marginTop: 20,
  },
  searchResultView: {
    backgroundColor: '#8395a7',
    alignItems: 'center',
    height: 150
  },
  allStatesResultView: {
    backgroundColor: '#ffaf40',
    height: height -150
  },
  infoMsgView: {
    backgroundColor:"#FFF",
    justifyContent: 'center',
    height: 100,
    margin : 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  infoBoxText: {
    fontSize: 18,
    color: "#BDC581",
    margin: 10
  },
  resultText: {
    fontSize: 20,
    marginVertical: 10,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
