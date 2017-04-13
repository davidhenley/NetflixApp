import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           barStyle="light-content"
         />
        <Header />
        <Slider />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
