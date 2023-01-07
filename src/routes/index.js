import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Splash} from '../screens';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Routes;
