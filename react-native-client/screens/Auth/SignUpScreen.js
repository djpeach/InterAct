import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Picker,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";

import RNPickerSelect from "react-native-picker-select";
import {createProfile} from '../../graphql'
import {flowRight as compose} from 'lodash'
import {graphql} from 'react-apollo'

import firebase from "firebase";

class SignUpScreen extends Component {
  state = {
    first: "",
    last: "",
    accountType: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onSubmit = e => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        return this.props.createProfile({
          variables: {
            _id: firebase.auth().currentUser.uid,
            firstName: this.state.first,
            lastName: this.state.last,
            accountType: this.state.accountType,
            phoneNumber: this.state.phone,
            email: this.state.email
          }
        })
      }).then(() => {
        this.props.navigation.replace("MainScreen");
      })
      .catch(err => {
        console.log(err);
      });

    this.props.navigation.navigate({
      routeName: "SignUp"
    });
  };

  render() {
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
              placeholder="First Name"
              style={styles.input}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ first: value });
              }}
            />
            <TextInput
              placeholder="Last Name"
              style={{ ...styles.input, paddingTop: 40 }}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ last: value });
              }}
            />
            <View style={styles.picker}>
              <RNPickerSelect
                placeholder={{ label: "Account Type" }}
                onValueChange={value => this.setState({ accountType: value })}
                items={[
                  { label: "EMS", value: "ems" },
                  { label: "Fire fighter", value: "fire" },
                  {
                    label: "Health Care Professionals",
                    value: "health"
                  },
                  { label: "Law Enforcement", value: "law" },
                  {
                    label: "Community Member",
                    value: "public"
                  }
                ]}
              />
            </View>
            <TextInput
              placeholder="Phone Number"
              style={{ ...styles.input, paddingTop: 40 }}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ phone: value });
              }}
            />
            <TextInput
              placeholder="Email"
              style={{ ...styles.input, paddingTop: 40 }}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ email: value });
              }}
            />
            <TextInput
              placeholder="Password"
              style={{ ...styles.input, paddingTop: 40 }}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ password: value });
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              style={{ ...styles.input, paddingTop: 40 }}
              placeholderTextColor="#707070"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => {
                this.setState({ confirmPassword: value });
              }}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Create Account"
                  color="black"
                  onPress={this.onSubmit}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

SignUpScreen.navigationOptions = {
  headerTitle: "Sign Up"
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
    width: "65%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black"
  },
  picker: {
    marginTop: 30,
    alignItems: "center",
    width: "60%",
    borderColor: "black",
    borderBottomWidth: 1,
    fontSize: 20,
    color: "#707070"
  }
});

export default compose(
  graphql(createProfile, {name: 'createProfile'})
)(SignUpScreen)
