import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SignIn extends React.Component {
    constructor(Props){
        super(Props);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Sign IN !</Text>
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
})