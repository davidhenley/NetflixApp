import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
      <Icon name="bars" color="white" size={25} />
    </TouchableWithoutFeedback>
    <Image style={styles.logo} source={require('../images/logo.png')} />
    <TouchableWithoutFeedback onPress={() => props.nav.push({ ident: 'Search' })}>
      <Icon name="search" color="white" size={25} />
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  }
});

export default Header;
