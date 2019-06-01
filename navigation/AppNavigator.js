import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './SignInScreen';


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainTabNavigator,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }

));

// You could add another route here for authentication.
// Read more at https://reactnavigation.org/docs/en/auth-flow.html
