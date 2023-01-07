import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Gap from './gap';
import {Colors} from '../utils';
const screen = Dimensions.get('screen');
const data = 'LAMPU TEMBAK SOROT ddddddssss ssdsd';

const CardAll = ({data, bestSeller = false}) => {
  const newTitle = data.title.substring(0, 14) + '...';
  const discount = (price, percentage) => {
    const disc = (percentage * price) / 100;
    return Math.ceil(price - disc);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: data.thumbnail,
        }}
      />
      <View style={styles.discount}>
        <Text style={styles.textDiscount}>
          Discount {Math.ceil(data.discountPercentage)}%
        </Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{newTitle}</Text>
        <Gap height={5} />
        <Text style={styles.discountPrice}>
          Rp {discount(data.price, data.discountPercentage)}0.000
        </Text>
        <Text style={styles.price}>Rp {data.price}0.000</Text>
      </View>
      {bestSeller && (
        <View style={styles.popular}>
          <Text style={styles.textPopular}>Best Seller</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screen.width * 0.45,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    marginBottom: moderateScale(20),
  },
  img: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },

  detail: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  discountPrice: {
    fontWeight: 'bold',
    color: Colors.red,
  },
  price: {
    color: 'black',
    textDecorationLine: 'line-through',
    fontSize: moderateScale(10),
    color: 'gray',
  },
  title: {
    color: 'black',
  },
  discount: {
    backgroundColor: Colors.orangeDark,
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    borderBottomRightRadius: moderateScale(100),
  },
  textDiscount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(10),
  },
  popular: {
    backgroundColor: Colors.red,
    paddingVertical: moderateScale(4),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  textPopular: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(12),
  },
});
export default CardAll;
