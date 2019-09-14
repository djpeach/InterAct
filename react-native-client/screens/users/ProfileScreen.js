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

//profile type variable
var profileType;

//manual assignment for profileType
profileType = "Police";

//checks profile type for name change
class ProfileName extends Component {
    render() {
        
        let accountName;
        if (profileType == "Police"){
            accountName = "Police"
        } else {
            accountName = "User"
        }

        return (
            <Text style={styles.profileFont}>{profileType} Name</Text>
        )
    }
}

//checks profile type for picture change
class ProfilePic extends Component {
    render() {
        
        if (profileType == "Police"){
            this.style = styles.profilePicPolice
        } else {
            this.style = styles.profilePic
        }

        return (
            <View style={this.style}/>
        )
    }
}

const LoginScreen = props => {
  return (
      <View style={styles.profile}>
            <ProfilePic/>
            <View name="Profile Text">
                <ProfileName/>
                <Text style={styles.profileFont}>Favorite Games</Text>
                <Text style={styles.profileFont}>Top Scores</Text>
                <Text style={styles.profileFont}>Played With</Text>
            </View>
            <View name="lastPlayedWithProfiles" style={styles.lastPlayedRow}>
                <View style={styles.profileLastPlayed}/>
                <View style={styles.profileLastPlayed}/>
                <View style={styles.profileLastPlayed}/>
            </View>
      </View>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: "Profile"
};

const styles = StyleSheet.create({
    profile:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    profileFont:{
        fontFamily: "San Francisco",
        fontSize: 20,
        margin: 20,
    },
    profilePic: {
        margin: 20,
        width: 200,
        height: 200,
        borderRadius: 200/2,
        backgroundColor: "grey",
    },
    profilePicPolice: {
        margin: 20,
        width: 200,
        height: 200,
        borderRadius: 200/2,
        backgroundColor: "grey",
        borderColor: "navy",
        borderWidth: 10,
    },
    profileLastPlayed: {
        flexDirection: "row",
        margin: 20,
        width: 75,
        height: 75,
        borderRadius: 100/2,
        backgroundColor: "pink",
    },
    lastPlayedRow: {
        flexDirection: "row",
    },
});

export default LoginScreen;
