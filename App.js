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
  View,
  Button
} from 'react-native';
import ComponenteTexto from './ComponenteTexto'

class ChildrenComp extends Component {
  render() {
    if (this.props.result){
      var res = this.props.result.map((item, i) => {
        return(
          <Text key={i}>{item.title}</Text>
        )
      })
    }
    return (
      <View>
        <Text>
         {res}
        </Text>
        <View style={this.props.estado ? styles.on : styles.off} />
      </View>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
       estado: false,
       data:null
      }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    Axios.get('https://facebook.github.io/react-native/movies.json')
        .then((res) => {
          this.setState({ data: res.movies })
          console.warn(res.data);
        })
  }

  handleClick() {
    this.setState({
      estado: !this.state.estado
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ChildrenComp estado={this.state.estado} result={this.state.data}/>
        <ComponenteTexto click={this.handleClick}/>
        <Text style={styles.welcome}>
          Welcome to React Native Kevin Marquez!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA07A',
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
  alternativeLayoutButtonContainer: {
    flexDirection: 'row-reverse',
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