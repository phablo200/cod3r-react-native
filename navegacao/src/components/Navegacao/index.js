import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

const Navegacao = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navegacao;
