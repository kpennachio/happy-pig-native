import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  TextInput
} from 'react-native';


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  state = {
    username: "",
    password: "",
    message: ""
  }

  login = () => {
    console.log("login");
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(response => {
        // display any errors
      if (response.errors) {
        this.setState({
          message: response.errors,
          username: "",
          password: ""
        })
      } else {
        // or set jwt token in local storage and current user info in state
        // redirect to dashboard page
        console.log("looks good!");
        AsyncStorage.setItem('jwt', response.jwt);
        this.props.navigation.navigate('Main');
        }
    })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Username"
          label="Username"
          name="username"
          autoCapitalize="none"
          autoCorrect={false}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.text}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.text}
        />
        <Button title="Sign in!" onPress={this.login} />

      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
