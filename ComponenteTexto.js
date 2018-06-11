import React from 'react'
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

function ComponenteTexto (props){
      return(
        <View>
          <View >
            <Button
              onPress={props.click}
              title="Click"
            />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    flexDirection: 'row-reverse',
  },
});

export default ComponenteTexto