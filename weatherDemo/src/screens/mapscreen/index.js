/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '../../constants/colors';
import {Layout, NavBar, DegreeView} from '../../components/index';
import BaseServices from '../../services/baseServices';
import styles from './styles';
import MapView, {
  Marker,
  Overlay,
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Polyline,
} from 'react-native-maps';
import GlobalStyles from '../../styles/index';

const MapScreen = props => {
  const maps = props.route.params.item;

  const getMapRegion = () => ({
    latitude: maps.coord.lat,
    longitude: maps.coord.lon,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  const mapRef = useRef(null);

  useEffect(() => {}, []);
  const goBack = () => props.navigation.goBack();

  const renderBottomView = () => {
    return (
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.heading25Text}>{maps.name}</Text>
          <View style={{marginTop: '10%'}}>
            <Text style={styles.heading18Text}>{maps.weather[0].main}</Text>

            <Text style={styles.heading18VerticalText}>
              Humidity: {maps.main.humidity}
            </Text>

            <Text style={styles.heading18Text}>
              Wind Speed: {maps.wind.speed}
            </Text>

            <View style={GlobalStyles.row}>
              <Text style={styles.heading18VerticalText}>Max. Temp.: </Text>
              <DegreeView inMap number={maps.main.temp_max} />
            </View>

            <View style={GlobalStyles.row}>
              <Text style={styles.heading18Text}>Min. Temp.: </Text>
              <DegreeView inMap number={maps.main.temp_min} />
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <DegreeView number={maps.main.temp} />
          <Image
            resizeMode="stretch"
            source={require('../../assets/icons/cloud.png')}
            style={styles.cloudImage}></Image>
        </View>
      </View>
    );
  };

  return (
    // <Layout>

    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={getMapRegion()}
        ref={mapRef}
        // zoomEnabled={true}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : ''}
        rotateEnabled={false}
        zoomEnabled={false}
        scrollEnabled={false}>
        <Marker
          coordinate={{
            latitude: maps.coord.lat,
            longitude: maps.coord.lon,
          }}
          onPress={e => {}}
          title={`${maps.name}`}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={styles.pinImage}
            resizeMode="cover"></Image>
        </Marker>
      </MapView>
      <NavBar backPress={goBack} style={styles.overlay} backEnabled />
      {renderBottomView()}
    </SafeAreaView>

    // </Layout>
  );
};

export default MapScreen;
