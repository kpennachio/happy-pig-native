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

import { connect } from 'react-redux'



class SignInScreen extends React.Component {
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
        console.log(response);
        AsyncStorage.setItem('jwt', response.jwt);
        this.props.getUsername(response.username);
        this.props.navigation.navigate('Main');
        }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              label="Username"
              name="username"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.text}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              label="Password"
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.text}
            />
          </View>
          <Button title="Sign in!" onPress={this.login} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  loginBox: {
    paddingTop: 200,
  },
  inputContainer: {
    justifyContent: "center",
    paddingTop: 10,
    flexDirection: "row"
  },
  textInput: {
    height: 40,
    flex: 0.7,
    borderColor: 'gray',
    borderWidth: 1,
  }
})


function mapDispatchToProps(dispatch) {
  return {
    getUsername: (username) => dispatch({type: "GET_USERNAME", payload: username})
  }
}

export default connect(null, mapDispatchToProps)(SignInScreen);
