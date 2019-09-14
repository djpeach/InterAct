import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

import MainScreen from "../screens/users/MainScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

import firebase from 'firebase'

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

const MainScreenNav = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

const DrawerNav = createDrawerNavigator({
  MainScreen: {
    screen: MainScreenNav,
    navigationOptions: {
      drawerLabel: "Home"
    }
  }
});

const CombinedNav = firebase.auth().currentUser ? createSwitchNavigator({
  DrawerNav: DrawerNav,
  AuthNav: AuthNavigator
}) : createSwitchNavigator({
  AuthNav: AuthNavigator,
  DrawerNav: DrawerNav
});

export default createAppContainer(CombinedNav);
