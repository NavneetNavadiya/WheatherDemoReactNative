/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../styles/index';

const NavBar = props => {
  return (
    <View style={GlobalStyles.header}>
      {props.backEnabled && (
        <TouchableOpacity
          onPress={props.backPress}
          style={GlobalStyles.headerTouch}>
          <Image
            source={require('../assets/icons/back.png')}
            style={GlobalStyles.headerImg}></Image>
        </TouchableOpacity>
      )}
      <Text style={GlobalStyles.heading18Text}>WeatherApp</Text>
    </View>
  );
};

export default NavBar;
