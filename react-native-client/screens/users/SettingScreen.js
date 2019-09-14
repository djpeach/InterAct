import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const LoginScreen = props => {
    return (
        <View style={styles.settings}>
              <Text style={styles.settingsFont}>Change Password</Text>
              <Text style={styles.settingsFont}>Change E-mail</Text>
              <Text style={styles.settingsFont}>Change Name</Text>
              <Text style={styles.settingsFont}>Change Profile Picture</Text>
        </View>
    );
  };
  
  LoginScreen.navigationOptions = {
    headerTitle: "Settings"
  };
  
  const styles = StyleSheet.create({
      settings:{
          flex: 1,
          justifyContent: "center",
          paddingLeft: 40,
      },
      settingsFont:{
          fontFamily: "San Francisco",
          fontSize: 20,
          margin: 20,
      },
  });

export default LoginScreen;
