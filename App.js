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
  View
} from 'react-native';
import ComponenteTexto from './ComponenteTexto'
import ChildrenComp from './ChildrenComp'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       estado: false,
       movies: ''
      }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const _Self = this
    Axios.get('https://facebook.github.io/react-native/movies.json')
        .then((res) => {
          _Self.setState({ movies: res.data.movies }) 
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
        <ChildrenComp estado={this.state.estado} result={this.state.movies}/>
        <ComponenteTexto click={this.handleClick} />
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