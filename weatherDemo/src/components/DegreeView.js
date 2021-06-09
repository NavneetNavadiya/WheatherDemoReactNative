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
} from 'react-native';
import GlobalStyles from '../styles/index';
import normalize from '../styles/normalize';

const DegreeView = props => {
  let ViewStyle = {flex: 1, alignItems: 'center', ...props.style};
  return (
    <View style={GlobalStyles.row}>
      <Text
        style={
          props.inMap
            ? GlobalStyles.heading18MapText
            : GlobalStyles.heading25Text
        }>
        {Number(props.number - 273.15).toFixed(0)}
      </Text>
      <Image
        source={require('../assets/icons/circle.png')}
        style={
          props.inMap ? GlobalStyles.roundIconMap : GlobalStyles.roundIcon
        }></Image>
      <Text
        style={[
          props.inMap
            ? GlobalStyles.heading18MapText
            : GlobalStyles.heading20Text,
          {top: props.inMap ? undefined : normalize(1.5, 'height')},
        ]}>
        C
      </Text>
    </View>
  );
};

export default DegreeView;
