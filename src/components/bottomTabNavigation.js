import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TabItem from './tabItem';

const BottomTabNavigation = ({navigation}) => {
  const [focus, setFocus] = useState({status: [true, false, false]});
  const [onIndex, setOnIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [before, setBefore] = useState(0);

  const onPress = (index, nav) => {
    setOnIndex(index);
    focus.status[onIndex] = false;
    focus.status[index] = true;
    navigation.navigate(nav);
    setFocus(focus);
  };

  return (
    <View style={styles.container}>
      <TabItem
        title={'Home'}
        isActive={focus.status[0]}
        onPress={() => {
          onPress(0, 'Home');
        }}
      />
      <TabItem
        title={'Product'}
        isActive={focus.status[1]}
        onPress={() => {
          onPress(1, 'Product');
        }}
      />
      <TabItem
        title={'About'}
        isActive={focus.status[2]}
        onPress={() => {
          onPress(2, 'About');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    justifyContent: 'space-around',
    elevation: 12,
    shadowColor: 'blue',
    alignItems: 'flex-end',
  },
});
export default BottomTabNavigation;
