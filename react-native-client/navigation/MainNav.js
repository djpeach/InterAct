import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ProfileScreen from "../screens/users/ProfileScreen";
import QuickPlayScreen from "../screens/users/QuickPlayScreen";

import MainScreen from "../screens/users/MainScreen";
import SplashScreen from "../screens/SplashScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import MessagesScreen from "../screens/users/MessagesScreen";
import SettingScreen from "../screens/users/SettingScreen";
import FeedbackScreen from "../screens/users/FeedbackScreen";

import GameScreen from "../screens/users/GameScreen";

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
  QuickNav: QuickPlayScreen,
  GameScreenNav: {
    screen: GameScreen
  }
});

const MsgNav = createStackNavigator({
  MsgNav: MessagesScreen
});

const SettingsNav = createStackNavigator({
  SettingsNav: SettingScreen
});

const MainScreenNav = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

const FeedNav = createStackNavigator({
  FeedScreen: FeedbackScreen
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
  MessagesScreen: {
    screen: MsgNav,
    navigationOptions: {
      drawerLabel: "Messages"
    }
  },
  ProfileScreen: {
    screen: ProfileNav,
    navigationOptions: {
      drawerLabel: "Profile"
    }
  },
  SettingScreen: {
    screen: SettingsNav,
    navigationOptions: {
      drawerLabel: "Settings"
    }
  },
  FeedScreen: {
    screen: FeedNav,
    navigationOptions: {
      drawerLabel: "Feedback"
    }
  }
});

const CombinedNav = createSwitchNavigator({
  SplashScreen: SplashScreen,
  DrawerNav: DrawerNav,
  AuthNav: AuthNavigator
});

export default createAppContainer(CombinedNav);
