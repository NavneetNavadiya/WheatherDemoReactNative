import {Dimensions, Platform, StyleSheet} from 'react-native';

import {Colors} from '../constants/colors';
import normalize from './normalize';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const shadowBox = {
  shadowColor: 'black',
  shadowOpacity: 0.1232,
  shadowOffset: {width: 10, height: 10},
  shadowRadius: normalize(15, 'height'),
  elevation: 5,
  backgroundColor: 'white',
  borderRadius: normalize(25, 'height'),
};

const styles = StyleSheet.create({
  // All Texts
  // Main Container
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading40Text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.primaryColor,
  },
  heading18Text: {
    fontSize: 18,
    color: Colors.backgroundColor,
    fontWeight: '500',
  },
  header: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(50, 'height'),
    width: DEVICE_WIDTH,
    flexDirection: 'row',
  },
  headerImg: {
    tintColor: Colors.backgroundColor,
    height: normalize(28, 'height'),
    width: normalize(28, 'height'),
  },
  headerTouch: {
    position: 'absolute',
    left: normalize(15, 'width'),
  },
  roundIcon: {
    height: normalize(7, 'height'),
    width: normalize(9, 'width'),
    bottom: normalize(12, 'height'),
    right: normalize(2, 'width'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading25Text: {
    fontSize: 30,
    // fontWeight: 'bold',
  },

  heading20Text: {
    fontSize: 20,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundIconMap: {
    height: normalize(6, 'height'),
    width: normalize(6, 'width'),
    bottom: normalize(8, 'height'),
    right: normalize(2, 'width'),
  },

  heading18MapText: {
    fontSize: 18,
  },
});

export default styles;
