/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Axios from "axios";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
  Alert
} from 'react-native';
import ComponenteTexto from './ComponenteTexto'
import ChildrenComp from './ChildrenComp'
class App extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      //  estado: false,
      //  movies: '',
      dataSource: ds.cloneWithRows([]),
    }

    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const _Self = this
    var array = [];
    Axios.get('https://facebook.github.io/react-native/movies.json')
      .then((res) => {
        var movi = res.data.movies
        console.warn(movi);

        for (var i = 0; i < movi.length; i++) {
          array.push(movi[i].title)
          //frutas.push('Naranja');
        }
        _Self.setState({
          // movies: res.data.movies,
          dataSource: this.state.dataSource.cloneWithRows(array)
        })
      })
  }

  // handleClick() {
  //   this.setState({
  //     estado: !this.state.estado
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* <ChildrenComp estado={this.state.estado} result={this.state.movies}/>
        <ComponenteTexto click={this.handleClick} />
        <Text style={styles.welcome}>
          Welcome to React Native Kevin Marquez!
        </Text> */}

        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  pressCell(rowData){
    Alert.alert(rowData)
  }
  renderRow(rowData) {
    return (
      <TouchableHighlight onPress={() => this.pressCell(rowData)}>
        <View style={styles.cell}>
          <Text>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  container: {
    flex: 51,
    backgroundColor: '#FFA07A',
    paddingTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  on: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow'
  },
  off: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
});


export default App