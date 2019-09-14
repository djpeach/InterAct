import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ProfileScreen from "../screens/users/ProfileScreen";
import QuickPlayScreen from "../screens/users/QuickPlayScreen";

import MainScreen from "../screens/users/MainScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

import firebase from "firebase";

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

const ProfileNav = createStackNavigator({
  ProfileNav: ProfileScreen
});

const QuickNav = createStackNavigator({
  QuickNav: QuickPlayScreen
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
  },
  QuickScreen: {
    screen: QuickNav,
    navigationOptions: {
      drawerLabel: "Quick Play"
    }
  },
  ProfileScreen: {
    screen: ProfileNav,
    navigationOptions: {
      drawerLabel: "Profile"
    }
  }
});

const CombinedNav = createSwitchNavigator({
  AuthNav: AuthNavigator,
  DrawerNav: DrawerNav
});

export default createAppContainer(CombinedNav);
