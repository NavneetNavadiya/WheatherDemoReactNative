/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useFocusEffect} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {useCallback} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from '../../constants/colors';
import GlobalStyles from '../../styles';

const SplashScreen = props => {
  const navigateToHome = () => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 2000);
  };

  useEffect(() => {
    navigateToHome();
  }, []);

  useFocusEffect(
    useCallback(() => {
      navigateToHome();
    }, []),
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.heading40Text}>WeatherApp</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
