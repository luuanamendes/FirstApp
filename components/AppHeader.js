import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.paragraph}> App da Lua </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 4,
    backgroundColor: '#C4164B',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
});

