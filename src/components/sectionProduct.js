import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getProduct} from '../api';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../utils';
import Card from './card';
const SectionProduct = ({
  title = 'product',
  categories,
  queryKey,
  bestSeller = false,
}) => {
  const {data, isLoading} = useQuery({
    queryKey: [queryKey],
    queryFn: () => getProduct(categories),
  });
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {isLoading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={Colors.orangeDark} />
        </View>
      )}
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          {data?.products &&
            data.products.map(data => {
              return <Card data={data} bestSeller={bestSeller} />;
            })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: Colors.orangeDark,
    borderBottomColor: Colors.orangeDark,
    borderBottomWidth: moderateScale(2),
  },
  card: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
  },
  indicator: {
    flex: 1,
    height: moderateScale(150),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96969657',
    margin: moderateScale(20),
    borderRadius: moderateScale(20),
  },
});
export default SectionProduct;
