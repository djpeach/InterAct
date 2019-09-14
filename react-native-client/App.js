import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainNav from "./navigation/MainNav";
import ProfileScreen from "./screens/users/ProfileScreen";
import SettingScreen from "./screens/users/SettingScreen";
import QuickPlayScreen from "./screens/users/QuickPlayScreen"

export default function App() {
  return <QuickPlayScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
