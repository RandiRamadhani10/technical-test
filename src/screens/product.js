import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Header} from '../components';
import {useQuery} from '@tanstack/react-query';
import {getAllProduct} from '../api';
import {CardAll} from '../components';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../utils';

const Screen = Dimensions.get('screen');
const Product = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['allProduct'],
    queryFn: getAllProduct,
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar animated={true} backgroundColor={Colors.orange} />
      <Header title="Our Products" />
      {isLoading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={Colors.orangeDark} />
        </View>
      )}
      <SafeAreaView style={{flex: 1, padding: moderateScale(12)}}>
        <ScrollView>
          <View style={styles.container}>
            {console.log(data)}
            {data?.products &&
              data.products.map(data => {
                return <CardAll data={data} />;
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  indicator: {
    width: Screen.width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96969657',
  },
});
export default Product;
