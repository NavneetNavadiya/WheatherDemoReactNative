import {Dimensions, Platform, StyleSheet} from 'react-native';

import {Colors} from '../../constants/colors';
import normalize from '../../styles/normalize';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // All Texts
  // Main Container
  bottomView: {
    width: DEVICE_WIDTH,
    height: normalize(200, 'height'),
    position: 'absolute',
    backgroundColor: Colors.backgroundColor,
    bottom: 0,
    padding: normalize(20, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    // bottom: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  pinImage: {
    height: normalize(50, 'height'),
    width: normalize(50, 'width'),
    tintColor: Colors.pinColor,
  },
  heading25Text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  heading18Text: {
    fontSize: 18,
    // fontWeight: '600',
  },
  heading18VerticalText: {
    fontSize: 18,
    marginVertical: normalize(10, 'height'),
  },
  heading20Text: {
    fontSize: 20,
    fontWeight: '600',
  },
  heading14Text: {
    fontSize: 14,
    marginTop: normalize(10, 'height'),
  },
  cloudImage: {
    height: normalize(60, 'height'),
    width: normalize(85, 'width'),
  },
});

export default styles;
