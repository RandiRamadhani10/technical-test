import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Logo} from '../assets';
import {Colors} from '../utils';
const Header = ({title = '', backgroundColor = '#ffffff00', logo = false}) => {
  console.log(Logo);
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={[styles.title]}>
        {logo ? (
          <View
            style={{
              height: moderateScale(15),
              width: '100%',
            }}>
            <Logo />
          </View>
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingVertical: moderateScale(20),
    elevation: 1,
  },
  title: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: moderateScale(18),
    color: Colors.orangeDark,
  },
});

export default Header;
