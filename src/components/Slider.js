import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width,
    flex: 1,
  }
});

const Slide = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.uri} />
    </View>
  );
};

export default class Slider extends Component {
  state = {
    imagesSlider: [
      require('../images/1.jpg'),
      require('../images/2.jpg'),
      require('../images/3.jpg'),
    ]
  }

  render() {
    return (
      <View>
        <Swiper
          autoplay
          height={240}
        >
        {this.state.imagesSlider.map((item, i) => {
          return <Slide uri={item} key={i} />;
        })}
        </Swiper>
      </View>
    );
  }
}
