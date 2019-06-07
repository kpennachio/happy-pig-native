import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

export default class App extends React.Component {


  render() {
    return (
      <Provider store={createStore(reducer)}>
        <AppNavigator />
      </Provider>
    );
  }
}
