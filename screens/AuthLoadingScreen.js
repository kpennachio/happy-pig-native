import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import TestComponent from '../components/TestComponent'

export default class AuthLoadingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.navigateAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  navigateAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // setTimeout(() => {this.props.navigation.navigate(userToken ? 'Main' : 'Auth')}, 3000);

    this.props.navigation.navigate(userToken ? 'Main' : 'Auth')
  };

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
