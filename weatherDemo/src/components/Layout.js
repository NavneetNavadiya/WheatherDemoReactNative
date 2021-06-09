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
} from 'react-native';

const Layout = props => {
  let ViewStyle = {flex: 1, alignItems: 'center', ...props.style};
  return <SafeAreaView style={ViewStyle}>{props.children}</SafeAreaView>;
};

export default Layout;
