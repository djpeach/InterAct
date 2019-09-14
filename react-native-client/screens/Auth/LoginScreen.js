import React, { useState } from "react";

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

import firebase from "firebase";

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate("MainScreen");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <View style={styles.login}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#707070"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <TextInput
            placeholder="Password"
            style={{ ...styles.input, paddingTop: 40 }}
            placeholderTextColor="#707070"
            onChangeText={value => {
              setPassword(value);
            }}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Login" color="white" onPress={onLogin} />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Sign Up"
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "SignUp"
                  });
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: "Login"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  input: {
    width: "60%",
    borderBottomWidth: 1,
    borderColor: "black",
    fontSize: 25
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  button: {
    marginTop: 30,
    marginHorizontal: 10,
    width: 100,
    backgroundColor: "#1492E6",
    borderRadius: 20
  },
  buttonStyle: {
    marginTop: 30,
    marginHorizontal: 10,
    width: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20
  }
});

export default LoginScreen;
