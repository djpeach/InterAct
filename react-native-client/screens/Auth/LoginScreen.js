import React from "react";
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

const LoginScreen = props => {
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
            placeholder="Username"
            style={styles.input}
            placeholderTextColor="#707070"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            placeholder="Password"
            style={{ ...styles.input, paddingTop: 40 }}
            placeholderTextColor="#707070"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Login" color="white" onPress={() => {}} />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Sign Up" onPress={() => {}} />
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
