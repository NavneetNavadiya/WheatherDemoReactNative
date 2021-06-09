import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import normalize from '../styles/normalize';
import {Colors} from '../constants/colors';

export default function LoadModal(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.loaderView}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(1,1,1,0.5)',
    position: 'absolute',
  },

  loaderView: {
    height: normalize(80, 'height'),
    width: normalize(80, 'width'),
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
