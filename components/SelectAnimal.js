import React, { Component, Fragment } from 'react';
import { Text, Image } from 'react-native';

export default class SelectAnimal extends Component {



  render() {
    return(
      <Fragment>
        <Text>Select Animal</Text>
        <Image
           source={require('../assets/images/pig-test.jpeg')}
           style={{width: 50, height: 50}}
           onPress={() => this.props.selectType("pig")}
         />
         <Image
           style={{width: 50, height: 50}}
           source={require('../assets/images/duck-test.jpg')}
           onPress={() => this.props.selectType("duck")}

         />
       </Fragment>
    )
  }
}
