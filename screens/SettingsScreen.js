import React from 'react';
import { Text, ScrollView, AsyncStorage } from 'react-native'
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  handleLogout = () => {
    console.log("clicked logout")
    AsyncStorage.removeItem('jwt')
    this.props.navigation.navigate('Auth')
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
        <Text>Testing</Text>
        <Text onPress={this.handleLogout}>
          Logout
        </Text>
      </ScrollView>
    )
  }
}
