import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('GameScreen')}>
            <Text> Previsão </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HoroscopeScreen')}>
            <Text> Horóscopo de hoje </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('MyScreen')}>
            <Text> Não entre </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('CounterScreen')}>
            <Text> Avalie-nos </Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: '#686868', textAlign: 'center', margin: 20, fontStyle: 'italic' }}> Developed by Lua. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  buttons: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
    width: 200,
    height: 50
  }
});
