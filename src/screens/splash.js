import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Logo} from '../assets';
import {Colors} from '../utils';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.logo}>
      <StatusBar animated={true} backgroundColor={Colors.orange} />
      <Logo />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    paddingHorizontal: moderateScale(50),
    height: moderateScale(50),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
  },
});
export default Splash;
