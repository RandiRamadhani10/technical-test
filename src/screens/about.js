import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../utils';
import {Logo} from '../assets';
import {moderateScale} from 'react-native-size-matters';
import {Gap} from '../components';

const About = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors.orange} />
      <View style={styles.logo}>
        <Logo />
      </View>
      <Gap height={10} />
      <Text style={styles.text}>Copyright © 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange,
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  logo: {
    paddingHorizontal: moderateScale(50),
    height: moderateScale(50),
  },
  text: {
    fontSize: moderateScale(15),
    color: 'black',
    alignSelf: 'center',
  },
});
export default About;
