import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import AppHeader from '../components/AppHeader';

export default class MyScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />

        <View style={styles.container}>
          <Text style={{ color: '#FFF', fontSize: 15 }}> Já que entrou, me segue no Instagram :) </Text>
          <br />
          <Text style={{ color: '#A7D95E', fontStyle: 'italic', fontSize: 16 }} onPress={() => { Linking.openURL('https://www.instagram.com/luuanamendes/') }}> @luuanamendes </Text>
        </View>

        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{ fontSize: 14, color: '#000' }}> Voltar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  buttons: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
    width: 80,
    height: 30
  }
});