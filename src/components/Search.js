import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { shows_first, shows_second } from '../data';
const all_shows = [ ...shows_first, ...shows_second ];

const { width, height } = Dimensions.get('window');

class Search extends Component {
  state = {
    text: '',
    data: []
  };

  _filter(text) {
    let newData;
    if (text.length > 0) {
      newData = all_shows.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    } else newData = [];
    this.setState({
      data: newData,
      text
    })
  }

  _deleteData() {
    this.setState({ text: '', data: [] });
  }

  _renderItem(item) {
    return (
      <Image key={item.key} style={styles.image} source={{ uri: item.image }} />
    );
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="search" color="grey" size={18} style={styles.searchIcon} />
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this._filter(text)}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="grey"
            keyboardAppearance="dark"
            autoFocus
          />
          {this.state.text.length > 0 &&
            <TouchableWithoutFeedback onPress={() => this._deleteData()}>
              <Icon name="times-circle" color="gray" size={18} style={styles.iconInputClose}/>
            </TouchableWithoutFeedback>
          }
          <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => this.props.nav.pop()}>
            <View style={styles.containerButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <FlatList
            style={{ marginHorizontal: 5 }}
            numColumns={3}
            data={this.state.data}
            renderItem={({item}) => this._renderItem(item)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header: {
    height: 40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    marginTop: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: 5,
    left: 17,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  input: {
    width: width * .75,
    height: 30,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3
  },
  iconInputClose: {
    position: 'absolute',
    top: 5,
    right: 90,
    backgroundColor: 'transparent',
    zIndex: 1
  },
  cancelButtonText: {
    color: 'white',
  },
  containerButton: {
    position: 'relative',
    left: 5,
    top: -2
  },
  image: {
    marginRight: 5,
    width: 118,
    height: 170
  }
});

export default Search;
