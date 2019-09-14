import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

import MainScreen from "../screens/users/MainScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

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

const CombinedNav = createSwitchNavigator({
  AuthNav: AuthNavigator,
  DrawerNav: DrawerNav
});

export default createAppContainer(CombinedNav);
