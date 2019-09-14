import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MainNav from "./navigation/MainNav";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbOKr-PUgT89WAOffZX3dUy4ATAthmSPw",
  authDomain: "interact-d6d3c.firebaseapp.com",
  databaseURL: "https://interact-d6d3c.firebaseio.com",
  projectId: "interact-d6d3c",
  storageBucket: "",
  messagingSenderId: "559797418068",
  appId: "1:559797418068:web:1e72331c035b8c63c795c1"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <MainNav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
