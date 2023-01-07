import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Swipers from 'react-native-swiper';

const screen = Dimensions.get('screen');

const Swiper = () => {
  return (
    <View style={styles.container}>
      <Swipers
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        showsPagination={false}>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={require('../assets/gambar1.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={require('../assets/gambar2.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={require('../assets/gambar3.jpg')}
          />
        </View>
      </Swipers>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  img: {
    width: screen.width * 0.5,
    height: '100%',
    backgroundColor: 'red',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 200,
    borderColor: 'gray',
    borderBottomWidth: moderateScale(2),
    borderTopWidth: moderateScale(1),
  },
});
export default Swiper;
