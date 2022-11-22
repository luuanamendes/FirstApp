import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import MyScreen from './screens/MyScreen';
import CounterScreen from './screens/CounterScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  GameScreen: GameScreen,
  HoroscopeScreen: HoroscopeScreen,
  MyScreen: MyScreen,
  CounterScreen: CounterScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 8
  }
});
