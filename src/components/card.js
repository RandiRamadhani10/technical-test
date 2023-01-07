import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Gap from './gap';
import {Colors} from '../utils';
const screen = Dimensions.get('screen');
const data = 'LAMPU TEMBAK SOROT ddddddssss ssdsd';

const Card = ({data, bestSeller = false}) => {
  const newTitle = data.title.substring(0, 14) + '...';
  const discount = (price, percentage) => {
    const newPrice = price * 15607.3;
    const disc = (percentage * newPrice) / 100;
    return Math.ceil(newPrice - disc);
  };
  const disc = discount(data.price, data.discountPercentage);

  const rupiah = number => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
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
        <Text style={styles.discountPrice}>{rupiah(disc)}</Text>
        <Text style={styles.price}>{rupiah(data.price * 15607.3)}</Text>
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
    width: screen.width * 0.35,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    marginRight: moderateScale(20),
  },
  img: {
    width: screen.width * 0.35,
    height: screen.width * 0.35,
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
export default Card;
