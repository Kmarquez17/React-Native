
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

class ChildrenComp extends Component {
    
   render() {
      console.warn(this.props.result);
      if(this.props.result){
          var res = this.props.result.map((item,i)=>{
              return(
                 <Text key={i}>{item.title}</Text>
              )
          })
      }else{
          return(
              <Text >Hola</Text>
          )
      }
          return(
            <View>
              {res}
              <View style={this.props.estado ? styles.on: styles.off}/>
            </View>
          )
   }
}

const styles = StyleSheet.create({
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

  export default ChildrenComp