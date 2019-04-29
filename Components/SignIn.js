import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class SignIn extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
        }
    }
    // Check Email 
    checkEmail() {
        if (this.state.email === null || this.state.email === '') {
            this.setState({
                emailError: 'Email is Empty',
            })

        } else {
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === false) {
                this.setState({
                    emailError: 'Invalid email address!',
                })
                return false;
            } else {
                return true;
            }
        }
    }
    // Check Password  
    checkPassword() {
        if (this.state.password === null || this.state.password === '') {
            this.setState({
                passwordError: 'password is Empty',
            })
            return false;
        } else {
            return true;
        }
    }
    // login function
    login() {
        this.setState({
            emailError: null,
            passwordError: null,
        })

        if (this.checkEmail() && this.checkPassword()) {
            console.log('login sucessful');
            alert('Sucessfully LogedIn!');
            return true;
        } else {
            console.log('login failed');
            return false;
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.inputField} onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}></TextInput>
                    </View>
                    {this.state.emailError ? <Text style={styles.errors} >{this.state.emailError}</Text> : null}
                    <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput secureTextEntry style={styles.inputField} onChangeText={(text) => this.setState({ password: text })} value={this.state.password}></TextInput>
                    </View>
                    {this.state.passwordError ? <Text style={styles.errors} >{this.state.passwordError}</Text> : null}
                    <View style={styles.button}>
                        <Button
                            title='Sign-in'
                            onPress={() => { this.login() }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    form: {
        borderWidth: 2,
        width: '95%',
    },
    formField: {
        flexDirection: 'row',
    },
    label: {
        width: '30%',
        fontSize: 20,
        margin: 5,
    },
    inputField: {
        borderWidth: 2,
        width: '60%',
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        fontSize: 20,
        width: 200,
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 150,
    },
    errors: {
        color: 'red',
        fontSize: 20,
        margin: 5,
    }
})