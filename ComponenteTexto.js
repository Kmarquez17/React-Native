import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';



class ComponenteTexto extends Component{

    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    render(){
      return(
        <View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Hola"
            />
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Kevin"
            />
          </View>
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    flexDirection: 'row-reverse',
  },
});
  export default ComponenteTexto