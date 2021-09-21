import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
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

export default class Login extends React.Component {
    state = {
        ModalShown: false,
        Username: '',
        Password: '',
    }
    render() {
        const Checkuser = async () => {
            const myitems = firebase.database().ref().child("Users");
            myitems.on("value", (datasnap) => {
    
                const regis = Object.values(datasnap.val())
                console.log(regis);
                const NumofRegistraton = Object.values(datasnap.val()).length
                var attempt = 0
                while (attempt < NumofRegistraton) {
                    if (regis[attempt].Username == this.state.Username) {
                        if (regis[attempt].Password == this.state.Password) {
                            alert("Succesfulll.......Login Attempt")
    
                        }
                        else {
                            alert("Wrong Password")
                        }
                        attempt = 99999999999999
                    } else {
                        alert("User DOes Not Exist")
                        attempt++;
                    }
                }
            });
        }
    
        const NavigateToSignup = async () => {
            this.props.navigation.navigate('SignUp')
        }

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <StatusBar backgroundColor="black" />
                <View>
                    <Image width={200} source={{ uri: 'https://cdn.bitbrothers.in/wp-content/uploads/2020/11/10172738/bitbrothers-logo-text.png' }} />
                    <View  >

                        <TextInput onChangeText={(text) => { this.setState({ Username: text }) }} placeholder="Username" placeholderTextColor="#b2b2b2" editable={true} style={{ fontSize: 16, marginVertical: 20, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>

                        <TextInput onChangeText={(text) => { this.setState({ Password: text }) }} placeholder="Password" placeholderTextColor="#b2b2b2" secureTextEntry editable={true} style={{ fontSize: 16, borderColor: '#b2b2b2', width: 210, borderWidth: 1, borderRadius: 14, paddingVertical: 4, paddingHorizontal: 7, fontWeight: 'bold' }}></TextInput>
                        <TouchableOpacity onPress={Checkuser} style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', backgroundColor: 'black', color: "white", paddingVertical: 5, borderRadius: 18, marginHorizontal: 22 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ marginVertical: 5 }}>New to our family ?</Text>
                        <TouchableOpacity onPress={NavigateToSignup}>
                            <Text>Sign-Up Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({ LogoContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' } })