import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import List from './components/List';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
