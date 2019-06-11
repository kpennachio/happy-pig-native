import React, { Component, Fragment } from 'react';
import { Text, Image, StyleSheet } from 'react-native';

export default class SelectName extends Component {

  state = {
    text: ""
  }

  submitAnimal = () => {
    console.log("submitted");
  }

  render() {
    return(
      <Fragment>
        <Text>Select Name</Text>
        <TextInput
          placeholder="Name"
          label="Name"
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          returnKeyType="go"
          onSubmitEditing={this.submitAnimal}
        />
       </Fragment>
    )
  }
}


const styles = StyleSheet.create({
  textInput: {
    height: 40,
    flex: 0.7,
    paddingLeft: 6,
    borderColor: 'gray',
    borderWidth: 1,
  }
})
