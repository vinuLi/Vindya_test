import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput , Button } from 'react-native';

export default class SignIn extends React.Component {
    constructor(Props){
        super(Props);
        this.state = {
            email : '',
            password : '',
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.form}>
            <View style = {styles.formField}>
            <Text style ={styles.label}>Email</Text>
            <TextInput style={styles.inputField} onChangeText={(text) => this.setState({ email: text })}
             value={this.state.email}></TextInput>
            </View>
            <View style = {styles.formField}>
            <Text style ={styles.label}>Password</Text>
            <TextInput secureTextEntry style={styles.inputField} onChangeText={(text) => this.setState({password : text})} value={this.state.password}></TextInput>
            </View>
            <View style={styles.button}>
                <Button
                 title = 'Sign-in'
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
      form :{
        borderWidth : 2 ,
        width : '95%',  
      },
      formField: {
          flexDirection: 'row',
      },
      label : {
          width : '30%',
          fontSize: 20,
          margin: 5,
      },
      inputField:{
        borderWidth : 2 ,
        width : '60%', 
        marginTop : 5,
        marginBottom : 5,
      },
      button : {
          fontSize: 20,
          width : 200,
          borderWidth : 2 ,
          marginTop : 5,
          marginBottom : 5,
          marginLeft : 150,
      }
})