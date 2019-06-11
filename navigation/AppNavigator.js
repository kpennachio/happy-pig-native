import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import NewAnimalScreen from '../screens/NewAnimalScreen';


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainTabNavigator,
    New: NewAnimalScreen,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }

));

// You could add another route here for authentication.
// Read more at https://reactnavigation.org/docs/en/auth-flow.html
