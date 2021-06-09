import {Dimensions, Platform, StyleSheet} from 'react-native';

import {Colors} from '../../constants/colors';
import normalize from '../../styles/normalize';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // All Texts
  // Main Container
  listView: {
    height: normalize(70, 'height'),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    width: DEVICE_WIDTH,
    borderColor: Colors.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15, 'height'),
    alignItems: 'center',
  },
  heading25Text: {
    fontSize: 25,
    fontWeight: '600',
  },
  heading18Text: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  heading20Text: {
    fontSize: 20,
    fontWeight: '600',
  },
  heading14Text: {
    fontSize: 14,
    marginTop: normalize(10, 'height'),
  },
  roundIcon: {
    height: normalize(8, 'height'),
    width: normalize(8, 'width'),
    bottom: normalize(12, 'height'),
    right: normalize(2, 'width'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
