import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Gap from './gap';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../utils';

const TabItem = ({title, isActive, onPress, show = false}) => {
  const Icon = () => {
    switch (title) {
      case 'Home':
        return isActive ? (
          <Icons name="home" size={30} color={Colors.orange} />
        ) : (
          <Icons name="home" size={30} color={Colors.orangeLight} />
        );
      case 'Product':
        return isActive ? (
          <Icons name="view-list" size={30} color={Colors.orange} />
        ) : (
          <Icons name="view-list" size={30} color={Colors.orangeLight} />
        );
      case 'About':
        return isActive ? (
          <Icons name="information" size={30} color={Colors.orange} />
        ) : (
          <Icons name="information" size={30} color={Colors.orangeLight} />
        );

      default:
        return <IcHomeActive />;
    }
  };
  const titleShow = () => {
    let displayTitle;

    switch (title) {
      case 'Home':
        displayTitle = 'Home';
        break;
      case 'Product':
        displayTitle = 'Product';
        break;
      case 'About':
        displayTitle = 'About';
        break;
      default:
        displayTitle = 'Other';
        break;
    }

    return displayTitle;
  };
  return (
    <>
      {show && showCategory()}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPress}
        testID="tab-item">
        <Icon />
        <Gap height={4} />
        <Text style={styles.title(isActive)}>{titleShow()}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: isActive => ({
    // fontFamily: isActive ? Fonts.PRIMARY.BOLD : Fonts.PRIMARY.REGULAR,
    fontSize: 10,
    color: isActive ? Colors.orangeDark : Colors.orangeDark,
    fontWeight: isActive ? 'bold' : 'regular',
  }),
});

export default TabItem;
