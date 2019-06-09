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
    message: "",
  }

  // componentDidMount() {
  //   const jwt = AsyncStorage.getItem('jwt')
  //   console.log("auto login is happening")
  //
  //   // auto login for app if jwt exists
	// 	if (jwt){
	// 		fetch(`http://localhost:3000/api/v1/auto_login`, {
	// 			headers: {
	// 				"Authorization": jwt
	// 			}
	// 		})
	// 			.then(res => res.json())
	// 			.then((response) => {
	// 				if (response.error) {
  //           console.log(response.error)
	// 				} else {
  //           console.log("testing", response.user);
  //           this.props.getUsername(response.user.username);
  //           this.props.navigation.navigate('Main');
	// 				}
	// 			})
	// 	}
  // }

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
        this.props.getUsername(response.user.username);
        this.props.navigation.navigate('Main');
        }
    })
  }

  nextFieldFocus = () => {
    this.field2.focus();
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
              returnKeyType="next"
              onSubmitEditing={this.nextFieldFocus}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref={input => { this.field2 = input }}
              placeholder="Password"
              label="Password"
              name="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.text}
              returnKeyType="go"
              onSubmitEditing={this.login}
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
    paddingLeft: 6,
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
