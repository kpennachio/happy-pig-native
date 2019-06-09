import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux'


import TestComponent from '../components/TestComponent'

class AuthLoadingScreen extends React.Component {

  constructor(props) {
    super(props);
    // this.navigateAsync();
  }

  componentDidMount() {
    AsyncStorage.getItem("jwt")
    .then(jwt => {
      this.autoLogin(jwt)
    })


  }

  autoLogin = (jwt) => {
    // auto login for app if jwt exists
    console.log(jwt);
		if (jwt){
			fetch(`http://localhost:3000/api/v1/auto_login`, {
				headers: {
					"Authorization": jwt
				}
			})
				.then(res => res.json())
				.then((response) => {
					if (response.errors) {
            console.log(response.errors)
            this.props.navigation.navigate('Auth');
					} else {
            console.log("testing", response);
            this.props.getUsername(response.username);
            this.props.navigation.navigate('Main');
					}
				})
		}
    else {
      this.props.navigation.navigate('Auth');
    }

  }

  // Fetch the token from storage then navigate to our appropriate place
  // navigateAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('jwt');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // setTimeout(() => {this.props.navigation.navigate(userToken ? 'Main' : 'Auth')}, 3000);
    //
    // this.props.navigation.navigate(userToken ? 'Main' : 'Auth')

  // };

  // Render any loading content that you like here
  render() {
    console.log("auth screen");
    return (
      <View>
        <TestComponent />
        <ActivityIndicator size="large" color="#0000ff" />
        <TestComponent />
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getUsername: (username) => dispatch({type: "GET_USERNAME", payload: username})
  }
}

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
