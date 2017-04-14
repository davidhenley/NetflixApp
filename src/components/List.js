import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';

import { shows_first, shows_second } from '../data';

class List extends Component {
  _renderItem(item) {
    return (
      <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }} />
    );
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>My List</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this._renderItem(item)}
            data={shows_first}
          />
        </View>
        <View>
          <Text style={styles.text}>Top Picks For You</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this._renderItem(item)}
            data={shows_second}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    margin: 5,
    marginLeft: 10
  }
});

export default List;
