import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Image from 'react-native-scalable-image';
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD3yhbWUSflgRV0MYV4X2eyXw9-SXDZbkw",
    authDomain: "mandiapp83-f3c73.firebaseapp.com",
    databaseURL: "https://mandiapp83-f3c73-default-rtdb.firebaseio.com",
    projectId: "mandiapp83-f3c73",
    storageBucket: "mandiapp83-f3c73.appspot.com",
    messagingSenderId: "285979018863",
    appId: "1:285979018863:web:48f8ffcd69b3cae206ef9a",
    measurementId: "G-YQX97HV61C"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
export default class SignUp extends React.Component {
    state = {
        Username: '',
        Password: '',
        ConfirmPassword: '',
        Email: ''
    }
    async Validate() {
        console.log("Data Added Succesfully");
        if (this.state.Username == "") {
            alert("Kindly Enter A Valid Username")
        } else {
            if (this.state.Password == "") {
                alert("Kindly Enter A VAlid Password")
            } else {
                if (this.state.ConfirmPassword == "") {
                    alert("Kindly Confirm Your Password")
                } else {
                    if (this.state.Email == "") {
                        alert("Kindly enter a Valid Email")
                    } else {

                        await firebase.
                            database().
                            ref("Users").
                            push().
                            set({
                                Username: this.state.Username,
                                Password: this.state.Password,
                                Email: this.state.Email,
                            })
                        alert("You are successfully registerd , Now you can try Login !!")
                        this.setState({ Username: "", Password: '', Email: '', ConfirmPassword: "" })

                    }
                }
            }
        }
    }


    render() {
        const NavigateToLogin = async () => {
            this.props.navigation.navigate('Login')
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar backgroundColor="black" />
                <View >
                    <Image width={200} source={{ uri: 'https://cdn.bitbrothers.in/wp-content/uploads/2020/11/10172738/bitbrothers-logo-text.png' }} />
                    <View>

                        <TextInput value={this.state.Username} onChangeText={(text) => { this.setState({ Username: text }) }} placeholder="Username" placeholderTextColor="#b2b2b2" editable={true} style={{ fontSize: 16, marginTop: 20, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>

                        <TextInput value={this.state.Password} onChangeText={(text) => { this.setState({ Password: text }) }} placeholder="Password" placeholderTextColor="#b2b2b2" secureTextEntry editable={true} style={{ marginTop: 20, fontSize: 16, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>
                        <TextInput value={this.state.ConfirmPassword} onChangeText={(text) => { this.setState({ ConfirmPassword: text }) }} placeholder="Confirm Your Password" placeholderTextColor="#b2b2b2" secureTextEntry editable={true} style={{ marginTop: 20, fontSize: 16, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>
                        <TextInput value={this.state.Email} onChangeText={(text) => { this.setState({ Email: text }) }} placeholder="Email" placeholderTextColor="#b2b2b2" editable={true} style={{ marginTop: 20, fontSize: 16, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>

                        <TouchableOpacity onPress={this.Validate.bind(this)} style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', backgroundColor: 'black', color: "white", paddingVertical: 5, borderRadius: 18, marginHorizontal: 22 }}>Sign-Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ marginVertical: 5 }}>Already Registerd ?</Text>
                        <TouchableOpacity onPress={NavigateToLogin}>
                            <Text>Log-in Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({ LogoContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' } })