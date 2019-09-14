import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

import MainScreen from "../screens/users/MainScreen";

const UserNavigator = createStackNavigator({
  MainScreen: MainScreen
});

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  }

});

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  User: UserNavigator
});

export default createAppContainer(MainNavigator)

