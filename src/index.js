import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  state = {
    isOpen: false
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  updateMenu(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <Header toggle={this.toggleMenu.bind(this)} />
          <ScrollView style={{ backgroundColor: 'black' }}>
            <Slider />
            <List />
          </ScrollView>
        </SideMenu>
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
