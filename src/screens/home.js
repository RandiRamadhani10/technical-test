import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Header, Swiper, Gap, SectionProduct} from '../components';
import {Categories} from '../utils';
import {Colors} from '../utils';
const Home = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={Colors.orange} />
      <View style={styles.container}>
        <Header logo={true} />
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <Swiper />
            <Gap height={30} />
            <SectionProduct
              title="Best Product"
              categories={Categories.men}
              queryKey="menProduct"
              bestSeller={true}
            />
            <Gap height={10} />
            <SectionProduct
              title="Fashion"
              categories={Categories.woman}
              queryKey="FashionProduct"
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
export default Home;
